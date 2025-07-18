// src/app/api/early-access/route.ts
import { NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export async function POST(request: Request) {
  try {
    const { name, email } = await request.json()

    if (!name || !email) {
      return NextResponse.json({ success: false, error: "Name and email are required." }, { status: 400 })
    }

    // Step 1: Insert into `early_access_requests` table
    const { error: insertError } = await supabase.from("early_access_requests").insert({ name, email })
    if (insertError) {
      console.error("Supabase insert error:", insertError)
      return NextResponse.json({ success: false, error: "Database insert failed" }, { status: 500 })
    }

    // Step 2: Call Edge Function to send email
    const edgeResponse = await fetch("https://groceryguru.functions.supabase.co/send_early_access_notification", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email }),
    })

    const edgeData = await edgeResponse.json()
    if (!edgeResponse.ok || !edgeData.success) {
      console.error("Edge function error:", edgeData)
      return NextResponse.json({ success: false, error: "Notification send failed" }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (err: any) {
    console.error("Unexpected error:", err)
    return NextResponse.json({ success: false, error: "Internal server error" }, { status: 500 })
  }
}
