import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Badge } from "@/components/ui/badge"


export default function AnnouncementsPage() {
    const updates = [
        {
            version: "v1.0.5",
            date: "2025-12-1",
            title: "v1.0.5更新",
            content: [
                "修复了部分绑定白屏bug",
                "优化了界面",
                "添加平均APM展示",
            ],
            type: "major",
        },
        // Add more updates here as needed
    ]

    return (
        <div className="relative min-h-screen flex flex-col">
            <SiteHeader />
            <main className="flex-1 container max-w-screen-2xl py-12 px-4 md:px-8">
                <div className="max-w-3xl mx-auto space-y-8">
                    <div className="space-y-2">
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">更新公告</h1>
                        <p className="text-muted-foreground text-lg">
                            了解帝国侦察兵的最新动态和更新内容
                        </p>
                    </div>

                    <div className="space-y-8">
                        {updates.map((update, index) => (
                            <div key={index} className="border rounded-lg p-6 bg-card text-card-foreground shadow-sm">
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                                    <div className="flex items-center gap-3">
                                        <h2 className="text-2xl font-semibold">{update.version}</h2>
                                        <Badge variant={update.type === "major" ? "default" : "secondary"}>
                                            {update.title}
                                        </Badge>
                                    </div>
                                    <time className="text-sm text-muted-foreground">{update.date}</time>
                                </div>
                                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                                    {update.content.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
            <SiteFooter />
        </div>
    )
}
