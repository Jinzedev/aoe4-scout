import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import { MobileNav } from "@/components/mobile-nav"

export function SiteHeader() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-14 max-w-screen-2xl items-center justify-between px-4 md:px-8">
                <div className="flex items-center">
                    <Link href="/" className="mr-6 flex items-center space-x-2">
                        <span className="font-bold inline-block">
                            帝国侦察兵
                        </span>
                    </Link>
                    <nav className="hidden md:flex items-center gap-6 text-sm">
                        <Link
                            href="#features"
                            className="transition-colors hover:text-foreground/80 text-foreground/60"
                        >
                            功能特性
                        </Link>
                        <Link
                            href="#community"
                            className="transition-colors hover:text-foreground/80 text-foreground/60"
                        >
                            社区与支持
                        </Link>
                    </nav>
                </div>

                {/* Desktop Action Buttons */}
                <div className="hidden md:flex items-center space-x-2">
                    <nav className="flex items-center">
                        <Button size="sm" className="gap-2" asChild>
                            <a href="/app-release.apk" download>
                                <Download className="h-4 w-4" />
                                <span className="hidden sm:inline">下载应用</span>
                            </a>
                        </Button>
                    </nav>
                </div>

                {/* Mobile Navigation */}
                <MobileNav />
            </div>
        </header>
    )
}
