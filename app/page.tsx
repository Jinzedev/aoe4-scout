import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { Screenshots } from "@/components/screenshots"
import { Community } from "@/components/community"
import { CTA } from "@/components/cta"
import { SiteFooter } from "@/components/site-footer"

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <Features />
        <Screenshots />
        <Community />
        <CTA />
      </main>
      <SiteFooter />
    </div>
  )
}
