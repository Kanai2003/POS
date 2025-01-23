"use client"

import { POSProvider } from "./context/POSContext"

export function Providers({ children }: { children: React.ReactNode }) {
  return <POSProvider>{children}</POSProvider>
}

