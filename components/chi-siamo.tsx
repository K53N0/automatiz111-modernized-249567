export function ChiSiamo() {
  return (
    <section id="chi-siamo" className="py-16 lg:py-24 bg-accent">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 leading-tight">
              Automatizziamo: Basta sprecare ore dipendente per operazioni ripetitive.
            </h2>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Elimina le operazioni ripetitive dalla tua azienda. Grazie a una consulenza approfondita e programmi su
              misura, liberi tempo per te, i dipendenti e la tua impresa.
            </p>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <img
              src="https://automatizziamo.it/wp-content/uploads/2024/10/persona-lavora-lentamente-1024x1024.png"
              alt=""
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
