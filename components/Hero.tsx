import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowRight, Server, Database, Sparkles } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/30 via-black to-black"></div>
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-purple-600/15 rounded-full blur-[120px] animate-pulse-glow pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent"></div>
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>

            <div className="container mx-auto px-4 relative z-10 text-center">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-sm font-medium mb-8 animate-fade-in-up">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                    </span>
                    AI · 赋能企事业单位
                </div>

                <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                    <span className="block text-white mb-2">所有的软件应用</span>
                    <span className="block text-white">都值得用<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-fuchsia-500">AI重写</span></span>
                </h1>

                <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed font-light">
                    我们为企事业单位提供<span className="text-white font-medium">大模型私有化部署</span>、<br />
                    <span className="text-white font-medium">私有化数据训练</span>与<span className="text-white font-medium">量身定制AI应用</span>
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                    <Link href="/demo" className="w-full sm:w-auto">
                        <Button variant="primary" size="lg" className="w-full text-lg bg-gradient-to-r from-blue-600 via-purple-600 to-fuchsia-500 hover:from-blue-500 hover:via-purple-500 hover:to-fuchsia-400 border-none shadow-[0_0_30px_rgba(139,92,246,0.3)] hover:shadow-[0_0_40px_rgba(139,92,246,0.5)] transition-all">
                            申请专属演示 <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                    </Link>
                    <Link href="/solution-plan" className="w-full sm:w-auto">
                        <Button variant="tech" size="lg" className="w-full text-lg">
                            获取建设方案
                        </Button>
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto text-gray-400 text-sm border-t border-white/10 pt-8">
                    <div className="flex items-center justify-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                            <Server className="w-5 h-5 text-blue-400" />
                        </div>
                        <span className="text-base">大模型私有化部署</span>
                    </div>
                    <div className="flex items-center justify-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center">
                            <Database className="w-5 h-5 text-purple-400" />
                        </div>
                        <span className="text-base">私有化数据训练</span>
                    </div>
                    <div className="flex items-center justify-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-fuchsia-500/10 flex items-center justify-center">
                            <Sparkles className="w-5 h-5 text-fuchsia-400" />
                        </div>
                        <span className="text-base">量身定制AI应用</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
