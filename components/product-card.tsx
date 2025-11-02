"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ProductItem } from "@/utils/types/type"
import { useState } from "react"

interface ProductCardProps {
  item: ProductItem
  index: number
}

export function ProductCard({ item, index }: ProductCardProps) {
  const [expanded, setExpanded] = useState(false)

  return (

    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1, duration: 0.4 }}
        className="h-full"
      >
        <div
          className="flex flex-col h-full bg-card border border-border rounded-lg overflow-hidden 
                   shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
        >
          <div className="w-full h-48 bg-gray-100 overflow-hidden">
            <Image
              src={item.image}
              alt={item.name}
              width={300}
              height={200}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>

          <div className="flex flex-col text-center p-4 grow gap-2">
            {/* Title */}
            <h3 className="text-lg font-bold text-card-foreground">{item.name}</h3>

            {/* Timestamp */}
            <p className="text-xs text-muted-foreground">
              {new Date(item.timestamp).toLocaleString()}
            </p>

            {/* Description */}
            <p
              className={`text-sm text-muted-foreground ${expanded ? "line-clamp-none" : "line-clamp-2"
                }`}
            >
              {item.description}
            </p>

            {item.description.length > 80 && (
              <button
                onClick={() => setExpanded(!expanded)}
                className="text-primary cursor-pointer text-xs font-medium hover:underline focus:outline-none"
              >
                {expanded ? "Read less" : "Read more"}
              </button>
            )}

            {/* Encrypted “details” snippet */}
            {item.details && (
              <div className="mt-2">
                <p className="text-xs  text-foreground/70 italic line-clamp-1">
                  🔐 {item.details}
                </p>
              </div>
            )}

            <div className="grow" />
          </div>

          <div className="p-3 border-t border-border bg-background/50">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-primary text-primary-foreground py-2 px-3 text-md font-medium rounded hover:bg-primary/90 transition-colors cursor-pointer"
            >
              View More
            </motion.button>
          </div>
        </div>
      </motion.div>
    </>
  )
}
