import type { Metadata } from "next"

import { MealRecordingForm } from "@/components/meal-recording-form"
import { MealHistory } from "@/components/meal-history"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Dahir - Meals",
}

export default function MealsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Meal Recording</h1>
      <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-1">
        <Card>
          <CardHeader>
            <CardTitle>Meal Recording</CardTitle>
          </CardHeader>
          <CardContent>
            <MealRecordingForm />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Meal History (9th - 15th)</CardTitle>
          </CardHeader>
          <CardContent>
            <MealHistory />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

