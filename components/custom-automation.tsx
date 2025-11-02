import Link from "next/link"
import { Button } from "@/components/ui/button"

export function CustomAutomation() {
  return (
    <section className="py-16 bg-accent border-t">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left animate-fade-in-up">
          <img
            src="https://automatizziamo.it/wp-content/uploads/2024/10/target-audience-icon-1.png"
            alt=""
            className="w-16 h-16"
          />
          <div className="max-w-2xl">
            <h3 className="text-2xl font-bold mb-2">
              Vuoi automatizzare un processo che usi solo tu? <br className="hidden lg:inline" />
              Nessun problema.
            </h3>
            <p className="text-foreground/80 mb-4">
              Anche per processi tipici della tua azienda, possiamo comunque aiutarti ad automatizzarli, risparmiando
              tempo e denaro…
            </p>
          </div>
          <Button asChild size="lg" className="flex-shrink-0">
            <Link href="#contatti">Contattaci</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
