import Navbar from "./components/navbar"
import Hero from "./components/hero"
import Categories from "./components/categories"
import Features from "./components/features"
import ContentSections from "./components/content-sections"
import Marketplace from "./components/marketplace"
import IndustryExperts from "./components/industry-experts"
import Testimonials from "./components/testimonials"
import CTASection from "./components/cta-section"
import Footer from "./components/footer"
import AuthModals from "./components/auth-modals"
import SubscriptionModal from "./components/subscription-modal"
import ScrollToTop from "./components/scroll-to-top"
import ChatWidget from "./components/chat-widget"
import { useState } from "react"

export default function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false)
  const [isSignupOpen, setIsSignupOpen] = useState(false)

  return (
    <main className="min-h-screen min-w-full">
      <Navbar onLoginClick={() => setIsLoginOpen(true)} onSignupClick={() => setIsSignupOpen(true)} />
        <Hero onLoginClick={() => setIsLoginOpen(true)} />
        <Categories />
        <Features />
        <ContentSections />
        <Marketplace />
        <IndustryExperts />
        <Testimonials />
        <CTASection />
      <Footer />
      <AuthModals
        isLoginOpen={isLoginOpen}
        isSignupOpen={isSignupOpen}
        onLoginClose={() => setIsLoginOpen(false)}
        onSignupClose={() => setIsSignupOpen(false)}
      />
      <SubscriptionModal />
      <ScrollToTop />
      <ChatWidget />
    </main>
  )
}
