"use client"

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Plus, Search, Calendar, Tag, MoreHorizontal } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import React, { useState } from 'react';

interface Note {
  id: number
  title: string
  content: string
  date: string
  tags: string[]
}

const Note = () => {
    const [notes, setNotes] = useState<Note[]>([
        {
          id: 1,
          title: "Meeting Notes",
          content: "Discussed project timeline and deliverables. Need to follow up with team about resources.",
          date: "Today",
          tags: ["Work", "Project"],
        },
        {
          id: 2,
          title: "Workout Plan",
          content: "Monday: Upper body\nWednesday: Lower body\nFriday: Full body\nWeekend: Cardio",
          date: "Yesterday",
          tags: ["Fitness", "Health"],
        },
        {
          id: 3,
          title: "Learning Resources",
          content: "Check out these resources for React:\n- React docs\n- Next.js tutorial\n- TypeScript handbook",
          date: "3 days ago",
          tags: ["Learning", "Programming"],
        },
      ])
    
      const [searchTerm, setSearchTerm] = useState("")
    
      const filteredNotes = notes.filter(
        (note) =>
          note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          note.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
          note.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase())),
      )
    return (
        <div className="container py-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Your Notes</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          New Note
        </Button>
      </div>

      <div className="relative mb-6">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search notes..."
          className="pl-8"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredNotes.map((note) => (
          <Card key={note.id}>
            <CardHeader className="pb-3">
              <div className="flex justify-between items-start">
                <CardTitle>{note.title}</CardTitle>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <MoreHorizontal className="h-4 w-4" />
                      <span className="sr-only">Menu</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>Edit</DropdownMenuItem>
                    <DropdownMenuItem>Share</DropdownMenuItem>
                    <DropdownMenuItem className="text-red-500">Delete</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Calendar className="mr-1 h-3.5 w-3.5" />
                <span>{note.date}</span>
              </div>
            </CardHeader>
            <CardContent>
              <p className="whitespace-pre-line text-sm">{note.content}</p>
            </CardContent>
            <CardFooter>
              <div className="flex flex-wrap gap-2">
                {note.tags.map((tag, i) => (
                  <div key={i} className="flex items-center text-xs bg-muted px-2 py-1 rounded-md">
                    <Tag className="mr-1 h-3 w-3" />
                    {tag}
                  </div>
                ))}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
    );
}

export default Note;
