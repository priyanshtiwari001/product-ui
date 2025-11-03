'use client'
import { SHORTCUTS } from '@/lib/contants'
import React from 'react'
import { ShortcutCard } from './shortcut-card'

const ShortcutGrid = () => {
  return (
   <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {SHORTCUTS.map((shortcut) => (
            <ShortcutCard key={shortcut.id} shortcut={shortcut} />
          ))}
        </div>
  )
}

export default ShortcutGrid
