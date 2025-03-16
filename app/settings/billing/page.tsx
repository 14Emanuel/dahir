import type { Metadata } from "next"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Pencil } from "lucide-react"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export const metadata: Metadata = {
  title: "Dahir - Billing",
  description: "Manage your subscription and billing information",
}

export default function BillingPage() {
  return (
    <div className="container mx-auto py-6 max-w-md">
      <div className="mb-4">
        <Link href="/settings" className="flex items-center text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back to Settings
        </Link>
      </div>
      <Card className="border">
        <CardHeader className="border-b bg-muted/50 px-4 py-3">
          <CardTitle className="text-lg font-medium">Subscription Management</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="p-4 border-b">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Current Status</p>
                <p className="font-medium">Active</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Days Remaining</p>
                <p className="font-medium">4 days</p>
              </div>
            </div>
          </div>

          <div className="p-4 border-b">
            <h3 className="text-sm font-medium text-muted-foreground mb-3">Billing Information</h3>
            <div className="flex items-center justify-between mb-2">
              <Label htmlFor="mpesaNumber" className="text-sm">
                Mpesa Number
              </Label>
              <Button variant="ghost" size="sm" className="h-6 px-2">
                <Pencil className="h-3 w-3 mr-1" />
                edit
              </Button>
            </div>
            <Input id="mpesaNumber" defaultValue="0113127377" className="mb-4" />
          </div>
        </CardContent>
        <CardFooter className="flex justify-center p-4 border-t">
          <Button className="w-full">Subscribe</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

