import { ChevronDown, ChevronUp, ChevronRight, MoreHorizontal } from "lucide-react";

// 04 · Your list — canvas content layer. Left sticky copy, right stacked panels.
const eyebrow: React.CSSProperties = {
  fontSize: "clamp(19px,1.7vw,23px)",
  letterSpacing: "1.4px",
  color: "var(--terracotta)",
};
const cardShadow =
  "0 1px 2px rgba(0,0,0,0.05),0 8px 10px rgba(0,0,0,0.05),inset 0 0 0 1px var(--hairline)";
const catTitle: React.CSSProperties = { fontSize: 19, letterSpacing: "0.3px" };
const countPill: React.CSSProperties = {
  fontSize: 13,
  background: "rgba(var(--ink-rgb),0.07)",
  borderRadius: 999,
  padding: "4px 11px",
};
const qtyPill: React.CSSProperties = {
  fontSize: 13,
  fontWeight: 600,
  background: "rgba(var(--teal-rgb),0.2)",
  borderRadius: 999,
  padding: "3px 10px",
};
const checkCircle: React.CSSProperties = {
  flex: "none",
  boxSizing: "border-box",
  width: 26,
  height: 26,
  borderRadius: 999,
  border: "2.5px solid var(--ink)",
};

function Disclosure({ up }: { up?: boolean }) {
  return (
    <span
      style={{
        flex: "none",
        width: 34,
        height: 34,
        borderRadius: 999,
        background: "var(--disclosure)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {up ? (
        <ChevronUp size={15} color="var(--disclosure-ink)" strokeWidth={2.4} />
      ) : (
        <ChevronDown size={15} color="var(--disclosure-ink)" strokeWidth={2.4} />
      )}
    </span>
  );
}

function StoreCard({ name, items, fill }: { name: string; items: string; fill?: number }) {
  return (
    <div
      style={{
        background: "var(--card)",
        color: "var(--ink)",
        borderRadius: 18,
        boxShadow: cardShadow,
        padding: 14,
        display: "flex",
        flexDirection: "column",
        gap: 9,
      }}
    >
      <span style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <span style={{ flex: 1, fontSize: 17, fontWeight: 800 }}>{name}</span>
        <ChevronRight size={15} color="rgba(var(--ink-rgb),0.5)" />
      </span>
      <span style={{ fontSize: 14.5, fontWeight: 600, color: "var(--tealink)" }}>{items}</span>
      <span style={{ height: 5, borderRadius: 999, background: "rgba(var(--teal-rgb),0.35)" }}>
        {fill ? (
          <span
            style={{
              display: "block",
              width: `${fill}%`,
              height: "100%",
              borderRadius: 999,
              background: "var(--teal)",
            }}
          />
        ) : null}
      </span>
    </div>
  );
}

export default function StoreAwareShopping() {
  return (
    <section
      id="gg-ch2"
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
          gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
          gap: "clamp(22px,3vw,56px)",
          alignItems: "start",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 12,
            maxWidth: "32ch",
            position: "sticky",
            top: "clamp(96px,10vh,132px)",
          }}
        >
          <span className="font-bebas" style={eyebrow}>
            04 · YOUR LIST
          </span>
          <h2
            className="font-playfair"
            style={{ fontWeight: 600, fontSize: "clamp(34px,4.2vw,58px)", lineHeight: 1.03, margin: 0 }}
          >
            Shop your way
          </h2>
          <p
            style={{
              margin: 0,
              fontSize: "clamp(18px,1.6vw,22px)",
              lineHeight: 1.42,
              color: "rgba(var(--ink-rgb),0.8)",
            }}
          >
            See your shopping by list or by store. Focus on a section or see all items at once.
          </p>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "clamp(16px,2vw,26px)",
            width: "100%",
            minWidth: 0,
          }}
        >
          {/* Panel A — list detail */}
          <div
            style={{
              background: "var(--canvas2)",
              borderRadius: 22,
              boxShadow: "inset 0 0 0 1px var(--hairline)",
              padding: 16,
              display: "flex",
              flexDirection: "column",
              gap: 12,
              width: "100%",
              boxSizing: "border-box",
            }}
          >
            <span
              className="font-bebas"
              style={{ fontSize: "clamp(26px,2.2vw,32px)", letterSpacing: "0.5px", lineHeight: 1 }}
            >
              WEEKLY RUN
            </span>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <span style={{ flex: 1, height: 5, borderRadius: 999, background: "rgba(var(--teal-rgb),0.35)" }}>
                <span
                  style={{ display: "block", width: "13%", height: "100%", borderRadius: 999, background: "var(--teal)" }}
                />
              </span>
              <span style={{ fontSize: 14, color: "rgba(var(--ink-rgb),0.8)" }}>3 of 24 · 13%</span>
            </div>
            <span style={{ fontSize: 13.5, color: "rgba(var(--ink-rgb),0.82)" }}>
              Focus View · Sort: Alpha · All Items
            </span>

            {/* collapsed category */}
            <div
              style={{
                background: "var(--card)",
                borderRadius: 18,
                boxShadow: cardShadow,
                padding: "14px 14px",
                display: "flex",
                alignItems: "center",
                gap: 10,
              }}
            >
              <span className="font-bebas" style={{ flex: 1, ...catTitle }}>
                DAIRY &amp; REFRIGERATED
              </span>
              <span style={countPill}>0/4</span>
              <Disclosure />
            </div>

            {/* expanded category */}
            <div
              style={{
                background: "var(--card)",
                borderRadius: 18,
                boxShadow: cardShadow,
                overflow: "hidden",
              }}
            >
              <div style={{ padding: 14, display: "flex", alignItems: "center", gap: 10 }}>
                <span className="font-bebas" style={{ flex: 1, ...catTitle }}>
                  PRODUCE
                </span>
                <span style={countPill}>0/10</span>
                <Disclosure up />
              </div>
              <div
                style={{
                  padding: "4px 14px 14px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 6,
                  borderTop: "1px solid rgba(var(--ink-rgb),0.08)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 11, paddingTop: 12 }}>
                  <span style={checkCircle} />
                  <span style={{ flex: 1, fontSize: 16, fontWeight: 600 }}>Chaquita Bananas</span>
                  <MoreHorizontal size={17} color="rgba(var(--ink-rgb),0.75)" />
                </div>
                <span style={{ display: "flex", alignItems: "center", gap: 10, paddingLeft: 37 }}>
                  <span style={qtyPill}>×1</span>
                  <span style={{ fontSize: 14, color: "rgba(var(--ink-rgb),0.8)" }}>1 lb</span>
                </span>
                <span
                  style={{
                    fontSize: 14,
                    color: "rgba(var(--ink-rgb),0.75)",
                    padding: "8px 0 4px",
                    borderTop: "1px solid rgba(var(--ink-rgb),0.08)",
                  }}
                >
                  Get 2 bunches please
                </span>
              </div>
              <div
                style={{
                  padding: "12px 14px 14px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 6,
                  borderTop: "1px solid rgba(var(--ink-rgb),0.08)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 11 }}>
                  <span style={checkCircle} />
                  <span style={{ flex: 1, fontSize: 16, fontWeight: 600 }}>Ginger Root</span>
                  <MoreHorizontal size={17} color="rgba(var(--ink-rgb),0.75)" />
                </div>
                <span style={{ paddingLeft: 37 }}>
                  <span style={qtyPill}>×1</span>
                </span>
              </div>
              <div
                style={{
                  padding: "12px 14px 14px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 6,
                  borderTop: "1px solid rgba(var(--ink-rgb),0.08)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 11 }}>
                  <span style={checkCircle} />
                  <span style={{ flex: 1, fontSize: 16, fontWeight: 600 }}>Green Cabbage</span>
                  <MoreHorizontal size={17} color="rgba(var(--ink-rgb),0.75)" />
                </div>
                <span style={{ display: "flex", alignItems: "center", gap: 10, paddingLeft: 37 }}>
                  <span style={qtyPill}>×1</span>
                  <span style={{ fontSize: 14, fontWeight: 600, color: "var(--terracotta)" }}>
                    Needed 66d ago
                  </span>
                </span>
              </div>
            </div>
          </div>

          {/* Panel B — stores (sage panel) */}
          <div
            style={{
              background: "var(--brand)",
              color: "var(--cream)",
              borderRadius: 22,
              padding: "18px 16px",
              display: "flex",
              flexDirection: "column",
              gap: 12,
              width: "100%",
              boxSizing: "border-box",
            }}
          >
            <span
              className="font-bebas"
              style={{ fontSize: "clamp(26px,2.2vw,32px)", letterSpacing: "0.5px", lineHeight: 1 }}
            >
              MY STORES
            </span>
            <span className="font-bebas" style={{ fontSize: 17, letterSpacing: "1px", color: "var(--cream)" }}>
              5 STORES
            </span>
            <StoreCard name="Costco" items="2 items to shop" fill={32} />
            <StoreCard name="Trader Joe's" items="1 item to shop" />
            <StoreCard name="Smart & Final" items="1 item to shop" />
            <span style={{ fontSize: 14, lineHeight: 1.4, color: "var(--cream)", paddingTop: 2 }}>
              You pick the store for each item, so the Stores tab always knows what you need where.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
