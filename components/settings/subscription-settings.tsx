"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Pencil } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function SubscriptionSettings() {
  const [mpesaNumber, setMpesaNumber] = useState("0113127377")
  const [editingMpesaNumber, setEditingMpesaNumber] = useState(false)

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Subscription Management</h3>

        <Card>
          <CardContent className="pt-6">
            <div className="grid gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Current Status</p>
                  <p className="text-lg font-medium">Active</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Days Remaining</p>
                  <p className="text-lg font-medium">4 days</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium">Billing Information</h3>

        <div className="grid gap-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="mpesaNumber">Mpesa Number</Label>
            <Button variant="ghost" size="sm" onClick={() => setEditingMpesaNumber(!editingMpesaNumber)}>
              <Pencil className="h-4 w-4 mr-1" />
              Edit
            </Button>
          </div>
          <Input
            id="mpesaNumber"
            value={mpesaNumber}
            onChange={(e) => setMpesaNumber(e.target.value)}
            disabled={!editingMpesaNumber}
          />
        </div>

        <Button className="w-full">Subscribe</Button>
      </div>
    </div>
  )
}

