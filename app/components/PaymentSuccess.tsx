"use client"

import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"

export default function PaymentSuccess() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-full p-8"
      >
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.5, duration: 0.5 }}>
          <CheckCircle className="w-24 h-24 text-green-500" />
        </motion.div>
      </motion.div>
    </div>
  )
}

