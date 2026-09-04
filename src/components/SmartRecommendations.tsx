"use client";

import { useEffect, useRef, useState } from "react";
import { Sparkles, ShoppingCart, Check, Clock } from "lucide-react";

// Section 03 — "What it learns". Scroll-driven three-stage reveal.
// Every value below is a real Insights card from Ben's account (2026-09-04);
// do not substitute (confidence is recency-dominated, not arithmetic).
type Stage = {
  item: string;
  trip: string;
  label: string;
  learning?: boolean;
  conf?: string;
  interval?: string;
  bought?: string;
  last?: string;
  due?: string;
  note: string;
};

const STAGES: Stage[] = [
  {
    item: "Rice vinegar",
    trip: "1",
    label: "purchase",
    learning: true,
    note: "We are learning what you like to purchase.",
  },
  {
    item: "Shredded Cheese",
    trip: "2",
    label: "purchases",
    conf: "58% confident",
    interval: "37D",
    bought: "2×",
    last: "5W",
    due: "3D",
    note: "As you make purchase more of the same item, we track how much and how often.",
  },
  {
    item: "Sonora small flour tortillas",
    trip: "8",
    label: "purchases",
    conf: "82% confident",
    interval: "23D",
    bought: "8×",
    last: "12D",
    due: "11D",
    note: "As we get more confident, we can recommend when you need it next.",
  },
];

const insightsBox: React.CSSProperties = {
  background: "rgba(var(--teal-rgb),0.14)",
  borderRadius: 16,
  padding: 15,
  display: "flex",
  flexDirection: "column",
  gap: 14,
};

function LearningCard() {
  return (
    <div style={{ ...insightsBox, border: "1.5px dashed rgba(var(--teal-rgb),0.6)" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <Sparkles size={20} color="var(--tealink)" />
        <span style={{ flex: 1, fontWeight: 800, fontSize: 15 }}>Insights</span>
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            fontSize: 12.5,
            fontWeight: 600,
            color: "var(--tealink)",
            background: "var(--card)",
            padding: "5px 12px",
            borderRadius: 999,
          }}
        >
          <span style={{ width: 5, height: 5, borderRadius: 999, background: "#34655F" }} />
          Learning
        </span>
      </div>
      <span style={{ fontSize: 15, lineHeight: 1.4 }}>
        I&apos;m still learning this one. Here&apos;s how:
      </span>
      <div style={{ display: "flex", alignItems: "flex-start", gap: 6 }}>
        <StepIcon label="Buy it">
          <ShoppingCart size={18} color="var(--tealink)" />
        </StepIcon>
        <Chevron />
        <StepIcon label="Check it off" bold>
          <Check size={18} color="var(--tealink)" strokeWidth={2.4} />
        </StepIcon>
        <Chevron />
        <StepIcon label="I predict" fill>
          <Clock size={18} color="var(--cream)" />
        </StepIcon>
      </div>
    </div>
  );
}

function StepIcon({
  children,
  label,
  bold,
  fill,
}: {
  children: React.ReactNode;
  label: string;
  bold?: boolean;
  fill?: boolean;
}) {
  return (
    <span style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 7 }}>
      <span
        style={{
          width: 38,
          height: 38,
          borderRadius: 999,
          background: fill ? "var(--teal)" : "var(--card)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {children}
      </span>
      <span style={{ fontSize: 12.5, fontWeight: bold ? 800 : 400 }}>{label}</span>
    </span>
  );
}

const Chevron = () => (
  <span style={{ color: "rgba(var(--tealink-rgb),0.45)", fontSize: 14, paddingTop: 10 }}>
    &rsaquo;
  </span>
);

function StatsCard({ s }: { s: Stage }) {
  const cell = (value: string, label: string, small?: boolean) => (
    <span style={{ display: "flex", flexDirection: "column", gap: 3 }}>
      <span
        className="font-bebas"
        style={{
          fontSize: small ? 19 : 24,
          color: "var(--tealink)",
          lineHeight: small ? 1.25 : 1,
        }}
      >
        {value}
      </span>
      <span style={{ fontSize: 11.5, color: "rgba(var(--ink-rgb),0.62)" }}>{label}</span>
    </span>
  );
  return (
    <div style={insightsBox}>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <Sparkles size={20} color="var(--tealink)" />
        <span style={{ flex: 1, fontWeight: 800, fontSize: 15 }}>Insights</span>
        <span
          style={{
            fontSize: 12.5,
            fontWeight: 600,
            color: "var(--tealink)",
            background: "var(--card)",
            padding: "5px 12px",
            borderRadius: 999,
          }}
        >
          {s.conf}
        </span>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 8 }}>
        {cell(s.interval || "", "avg interval")}
        {cell(s.bought || "", "bought")}
        {cell(s.last || "", "last")}
        {cell(s.due || "", "when due", true)}
      </div>
    </div>
  );
}

function StageBody({ s, learnPct }: { s: Stage; learnPct: number }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <div style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
        <span
          className="font-bebas"
          style={{ fontSize: "clamp(44px,5vw,72px)", lineHeight: 1, color: "var(--ink)" }}
        >
          {s.trip}
        </span>
        <span style={{ flex: 1, fontSize: "clamp(16px,1.4vw,20px)", color: "rgba(var(--ink-rgb),0.8)" }}>
          {s.label}
        </span>
      </div>
      <span
        style={{
          display: "block",
          height: 3,
          borderRadius: 999,
          background: "rgba(var(--ink-rgb),0.12)",
        }}
      >
        <span
          style={{
            display: "block",
            height: "100%",
            borderRadius: 999,
            background: "var(--teal)",
            width: `${learnPct}%`,
          }}
        />
      </span>
      <p
        style={{
          margin: "6px 0 0",
          fontSize: "clamp(16px,1.5vw,21px)",
          lineHeight: 1.45,
          color: "rgba(var(--ink-rgb),0.78)",
          minHeight: 74,
          maxWidth: "38ch",
        }}
      >
        {s.note}
      </p>
    </div>
  );
}

function StageCards({ s }: { s: Stage }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 12,
        width: "100%",
        maxWidth: 460,
        justifySelf: "end",
      }}
    >
      <div
        style={{
          background: "var(--card)",
          borderRadius: 20,
          boxShadow:
            "0 1px 2px rgba(0,0,0,0.05),0 10px 11px rgba(0,0,0,0.06),inset 0 0 0 1px var(--hairline)",
          padding: "4px 16px",
        }}
      >
        <div style={{ padding: "13px 0", fontSize: 19, fontWeight: 600 }}>{s.item}</div>
      </div>
      <div style={{ minHeight: 175 }}>{s.learning ? <LearningCard /> : <StatsCard s={s} />}</div>
    </div>
  );
}

const eyebrow: React.CSSProperties = {
  fontSize: "clamp(19px,1.7vw,23px)",
  letterSpacing: "1.4px",
  color: "var(--terracotta)",
};

export default function SmartRecommendations() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [i, setI] = useState(0);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setReduced(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    if (reduced) return;
    const onScroll = () => {
      const track = trackRef.current;
      if (!track) return;
      const r = track.getBoundingClientRect();
      const pin = Math.max(1, track.offsetHeight - window.innerHeight);
      const p = Math.min(1, Math.max(0, -r.top / pin));
      const next = Math.min(STAGES.length - 1, Math.floor(p * STAGES.length * 0.9995));
      setI((prev) => (prev !== next ? next : prev));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [reduced]);

  const learnPct = Math.round(((i + 1) / STAGES.length) * 100);

  return (
    <section
      id="gg-ch3"
      style={{
        background: "var(--canvas)",
        color: "var(--ink)",
        padding: "clamp(38px,6vw,84px) 0 0",
        position: "relative",
      }}
    >
      <div
        style={{
          maxWidth: 1240,
          margin: "0 auto",
          padding: "0 clamp(22px,5vw,64px)",
          display: "flex",
          flexDirection: "column",
          gap: 12,
        }}
      >
        <span className="font-bebas" style={eyebrow}>
          03 · WHAT IT LEARNS
        </span>
        <h2
          className="font-playfair"
          style={{
            fontWeight: 600,
            fontSize: "clamp(34px,4.2vw,58px)",
            lineHeight: 1.03,
            margin: 0,
            maxWidth: "26ch",
          }}
        >
          We learn as early as your second purchase
        </h2>
      </div>

      {reduced ? (
        // Reduced-motion: static stack of all three stages, no scroll pin.
        <div
          style={{
            maxWidth: 1240,
            margin: "0 auto",
            padding: "clamp(26px,3vw,44px) clamp(22px,5vw,64px) clamp(38px,6vw,84px)",
            display: "flex",
            flexDirection: "column",
            gap: "clamp(28px,4vw,56px)",
          }}
        >
          {STAGES.map((s, idx) => (
            <div
              key={s.item}
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
                gap: "clamp(14px,4vw,72px)",
                alignItems: "start",
              }}
            >
              <StageBody s={s} learnPct={Math.round(((idx + 1) / STAGES.length) * 100)} />
              <StageCards s={s} />
            </div>
          ))}
        </div>
      ) : (
        <div ref={trackRef} style={{ height: "250vh", position: "relative", marginTop: "clamp(26px,3vw,44px)" }}>
          <div style={{ position: "sticky", top: "clamp(96px,10vh,132px)", padding: "0 clamp(22px,5vw,64px)" }}>
            <div
              style={{
                maxWidth: 1240,
                margin: "0 auto",
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
                gap: "clamp(14px,4vw,72px)",
                alignItems: "start",
              }}
            >
              <StageBody s={STAGES[i]} learnPct={learnPct} />
              <StageCards s={STAGES[i]} />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
