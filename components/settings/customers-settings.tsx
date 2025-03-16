"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Pencil, Plus, X, Check } from "lucide-react"

type Customer = {
  id: string
  name: string
  phone: string
  active: boolean
}

export function CustomersSettings() {
  const [customers, setCustomers] = useState<Customer[]>([
    { id: "1", name: "Manu Okoth", phone: "0113127377", active: false },
    { id: "2", name: "Razia Hailey", phone: "0799123277", active: true },
    { id: "3", name: "Fatma Omar", phone: "0721735760", active: true },
  ])

  const [showAddForm, setShowAddForm] = useState(false)
  const [newCustomerName, setNewCustomerName] = useState("")
  const [newCustomerPhone, setNewCustomerPhone] = useState("")

  const handleAddCustomer = () => {
    if (newCustomerName && newCustomerPhone) {
      const newCustomer: Customer = {
        id: Date.now().toString(),
        name: newCustomerName,
        phone: newCustomerPhone,
        active: true,
      }
      setCustomers([...customers, newCustomer])
      setNewCustomerName("")
      setNewCustomerPhone("")
      setShowAddForm(false)
    }
  }

  const toggleActive = (id: string) => {
    setCustomers(
      customers.map((customer) => (customer.id === id ? { ...customer, active: !customer.active } : customer)),
    )
  }

  const deleteCustomer = (id: string) => {
    setCustomers(customers.filter((customer) => customer.id !== id))
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium">Customers Management</h3>
        <Button onClick={() => setShowAddForm(!showAddForm)}>
          <Plus className="h-4 w-4 mr-2" />
          Add New Customer
        </Button>
      </div>

      {showAddForm && (
        <div className="grid grid-cols-3 gap-4 p-4 border rounded-md">
          <div>
            <Input
              placeholder="Customer Name"
              value={newCustomerName}
              onChange={(e) => setNewCustomerName(e.target.value)}
            />
          </div>
          <div>
            <Input
              placeholder="Phone Number"
              value={newCustomerPhone}
              onChange={(e) => setNewCustomerPhone(e.target.value)}
            />
          </div>
          <div className="flex space-x-2">
            <Button onClick={handleAddCustomer}>
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
              <TableHead>Customer Name</TableHead>
              <TableHead>Phone Number</TableHead>
              <TableHead>Active</TableHead>
              <TableHead>Edit</TableHead>
              <TableHead>Delete</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {customers.map((customer) => (
              <TableRow key={customer.id}>
                <TableCell>{customer.name}</TableCell>
                <TableCell>{customer.phone}</TableCell>
                <TableCell>
                  <Checkbox checked={customer.active} onCheckedChange={() => toggleActive(customer.id)} />
                </TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm">
                    <Pencil className="h-4 w-4 mr-1" />
                    edit!
                  </Button>
                </TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm" onClick={() => deleteCustomer(customer.id)}>
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

