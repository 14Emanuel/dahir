"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Pencil, Plus, Check, X } from "lucide-react"

type Meal = {
  id: string
  name: string
  price: number
  available: boolean
}

export function MealsSettings() {
  const [meals, setMeals] = useState<Meal[]>([
    { id: "1", name: "Chapati", price: 20, available: true },
    { id: "2", name: "Ugali Omena", price: 70, available: true },
    { id: "3", name: "Rice Beans", price: 70, available: false },
  ])

  const [showAddForm, setShowAddForm] = useState(false)
  const [newMealName, setNewMealName] = useState("")
  const [newMealPrice, setNewMealPrice] = useState("")

  const handleAddMeal = () => {
    if (newMealName && newMealPrice) {
      const newMeal: Meal = {
        id: Date.now().toString(),
        name: newMealName,
        price: Number.parseInt(newMealPrice),
        available: true,
      }
      setMeals([...meals, newMeal])
      setNewMealName("")
      setNewMealPrice("")
      setShowAddForm(false)
    }
  }

  const toggleAvailability = (id: string) => {
    setMeals(meals.map((meal) => (meal.id === id ? { ...meal, available: !meal.available } : meal)))
  }

  const deleteMeal = (id: string) => {
    setMeals(meals.filter((meal) => meal.id !== id))
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium">All Meals</h3>
        <Button onClick={() => setShowAddForm(!showAddForm)}>
          <Plus className="h-4 w-4 mr-2" />
          Add Meal
        </Button>
      </div>

      {showAddForm && (
        <div className="grid grid-cols-3 gap-4 p-4 border rounded-md">
          <div>
            <Input placeholder="Meal Name" value={newMealName} onChange={(e) => setNewMealName(e.target.value)} />
          </div>
          <div>
            <Input
              placeholder="Price (Ksh)"
              type="number"
              value={newMealPrice}
              onChange={(e) => setNewMealPrice(e.target.value)}
            />
          </div>
          <div className="flex space-x-2">
            <Button onClick={handleAddMeal}>
              <Check className="h-4 w-4 mr-2" />
              Save
            </Button>
            <Button variant="outline" onClick={() => setShowAddForm(false)}>
              <X className="h-4 w-4 mr-2" />
              Cancel
            </Button>
          </div>
        </div>
      )}

      <div className="border rounded-md">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Meal Name</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Availability</TableHead>
              <TableHead>Edit</TableHead>
              <TableHead>Delete</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {meals.map((meal) => (
              <TableRow key={meal.id}>
                <TableCell>{meal.name}</TableCell>
                <TableCell>Ksh {meal.price}</TableCell>
                <TableCell>
                  <Checkbox checked={meal.available} onCheckedChange={() => toggleAvailability(meal.id)} />
                </TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm">
                    <Pencil className="h-4 w-4 mr-1" />
                    edit!
                  </Button>
                </TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm" onClick={() => deleteMeal(meal.id)}>
                    <X className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

