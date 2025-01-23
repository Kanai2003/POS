"use client"

import type React from "react"
import { createContext, useContext, useState, type ReactNode } from "react"
import type { Service } from "../data/services"

interface CartItem extends Service {
  quantity: number
}

interface Customer {
  name: string
  email: string
  phone: string
}

interface POSContextType {
  cart: CartItem[]
  addToCart: (service: Service) => void
  removeFromCart: (serviceId: string) => void
  clearCart: () => void
  customer: Customer | null
  setCustomer: (customer: Customer | null) => void
}

const POSContext = createContext<POSContextType | undefined>(undefined)

export const POSProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([])
  const [customer, setCustomer] = useState<Customer | null>(null)

  const addToCart = (service: Service) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === service.id)
      if (existingItem) {
        return prevCart.map((item) => (item.id === service.id ? { ...item, quantity: item.quantity + 1 } : item))
      }
      return [...prevCart, { ...service, quantity: 1 }]
    })
  }

  const removeFromCart = (serviceId: string) => {
    setCart((prevCart) =>
      prevCart.reduce((acc, item) => {
        if (item.id === serviceId) {
          if (item.quantity > 1) {
            acc.push({ ...item, quantity: item.quantity - 1 })
          }
        } else {
          acc.push(item)
        }
        return acc
      }, [] as CartItem[]),
    )
  }

  const clearCart = () => {
    setCart([])
  }

  return (
    <POSContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        customer,
        setCustomer,
      }}
    >
      {children}
    </POSContext.Provider>
  )
}

export const usePOS = () => {
  const context = useContext(POSContext)
  if (context === undefined) {
    throw new Error("usePOS must be used within a POSProvider")
  }
  return context
}

