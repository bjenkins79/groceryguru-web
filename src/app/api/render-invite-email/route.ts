// src/app/api/render-invite-email/route.ts

import { NextRequest, NextResponse } from "next/server";
import { render } from "@react-email/render";
import InviteEmail from "@/emails/InviteEmail";
import * as React from "react";

const RENDER_API_KEY = process.env.RENDER_API_KEY;

export async function POST(req: NextRequest) {
  const authHeader = req.headers.get("x-api-key");
  if (!RENDER_API_KEY || authHeader !== RENDER_API_KEY) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { invite_code, user_email, inviter_name, format } = await req.json();

  if (!invite_code || !user_email || !inviter_name) {
    return NextResponse.json(
      { error: "Missing invite_code, user_email, or inviter_name" },
      { status: 400 }
    );
  }

  const html = await render(React.createElement(InviteEmail, {
    invite_code,
    user_email,
    inviter_name,
  }), {
    pretty: true,
    plainText: false
  });

  // Optional support for previewing raw HTML via format=json
  if (format === "json") {
    return NextResponse.json({ html });
  }

  return new Response(String(html), {
    status: 200,
    headers: {
      "Content-Type": "text/html",
    },
  });  
}
