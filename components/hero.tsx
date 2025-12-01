"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Download, Github } from "lucide-react"
import Link from "next/link"

export function Hero() {
    return (
        <section className="relative overflow-hidden py-20 sm:py-32 lg:pb-32 xl:pb-36">
            <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
                            帝国侦察兵 <br />
                            <span className="text-primary text-3xl sm:text-5xl mt-2 block">AoE4 Game Assistant</span>
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-muted-foreground">
                            专为《帝国时代4》玩家打造的现代化移动端助手。
                            <br />
                            实时数据追踪、战绩查询、游戏辅助，助你征服战场。
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <Button size="lg" className="gap-2" asChild>
                                <a href="/app-release.apk" download>
                                    <Download className="h-4 w-4" />
                                    下载 Android 版
                                </a>
                            </Button>
                            <Button variant="outline" size="lg" className="gap-2" asChild>
                                <Link href="https://github.com/Jinzedev/aoe4-game-assistant" target="_blank">
                                    <Github className="h-4 w-4" />
                                    查看源码
                                </Link>
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Background Gradient */}
            <div className="absolute inset-0 -z-10 h-full w-full bg-background [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] opacity-5 dark:opacity-20" />
        </section>
    )
}
