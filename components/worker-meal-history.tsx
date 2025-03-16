"use client"

import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

// Sample data for the meal history with prices
const days = ["Sun 9th", "Mon 10th", "Tue 11th", "Wed 12th", "Thu 13th", "Fri 14th"]

const mealHistory = [
  { day: "Sun 9th", cost: 120 },
  { day: "Mon 10th", cost: 140 },
  { day: "Tue 11th", cost: 150 },
  { day: "Wed 12th", cost: 120 },
  { day: "Thu 13th", cost: 130 },
  { day: "Fri 14th", cost: 110 },
]

export function WorkerMealHistory() {
  // Calculate total cost
  const totalCost = mealHistory.reduce((sum, day) => sum + day.cost, 0)

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Input placeholder="Search worker..." className="max-w-sm" />
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              {days.map((day) => (
                <TableHead key={day} className="text-center">
                  {day}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              {mealHistory.map((day) => (
                <TableCell key={day.day} className="text-center font-medium">
                  {day.cost}
                </TableCell>
              ))}
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <div className="flex justify-end">
        <div className="text-lg font-bold">Total: Ksh {totalCost}</div>
      </div>
    </div>
  )
}

