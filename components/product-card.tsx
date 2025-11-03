"use client"

import Image from "next/image"
import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Zap, Lock } from "lucide-react"

interface ProductCardProps {
  item: {
    id: string
    name: string
    image: string
    timestamp: string
    description: string
    details?: string
  }
  index: number
}

export function ProductCard({ item, index }: ProductCardProps) {
  const [expanded, setExpanded] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="h-full"
    >
      <div className="relative h-full flex flex-col bg-gradient-to-br from-card to-card/95 border border-border/40 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent pointer-events-none" />

        {/* Image Container with Premium Effects */}
        <div className="relative w-full h-56 bg-gradient-to-b from-muted to-muted/50 overflow-hidden">
          <Image
            src={item.image || "/placeholder.svg"}
            alt={item.name}
            width={400}
            height={250}
            className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-card/60 via-transparent to-transparent" />

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute top-3 right-3 bg-primary/90 backdrop-blur-sm text-primary-foreground px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 shadow-lg"
          >
            <Zap className="w-3.5 h-3.5" />
            Premium
          </motion.div>
        </div>

        {/* Content Container */}
        <div className="relative flex flex-col flex-1 p-6 gap-4">
          <div className="space-y-1.5">
            <h3 className="text-xl font-bold text-card-foreground leading-tight text-balance">{item.name}</h3>
            <p className="text-xs font-medium text-primary/70 uppercase tracking-widest">
              {new Date(item.timestamp).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </p>
          </div>

          <p
            className={`text-sm leading-relaxed text-muted-foreground transition-all duration-300 ${
              expanded ? "line-clamp-none" : "line-clamp-3"
            }`}
          >
            {item.description}
          </p>

          {item.description.length > 80 && (
            <motion.button
              whileHover={{ x: 2 }}
              onClick={() => setExpanded(!expanded)}
              className="text-primary text-xs font-semibold hover:text-primary/80 transition-colors text-left flex items-center gap-1 group/btn"
            >
              {expanded ? "Read less" : "Read more"}
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
            </motion.button>
          )}

          {item.details && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-auto pt-4 border-t border-border/40 space-y-2"
            >
              <div className="flex items-center gap-2 text-xs font-medium text-foreground/70">
                <Lock className="w-3.5 h-3.5 text-primary/60" />
                <span>Secured Details</span>
              </div>
              <p className="text-xs text-muted-foreground italic line-clamp-2">{item.details}</p>
            </motion.div>
          )}

          <div className="grow" />
        </div>

        <div className="relative px-6 py-4 border-t border-border/40 bg-gradient-to-r from-background/50 to-background/20">
          <motion.button
            whileHover={{ scale: 1.02, backgroundColor: "rgb(var(--color-primary))" }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-primary text-primary-foreground py-2.5 px-4 text-sm font-semibold rounded-lg hover:bg-primary/90 transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 group/action"
          >
            Explore Details
            <ArrowRight className="w-4 h-4 transition-transform group-hover/action:translate-x-1" />
          </motion.button>

          {isHovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent"
            />
          )}
        </div>
      </div>
    </motion.div>
  )
}
