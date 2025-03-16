"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Check, ChevronsUpDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

const workers = [
  { label: "Emmanuel Okoth", value: "emmanuel-okoth" },
  { label: "Rasha Batuli", value: "rasha-batuli" },
  { label: "Jason Rivas", value: "jason-rivas" },
  { label: "Razia Hailey", value: "razia-hailey" },
  { label: "Asmara H.", value: "asmara-h" },
  { label: "Eve Alieno", value: "eve-alieno" },
]

const paymentTypes = [
  { label: "Full Payment", value: "full-payment" },
  { label: "Partial Payment", value: "partial-payment" },
]

const formSchema = z.object({
  worker: z.string({
    required_error: "Please select a worker.",
  }),
  paymentType: z.string({
    required_error: "Please select a payment type.",
  }),
  amount: z.string().min(1, {
    message: "Please enter an amount.",
  }),
})

export function PaymentRecordingForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      amount: "440",
      paymentType: "full-payment",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    // Here you would typically send this data to your API
    alert("Payment recorded successfully!")
    form.reset({
      amount: "440",
      paymentType: "full-payment",
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid gap-6 md:grid-cols-1">
          <FormField
            control={form.control}
            name="worker"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Name</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant="outline"
                        role="combobox"
                        className={cn("justify-between", !field.value && "text-muted-foreground")}
                      >
                        {field.value ? workers.find((worker) => worker.value === field.value)?.label : "Select worker"}
                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="p-0">
                    <Command>
                      <CommandInput placeholder="Search worker..." />
                      <CommandList>
                        <CommandEmpty>No worker found.</CommandEmpty>
                        <CommandGroup>
                          {workers.map((worker) => (
                            <CommandItem
                              value={worker.label}
                              key={worker.value}
                              onSelect={() => {
                                form.setValue("worker", worker.value)
                              }}
                            >
                              <Check
                                className={cn(
                                  "mr-2 h-4 w-4",
                                  worker.value === field.value ? "opacity-100" : "opacity-0",
                                )}
                              />
                              {worker.label}
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="paymentType"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Payment Type</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant="outline"
                        role="combobox"
                        className={cn("justify-between", !field.value && "text-muted-foreground")}
                      >
                        {field.value
                          ? paymentTypes.find((type) => type.value === field.value)?.label
                          : "Select payment type"}
                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="p-0">
                    <Command>
                      <CommandInput placeholder="Search payment type..." />
                      <CommandList>
                        <CommandEmpty>No payment type found.</CommandEmpty>
                        <CommandGroup>
                          {paymentTypes.map((type) => (
                            <CommandItem
                              value={type.label}
                              key={type.value}
                              onSelect={() => {
                                form.setValue("paymentType", type.value)
                              }}
                            >
                              <Check
                                className={cn("mr-2 h-4 w-4", type.value === field.value ? "opacity-100" : "opacity-0")}
                              />
                              {type.label}
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>
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
                    <Input placeholder="0" {...field} className="pl-10" />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button type="submit" className="w-full md:w-auto bg-purple-600 hover:bg-purple-700">
          PAY
        </Button>
      </form>
    </Form>
  )
}

