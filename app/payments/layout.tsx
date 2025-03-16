import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Dahir - Payments",
  description: "Payment recording and tracking for construction workers",
}

export default function PaymentsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div className="container mx-auto py-4">{children}</div>
}

