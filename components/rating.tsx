"use client"

import { useState } from "react"
import { Star } from "lucide-react"
import { cn } from "@/lib/utils"
import { useToast } from "@/hooks/use-toast"

interface RatingProps {
  initialRating?: number
  totalRatings?: number
  onRatingSubmit?: (rating: number) => void
  readOnly?: boolean
  size?: "sm" | "md" | "lg"
  className?: string
}

export default function Rating({
  initialRating = 0,
  totalRatings = 0,
  onRatingSubmit,
  readOnly = false,
  size = "md",
  className,
}: RatingProps) {
  const [rating, setRating] = useState<number>(initialRating)
  const [hoverRating, setHoverRating] = useState<number>(0)
  const [userRated, setUserRated] = useState<boolean>(false)
  const { toast } = useToast()

  const handleRatingClick = (selectedRating: number) => {
    if (readOnly) return

    setRating(selectedRating)
    setUserRated(true)

    if (onRatingSubmit) {
      onRatingSubmit(selectedRating)
    }

    toast({
      title: "Rating submitted",
      description: `You rated this ${selectedRating} out of 5 stars.`,
      duration: 3000,
    })
  }

  const starSizes = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
  }

  const containerSizes = {
    sm: "gap-1",
    md: "gap-1.5",
    lg: "gap-2",
  }

  return (
    <div className={cn("flex flex-col", className)}>
      <div className={cn("flex items-center", containerSizes[size])}>
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            onClick={() => handleRatingClick(star)}
            onMouseEnter={() => !readOnly && setHoverRating(star)}
            onMouseLeave={() => !readOnly && setHoverRating(0)}
            className={cn(
              "rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2",
              readOnly ? "cursor-default" : "cursor-pointer transition-transform hover:scale-110",
            )}
            disabled={readOnly}
            aria-label={`Rate ${star} out of 5 stars`}
          >
            <Star
              className={cn(
                starSizes[size],
                "transition-colors",
                (hoverRating ? star <= hoverRating : star <= rating)
                  ? "fill-yellow-400 text-yellow-400"
                  : "fill-transparent text-gray-300",
              )}
            />
          </button>
        ))}

        <span className="ml-2 text-sm text-gray-600">
          {rating > 0 ? `${rating.toFixed(1)}` : "Not rated"}
          {totalRatings > 0 && ` (${totalRatings})`}
        </span>
      </div>

      {userRated && !readOnly && (
        <div className="mt-2 text-sm text-green-600 animate-fade-in">Thank you for your rating!</div>
      )}
    </div>
  )
}
