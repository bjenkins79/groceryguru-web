import Header from "../components/Header"
import HeroSection from "../components/HeroSection"
import SmartRecommendations from "../components/SmartRecommendations"
import StoreAwareShopping from "../components/StoreAwareShopping"
import SimpleCollaboration from "../components/SimpleCollaboration"
import Footer from "../components/Footer"

export const metadata = {
  title: "GroceryGuru – Smart Lists, Made Simple",
  description:
    "GroceryGuru is the grocery app that remembers what you buy and when. Get personalized, store-aware grocery lists that stay one step ahead.",
  openGraph: {
    title: "GroceryGuru – Smart Lists, Made Simple",
    description:
      "The grocery app that remembers what you buy and when. Personalized lists, smart suggestions, and store-aware shopping — all in one app.",
    url: "https://getgroceryguru.com",
    siteName: "GroceryGuru",
    images: [
      {
        url: "/images/social-preview.png", // you already have this in public/images/
        width: 1200,
        height: 630,
        alt: "GroceryGuru preview image",
      },
    ],
    type: "website",
  },
}

export default function LandingPage() {
  return (
    <>
      <Header />
      <HeroSection />
      <SmartRecommendations />
      <StoreAwareShopping />
      <SimpleCollaboration />
      <Footer />
    </>
  )
}
