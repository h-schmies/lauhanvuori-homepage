"use client"

import {useState, useEffect} from "react"
import Link from "next/link"
import Image from "next/image"
import {Menu, X, Search, ChevronDown} from "lucide-react"
import {Button} from "@/components/ui/button"
import {AIDialog} from "@/components/ai-dialog"
import {useIsMobile} from "@/hooks/use-mobile"

const navItems = [
    {name: "Home", href: "/"},
    { name: "About", href: "/about" },
    {
        name: "Activities",
        href: "/activities",
        subItems: [
            {name: "Hiking", href: "/activities/hiking"},
            {name: "Biking", href: "/activities/biking"},
            {name: "Skiing", href: "/activities/skiing"},
        ],
    },
    {
        name: "Transportation",
        href: "/transportation",
        subItems: [
            {name: "To the Park", href: "/transportation/to-the-park"},
            {name: "Around the Park", href: "/transportation/around-the-park"},
        ],
    },
    {name: "Accommodation", href: "/accommodation"},
    { name: "Sustainability", href: "/sustainability" },
]

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const [isAIDialogOpen, setIsAIDialogOpen] = useState(false)
    const isMobile = useIsMobile()

    // Handle keyboard shortcut (Cmd/Ctrl + F) to open AI dialog
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if ((e.metaKey || e.ctrlKey) && e.key === "f") {
                e.preventDefault()
                setIsAIDialogOpen(true)
            }
        }

        window.addEventListener("keydown", handleKeyDown)
        return () => window.removeEventListener("keydown", handleKeyDown)
    }, [])

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-white">
            <div className="container mx-auto px-4">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center space-x-2">
                            <div className="relative h-10 w-10">
                                <Image
                                    src="/images/logo.png"
                                    alt="Lauhanvuori GeoPark Logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <span className="hidden font-bold text-green-700 md:inline-block">Lauhanvuori GeoPark</span>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-6">
                        {navItems.map((item) =>
                            item.subItems ? (
                                <div key={item.name} className="relative group">
                                    <div className="flex items-center gap-1">
                                        <Link
                                            href={item.href}
                                            className="text-base font-medium text-gray-700 hover:text-green-700 transition-colors"
                                        >
                                            {item.name}
                                        </Link>
                                        <ChevronDown
                                            className="h-4 w-4 text-gray-500 group-hover:text-green-700 transition-colors"/>
                                    </div>
                                    <div
                                        className="absolute left-0 top-full w-48 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                        <div className="bg-white rounded-md shadow-lg border p-2">
                                            {item.subItems.map((subItem) => (
                                                <Link
                                                    key={subItem.name}
                                                    href={subItem.href}
                                                    className="block px-3 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700 rounded-md"
                                                >
                                                    {subItem.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="text-base font-medium text-gray-700 hover:text-green-700 transition-colors"
                                >
                                    {item.name}
                                </Link>
                            ),
                        )}
                    </nav>

                    <div className="flex items-center space-x-2">
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setIsAIDialogOpen(true)}
                            className="text-green-700 hover:bg-green-50 hover:text-green-800"
                            aria-label="Ask AI"
                        >
                            <Search className="h-5 w-5"/>
                        </Button>

                        {/* Mobile menu button */}
                        <Button
                            variant="ghost"
                            size="icon"
                            className="md:hidden"
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label={isOpen ? "Close menu" : "Open menu"}
                        >
                            {isOpen ? <X className="h-6 w-6"/> : <Menu className="h-6 w-6"/>}
                        </Button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="md:hidden border-t">
                    <div className="container mx-auto px-4 py-3 space-y-1">
                        {navItems.map((item) => (
                            <div key={item.name}>
                                {item.subItems ? (
                                    <>
                                        <Link
                                            href={item.href}
                                            className="block py-2 font-medium hover:text-green-700"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {item.name}
                                        </Link>
                                        <div className="pl-4 space-y-1 mb-2">
                                            {item.subItems.map((subItem) => (
                                                <Link
                                                    key={subItem.name}
                                                    href={subItem.href}
                                                    className="block py-2 text-gray-600 hover:text-green-700"
                                                    onClick={() => setIsOpen(false)}
                                                >
                                                    {subItem.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </>
                                ) : (
                                    <Link
                                        href={item.href}
                                        className="block py-2 font-medium hover:text-green-700"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            )}

            <AIDialog open={isAIDialogOpen} onOpenChange={setIsAIDialogOpen}/>
        </header>
    )
}
