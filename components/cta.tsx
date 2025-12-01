"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export function CTA() {
    return (
        <section className="relative overflow-hidden py-24 sm:py-32">
            <div className="absolute inset-0 -z-10 bg-primary/5" />
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
                    >
                        准备好开始了吗？
                        <br />
                        立即下载帝国侦察兵
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="mx-auto mt-6 max-w-xl text-lg leading-8 text-muted-foreground"
                    >
                        加入成千上万的帝国时代4玩家，使用最先进的数据助手提升你的游戏水平。

                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="mt-10 flex items-center justify-center gap-x-6"
                    >
                        <Button size="lg" className="gap-2" asChild>
                            <a href="/app-release.apk" download>
                                <Download className="h-4 w-4" />
                                免费下载 Android 版
                            </a>
                        </Button>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
