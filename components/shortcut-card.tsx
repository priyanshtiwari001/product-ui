'use client';
import { Shortcut } from '@/utils/types/type';
import {motion} from 'framer-motion'
export function ShortcutCard({ shortcut }:{ shortcut: Shortcut } ) {
    const {icon:Icon,description,title}=shortcut;
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="group relative"
    >
      <div className="h-full flex flex-col items-center justify-center p-8 bg-card border border-border/60 rounded-xl hover:border-primary/40 transition-all duration-300 hover:shadow-md hover:-translate-y-1 cursor-pointer">
        <div className="flex items-center justify-center mb-4">
          <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/15 transition-colors">
            <Icon className="w-6 h-6 text-primary" />
          </div>
        </div>
        <h3 className="text-base font-semibold text-card-foreground text-center">{title}</h3>
        <p className="text-xs text-muted-foreground text-center mt-2 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  )
}