import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Dahir - Meals",
  description: "Meal recording and tracking for construction workers",
}

export default function MealsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div className="container mx-auto py-4">{children}</div>
}

