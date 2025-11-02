import Link from "next/link"
import Image from "next/image"
import { Instagram, Facebook, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
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

          <div className="flex items-center gap-6">
            <Link href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Instagram className="h-5 w-5 hover:opacity-80 transition-opacity" />
            </Link>
            <Link href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <Facebook className="h-5 w-5 hover:opacity-80 transition-opacity" />
            </Link>
            <Link href="https://twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <Twitter className="h-5 w-5 hover:opacity-80 transition-opacity" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
