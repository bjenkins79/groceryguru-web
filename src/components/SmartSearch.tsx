import { Search, MoreHorizontal, Plus } from "lucide-react";

// 01 · Find it — canvas content layer.
const eyebrow: React.CSSProperties = {
  fontSize: "clamp(19px,1.7vw,23px)",
  letterSpacing: "1.4px",
  color: "var(--terracotta)",
};
const groupLabel: React.CSSProperties = { fontSize: 22, letterSpacing: "0.5px" };
const cardShadow =
  "0 1px 2px rgba(0,0,0,0.05),0 8px 10px rgba(0,0,0,0.05),inset 0 0 0 1px var(--hairline)";
const meta: React.CSSProperties = { fontSize: 13.5, color: "rgba(var(--ink-rgb),0.75)" };

function Circle({ children }: { children: React.ReactNode }) {
  return (
    <span
      style={{
        flex: "none",
        boxSizing: "border-box",
        width: 30,
        height: 30,
        borderRadius: 999,
        border: "1.5px solid var(--ink)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {children}
    </span>
  );
}

export default function SmartSearch() {
  return (
    <section
      id="gg-ch1"
      style={{
        background: "var(--canvas)",
        color: "var(--ink)",
        padding: "clamp(38px,6vw,92px) clamp(22px,5vw,64px)",
      }}
    >
      <div
        style={{
          maxWidth: 1240,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(310px,1fr))",
          gap: "clamp(22px,4vw,72px)",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 12, maxWidth: "34ch" }}>
          <span className="font-bebas" style={eyebrow}>
            01 · SEARCH
          </span>
          <h2
            className="font-playfair"
            style={{ fontWeight: 600, fontSize: "clamp(34px,4.2vw,58px)", lineHeight: 1.03, margin: 0 }}
          >
            Find anything
          </h2>
          <p
            style={{
              margin: 0,
              fontSize: "clamp(18px,1.6vw,22px)",
              lineHeight: 1.42,
              color: "rgba(var(--ink-rgb),0.8)",
            }}
          >
            Results are grouped so that you can easily find what you want.
          </p>
        </div>

        <div
          style={{
            background: "var(--canvas2)",
            borderRadius: 22,
            boxShadow: "inset 0 0 0 1px var(--hairline)",
            padding: 16,
            display: "flex",
            flexDirection: "column",
            gap: 10,
            width: "100%",
            maxWidth: 460,
            justifySelf: "end",
            boxSizing: "border-box",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              background: "rgba(var(--ink-rgb),0.08)",
              borderRadius: 999,
              padding: "10px 16px",
            }}
          >
            <Search size={18} color="rgba(var(--ink-rgb),0.6)" />
            <span style={{ flex: 1, fontSize: 16 }}>onion</span>
            <span style={{ fontSize: 15, color: "rgba(var(--ink-rgb),0.5)" }}>Cancel</span>
          </div>

          <span className="font-bebas" style={groupLabel}>
            IN THIS LIST
          </span>
          <div
            style={{
              background: "var(--card)",
              borderRadius: 16,
              boxShadow: cardShadow,
              padding: "14px 16px",
              display: "flex",
              alignItems: "center",
              gap: 12,
            }}
          >
            <span style={{ flex: 1, display: "flex", flexDirection: "column", gap: 2 }}>
              <span style={{ fontSize: 16 }}>Red Onions</span>
              <span style={meta}>Produce</span>
            </span>
            <span
              style={{
                flex: "none",
                boxSizing: "border-box",
                width: 24,
                height: 24,
                borderRadius: 999,
                border: "2px solid rgba(var(--ink-rgb),0.42)",
              }}
            />
          </div>

          <span className="font-bebas" style={groupLabel}>
            RECOMMENDED
          </span>
          <div
            style={{
              background: "var(--card)",
              borderRadius: 16,
              boxShadow: cardShadow,
              padding: "14px 16px",
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            <span style={{ flex: 1, display: "flex", flexDirection: "column", gap: 2 }}>
              <span style={{ fontWeight: 800, fontSize: 16 }}>Green Onions</span>
              <span style={meta}>Produce</span>
              <span style={{ fontWeight: 600, fontSize: 14.5, color: "var(--terracotta)" }}>
                Needed 17d ago (qty 2)
              </span>
              <span style={meta}>Last bought 5w</span>
            </span>
            <Circle>
              <MoreHorizontal size={17} color="var(--ink)" />
            </Circle>
            <Circle>
              <Plus size={17} color="var(--ink)" />
            </Circle>
          </div>
          <div
            style={{
              background: "var(--card)",
              borderRadius: 16,
              boxShadow: cardShadow,
              padding: "14px 16px",
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            <span style={{ flex: 1, display: "flex", flexDirection: "column", gap: 2 }}>
              <span style={{ fontWeight: 800, fontSize: 16 }}>White Onions</span>
              <span style={meta}>Produce</span>
              <span style={{ fontWeight: 600, fontSize: 14.5, color: "rgba(var(--ink-rgb),0.8)" }}>
                Get in 35d (qty 1)
              </span>
              <span style={meta}>Last bought today</span>
            </span>
            <Circle>
              <MoreHorizontal size={17} color="var(--ink)" />
            </Circle>
            <Circle>
              <Plus size={17} color="var(--ink)" />
            </Circle>
          </div>

          <span className="font-bebas" style={groupLabel}>
            ALL RESULTS
          </span>
          <div
            style={{
              background: "var(--card)",
              borderRadius: 16,
              boxShadow: cardShadow,
              padding: "14px 16px",
              display: "flex",
              alignItems: "center",
              gap: 12,
            }}
          >
            <span style={{ flex: 1, display: "flex", flexDirection: "column", gap: 2 }}>
              <span style={{ fontSize: 16 }}>Onions</span>
              <span style={meta}>Produce</span>
            </span>
            <Circle>
              <Plus size={17} color="var(--ink)" />
            </Circle>
          </div>
        </div>
      </div>
    </section>
  );
}
