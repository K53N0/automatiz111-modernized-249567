import { CheckCircle } from "lucide-react"

const features = [
  {
    title: "Programmi e App Intelligenti",
    description: "Elimina le operazioni quotidiane lente e ripetitve.",
  },
  {
    title: "Software su Misura",
    description:
      "Hai già una infrastruttra e/o CRM personalizzati? Nessun problema. Le nostre soluzioni si integrano perfettamente.",
  },
  {
    title: "Elimina l'errore umano",
    description: "Le operazioni lente e ripetitive possono far sbagliare chiunque. Elimina questa possibilità.",
  },
  {
    title: "Soluzioni rapide, o è gratis",
    description: "Rimuoviamo i colli di bottiglia entro 72h, oppure non paghi nulla.",
  },
  {
    title: "Plug-and-play",
    description: "Soluzioni facili da implementare, senza alcuna conoscenza tecnica.",
  },
  {
    title: "Team Qualificato",
    description:
      "Professionisti dedicati a comprendere i tuoi processi, individuare i colli di bottiglia ed automatizzarne l'esecuzione.",
  },
]

export function Funzionalita() {
  return (
    <section id="funzionalita" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mb-12 animate-fade-in-up">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Esperti nell'automazione aziendale</h2>
          <p className="text-lg text-foreground/80 leading-relaxed">
            Sviluppo Software Roma: soluzioni software personalizzate e innovative per applicazioni per ottimizzare i
            processi aziendali liberando tempo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex gap-4 p-6 rounded-lg bg-accent hover:shadow-md transition-shadow animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CheckCircle className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-foreground/70 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div
            className="relative h-[600px] rounded-lg overflow-hidden animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            <img
              src="https://automatizziamo.it/wp-content/uploads/2024/10/Grow-your.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
