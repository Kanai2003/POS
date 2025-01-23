"use client"

import { usePOS } from "../context/POSContext"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function Cart() {
  const { cart, removeFromCart } = usePOS()

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <Card>
      <CardHeader>
        <CardTitle>Cart</CardTitle>
      </CardHeader>
      <CardContent>
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <ul className="space-y-2">
            {cart.map((item) => (
              <li key={item.id} className="flex justify-between items-center p-2 bg-gray-100 rounded-md">
                <span className="flex-grow">
                  {item.name} x {item.quantity}
                </span>
                <span className="px-2">${(item.price * item.quantity).toFixed(2)}</span>
                <Button variant="destructive" size="sm" onClick={() => removeFromCart(item.id)}>
                  Remove
                </Button>
              </li>
            ))}
          </ul>
        )}
      </CardContent>
      <CardFooter className="flex justify-between">
        <span className="text-2xl font-bold">Total: ${total.toFixed(2)}</span>
        {cart.length > 0 && (
          <Link href="/checkout">
            <Button>Proceed to Checkout</Button>
          </Link>
        )}
      </CardFooter>
    </Card>
  )
}

