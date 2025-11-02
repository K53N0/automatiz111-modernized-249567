"use client"

import { useState, useEffect } from "react"
import { X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null)
  const [consent, setConsent] = useState({
    functional: true,
    preferences: false,
    statistics: false,
    marketing: false,
  })

  useEffect(() => {
    const hasConsent = localStorage.getItem("cookie-consent")
    if (!hasConsent) {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setIsVisible(false)
  }

  const handleDeny = () => {
    localStorage.setItem("cookie-consent", "denied")
    setIsVisible(false)
  }

  const handleSave = () => {
    localStorage.setItem("cookie-consent", JSON.stringify(consent))
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div
      className="fixed bottom-4 right-4 z-50 max-w-md w-full bg-card border shadow-lg rounded-lg animate-fade-in-up"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cookie-banner-title"
    >
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <h2 id="cookie-banner-title" className="text-lg font-semibold">
            Gestisci Consenso
          </h2>
          <button
            onClick={() => setIsVisible(false)}
            className="text-foreground/60 hover:text-foreground"
            aria-label="Chiudi la finestra di dialogo"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <p className="text-sm text-foreground/80 mb-4 leading-relaxed">
          Per fornire le migliori esperienze, utilizziamo tecnologie come i cookie per memorizzare e/o accedere alle
          informazioni del dispositivo. Il consenso a queste tecnologie ci permetterà di elaborare dati come il
          comportamento di navigazione o ID unici su questo sito. Non acconsentire o ritirare il consenso può influire
          negativamente su alcune caratteristiche e funzioni.
        </p>

        <div className="space-y-2 mb-4">
          <details className="border rounded-md">
            <summary className="p-3 cursor-pointer flex items-center justify-between hover:bg-accent">
              <div className="flex items-center gap-3">
                <span className="font-medium text-sm">Funzionale</span>
                <span className="text-xs text-foreground/60">Sempre attivo</span>
              </div>
              <ChevronDown className="h-4 w-4" />
            </summary>
            <div className="p-3 text-sm text-foreground/70 border-t">
              L'archiviazione tecnica o l'accesso sono strettamente necessari al fine legittimo di consentire l'uso di
              un servizio specifico esplicitamente richiesto dall'abbonato o dall'utente, o al solo scopo di effettuare
              la trasmissione di una comunicazione su una rete di comunicazione elettronica.
            </div>
          </details>

          <details className="border rounded-md">
            <summary className="p-3 cursor-pointer flex items-center justify-between hover:bg-accent">
              <span className="font-medium text-sm">Preferenze</span>
              <ChevronDown className="h-4 w-4" />
            </summary>
            <div className="p-3 text-sm text-foreground/70 border-t">
              L'archiviazione tecnica o l'accesso sono necessari per lo scopo legittimo di memorizzare le preferenze che
              non sono richieste dall'abbonato o dall'utente.
            </div>
          </details>

          <details className="border rounded-md">
            <summary className="p-3 cursor-pointer flex items-center justify-between hover:bg-accent">
              <span className="font-medium text-sm">Statistiche</span>
              <ChevronDown className="h-4 w-4" />
            </summary>
            <div className="p-3 text-sm text-foreground/70 border-t">
              L'archiviazione tecnica o l'accesso che viene utilizzato esclusivamente per scopi statistici.
            </div>
          </details>

          <details className="border rounded-md">
            <summary className="p-3 cursor-pointer flex items-center justify-between hover:bg-accent">
              <span className="font-medium text-sm">Marketing</span>
              <ChevronDown className="h-4 w-4" />
            </summary>
            <div className="p-3 text-sm text-foreground/70 border-t">
              L'archiviazione tecnica o l'accesso sono necessari per creare profili di utenti per inviare pubblicità, o
              per tracciare l'utente su un sito web o su diversi siti web per scopi di marketing simili.
            </div>
          </details>
        </div>

        <div className="flex flex-col gap-2">
          <Button onClick={handleAccept} className="w-full">
            Accetta
          </Button>
          <div className="flex gap-2">
            <Button onClick={handleDeny} variant="outline" className="flex-1 bg-transparent">
              Nega
            </Button>
            <Button onClick={handleSave} variant="outline" className="flex-1 bg-transparent">
              Salva preferenze
            </Button>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t">
          <a href="/privacy-policy/" className="text-xs text-foreground/60 hover:text-foreground hover:underline">
            Privacy Policy
          </a>
        </div>
      </div>
    </div>
  )
}
