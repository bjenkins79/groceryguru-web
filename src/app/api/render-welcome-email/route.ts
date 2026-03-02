// src/app/api/render-welcome-email/route.ts

import { NextRequest, NextResponse } from "next/server";
import { render } from "@react-email/render";
import WelcomeEmail from "@/emails/WelcomeEmail";
import * as React from "react";

const RENDER_API_KEY = process.env.RENDER_API_KEY;

export async function POST(req: NextRequest) {
  const authHeader = req.headers.get("x-api-key");
  if (!RENDER_API_KEY || authHeader !== RENDER_API_KEY) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { first_name, user_email, format } = await req.json();

  if (!first_name || !user_email) {
    return NextResponse.json(
      { error: "Missing first_name or user_email" },
      { status: 400 }
    );
  }

  const html = await render(React.createElement(WelcomeEmail, {
    first_name,
    user_email,
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
