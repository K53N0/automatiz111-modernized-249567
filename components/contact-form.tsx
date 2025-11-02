"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic would go here
    console.log("[v0] Form submitted:", formData)
  }

  return (
    <section id="contatti" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="mb-12 text-center animate-fade-in-up">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Scopri come possiamo trasformare la tua azienda con soluzioni software su misura.
            </h2>
            <a href="mailto:info@automatizziamo.it" className="text-lg text-primary hover:underline">
              info@automatizziamo.it
            </a>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div>
              <Label htmlFor="name">Nome</Label>
              <Input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="mt-2"
              />
            </div>

            <div>
              <Label htmlFor="email">La tua email</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="mt-2"
              />
            </div>

            <div>
              <Label htmlFor="company">La tua azienda</Label>
              <Input
                id="company"
                type="text"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="mt-2"
              />
            </div>

            <div>
              <Label htmlFor="subject">Oggetto</Label>
              <Input
                id="subject"
                type="text"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                required
                className="mt-2"
              />
            </div>

            <div>
              <Label htmlFor="message">Il tuo messaggio (opzionale)</Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={5}
                className="mt-2"
              />
            </div>

            <Button type="submit" size="lg" className="w-full">
              Invia messaggio
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
