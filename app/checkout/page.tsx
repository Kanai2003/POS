"use client"

import { useState } from "react"
import { usePOS } from "../context/POSContext"
import CustomerForm from "../components/CustomerForm"
import PaymentSimulation from "../components/PaymentSimulation"
import Receipt from "../components/Receipt"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import PaymentSuccess from "../components/PaymentSuccess"

export default function Checkout() {
  const { cart, customer, clearCart } = usePOS()
  const [paymentComplete, setPaymentComplete] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  const handlePaymentComplete = () => {
    setShowSuccess(true)
    setTimeout(() => {
      setShowSuccess(false)
      setPaymentComplete(true)
    }, 2000)
    clearCart()
  }

  if (paymentComplete) {
    return <Receipt />
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Checkout</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Order Summary</CardTitle>
          </CardHeader>
          <CardContent>
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
        </Card>
        <div>
          <CustomerForm />
          {customer && (
            <Card className="mt-4">
              <CardHeader>
                <CardTitle>Payment</CardTitle>
              </CardHeader>
              <CardContent>
                <PaymentSimulation onComplete={handlePaymentComplete} />
              </CardContent>
            </Card>
          )}
        </div>
      </div>
      {showSuccess && <PaymentSuccess />}
      <div className="mt-4">
        <Button onClick={() => window.history.back()}>Back to Services</Button>
      </div>
    </div>
  )
}

