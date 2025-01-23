"use client"

import ServiceSelection from "./components/ServiceSelection"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import CartCount from "./components/CartCount"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex mb-8">
        <h1 className="text-4xl font-bold">POS System</h1>
        <Link href="/cart">
          <Button className="flex items-center gap-2">
            <CartCount />
            View Cart
          </Button>
        </Link>
      </div>
      <div className="w-full max-w-5xl">
        <ServiceSelection />
      </div>
    </main>
  )
}

