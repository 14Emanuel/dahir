import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Dahir - Settings",
  description: "Manage your account settings and preferences",
}

export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div className="container mx-auto py-4">{children}</div>
}

