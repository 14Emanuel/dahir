import type { Metadata } from "next"

import { PaymentRecordingForm } from "@/components/payment-recording-form"
import { WorkerMealHistory } from "@/components/worker-meal-history"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Dahir - Payments",
}

export default function PaymentsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Payment Recording</h1>
      <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-1">
        <Card>
          <CardHeader>
            <CardTitle>Payment Recording</CardTitle>
          </CardHeader>
          <CardContent>
            <PaymentRecordingForm />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Meal History Price (9th - 14th)</CardTitle>
          </CardHeader>
          <CardContent>
            <WorkerMealHistory />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

