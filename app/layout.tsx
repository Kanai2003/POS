import "./globals.css"
import { Inter } from "next/font/google"
import { Providers } from "./providers"
import Link from "next/link"
import CartCount from "./components/CartCount"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "POS System",
  description: "Point of Sale System for Services",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <nav className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
              <Link href="/" className="text-xl font-bold">
                POS System
              </Link>
              <div className="space-x-4 flex items-center">
                <Link href="/" className="hover:text-gray-300">
                  Services
                </Link>
                <Link href="/cart" className="hover:text-gray-300 flex items-center">
                  <CartCount />
                </Link>
              </div>
            </div>
          </nav>
          {children}
        </Providers>
      </body>
    </html>
  )
}

