import { Check } from "lucide-react";

// 02 · Ask — canvas content layer.
const eyebrow: React.CSSProperties = {
  fontSize: "clamp(19px,1.7vw,23px)",
  letterSpacing: "1.4px",
  color: "var(--terracotta)",
};
const nameLabel: React.CSSProperties = { fontSize: 12, color: "rgba(var(--ink-rgb),0.75)" };
const userBubble: React.CSSProperties = {
  background: "var(--peach)",
  fontSize: 16,
  padding: "12px 16px",
  borderRadius: "18px 18px 4px 18px",
};
const ggBubble: React.CSSProperties = {
  background: "var(--ggbubble)",
  fontSize: 16,
  lineHeight: 1.42,
  padding: "13px 16px",
  borderRadius: "4px 18px 18px 18px",
};

function SelectedRow({ zebra, name, pct }: { zebra?: boolean; name: string; pct: string }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 11,
        padding: "13px 15px",
        background: zebra ? "var(--zebra)" : "var(--card)",
        boxShadow: "inset 3.5px 0 0 var(--teal)",
      }}
    >
      <span
        style={{
          flex: "none",
          width: 23,
          height: 23,
          borderRadius: 999,
          background: "var(--teal)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Check size={14} color="var(--cream)" strokeWidth={2.4} />
      </span>
      <span style={{ display: "flex", flexDirection: "column", gap: 1 }}>
        <span style={{ fontWeight: 800, fontSize: 15 }}>{name}</span>
        <span style={{ fontWeight: 600, fontSize: 13, color: "var(--tealink)" }}>{pct}</span>
      </span>
    </div>
  );
}

export default function AskGroceryGuru() {
  return (
    <section
      id="gg-ch4"
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
        <div style={{ display: "flex", flexDirection: "column", gap: 12, maxWidth: "36ch" }}>
          <span className="font-bebas" style={eyebrow}>
            02 · ASK
          </span>
          <h2
            className="font-playfair"
            style={{ fontWeight: 600, fontSize: "clamp(34px,4.2vw,58px)", lineHeight: 1.03, margin: 0 }}
          >
            Chat with GroceryGuru
          </h2>
          <p
            style={{
              margin: 0,
              fontSize: "clamp(18px,1.6vw,22px)",
              lineHeight: 1.42,
              color: "rgba(var(--ink-rgb),0.8)",
            }}
          >
            After you have enough purchases, chat to learn about what you need or ask questions about
            what you buy most often.
          </p>
        </div>

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
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 4, alignItems: "flex-end" }}>
              <span style={nameLabel}>Ben</span>
              <span style={userBubble}>What do I need?</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 4, alignItems: "flex-start" }}>
              <span style={nameLabel}>GroceryGuru</span>
              <span style={ggBubble}>
                Looks like you need <b>34 items</b>: <b>28 overdue</b> and <b>6 in the next 7 days</b>.
                Showing your 20 most urgent.
              </span>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 8, paddingTop: 6 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 4, alignItems: "flex-end" }}>
              <span style={nameLabel}>Ben</span>
              <span style={userBubble}>What do I usually buy?</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 4, alignItems: "flex-start" }}>
              <span style={nameLabel}>GroceryGuru</span>
              <span style={ggBubble}>
                Looks like you shop about every <b>6 days</b>, and usually grab the same <b>12 items</b>,
                plus <b>22 more</b> you often add. Tap any below to add them.
              </span>
            </div>
          </div>

          <span
            style={{
              fontSize: 12,
              fontWeight: 800,
              letterSpacing: "0.8px",
              textTransform: "uppercase",
              color: "rgba(var(--ink-rgb),0.75)",
              paddingTop: 6,
            }}
          >
            Usually · 12
          </span>
          <div
            style={{
              borderRadius: 16,
              overflow: "hidden",
              boxShadow:
                "0 1px 2px rgba(0,0,0,0.05),0 8px 10px rgba(0,0,0,0.05),inset 0 0 0 1px var(--hairline)",
            }}
          >
            <SelectedRow name="Cilantro" pct="On 42% of trips" />
            <SelectedRow zebra name="Eggs" pct="On 33% of trips" />
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 12,
              background: "var(--forest)",
              borderRadius: 999,
              padding: "12px 18px",
            }}
          >
            <span style={{ fontSize: 14.5, fontWeight: 600, color: "var(--cream)" }}>Add 2 to</span>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 7 }}>
              <span style={{ fontSize: 14.5, fontWeight: 800, color: "var(--cream)" }}>Weekly Run</span>
              <span
                style={{
                  fontSize: 10,
                  fontWeight: 600,
                  letterSpacing: "0.6px",
                  color: "var(--cream)",
                  background: "rgba(var(--white-rgb),0.18)",
                  padding: "2px 7px",
                  borderRadius: 999,
                }}
              >
                PRIMARY
              </span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
