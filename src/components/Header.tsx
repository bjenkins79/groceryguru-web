"use client";

import { useEffect, useState } from "react";

const APP_STORE =
  "https://apps.apple.com/us/app/groceryguru-grocery-assistant/id6744698978";

// Home-page chapter tracking (drives the second row's label).
const CHAPTERS = [
  { id: "gg-ch1", label: "01 FIND IT" },
  { id: "gg-ch4", label: "02 ASK" },
  { id: "gg-ch3", label: "03 WHAT IT LEARNS" },
  { id: "gg-ch2", label: "04 YOUR LIST" },
];

type NavLink = { label: string; href: string };

// "home" = two rows (nav + chapter/read-progress rail).
// "minimal" = one nav row (plans, faq, privacy, support).
export default function Header({
  variant = "minimal",
  links = [
    { label: "Plans", href: "/plans" },
    { label: "FAQ", href: "/faq" },
  ],
}: {
  variant?: "home" | "minimal";
  links?: NavLink[];
}) {
  const [readPct, setReadPct] = useState(0);
  const [chapter, setChapter] = useState("");

  useEffect(() => {
    if (variant !== "home") return;
    const onScroll = () => {
      const doc = document.documentElement;
      const read = Math.round(
        (window.scrollY / Math.max(1, doc.scrollHeight - window.innerHeight)) *
          100
      );
      setReadPct(read);
      let label = "";
      CHAPTERS.forEach((c) => {
        const el = document.getElementById(c.id);
        if (el && el.getBoundingClientRect().top < window.innerHeight * 0.4)
          label = c.label;
      });
      setChapter(label);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [variant]);

  return (
    <div
      style={{
        position: "sticky",
        top: 0,
        zIndex: 20,
        background: "rgba(var(--glass-rgb),0.72)",
        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",
        borderBottom: "0.5px solid rgba(var(--white-rgb),0.35)",
        color: "var(--ink)",
      }}
    >
      <div
        style={{
          maxWidth: 1240,
          margin: "0 auto",
          padding: "0 clamp(18px,4vw,56px)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "clamp(14px,2vw,28px)",
            padding: "10px 0 8px",
          }}
        >
          <span style={{ flex: 1, display: "flex" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="gg-logo-light"
              src="/images/Logo_GroceryGuru.svg"
              alt="GroceryGuru"
              style={{ height: "clamp(36px,3.4vw,44px)", width: "auto", display: "block" }}
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="gg-logo-dark"
              src="/images/Logo_GroceryGuru_White.svg"
              alt="GroceryGuru"
              style={{ height: "clamp(36px,3.4vw,44px)", width: "auto", display: "block" }}
            />
          </span>
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              style={{
                fontSize: "clamp(14px,1.2vw,16px)",
                fontWeight: 600,
                color: "var(--ink)",
              }}
            >
              {l.label}
            </a>
          ))}
          <a
            href={APP_STORE}
            style={{
              background: "var(--forest)",
              color: "var(--cream)",
              fontWeight: 600,
              fontSize: "clamp(13px,1.1vw,15px)",
              padding: "8px 16px",
              borderRadius: 999,
            }}
          >
            Get the app
          </a>
        </div>
        {variant === "home" && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "0 0 9px",
            }}
          >
            <span
              className="font-bebas"
              style={{
                fontSize: 14,
                letterSpacing: "1.2px",
                color: "rgba(var(--ink-rgb),0.9)",
                whiteSpace: "nowrap",
              }}
            >
              {chapter}
            </span>
            <span
              style={{
                flex: 1,
                height: 2,
                borderRadius: 999,
                background: "rgba(var(--ink-rgb),0.12)",
              }}
            >
              <span
                style={{
                  display: "block",
                  height: "100%",
                  borderRadius: 999,
                  background: "var(--amber)",
                  width: `${readPct}%`,
                }}
              />
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
