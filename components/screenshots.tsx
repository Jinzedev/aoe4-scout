"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const screenshots = [
    { src: "/home.png", alt: "首页概览" },
    { src: "/search.png", alt: "战绩查询" },
    { src: "/detail.png", alt: "对局详情" },
    { src: "/tongji-1.png", alt: "数据统计" },
    { src: "/tongji-2.png", alt: "文明分析" },
]

export function Screenshots() {
    return (
        <section className="py-24 sm:py-32 overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                        精美界面，流畅体验
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        精心设计的现代化 UI，让数据查询成为一种享受
                    </p>
                </div>

                <div className="relative">
                    {/* Gradient Masks */}
                    <div className="absolute left-0 top-0 bottom-0 w-12 z-10 bg-gradient-to-r from-background to-transparent pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-12 z-10 bg-gradient-to-l from-background to-transparent pointer-events-none" />

                    {/* Scrolling Container */}
                    <div className="flex overflow-x-auto gap-6 pb-8 px-4 snap-x snap-mandatory scrollbar-hide -mx-4 sm:mx-0 sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 sm:overflow-visible sm:pb-0">
                        {screenshots.map((shot, index) => (
                            <motion.div
                                key={shot.src}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="flex-none w-[280px] sm:w-auto snap-center"
                            >
                                <div className="relative rounded-2xl overflow-hidden border-4 border-gray-900/10 dark:border-white/10 shadow-2xl bg-gray-900 dark:bg-gray-800 aspect-[9/19]">
                                    <Image
                                        src={shot.src}
                                        alt={shot.alt}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 640px) 280px, (max-width: 1024px) 33vw, 20vw"
                                    />
                                </div>
                                <p className="mt-4 text-center font-medium text-muted-foreground">
                                    {shot.alt}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
