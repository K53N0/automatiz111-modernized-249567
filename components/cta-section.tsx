import Link from "next/link"
import { Button } from "@/components/ui/button"

export function CtaSection() {
  return (
    <section className="py-16 lg:py-24 bg-accent">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="bg-background rounded-lg p-8 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 animate-fade-in-up">
          <div className="max-w-2xl">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">
              Inizia ora ad ottimizzare i tuoi processi aziendali.
            </h2>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Automatizziamo: il tuo alleato per l'automazione aziendale. Semplifica, accelera e potenzia il tuo
              business. Contattaci per una consulenza.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
            <Button asChild variant="outline" size="lg">
              <Link href="#contatti">Approfondisci ora</Link>
            </Button>
            <Button asChild size="lg">
              <Link href="#contatti">Contattaci</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
