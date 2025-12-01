"use client"

import * as React from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Download, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

export function MobileNav() {
    const [open, setOpen] = React.useState(false)

    // Prevent body scroll when menu is open
    React.useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "unset"
        }
        return () => {
            document.body.style.overflow = "unset"
        }
    }, [open])

    return (
        <div className="md:hidden">
            <Button
                variant="ghost"
                size="icon"
                className="relative z-[100]"
                onClick={() => setOpen(!open)}
                aria-label="Toggle Menu"
            >
                {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-[90] flex flex-col bg-white dark:bg-black h-dvh pt-24 px-6 pb-6"
                    >
                        <nav className="flex flex-col gap-6 text-lg font-medium">
                            <Link
                                href="/"
                                className="transition-colors hover:text-primary"
                                onClick={() => setOpen(false)}
                            >
                                首页
                            </Link>
                            <Link
                                href="#features"
                                className="transition-colors hover:text-primary"
                                onClick={() => setOpen(false)}
                            >
                                功能特性
                            </Link>
                            <Link
                                href="/announcements"
                                className="transition-colors hover:text-primary"
                                onClick={() => setOpen(false)}
                            >
                                更新公告
                            </Link>
                            <Link
                                href="/#community"
                                className="transition-colors hover:text-primary"
                                onClick={() => setOpen(false)}
                            >
                                社区与支持
                            </Link>
                        </nav>

                        <div className="mt-10 flex flex-col gap-4">
                            <Button size="lg" className="w-full gap-2" asChild>
                                <a href="/app-release.apk" download onClick={() => setOpen(false)}>
                                    <Download className="h-4 w-4" />
                                    下载 Android 版
                                </a>
                            </Button>
                            <Button variant="outline" size="lg" className="w-full gap-2" asChild>
                                <Link
                                    href="https://github.com/Jinzedev/aoe4-game-assistant"
                                    target="_blank"
                                    onClick={() => setOpen(false)}
                                >
                                    <Github className="h-4 w-4" />
                                    GitHub 源码
                                </Link>
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
