"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Check, ChevronsUpDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"

const mealTypes = [
  { label: "Breakfast", value: "breakfast" },
  { label: "Lunch", value: "lunch" },
  { label: "Supper", value: "supper" },
]

const workers = [
  { label: "Emmanuel Okoth", value: "emmanuel-okoth" },
  { label: "Rasha Batuli", value: "rasha-batuli" },
  { label: "Jason Rivas", value: "jason-rivas" },
  { label: "Razia Hailey", value: "razia-hailey" },
  { label: "Asmara H.", value: "asmara-h" },
  { label: "Eve Alieno", value: "eve-alieno" },
]

const mealItems = [
  { label: "Chapati", value: "chapati" },
  { label: "Chai", value: "chai" },
  { label: "Beans", value: "beans" },
  { label: "Rice", value: "rice" },
  { label: "Ugali", value: "ugali" },
  { label: "Sukuma", value: "sukuma" },
]

const formSchema = z.object({
  mealType: z.string({
    required_error: "Please select a meal type.",
  }),
  worker: z.string({
    required_error: "Please select a worker.",
  }),
  mealItems: z.array(z.string()).min(1, {
    message: "Please select at least one meal item.",
  }),
})

export function MealRecordingForm() {
  const [selectedMealItems, setSelectedMealItems] = useState<string[]>([])

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      mealItems: [],
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    // Here you would typically send this data to your API
    alert("Meal recorded successfully!")
    form.reset()
    setSelectedMealItems([])
  }

  const toggleMealItem = (item: string) => {
    setSelectedMealItems((prev) => (prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]))

    const currentItems = form.getValues().mealItems || []
    const newItems = currentItems.includes(item) ? currentItems.filter((i) => i !== item) : [...currentItems, item]

    form.setValue("mealItems", newItems)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid gap-6 md:grid-cols-2">
          <FormField
            control={form.control}
            name="mealType"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Meal Type</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant="outline"
                        role="combobox"
                        className={cn("justify-between", !field.value && "text-muted-foreground")}
                      >
                        {field.value
                          ? mealTypes.find((mealType) => mealType.value === field.value)?.label
                          : "Select meal type"}
                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="p-0">
                    <Command>
                      <CommandInput placeholder="Search meal type..." />
                      <CommandList>
                        <CommandEmpty>No meal type found.</CommandEmpty>
                        <CommandGroup>
                          {mealTypes.map((mealType) => (
                            <CommandItem
                              value={mealType.label}
                              key={mealType.value}
                              onSelect={() => {
                                form.setValue("mealType", mealType.value)
                              }}
                            >
                              <Check
                                className={cn(
                                  "mr-2 h-4 w-4",
                                  mealType.value === field.value ? "opacity-100" : "opacity-0",
                                )}
                              />
                              {mealType.label}
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
        </div>

        <FormField
          control={form.control}
          name="mealItems"
          render={() => (
            <FormItem>
              <FormLabel>Meal Order</FormLabel>
              <FormDescription>Select the meal items for this order.</FormDescription>
              <div className="grid grid-cols-2 gap-2 md:grid-cols-3">
                {mealItems.map((item) => (
                  <Button
                    type="button"
                    key={item.value}
                    variant={selectedMealItems.includes(item.value) ? "default" : "outline"}
                    className="justify-start"
                    onClick={() => toggleMealItem(item.value)}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        selectedMealItems.includes(item.value) ? "opacity-100" : "opacity-0",
                      )}
                    />
                    {item.label}
                  </Button>
                ))}
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full md:w-auto">
          Record
        </Button>
      </form>
    </Form>
  )
}

