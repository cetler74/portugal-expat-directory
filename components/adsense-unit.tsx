"use client"

import { Card } from "@/components/ui/card"
import { useEffect, useRef } from "react"

interface AdSenseUnitProps {
  type: "banner" | "rectangle" | "native"
  className?: string
}

export function AdSenseUnit({ type, className = "" }: AdSenseUnitProps) {
  const adRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (type === "banner" && typeof window !== "undefined") {
      try {
        // @ts-ignore
        (window.adsbygoogle = window.adsbygoogle || []).push({})
      } catch (e) {}
    }
  }, [type])

  if (type === "banner") {
    return (
      <div className={className} ref={adRef}>
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-5188962898989280"
          data-ad-slot="3877669206"
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
      </div>
    )
  }

  // Placeholder for other types
  const getAdDimensions = () => {
    switch (type) {
      case "rectangle":
        return "h-64 w-80 max-w-full"
      case "native":
        return "h-40"
      default:
        return "h-32"
    }
  }

  return (
    <Card
      className={`${getAdDimensions()} ${className} bg-soft-gray/20 border-dashed border-2 border-gray-300 flex items-center justify-center`}
    >
      <div className="text-center text-gray-500">
        <div className="text-sm font-medium mb-1">Advertisement</div>
        <div className="text-xs">Google AdSense {type} unit</div>
        <div className="text-xs mt-1 opacity-75">
          {type === "rectangle" && "300x250"}
          {type === "native" && "Native Ad"}
        </div>
      </div>
    </Card>
  )
}
