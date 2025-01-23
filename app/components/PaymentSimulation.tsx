"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

interface PaymentSimulationProps {
  onComplete: () => void
}

export default function PaymentSimulation({ onComplete }: PaymentSimulationProps) {
  const [isProcessing, setIsProcessing] = useState(false)

  const handlePayment = () => {
    setIsProcessing(true)
    setTimeout(() => {
      setIsProcessing(false)
      onComplete()
    }, 2000)
  }

  return (
    <div>
      <Button onClick={handlePayment} disabled={isProcessing}>
        {isProcessing ? (
          <motion.div
            className="flex items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="w-4 h-4 border-t-2 border-b-2 border-white rounded-full mr-2"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            />
            Processing...
          </motion.div>
        ) : (
          "Complete Payment"
        )}
      </Button>
    </div>
  )
}

