"use client"

import { services } from "../data/services"
import { usePOS } from "../context/POSContext"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ServiceSelection() {
  const { addToCart, cart } = usePOS()

  const isInCart = (serviceId: string) => {
    return cart.some((item) => item.id === serviceId)
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {services.map((service) => (
        <Card key={service.id}>
          <CardHeader>
            <div className="flex justify-between items-start">
              <CardTitle>{service.name}</CardTitle>
              {isInCart(service.id) && <Badge variant="secondary">In Cart</Badge>}
            </div>
            <CardDescription>{service.duration}</CardDescription>
          </CardHeader>
          <CardContent>
            <p>{service.description}</p>
          </CardContent>
          <CardFooter className="flex justify-between">
            <span className="text-2xl font-bold">${service.price.toFixed(2)}</span>
            <Button onClick={() => addToCart(service)}>Add to Cart</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

