import "./globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Pokédex",
  description: "Explora los Pokémon con nuestra Pokédex",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900 font-sans">{children}</body>
    </html>
  )
}
