"use client"

import { usePOS } from "../context/POSContext"
import { ShoppingCart } from "lucide-react"

export default function CartCount() {
  const { cart } = usePOS()

  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <div className="relative">
      <ShoppingCart className="w-6 h-6" />
      {itemCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
          {itemCount}
        </span>
      )}
    </div>
  )
}

