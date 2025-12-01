"use client"



import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function SupportPopup() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        // Show popup after a small delay
        const timer = setTimeout(() => {
            setIsVisible(true)
        }, 1000)

        return () => clearTimeout(timer)
    }, [])

    return (
        <AnimatePresence>
            {isVisible && (
                <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsVisible(false)}
                        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
                    />

                    {/* Popup Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="relative w-full max-w-sm overflow-hidden rounded-xl border bg-background p-6 shadow-2xl"
                    >
                        <button
                            onClick={() => setIsVisible(false)}
                            className="absolute top-4 right-4 rounded-full p-1 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
                        >
                            <X className="h-4 w-4" />
                            <span className="sr-only">Close</span>
                        </button>

                        <div className="flex flex-col items-center text-center gap-4">
                            <div className="rounded-full bg-primary/10 p-4 text-primary">
                                <MessageCircle className="h-8 w-8" />
                            </div>

                            <div className="space-y-2">
                                <h3 className="text-lg font-semibold">遇到问题？</h3>
                                <p className="text-sm text-muted-foreground">
                                    如果您在使用过程中遇到任何问题，<br />
                                    欢迎加入我们的官方 QQ 群进行反馈。
                                </p>
                            </div>

                            <Button className="w-full" asChild>
                                <a
                                    href="/qq-group.png"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    加入官方群
                                </a>
                            </Button>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    )
}
