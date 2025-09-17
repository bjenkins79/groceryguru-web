// src/app/api/render-early-access-invite/route.ts

import { NextRequest, NextResponse } from "next/server";
import { render } from "@react-email/render";
import EarlyAccessInvite from "@/emails/EarlyAccessInvite";
import * as React from "react";

const RENDER_API_KEY = process.env.RENDER_API_KEY;
const TESTFLIGHT_PUBLIC_URL = process.env.TESTFLIGHT_PUBLIC_URL;

export async function POST(req: NextRequest) {
  const authHeader = req.headers.get("x-api-key");
  if (!RENDER_API_KEY || authHeader !== RENDER_API_KEY) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { email, format, name } = await req.json();

  if (!email) {
    return NextResponse.json({ error: "Missing email" }, { status: 400 });
  }

  if (!TESTFLIGHT_PUBLIC_URL) {
    return NextResponse.json({ error: "Missing TestFlight URL" }, { status: 500 });
  }

  const html = await render(
    React.createElement(EarlyAccessInvite, {
      name: name || "Friend", // fallback in case name is missing
      email,
      testflightUrl: TESTFLIGHT_PUBLIC_URL,
    }),
    {
      pretty: true,
      plainText: false,
    }
  );

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
