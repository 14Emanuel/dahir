import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Dahir - Subscription",
  description: "Manage your subscription to Dahir services",
}

export default function SubscriptionLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div className="container mx-auto py-4">{children}</div>
}

