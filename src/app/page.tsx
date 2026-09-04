import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import SmartSearch from "../components/SmartSearch";
import AskGroceryGuru from "../components/AskGroceryGuru";
import SmartRecommendations from "../components/SmartRecommendations";
import StoreAwareShopping from "../components/StoreAwareShopping";
import Footer from "../components/Footer";

export const metadata = {
  title: "GroceryGuru – Smart Lists, Made Simple",
  description:
    "GroceryGuru is the grocery app that remembers what you buy and when. Get personalized, store-aware grocery lists that stay one step ahead.",
  openGraph: {
    title: "GroceryGuru – Smart Lists, Made Simple",
    description:
      "The grocery app that remembers what you buy and when. Personalized lists, smart recommendations, and store-aware shopping — all in one app.",
    url: "https://getgroceryguru.com",
    siteName: "GroceryGuru",
    images: [{ url: "/images/social-preview.png", width: 1200, height: 630, alt: "GroceryGuru preview image" }],
    type: "website",
  },
};

// Sage bridge line — brand layer, single editorial heading, no panel.
function Bridge({ children }: { children: React.ReactNode }) {
  return (
    <section style={{ padding: "clamp(52px,7vw,110px) clamp(22px,5vw,64px)" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <h2
          className="font-playfair"
          style={{
            fontWeight: 600,
            fontSize: "clamp(38px,5vw,68px)",
            lineHeight: 1.04,
            margin: 0,
            maxWidth: "22ch",
            textWrap: "balance",
          }}
        >
          {children}
        </h2>
      </div>
    </section>
  );
}

export default function LandingPage() {
  return (
    // Sage brand layer wraps the whole page; canvas sections paint their own background.
    <div
      style={{
        background: "var(--brand)",
        color: "var(--cream)",
        fontFamily: "var(--font-hanken), -apple-system, sans-serif",
        fontSize: 17,
        lineHeight: 1.5,
        position: "relative",
      }}
    >
      <Header variant="home" />
      <HeroSection />
      <SmartSearch />
      <Bridge>Just ask...GroceryGuru will know.</Bridge>
      <AskGroceryGuru />
      <Bridge>GroceryGuru figures out your purchase patterns.</Bridge>
      <SmartRecommendations />
      <Bridge>We make shopping easier.</Bridge>
      <StoreAwareShopping />
      <Footer />
    </div>
  );
}
