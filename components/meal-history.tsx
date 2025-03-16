"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

// Sample data for the meal history
const days = ["Sun 9th", "Mon 10th", "Tue 11th", "Wed 12th", "Thu 13th", "Fri 14th"]

const mealHistory = {
  "Sun 9th": ["Breakfast", "Lunch", "Supper"],
  "Mon 10th": ["Breakfast", "Lunch", "Supper"],
  "Tue 11th": ["Breakfast", "Lunch", "Supper"],
  "Wed 12th": ["Breakfast", "Lunch", "Supper"],
  "Thu 13th": ["Breakfast", "Lunch", "Supper"],
  "Fri 14th": ["Breakfast", "Lunch", "Supper"],
}

export function MealHistory() {
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
              {days.map((day) => (
                <TableCell key={day} className="text-center">
                  <div className="flex flex-col space-y-1">
                    {mealHistory[day as keyof typeof mealHistory].map((meal, index) => (
                      <span key={index}>{meal}</span>
                    ))}
                  </div>
                </TableCell>
              ))}
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <div className="flex justify-center">
        <Button className="bg-purple-600 hover:bg-purple-700 w-32">PAY</Button>
      </div>
    </div>
  )
}

