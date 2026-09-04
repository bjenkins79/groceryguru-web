const APP_STORE =
  "https://apps.apple.com/us/app/groceryguru-grocery-assistant/id6744698978";

// Forest close + footer. Shared by all pages. White logo lockup.
// NOTE (deviation vs old footer): the mockup drops the Terms/EULA link + copyright
// line the previous footer had. Flagged for Ben; re-add if legally wanted.
export default function Footer() {
  return (
    <section
      style={{
        background: "var(--forest)",
        padding: "clamp(44px,6vw,96px) clamp(22px,5vw,64px) clamp(34px,4vw,52px)",
      }}
    >
      <div
        style={{
          maxWidth: 1240,
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "clamp(26px,3vw,40px)",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
            gap: "clamp(24px,4vw,64px)",
            alignItems: "center",
          }}
        >
          <h2
            className="font-playfair"
            style={{
              fontWeight: 600,
              fontSize: "clamp(40px,5vw,72px)",
              lineHeight: 1.01,
              margin: 0,
              maxWidth: "16ch",
              color: "var(--cream)",
            }}
          >
            Keep Shopping Smart.
          </h2>
          <a href={APP_STORE} style={{ display: "inline-flex", alignSelf: "flex-start" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/Download_on_the_App_Store_Badge.png"
              alt="Download on the App Store"
              style={{ height: "clamp(52px,4.6vw,62px)", display: "block" }}
            />
          </a>
        </div>
        <div style={{ height: 1, background: "rgba(var(--cream-rgb),0.18)" }} />
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "16px clamp(22px,3vw,40px)",
            alignItems: "center",
          }}
        >
          <span style={{ flex: "1 1 200px", display: "flex" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/Logo_GroceryGuru_White.svg"
              alt="GroceryGuru"
              style={{ height: "clamp(42px,3.6vw,50px)", width: "auto", display: "block" }}
            />
          </span>
          <a href="/plans" style={{ fontSize: 15, fontWeight: 600, color: "var(--cream)" }}>
            Plans
          </a>
          <a href="/faq" style={{ fontSize: 15, fontWeight: 600, color: "var(--cream)" }}>
            FAQ
          </a>
          <a href="/privacy" style={{ fontSize: 15, fontWeight: 600, color: "var(--cream)" }}>
            Privacy
          </a>
          <a
            href="mailto:support@getgroceryguru.com"
            style={{ fontSize: 15, fontWeight: 600, color: "var(--cream)" }}
          >
            Support
          </a>
          <span style={{ fontSize: 14, color: "rgba(var(--cream-rgb),0.85)" }}>Shop smarter</span>
        </div>
      </div>
    </section>
  );
}
