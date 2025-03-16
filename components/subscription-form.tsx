"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const formSchema = z.object({
  billingNumber: z.string().min(10, {
    message: "Phone number must be at least 10 digits.",
  }),
  amount: z.string().min(1, {
    message: "Please enter an amount.",
  }),
})

export function SubscriptionForm() {
  const [isNewUser, setIsNewUser] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      billingNumber: "0113127377",
      amount: "100",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    // Here you would typically call an API to process the subscription
    alert("Subscription processed successfully!")
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid gap-4">
          <FormField
            control={form.control}
            name="billingNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Billing No.</FormLabel>
                <FormControl>
                  <Input placeholder="Enter Mpesa number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="amount"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Amount</FormLabel>
                <FormControl>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-muted-foreground">Ksh</span>
                    <Input placeholder="100" {...field} className="pl-10" />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700">
          Subscribe
        </Button>

        {!isNewUser && (
          <div className="text-center mt-4">
            <Button variant="link" onClick={() => setIsNewUser(true)}>
              New user? Click here
            </Button>
          </div>
        )}

        {isNewUser && (
          <div className="border-t pt-4 mt-4">
            <h3 className="text-lg font-medium mb-4">New User Registration</h3>
            <div className="grid gap-4">
              <div>
                <Label htmlFor="newMpesaNumber">Mpesa Number</Label>
                <Input id="newMpesaNumber" placeholder="Enter Mpesa number" />
              </div>
              <div>
                <Label htmlFor="newAmount">Amount</Label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-muted-foreground">Ksh</span>
                  <Input id="newAmount" placeholder="100" defaultValue="100" className="pl-10" />
                </div>
              </div>
              <Button className="w-full bg-purple-600 hover:bg-purple-700">Subscribe</Button>
            </div>
          </div>
        )}
      </form>
    </Form>
  )
}

