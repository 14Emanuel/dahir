import type { Metadata } from "next"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MealsSettings } from "@/components/settings/meals-settings"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Dahir - Meals Database Management",
}

export default function MealsPage() {
  return (
    <div className="container mx-auto py-6">
      <div className="mb-4">
        <Link href="/settings" className="flex items-center text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back to Settings
        </Link>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Meals Database Management</CardTitle>
        </CardHeader>
        <CardContent>
          <MealsSettings />
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Cancel</Button>
          <Button>Save</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

