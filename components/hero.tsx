import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://automatizziamo.it/wp-content/uploads/2025/02/1b8ca648d675e8711f3677a9ee6681381ad8162b-1.webp"
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 container mx-auto px-4 lg:px-8 py-24 lg:py-32">
        <div className="max-w-3xl animate-fade-in-up">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight text-balance">
            Automatizziamo i processi <br />
            lunghi e ripetitivi.
          </h1>

          <p className="text-lg lg:text-xl text-white/90 mb-4 leading-relaxed">
            Tu ed i tuoi dipendenti impiegate decine di ore per svolgere manualmente attività al computer?
            Automatizziamo.it libera tempo per la tua azienda, riducendo i tempi per queste operazioni fino al 95%.
          </p>

          <p className="text-lg lg:text-xl text-white/90 mb-8 leading-relaxed">
            Studiamo i processi aziendali ed eliminiamo i colli di bottiglia, creando software che ti lascia concentrare
            su ciò che realmente genera fatturato.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-white text-black hover:bg-white/90">
              <Link href="#contatti">Richiedi una consulenza gratuita</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 bg-transparent"
            >
              <Link href="#funzionalita">Scopri di più</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
