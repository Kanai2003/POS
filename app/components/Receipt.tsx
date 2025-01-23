"use client"

import { usePOS } from "../context/POSContext"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function Receipt() {
  const { cart, customer } = usePOS()

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const date = new Date().toLocaleString()

  return (
    <div className="container mx-auto p-4">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Receipt</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">Date: {date}</p>
          <h3 className="font-bold mb-2">Customer Details:</h3>
          <p>Name: {customer?.name}</p>
          <p>Email: {customer?.email}</p>
          <p>Phone: {customer?.phone}</p>
          <h3 className="font-bold mt-4 mb-2">Order Details:</h3>
          <ul>
            {cart.map((item) => (
              <li key={item.id} className="flex justify-between items-center mb-2">
                <span>
                  {item.name} x {item.quantity}
                </span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </li>
            ))}
          </ul>
          <div className="text-2xl font-bold mt-4">Total: ${total.toFixed(2)}</div>
        </CardContent>
        <CardFooter>
          <Link href="/">
            <Button>Back to Home</Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  )
}

