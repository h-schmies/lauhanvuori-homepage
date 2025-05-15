"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { X, Send, Loader2 } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Textarea } from "@/components/ui/textarea"

type Message = {
  role: "user" | "assistant"
  content: string
}

type AIDialogProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function AIDialog({ open, onOpenChange }: AIDialogProps) {
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hello! I'm your Lauhanvuori GeoPark assistant. How can I help you today? You can ask me about activities, locations, or services in the park.",
    },
  ])
  const [isLoading, setIsLoading] = useState(false)
  const inputRef = useRef<HTMLTextAreaElement>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Focus input when dialog opens
  useEffect(() => {
    if (open && inputRef.current) {
      setTimeout(() => {
        inputRef.current?.focus()
      }, 100)
    }
  }, [open])

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!input.trim() || isLoading) return

    // Add user message
    const userMessage = { role: "user" as const, content: input }
    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    // Simulate AI response (in a real app, this would call an API)
    setTimeout(() => {
      // Mock responses based on keywords
      let response =
        "I'm not sure about that. Could you ask something about the park's activities, locations, or services?"

      const userInput = input.toLowerCase()

      if (userInput.includes("hiking") || userInput.includes("trail")) {
        response =
          "Lauhanvuori GeoPark offers several hiking trails for all skill levels. The most popular ones include the Lauhanvuori Summit Trail (5.2 km), Kauhaneva Bog Trail (7.8 km), and Katikankanjoni Ravine Trail (4.5 km). Would you like more details about any specific trail?"
      } else if (userInput.includes("biking") || userInput.includes("cycling")) {
        response =
          "The GeoPark has excellent biking routes, including the GeoPark Circle Route (45 km), Forest Trail Network (various lengths), and Haapakeidas Mire Route (18 km). You can also rent e-bikes at several locations throughout the park."
      } else if (userInput.includes("skiing") || userInput.includes("winter")) {
        response =
          "During winter months (typically December to March), the park maintains several cross-country skiing tracks. The Lauhanvuori Winter Trail (12 km), Muurahainen Forest Loop (5 km), and Katikankanjoni Winter Route (8 km) offer beautiful winter experiences."
      } else if (userInput.includes("accommodation") || userInput.includes("stay") || userInput.includes("hotel")) {
        response =
          "There are several accommodation options in and around the GeoPark, including Hotel Hirvikoski, Lakeside Cabins, GeoPark Guesthouse, and Wilderness Glamping. Each offers different amenities and experiences, from traditional Finnish cabins to modern hotel rooms."
      } else if (userInput.includes("restaurant") || userInput.includes("food") || userInput.includes("eat")) {
        response =
          "You can find several dining options in the GeoPark area, including Mire View Restaurant (Finnish cuisine), Forest Café (light meals and pastries), and Lauha Bistro (modern Finnish). Many serve local specialties using ingredients from the region."
      } else if (
        userInput.includes("transportation") ||
        userInput.includes("getting around") ||
        userInput.includes("e-bike")
      ) {
        response =
          "The GeoPark offers an innovative e-bike rental system with stations at key locations, allowing you to pick up and drop off bikes at different points. There are also public buses, taxi services, and parking areas for private cars."
      } else if (userInput.includes("geology") || userInput.includes("rocks") || userInput.includes("formation")) {
        response =
          "Lauhanvuori GeoPark features unique geological formations dating back 1.9 billion years. The area includes Finland's highest point in western Finland (231m), extensive raised bog complexes, and distinctive landforms shaped by the last Ice Age."
      }

      setMessages((prev) => [...prev, { role: "assistant", content: response }])
      setIsLoading(false)
    }, 1500)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] h-[600px] flex flex-col p-0">
        <DialogHeader className="px-4 py-2 border-b">
          <div className="flex items-center justify-between">
            <DialogTitle>Ask AI about Lauhanvuori GeoPark</DialogTitle>
            <Button variant="ghost" size="icon" onClick={() => onOpenChange(false)} className="h-8 w-8">
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </Button>
          </div>
        </DialogHeader>

        <ScrollArea className="flex-1 p-4">
          <div className="space-y-4">
            {messages.map((message, index) => (
              <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[80%] rounded-lg px-4 py-2 ${
                    message.role === "user" ? "bg-green-600 text-white" : "bg-gray-100 text-gray-900"
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="max-w-[80%] rounded-lg px-4 py-2 bg-gray-100 text-gray-900">
                  <Loader2 className="h-4 w-4 animate-spin" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </ScrollArea>

        <form onSubmit={handleSubmit} className="border-t p-4 flex gap-2 items-end">
          <Textarea
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about activities, locations, or services..."
            className="min-h-[60px] flex-1 resize-none"
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault()
                handleSubmit(e)
              }
            }}
          />
          <Button
            type="submit"
            size="icon"
            disabled={isLoading || !input.trim()}
            className="h-10 w-10 bg-green-600 hover:bg-green-700"
          >
            {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
            <span className="sr-only">Send</span>
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
