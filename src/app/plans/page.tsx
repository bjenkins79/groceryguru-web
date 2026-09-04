import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Check } from "lucide-react";

export const metadata = {
  title: "Plans – GroceryGuru",
  description: "Two versions of GroceryGuru: Premium and a Free version that does not expire.",
};

const COLS = "minmax(0,1fr) clamp(74px,7vw,100px) clamp(74px,7vw,100px)";
const label: React.CSSProperties = { fontSize: "clamp(15.5px,1.35vw,17.5px)", fontWeight: 600 };
const bigInk: React.CSSProperties = {
  fontSize: "clamp(30px,2.8vw,40px)",
  lineHeight: 1,
  color: "var(--ink)",
  textAlign: "center",
};
const bigMuted: React.CSSProperties = { ...bigInk, color: "rgba(var(--ink-rgb),0.6)" };

function ValueRow({
  name,
  premium,
  free,
  premiumSmall,
  freeSmall,
  first,
}: {
  name: string;
  premium: string;
  free: string;
  premiumSmall?: boolean;
  freeSmall?: boolean;
  first?: boolean;
}) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: COLS,
        gap: 10,
        alignItems: "center",
        padding: "14px 0",
        borderTop: first
          ? "1.5px solid rgba(var(--ink-rgb),0.18)"
          : "1px solid rgba(var(--ink-rgb),0.1)",
      }}
    >
      <span style={label}>{name}</span>
      <span
        className="font-bebas"
        style={premiumSmall ? { ...bigInk, fontSize: "clamp(22px,2vw,28px)" } : bigInk}
      >
        {premium}
      </span>
      <span
        className="font-bebas"
        style={freeSmall ? { ...bigMuted, fontSize: "clamp(22px,2vw,28px)" } : bigMuted}
      >
        {free}
      </span>
    </div>
  );
}

const CheckMark = () => (
  <span style={{ display: "flex", justifyContent: "center" }}>
    <span
      style={{
        width: 24,
        height: 24,
        borderRadius: 999,
        background: "rgba(var(--teal-rgb),0.22)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Check size={14} color="var(--tealink)" strokeWidth={2.4} />
    </span>
  </span>
);

const Dash = () => (
  <span style={{ display: "flex", justifyContent: "center" }}>
    <span style={{ width: 18, height: 3, borderRadius: 999, background: "rgba(var(--ink-rgb),0.55)" }} />
  </span>
);

function BoolRow({ name, free }: { name: string; free: "check" | "dash" }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: COLS,
        gap: 10,
        alignItems: "center",
        padding: "14px 0",
        borderTop: "1px solid rgba(var(--ink-rgb),0.1)",
      }}
    >
      <span style={label}>{name}</span>
      <CheckMark />
      {free === "check" ? <CheckMark /> : <Dash />}
    </div>
  );
}

export default function PlansPage() {
  return (
    <div
      style={{
        background: "var(--canvas)",
        color: "var(--ink)",
        fontFamily: "var(--font-hanken), -apple-system, sans-serif",
        fontSize: 17,
        lineHeight: 1.5,
      }}
    >
      <Header
        variant="minimal"
        links={[
          { label: "Home", href: "/" },
          { label: "FAQ", href: "/faq" },
        ]}
      />

      <header
        style={{
          background: "var(--brand)",
          color: "var(--cream)",
          padding: "clamp(34px,6vw,88px) clamp(22px,5vw,64px) clamp(38px,6vw,84px)",
        }}
      >
        <div
          style={{
            maxWidth: 1240,
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: "clamp(16px,2vw,24px)",
          }}
        >
          <h1
            className="font-playfair"
            style={{
              fontWeight: 600,
              fontSize: "clamp(42px,6vw,80px)",
              lineHeight: 1.02,
              letterSpacing: "-0.5px",
              margin: 0,
              maxWidth: "18ch",
              textWrap: "balance",
            }}
          >
            Choose your plan
          </h1>
          <p
            style={{
              margin: 0,
              fontSize: "clamp(19px,1.8vw,25px)",
              lineHeight: 1.4,
              color: "var(--cream)",
              maxWidth: "46ch",
            }}
          >
            We offer two versions to best match your needs.
          </p>
        </div>
      </header>

      <section style={{ padding: "clamp(30px,5vw,72px) clamp(22px,5vw,64px) clamp(20px,3vw,40px)" }}>
        <div
          style={{
            maxWidth: 1240,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
            gap: "clamp(22px,4vw,64px)",
            alignItems: "start",
          }}
        >
          {/* Comparison card */}
          <div style={{ display: "flex", flexDirection: "column", gap: "clamp(16px,2vw,22px)" }}>
            <div
              style={{
                background: "var(--card)",
                borderRadius: 20,
                boxShadow:
                  "0 1px 2px rgba(0,0,0,0.05),0 10px 11px rgba(0,0,0,0.06),inset 0 0 0 1px var(--hairline)",
                padding: "clamp(18px,2vw,26px) clamp(20px,2.2vw,28px) clamp(8px,1vw,14px)",
              }}
            >
              {/* Column heads */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: COLS,
                  gap: 10,
                  alignItems: "end",
                  paddingBottom: 14,
                }}
              >
                <span />
                <span style={{ display: "flex", flexDirection: "column", gap: 5, alignItems: "center" }}>
                  <span
                    className="font-bebas"
                    style={{ fontSize: "clamp(24px,2.2vw,30px)", letterSpacing: "0.8px", color: "var(--ink)", lineHeight: 1 }}
                  >
                    PREMIUM
                  </span>
                  <span style={{ height: 3, borderRadius: 999, background: "var(--amber)", width: "100%" }} />
                </span>
                <span style={{ display: "flex", flexDirection: "column", gap: 5, alignItems: "center" }}>
                  <span
                    className="font-bebas"
                    style={{
                      fontSize: "clamp(24px,2.2vw,30px)",
                      letterSpacing: "0.8px",
                      color: "rgba(var(--ink-rgb),0.6)",
                      lineHeight: 1,
                    }}
                  >
                    FREE
                  </span>
                  <span style={{ height: 3, borderRadius: 999, background: "rgba(var(--ink-rgb),0.16)", width: "100%" }} />
                </span>
              </div>

              <ValueRow name="Items it recommends" premium="ALL" free="TOP 3" freeSmall first />
              <ValueRow name="People on the account" premium="5" free="1" />
              <ValueRow name="Lists" premium="NO LIMIT" free="2" premiumSmall />
              <ValueRow name="Questions for Ask" premium="NO LIMIT" free="5" premiumSmall />
              <BoolRow name="Recommendations while you search" free="dash" />
              <BoolRow name="Your purchase history" free="dash" />
              <BoolRow name="Unlimited items" free="check" />
              <BoolRow name="Custom stores and brands" free="check" />
              <BoolRow name="Category-based organization" free="check" />
            </div>
          </div>

          {/* Why I built this */}
          <div
            style={{
              background: "var(--brand)",
              color: "var(--cream)",
              borderRadius: 22,
              padding: "clamp(24px,2.6vw,40px)",
              display: "flex",
              flexDirection: "column",
              gap: 14,
            }}
          >
            <span
              className="font-bebas"
              style={{ fontSize: "clamp(24px,2vw,28px)", letterSpacing: "1px", color: "var(--eyebrow)" }}
            >
              WHY I BUILT THIS
            </span>
            <p style={{ margin: 0, fontSize: "clamp(17.5px,1.5vw,20px)", lineHeight: 1.55 }}>
              I&apos;m an independent developer. I built GroceryGuru because I needed it. It helps my
              family every week. Not only does it look good (yep, I&apos;m biased) but the chat and smart
              features help us remember what we need to get on every trip.
            </p>
            <p style={{ margin: 0, fontSize: "clamp(17.5px,1.5vw,20px)", lineHeight: 1.55 }}>
              I hope you give the app a shot. And I know many of you are tired of subscription-based apps.
              But there are costs to running this app and the Premium subscription helps cover them. If
              that isn&apos;t what you can afford or not what you need, then I hope you try the Free
              version.
              <br />
              <br />
              Either way, I&apos;d love your feedback after trying the app. Thanks for reading and keep
              shopping smart.
            </p>
            <p
              style={{
                margin: 0,
                fontSize: "clamp(16px,1.3vw,17px)",
                lineHeight: 1.5,
                color: "rgba(var(--cream-rgb),0.85)",
              }}
            >
              Ben
              <br />
              <a href="mailto:ben@getgroceryguru.com" style={{ color: "var(--cream)", textDecoration: "underline" }}>
                ben@getgroceryguru.com
              </a>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
