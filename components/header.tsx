"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Menu, X, Instagram, Facebook, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "#chi-siamo", label: "Chi siamo" },
    { href: "#funzionalita", label: "Cosa possiamo fare" },
    { href: "#risorse", label: "Alcuni Esempi" },
    { href: "#contatti", label: "Contatti" },
    { href: "/blog/", label: "Blog" },
    { href: "/calcolatore-tlv/", label: "Calcolatore TLV" },
  ]

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-shadow ${
        isScrolled ? "shadow-sm" : ""
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <Image
              src="https://automatizziamo.it/wp-content/uploads/2024/10/Automatizziamo.png"
              alt="logo automatizziamo"
              width={40}
              height={40}
              className="h-10 w-10"
            />
            <span className="text-xl font-bold uppercase tracking-tight">Automatizziamo</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="https://www.instagram.com/automatizziamo.it"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5 text-foreground/60 hover:text-foreground transition-colors" />
            </Link>
            <Link
              href="https://www.facebook.com/profile.php?id=61567784642161"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5 text-foreground/60 hover:text-foreground transition-colors" />
            </Link>
            <Link href="https://twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <Twitter className="h-5 w-5 text-foreground/60 hover:text-foreground transition-colors" />
            </Link>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Chiudi menu" : "Apri menu"}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden border-t bg-background">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center gap-4 pt-4 border-t">
              <Link
                href="https://www.instagram.com/automatizziamo.it"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5 text-foreground/60" />
              </Link>
              <Link
                href="https://www.facebook.com/profile.php?id=61567784642161"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5 text-foreground/60" />
              </Link>
              <Link href="https://twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Twitter className="h-5 w-5 text-foreground/60" />
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
