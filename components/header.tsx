'use client'
import React from 'react'
import {motion} from 'framer-motion'
import { TrendingUp } from 'lucide-react'
const DashboardHeader = () => {
  return (
     <motion.div
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5 }}
               className="space-y-4 max-w-3xl"
             >
               <div className="flex items-center gap-2">
                 <div className="p-2 bg-primary/10 rounded-lg">
                   <TrendingUp className="w-5 h-5 text-primary" />
                 </div>
                 <span className="text-xs font-semibold text-primary uppercase tracking-widest">Dashboard</span>
               </div>
               <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                 Enterprise Dashboard
               </h1>
               <p className="text-lg text-muted-foreground text-balance max-w-2xl leading-relaxed">
                 Access comprehensive tools and insights to drive business growth. Monitor performance, analyze data, and
                 make informed decisions.
               </p>
             </motion.div>
  )
}

export default DashboardHeader
