const APP_STORE =
  "https://apps.apple.com/us/app/groceryguru-grocery-assistant/id6744698978";

// Hero — sage brand layer (page wrapper provides the sage background).
export default function HeroSection() {
  return (
    <header style={{ padding: "clamp(44px,7vw,104px) clamp(22px,5vw,64px) clamp(40px,6vw,84px)" }}>
      <div
        style={{
          maxWidth: 1240,
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "clamp(20px,2.2vw,28px)",
        }}
      >
        <h1
          className="font-playfair"
          style={{
            fontWeight: 600,
            fontSize: "clamp(44px,6.4vw,86px)",
            lineHeight: 1.02,
            letterSpacing: "-0.5px",
            margin: 0,
            maxWidth: "15ch",
            textWrap: "balance",
          }}
        >
          The grocery list that remembers what you buy
        </h1>
        <p
          style={{
            margin: 0,
            fontSize: "clamp(19px,1.9vw,26px)",
            lineHeight: 1.38,
            color: "var(--cream)",
            maxWidth: "34ch",
          }}
        >
          Smart recommendations to help you get what you need when you need it.
        </p>
        <a href={APP_STORE} style={{ display: "inline-flex", alignSelf: "flex-start" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/Download_on_the_App_Store_Badge.png"
            alt="Download on the App Store"
            style={{ height: "clamp(50px,4.4vw,60px)", display: "block" }}
          />
        </a>
        <span
          style={{
            height: 1,
            background: "rgba(var(--cream-rgb),0.28)",
            marginTop: "clamp(14px,2vw,26px)",
          }}
        />
      </div>
    </header>
  );
}
