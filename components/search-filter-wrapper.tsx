"use client"

import type React from "react"

import { useState, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ProductCard } from "./product-card"
import { Search, X } from "lucide-react"

interface SearchFilterWrapperProps {
  items: Array<{
    id: string
    name: string
    image: string
    timestamp: string
    description: string
    details?: string
  }>
}

const debounce = (fn: Function, delay: number) => {
  let timeoutId: NodeJS.Timeout
  return (...args: any[]) => {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => fn(...args), delay)
  }
}

export function SearchFilterWrapper({ items }: SearchFilterWrapperProps) {
  const [search, setSearch] = useState("")
  const [filterItems, setFilterItems] = useState(items)
  const [isFocused, setIsFocused] = useState(false)

  const handleSearch = useCallback(
    debounce((searchTerm: string) => {
      const filteredData = items.filter((product) => product.name.toLowerCase().includes(searchTerm.toLowerCase()))
      setFilterItems(filteredData)
    }, 300),
    [items],
  )

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSearch(value)
    handleSearch(value)
  }

  const handleClear = () => {
    setSearch("")
    setFilterItems(items)
  }

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="relative w-full"
      >
        <div
          className={`relative flex items-center gap-3 px-4 py-3 border rounded-xl transition-all duration-300 bg-background/50 backdrop-blur-sm  ${
            isFocused
              ? "border-primary/50 bg-background shadow-lg shadow-primary/10"
              : "border-border/40 hover:border-border/60"
          }`}
        >
          <Search className="w-5 h-5 text-muted-foreground pointer-events-none" />
          <input
            type="text"
            value={search}
            onChange={handleChange}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder="Search products by name..."
            className="flex-1 bg-transparent text-foreground placeholder:text-muted-foreground focus:outline-none text-sm"
          />
          <AnimatePresence>
            {search && (
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                onClick={handleClear}
                className="p-1 hover:bg-muted rounded-lg transition-colors"
              >
                <X className="w-4 h-4 text-muted-foreground hover:text-foreground" />
              </motion.button>
            )}
          </AnimatePresence>
        </div>

        {!search && (
          <p className="text-xs text-muted-foreground mt-2 ml-1">
            Try searching for:{" "}
            {items
              .slice(0, 2)
              .map((item) => item.name)
              .join(", ")}
          </p>
        )}
      </motion.div>

      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filterItems.map((item, index) => (
            <ProductCard key={item.id} item={item} index={index} />
          ))}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {filterItems.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="text-center py-20"
          >
            <div className="space-y-3">
              <p className="text-lg font-medium text-foreground/70">No products found</p>
              <p className="text-sm text-muted-foreground">
                "{search}" doesn't match any of our products. Try a different search term.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={handleClear}
                className="inline-block mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
              >
                Clear Search
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
