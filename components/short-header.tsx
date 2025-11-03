
'use client';
import { motion } from "framer-motion"
export default function ShortcutHeader() {
    return <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="mb-4"
    >
        <h2 className="text-xl font-bold text-foreground">Shortcuts</h2>
    </motion.div>
}