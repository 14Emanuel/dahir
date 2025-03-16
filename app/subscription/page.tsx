import type { Metadata } from "next"
import { SubscriptionForm } from "@/components/subscription-form"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Dahir - Subscription",
  description: "Manage your subscription to Dahir services",
}

export default function SubscriptionPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Subscription</h1>
      <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-1 max-w-md mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Subscription</CardTitle>
          </CardHeader>
          <CardContent>
            <SubscriptionForm />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

