// src/app/api/render-reset-email/route.ts

import { NextRequest, NextResponse } from "next/server";
import { render } from "@react-email/render";
import ResetPasswordEmail from "@/emails/ResetPasswordEmail";
import * as React from "react";

const RENDER_API_KEY = process.env.RENDER_API_KEY;

export async function POST(req: NextRequest) {
  const authHeader = req.headers.get("x-api-key");
  if (!RENDER_API_KEY || authHeader !== RENDER_API_KEY) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { email, reset_code, format } = await req.json();

  if (!email || !reset_code) {
    return NextResponse.json(
      { error: "Missing email or reset_code" },
      { status: 400 }
    );
  }

  const html = await render(
    React.createElement(ResetPasswordEmail, {
      email,
      reset_code
    }),
    {
      pretty: true,
      plainText: false
    }
  );

  if (format === "json") {
    return NextResponse.json({ html });
  }

  return new Response(String(html), {
    status: 200,
    headers: {
      "Content-Type": "text/html"
    }
  });
}
