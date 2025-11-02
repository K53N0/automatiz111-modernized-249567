const clients = [
  {
    src: "https://www.powercoin.it/img/logo-1643910224.jpg",
    alt: "Powercoin",
  },
  {
    src: "https://www.arcadynamics.space/wp-content/uploads/2021/04/Logo-ARCA-Dynamics.svg",
    alt: "ARCA Dynamics",
  },
  {
    src: "https://site-847219.mozfiles.com/files/847219/LOGO_TRASPARENTE-1.png",
    alt: "Client logo",
  },
  {
    src: "https://channelize.io//pub/static/frontend/Primemessenger/clean/en_US/images/new-header/channelize.svg",
    alt: "Channelize",
  },
  {
    src: "https://blog.sosturismodentale.it/wp-content/uploads/2018/12/SosTD-logo-Small-Colors.png",
    alt: "SosTD",
  },
]

export function ClientLogos() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold mb-12 animate-fade-in-up">Abbiamo lavorato con…</h2>

        <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12">
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-6 bg-accent rounded-full min-w-[140px] h-[80px] animate-fade-in-up hover:shadow-md transition-shadow"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={client.src || "/placeholder.svg"}
                alt={client.alt}
                className="max-w-[120px] max-h-[60px] object-contain"
              />
            </div>
          ))}
          <div
            className="flex items-center justify-center p-6 bg-accent rounded-full min-w-[140px] h-[80px] animate-fade-in-up"
            style={{ animationDelay: "0.5s" }}
          >
            <p className="text-sm font-bold italic">E molti altri…</p>
          </div>
        </div>
      </div>
    </section>
  )
}
