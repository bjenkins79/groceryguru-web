// src/app/api/early-access/route.ts
import { NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"

const supabase = createClient(
 process.env.NEXT_PUBLIC_SUPABASE_URL!,
 process.env.SUPABASE_SERVICE_ROLE_KEY!
)

export async function POST(request: Request) {
 try {
   const { name, email } = await request.json()

   if (!name || !email) {
     return NextResponse.json({ success: false, error: "Name and email are required." }, { status: 400 })
   }

   // NEW: Basic email validation
   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
   if (!emailRegex.test(email)) {
     return NextResponse.json({ success: false, error: "Invalid email format" }, { status: 400 })
   }

   // Step 1: Insert into DB
   const { error } = await supabase
     .from("early_access_requests")
     .insert({
       email,
       name,
       invited: false,
       converted: false,
     })

     if (error) {
      console.error("❌ Insert failed:", error)
      
      // Handle duplicate email - be transparent since it's TestFlight signup
      if (error.code === '23505') {
        return NextResponse.json({ 
          success: false, 
          error: "That email is already on our list. Thanks for your interest!" 
        }, { status: 400 })
      }
      
      return NextResponse.json({ success: false, error: "Something went wrong. Please try again." }, { status: 500 })
    }

   // Step 2: Call Edge Function to send email
   try {
     const edgeResponse = await fetch("https://gwhpzgljuvthvhiyjsnm.supabase.co/functions/v1/send_early_access_notification", {
       method: "POST",
       headers: {
         "Content-Type": "application/json",
         Authorization: `Bearer ${process.env.SUPABASE_SERVICE_ROLE_KEY!}`,
       },
       body: JSON.stringify({ name, email }),
     })

     const responseText = await edgeResponse.text()
     console.log("📨 Edge function response:", edgeResponse.status, responseText)

     if (!edgeResponse.ok) {
       console.error("❌ Edge function failed:", responseText)
     }
   } catch (fetchError) {
     console.error("🚨 Failed to call Edge Function:", fetchError)
   }

   return NextResponse.json({ success: true })
 } catch (err: any) {
   console.error("🔥 Unexpected error:", err)
   return NextResponse.json({ success: false, error: "Internal server error" }, { status: 500 })
 }
}