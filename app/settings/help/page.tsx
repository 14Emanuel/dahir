import type { Metadata } from "next"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { HelpSupportSettings } from "@/components/settings/help-support-settings"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Dahir - Help & Support",
}

export default function HelpPage() {
  return (
    <div className="container mx-auto py-6 max-w-md">
      <div className="mb-4">
        <Link href="/settings" className="flex items-center text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back to Settings
        </Link>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Help & Support</CardTitle>
        </CardHeader>
        <CardContent>
          <HelpSupportSettings />
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Cancel</Button>
          <Button>Save</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

