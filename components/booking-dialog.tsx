"use client"

import { useState } from "react"
import { format } from "date-fns"
import { CalendarIcon, Clock, Users, CreditCard } from "lucide-react"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"
import { useToast } from "@/hooks/use-toast"

interface BookingDialogProps {
    open: boolean
    onOpenChange: (open: boolean) => void
    vehicle: any
    station: any
    type: "e-bike" | "quad"
}

export default function BookingDialog({ open, onOpenChange, vehicle, station, type }: BookingDialogProps) {
    const [step, setStep] = useState(1)
    const [date, setDate] = useState<Date>()
    const [duration, setDuration] = useState<string>("")
    const [quantity, setQuantity] = useState<string>("1")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [isSubmitting, setIsSubmitting] = useState(false)
    const { toast } = useToast()

    const resetForm = () => {
        setStep(1)
        setDate(undefined)
        setDuration("")
        setQuantity("1")
        setName("")
        setEmail("")
        setPhone("")
    }

    const handleClose = () => {
        resetForm()
        onOpenChange(false)
    }

    const handleNext = () => {
        if (step < 3) {
            setStep(step + 1)
        }
    }

    const handleBack = () => {
        if (step > 1) {
            setStep(step - 1)
        }
    }

    const calculateTotal = () => {
        if (!vehicle || !duration || !quantity) return 0

        let basePrice = 0
        switch (duration) {
            case "hourly":
                basePrice = vehicle.priceHourly
                break
            case "half-day":
                basePrice = vehicle.priceHalfDay
                break
            case "full-day":
                basePrice = vehicle.priceFullDay
                break
        }

        return basePrice * Number.parseInt(quantity)
    }

    const handleSubmit = async () => {
        setIsSubmitting(true)

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500))

        toast({
            title: "Booking Confirmed!",
            description: `Your ${type === "e-bike" ? "e-bike" : "electric quad"} booking has been confirmed. A confirmation email has been sent to ${email}.`,
        })

        setIsSubmitting(false)
        handleClose()
    }

    const isDateValid = !!date
    const isDurationValid = !!duration
    const isQuantityValid = !!quantity && Number.parseInt(quantity) > 0
    const isStep1Valid = isDateValid && isDurationValid && isQuantityValid

    const isNameValid = name.trim().length > 0
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    const isPhoneValid = phone.trim().length >= 6
    const isStep2Valid = isNameValid && isEmailValid && isPhoneValid

    const vehicleTitle = type === "e-bike" ? "E-Bike" : vehicle?.name || "Vehicle"
    const locationName = station?.name || "Lauhanvuori Visitor Center"

    return (
        <Dialog open={open} onOpenChange={handleClose}>
            <DialogContent className="sm:max-w-[800px] max-h-[70vh]">
                <DialogHeader>
                    <DialogTitle>Book {vehicleTitle}</DialogTitle>
                    <DialogDescription>
                        {type === "e-bike" ? `Book your e-bike rental from ${locationName}` : `Book your electric quad rental`}
                    </DialogDescription>
                </DialogHeader>

                {step === 1 && (
                    <div className="space-y-4 py-4">
                        <div className="space-y-2">
                            <Label htmlFor="date">Select Date</Label>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Button
                                        variant="outline"
                                        className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}
                                    >
                                        <CalendarIcon className="mr-2 h-4 w-4" />
                                        {date ? format(date, "PPP") : "Select a date"}
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto overflow-auto">
                                    <Calendar
                                        mode="single"
                                        selected={date}
                                        onSelect={setDate}
                                        autoFocus={true}
                                        disabled={(date) => date < new Date()}
                                    />
                                </PopoverContent>
                            </Popover>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="duration">Duration</Label>
                            <Select value={duration} onValueChange={setDuration}>
                                <SelectTrigger id="duration" className="w-full">
                                    <SelectValue placeholder="Select duration">
                                        <div className="flex items-center">
                                            <Clock className="mr-2 h-4 w-4" />
                                            {duration === "hourly" && "Hourly (1-3 hours)"}
                                            {duration === "half-day" && "Half-day (4 hours)"}
                                            {duration === "full-day" && "Full-day (8 hours)"}
                                            {!duration && "Select duration"}
                                        </div>
                                    </SelectValue>
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="hourly">Hourly (1-3 hours)</SelectItem>
                                    <SelectItem value="half-day">Half-day (4 hours)</SelectItem>
                                    <SelectItem value="full-day">Full-day (8 hours)</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="quantity">Quantity</Label>
                            <Select value={quantity} onValueChange={setQuantity}>
                                <SelectTrigger id="quantity" className="w-full">
                                    <SelectValue placeholder="Select quantity">
                                        <div className="flex items-center">
                                            <Users className="mr-2 h-4 w-4" />
                                            {quantity} {Number.parseInt(quantity) === 1 ? "vehicle" : "vehicles"}
                                        </div>
                                    </SelectValue>
                                </SelectTrigger>
                                <SelectContent>
                                    {[1, 2, 3, 4, 5].map((num) => (
                                        <SelectItem key={num} value={num.toString()}>
                                            {num} {num === 1 ? "vehicle" : "vehicles"}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>

                        {duration && (
                            <div className="mt-4 p-4 bg-green-50 rounded-md border border-green-200">
                                <div className="flex justify-between font-medium">
                                    <span>Price per {type === "e-bike" ? "e-bike" : "vehicle"}:</span>
                                    <span>
                    €
                                        {duration === "hourly"
                                            ? vehicle?.priceHourly
                                            : duration === "half-day"
                                                ? vehicle?.priceHalfDay
                                                : vehicle?.priceFullDay}
                  </span>
                                </div>
                                <div className="flex justify-between font-medium mt-2">
                                    <span>Total:</span>
                                    <span>€{calculateTotal()}</span>
                                </div>
                            </div>
                        )}
                    </div>
                )}

                {step === 2 && (
                    <div className="space-y-4 py-4">
                        <div className="space-y-2">
                            <Label htmlFor="name">Full Name</Label>
                            <Input
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Enter your full name"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email address"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="phone">Phone Number</Label>
                            <Input
                                id="phone"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                placeholder="Enter your phone number"
                            />
                        </div>

                        <div className="mt-4 p-4 bg-gray-50 rounded-md border">
                            <h4 className="font-medium mb-2">Booking Summary</h4>
                            <ul className="space-y-1 text-sm">
                                <li className="flex justify-between">
                                    <span>Vehicle:</span>
                                    <span>{vehicleTitle}</span>
                                </li>
                                <li className="flex justify-between">
                                    <span>Location:</span>
                                    <span>{locationName}</span>
                                </li>
                                <li className="flex justify-between">
                                    <span>Date:</span>
                                    <span>{date ? format(date, "PPP") : "Not selected"}</span>
                                </li>
                                <li className="flex justify-between">
                                    <span>Duration:</span>
                                    <span>
                    {duration === "hourly" && "Hourly (1-3 hours)"}
                                        {duration === "half-day" && "Half-day (4 hours)"}
                                        {duration === "full-day" && "Full-day (8 hours)"}
                  </span>
                                </li>
                                <li className="flex justify-between">
                                    <span>Quantity:</span>
                                    <span>{quantity}</span>
                                </li>
                                <li className="flex justify-between font-medium pt-2 border-t mt-2">
                                    <span>Total:</span>
                                    <span>€{calculateTotal()}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                )}

                {step === 3 && (
                    <div className="space-y-4 py-4">
                        <div className="p-4 bg-gray-50 rounded-md border">
                            <h4 className="font-medium mb-2">Payment Information</h4>
                            <div className="space-y-3">
                                <div className="space-y-2">
                                    <Label htmlFor="card-number">Card Number</Label>
                                    <Input id="card-number" placeholder="1234 5678 9012 3456" />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="expiry">Expiry Date</Label>
                                        <Input id="expiry" placeholder="MM/YY" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="cvc">CVC</Label>
                                        <Input id="cvc" placeholder="123" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="p-4 bg-green-50 rounded-md border border-green-200">
                            <h4 className="font-medium mb-2 text-green-800">Final Booking Summary</h4>
                            <ul className="space-y-1 text-sm">
                                <li className="flex justify-between">
                                    <span>Vehicle:</span>
                                    <span>{vehicleTitle}</span>
                                </li>
                                <li className="flex justify-between">
                                    <span>Location:</span>
                                    <span>{locationName}</span>
                                </li>
                                <li className="flex justify-between">
                                    <span>Date:</span>
                                    <span>{date ? format(date, "PPP") : "Not selected"}</span>
                                </li>
                                <li className="flex justify-between">
                                    <span>Duration:</span>
                                    <span>
                    {duration === "hourly" && "Hourly (1-3 hours)"}
                                        {duration === "half-day" && "Half-day (4 hours)"}
                                        {duration === "full-day" && "Full-day (8 hours)"}
                  </span>
                                </li>
                                <li className="flex justify-between">
                                    <span>Quantity:</span>
                                    <span>{quantity}</span>
                                </li>
                                <li className="flex justify-between">
                                    <span>Name:</span>
                                    <span>{name}</span>
                                </li>
                                <li className="flex justify-between">
                                    <span>Contact:</span>
                                    <span>{email}</span>
                                </li>
                                <li className="flex justify-between font-medium pt-2 border-t mt-2 text-green-800">
                                    <span>Total to Pay:</span>
                                    <span>€{calculateTotal()}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                )}

                <DialogFooter className="flex flex-col-reverse sm:flex-row sm:justify-between sm:space-x-2">
                    {step > 1 && (
                        <Button variant="outline" onClick={handleBack} disabled={isSubmitting}>
                            Back
                        </Button>
                    )}

                    <div className="flex flex-col-reverse sm:flex-row gap-2">
                        <Button variant="outline" onClick={handleClose} disabled={isSubmitting}>
                            Cancel
                        </Button>

                        {step < 3 ? (
                            <Button
                                onClick={handleNext}
                                disabled={(step === 1 && !isStep1Valid) || (step === 2 && !isStep2Valid) || isSubmitting}
                                className="bg-green-600 hover:bg-green-700"
                            >
                                Next
                            </Button>
                        ) : (
                            <Button onClick={handleSubmit} disabled={isSubmitting} className="bg-green-600 hover:bg-green-700">
                                {isSubmitting ? (
                                    <span className="flex items-center gap-2">
                    Processing <span className="animate-spin">...</span>
                  </span>
                                ) : (
                                    <span className="flex items-center gap-2">
                    <CreditCard className="h-4 w-4" /> Confirm & Pay
                  </span>
                                )}
                            </Button>
                        )}
                    </div>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
