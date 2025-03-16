import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Dahir - Settings",
  description: "Manage your account settings",
}

export default function SettingsPage() {
  return (
    <div className="container mx-auto py-6 max-w-md">
      <Card className="border">
        <CardHeader className="border-b bg-muted/50 px-4 py-3">
          <CardTitle className="text-lg font-medium">Settings</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="divide-y">
            <Link href="/settings/profile" className="block px-4 py-3 hover:bg-muted/50 transition-colors">
              User Profile
            </Link>
            <Link href="/settings/meals" className="block px-4 py-3 hover:bg-muted/50 transition-colors">
              Meals
            </Link>
            <Link href="/settings/customers" className="block px-4 py-3 hover:bg-muted/50 transition-colors">
              Customers
            </Link>
            <Link href="/settings/billing" className="block px-4 py-3 hover:bg-muted/50 transition-colors">
              Billing
            </Link>
            <Link href="/settings/security" className="block px-4 py-3 hover:bg-muted/50 transition-colors">
              Security & Privacy
            </Link>
            <Link href="/settings/help" className="block px-4 py-3 hover:bg-muted/50 transition-colors">
              Help & Support
            </Link>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between border-t p-4">
          <Button variant="outline">Cancel</Button>
          <Button>Save</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

