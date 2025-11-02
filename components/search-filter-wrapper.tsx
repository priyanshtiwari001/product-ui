"use client"

import { motion } from "framer-motion"
import { useCallback, useState } from "react"
import { ProductCard } from "./product-card"
import { ProductItem } from "@/utils/types/type"
interface SearchFilterWrapperProps {
  items: ProductItem[]
}
const debounce = (fun: any, delay: number) => {
  let timeId: NodeJS.Timeout;
  return (...args: any) => {
    clearTimeout(timeId);
    timeId = setTimeout(() => { fun(...args) }, delay)
  }
}
export function SearchFilterWrapper({ items }: SearchFilterWrapperProps) {
  const [search, setSearch] = useState('');
  const [filterItems, setFilterItems] = useState(items);

  const handleChange = (e: any) => {
    const value = e.target.value
    setSearch(value);
    handleSearch(value)

  }
  const handleSearch = useCallback(debounce((search: string) => {
    const filterdata = items.filter(product => product.name.toLowerCase().includes(search.toLowerCase()));
    setFilterItems(filterdata)
  }, 300), [items])
  return (
    <div>
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col gap-4 mb-8">
              <input
                type="text"
                value={search}
                onChange={handleChange}
                placeholder="Search products by name..."
                className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </motion.div>

            <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filterItems.map((item, index) => (
                <ProductCard key={item.id} item={item} index={index} />
              ))}
            </motion.div>
            {filterItems.length === 0 && (
              <div className="text-center py-12 pt-40">
                <p className="text-muted-foreground">No products match your search criteria</p>
              </div>
            )}
    </div>
  )
}
