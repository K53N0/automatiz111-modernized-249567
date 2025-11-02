const resources = [
  {
    icon: "https://automatizziamo.it/wp-content/uploads/2024/10/photos-icon.png",
    title: "Elaborazione immagini",
    description:
      "L'elaborazione delle immagini dei tuoi prodotti può richiedere una infinità di tempo se necessita di immagini che restano omogenee tra di loro.",
  },
  {
    icon: "https://automatizziamo.it/wp-content/uploads/2024/10/product-box-icon.png",
    title: "Prodotti su E-Commerce",
    description:
      "Caricare i tuoi prodotti sul tuo E-Commerce è può sicuramente richiedere molto tempo, soprattutto se vuoi mantenere un elevato standard di qualità.",
  },
  {
    icon: "https://automatizziamo.it/wp-content/uploads/2024/10/ebay-icon.png",
    title: "Inserzioni su eBay",
    description:
      "Se lavori molto con eBay (o altri Marketplace) sai bene che pubblicare un'asta, una inserzione Compralo Subito e monitorare il tutto richiede molto tempo.",
  },
  {
    icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDQ4IDQ4Ij48bWFzayBpZD0iYSIgd2lkdGg9IjQ4IiBoZWlnaHQ9IjQ4IiB4PSIwIiB5PSIwIiBtYXNrVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBzdHlsZT0ibWFzay10eXBlOmFscGhhIj48cGF0aCBmaWxsPSIjRDlEOUQ5IiBkPSJNMCAwaDQ4djQ4SDB6Ii8+PC9tYXNrPjxnIG1hc2s9InVybCgjYSkiPjxwYXRoIGZpbGw9IiMxQzFCMUYiIGQ9Ik0xNS45NSAzNS41aDE2LjF2LTNoLTE2LjF2M1ptMC04LjVoMTYuMXYtM2gtMTYuMXYzWk0xMSA0NGMtLjggMC0xLjUtLjMtMi4xLS45LS42LS42LS45LTEuMy0uOS0yLjFWN2MwLS44LjMtMS41LjktMi4xLjYtLjYgMS4zLS45IDIuMS0uOWgxOC4wNUw0MCAxNC45NVY0MWMwIC44LS4zIDEuNS0uOSAyLjEtLjYuNi0xLjMuOS0yLjEuOUgxMVptMTYuNTUtMjcuN1Y3SDExdjM0aDI2VjE2LjNoLTkuNDVaIi8+PC9nPjwvc3ZnPg==",
    title: "Fatturazione elettronica",
    description:
      "Devi caricare un elevato numero di fatture elettroniche ad esempio su Aruba, ma farlo a mano impegna la tua segretaria per mezza giornata.",
  },
  {
    icon: "https://automatizziamo.it/wp-content/uploads/2024/10/barcode-scan-icon.png",
    title: "Spedizioni sul sito del corriere",
    description:
      "Utile se gestisci un alto numero di spedizioni ogni giorno, ed i tuoi ragazzi devono caricarle manualmente sul sito del corriere.",
  },
  {
    icon: "https://automatizziamo.it/wp-content/uploads/2024/10/table-icon.png",
    title: "Estrarre e formattare dati",
    description:
      "Se devi estrarre una grande quantità di dati da siti esterni o se devi impaginare dati in un formato particolare, questa soluzione fa per te.",
  },
  {
    icon: "https://automatizziamo.it/wp-content/uploads/2024/10/speech-bubble-line-icon.png",
    title: "Rispondere alle recensioni",
    description:
      "Rispondere alle recensioni dei clienti è un lavoro lungo e che richiede tempo, lascia che lo faccia un algoritmo, mantenendo il tuo stile e seguendo le tue regole.",
  },
]

export function Risorse() {
  return (
    <section id="risorse" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mb-12 animate-fade-in-up">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Scopri cosa possiamo fare</h2>
          <p className="text-lg text-foreground/80 leading-relaxed">
            Esplora le nostre risorse per capire meglio quali sono le cose più comuni che rubano tempo alla tua azienda.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {resources.map((resource, index) => (
            <div
              key={index}
              className="p-6 bg-accent rounded-lg hover:shadow-lg transition-all animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img src={resource.icon || "/placeholder.svg"} alt="" className="w-12 h-12 mb-4" />
              <h3 className="text-lg font-semibold mb-3">{resource.title}</h3>
              <p className="text-sm text-foreground/70 leading-relaxed">{resource.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
