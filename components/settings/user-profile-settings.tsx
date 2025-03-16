"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Pencil } from "lucide-react"

export function UserProfileSettings() {
  const [firstName, setFirstName] = useState("Emmanuel")
  const [lastName, setLastName] = useState("Okoth")
  const [phone, setPhone] = useState("0113127377")

  const [editingFirstName, setEditingFirstName] = useState(false)
  const [editingLastName, setEditingLastName] = useState(false)
  const [editingPhone, setEditingPhone] = useState(false)

  return (
    <div className="space-y-4">
      <div className="grid gap-2">
        <div className="flex items-center justify-between">
          <Label htmlFor="firstName">First Name</Label>
          <Button variant="ghost" size="sm" onClick={() => setEditingFirstName(!editingFirstName)}>
            <Pencil className="h-4 w-4 mr-1" />
            Edit
          </Button>
        </div>
        <Input
          id="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          disabled={!editingFirstName}
        />
      </div>

      <div className="grid gap-2">
        <div className="flex items-center justify-between">
          <Label htmlFor="lastName">Last Name</Label>
          <Button variant="ghost" size="sm" onClick={() => setEditingLastName(!editingLastName)}>
            <Pencil className="h-4 w-4 mr-1" />
            Edit
          </Button>
        </div>
        <Input
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          disabled={!editingLastName}
        />
      </div>

      <div className="grid gap-2">
        <div className="flex items-center justify-between">
          <Label htmlFor="phone">Phone</Label>
          <Button variant="ghost" size="sm" onClick={() => setEditingPhone(!editingPhone)}>
            <Pencil className="h-4 w-4 mr-1" />
            Edit
          </Button>
        </div>
        <Input id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} disabled={!editingPhone} />
      </div>
    </div>
  )
}

