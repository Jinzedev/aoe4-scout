"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MessageCircle, Heart } from "lucide-react"

export function Community() {
    return (
        <section id="community" className="py-24 sm:py-32 bg-muted/50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                        加入社区 & 支持项目
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        反馈问题、交流心得，或者为项目的持续发展提供支持
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {/* QQ Group Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center p-8 bg-background rounded-2xl shadow-sm border border-border"
                    >
                        <div className="h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-6">
                            <MessageCircle className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">加入 QQ 交流群</h3>
                        <p className="text-muted-foreground text-center mb-6">
                            与其他用户讨论功能、反馈 Bug
                        </p>
                        <div className="relative w-48 h-48 rounded-xl overflow-hidden border-2 border-muted mb-6">
                            <Image
                                src="/qq-group.png"
                                alt="QQ Group QR Code"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <p className="text-sm font-medium text-foreground">
                            扫码加入官方交流群
                        </p>
                    </motion.div>

                    {/* Sponsor Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center p-8 bg-background rounded-2xl shadow-sm border border-border"
                    >
                        <div className="h-12 w-12 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center mb-6">
                            <Heart className="h-6 w-6 text-red-600 dark:text-red-400" />
                        </div>

                        <p className="text-sm font-medium text-foreground">
                            感谢每一份支持！
                        </p>
                    </motion.div>

                </div>
            </div>
        </section>
    )
}
