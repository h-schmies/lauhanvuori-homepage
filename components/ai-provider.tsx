"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type AIContextType = {
  isDialogOpen: boolean
  openDialog: () => void
  closeDialog: () => void
}

const AIContext = createContext<AIContextType | undefined>(undefined)

export function AIProvider({ children }: { children: ReactNode }) {
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const openDialog = () => setIsDialogOpen(true)
  const closeDialog = () => setIsDialogOpen(false)

  return <AIContext.Provider value={{ isDialogOpen, openDialog, closeDialog }}>{children}</AIContext.Provider>
}

export function useAI() {
  const context = useContext(AIContext)
  if (context === undefined) {
    throw new Error("useAI must be used within an AIProvider")
  }
  return context
}
