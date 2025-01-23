"use client"

import Cart from "../components/Cart"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function CartPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Your Cart</h1>
      <Cart />
      <div className="mt-4">
        <Link href="/">
          <Button variant="outline">Back to Services</Button>
        </Link>
      </div>
    </div>
  )
}

