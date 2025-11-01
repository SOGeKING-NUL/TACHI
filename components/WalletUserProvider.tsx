"use client"

import { useWalletUser } from "@/hooks/use-wallet-user"
import { useEffect } from "react"

/**
 * Global component that handles wallet connection and user creation
 * This should be mounted in the root layout to ensure it runs on all pages
 */
export default function WalletUserProvider({ children }: { children: React.ReactNode }) {
  const { user, loading, error, address, isConnected } = useWalletUser()

  // Log for debugging
  useEffect(() => {
    if (isConnected && address) {
      console.log("🔌 Wallet connected:", address)
      if (user) {
        console.log("✅ User loaded:", user.username)
      } else if (loading) {
        console.log("⏳ Loading user...")
      } else if (error) {
        console.error("❌ Error loading user:", error)
      }
    }
  }, [isConnected, address, user, loading, error])

  return <>{children}</>
}

