"use client"

import { motion } from "framer-motion"
import { Activity, BarChart3, History, Search, Smartphone, Shield } from "lucide-react"
import { cn } from "@/lib/utils"

const features = [
    {
        name: "实时仪表盘",
        description:
            "直观展示个人概览、当前段位、ELO 分数及全球排名。实时统计胜率和近期表现。",
        icon: Activity,
        className: "lg:col-span-2",
    },
    {
        name: "深度数据分析",
        description:
            "可视化展示近期胜率走势，详细分析各个文明的使用率和胜率。",
        icon: BarChart3,
        className: "lg:col-span-1",
    },
    {
        name: "历史战绩回顾",
        description:
            "详细的历史对局清单，查看每场比赛的地图、时长、对手信息及分数变化。",
        icon: History,
        className: "lg:col-span-1",
    },
    {
        name: "全球玩家查询",
        description:
            "支持搜索任意 AoE4 玩家 ID 或名称，查看其他玩家的详细数据。",
        icon: Search,
        className: "lg:col-span-2",
    },
    {
        name: "现代化体验",
        description:
            "采用 React Native 构建，流畅的移动端体验，支持深色模式和多语言。",
        icon: Smartphone,
        className: "lg:col-span-1",
    },
    {
        name: "开源安全",
        description:
            "代码完全开源，通过 GitHub Releases 分发，确保应用纯净无广告。",
        icon: Shield,
        className: "lg:col-span-2",
    },
]

export function Features() {
    return (
        <section id="features" className="py-24 sm:py-32 bg-muted/50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-base font-semibold leading-7 text-primary">
                        功能特性
                    </h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                        全方位的游戏辅助工具
                    </p>
                    <p className="mt-6 text-lg leading-8 text-muted-foreground">
                        利用 AoE4World API 提供最准确的实时数据，帮助你更好地了解自己的表现并提升竞技水平。
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
                        {features.map((feature, index) => (
                            <motion.div
                                key={feature.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className={cn(
                                    "relative overflow-hidden rounded-2xl border bg-background/50 p-8 shadow-sm backdrop-blur transition-all hover:bg-background hover:shadow-md hover:border-primary/20",
                                    feature.className
                                )}
                            >
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                                    <feature.icon
                                        className="h-6 w-6 text-primary"
                                        aria-hidden="true"
                                    />
                                </div>
                                <dt className="mt-4 text-lg font-semibold leading-7 text-foreground">
                                    {feature.name}
                                </dt>
                                <dd className="mt-2 text-base leading-7 text-muted-foreground">
                                    {feature.description}
                                </dd>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
