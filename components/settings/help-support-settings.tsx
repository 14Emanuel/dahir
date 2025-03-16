"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Phone } from "lucide-react"

export function HelpSupportSettings() {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Help & Support</h3>

        <Card>
          <CardContent className="pt-6">
            <div className="space-y-4">
              <h4 className="text-base font-medium">Contact Customer Support</h4>
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-muted-foreground" />
                <span className="text-lg">0113127377</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Our customer support team is available Monday to Friday, 8am to 6pm.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="space-y-4">
              <h4 className="text-base font-medium">Frequently Asked Questions</h4>
              <div className="space-y-2">
                <div>
                  <h5 className="font-medium">How do I add a new worker?</h5>
                  <p className="text-sm text-muted-foreground">
                    Go to the Customers tab in Settings and click "Add New Customer".
                  </p>
                </div>
                <div>
                  <h5 className="font-medium">How do I record a meal?</h5>
                  <p className="text-sm text-muted-foreground">
                    Navigate to the Meals page, select a worker, meal type, and items, then click Record.
                  </p>
                </div>
                <div>
                  <h5 className="font-medium">How do I process payments?</h5>
                  <p className="text-sm text-muted-foreground">
                    Go to the Payments page, select a worker, enter the amount, and click Pay.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

