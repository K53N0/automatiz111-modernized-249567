import { Hero } from "@/components/hero"
import { ChiSiamo } from "@/components/chi-siamo"
import { Funzionalita } from "@/components/funzionalita"
import { ClientLogos } from "@/components/client-logos"
import { CtaSection } from "@/components/cta-section"
import { Risorse } from "@/components/risorse"
import { CustomAutomation } from "@/components/custom-automation"
import { ContactForm } from "@/components/contact-form"
import { CookieBanner } from "@/components/cookie-banner"

export default function HomePage() {
  return (
    <>
      <Hero />
      <ChiSiamo />
      <Funzionalita />
      <ClientLogos />
      <CtaSection />
      <Risorse />
      <CustomAutomation />
      <ContactForm />
      <CookieBanner />
    </>
  )
}
