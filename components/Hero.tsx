import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Server, Activity } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-brand-dark">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-red/20 via-brand-dark to-brand-dark"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-gold/5 rounded-full blur-[100px] animate-pulse-glow pointer-events-none"></div>
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div> {/* We might not have grid.svg yet, but acts as placeholder */}

            <div className="container mx-auto px-4 relative z-10 text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-red/10 border border-brand-red/30 text-brand-red-light text-sm font-medium mb-8 animate-fade-in-up">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-red opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-red"></span>
                    </span>
                    Next-Gen Educational Assessment
                </div>

                <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                    <span className="block text-white mb-2">用AI重构</span>
                    <span className="text-gradient-gold">学校考试体系</span>
                </h1>

                <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed font-light">
                    从出题、组卷、考试、阅卷到学情分析<br />
                    构建真正<span className="text-white font-medium">智能化、标准化、数据化</span>的考试系统
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                    <Link href="/demo" className="w-full sm:w-auto">
                        <Button variant="primary" size="lg" className="w-full text-lg hover:animate-pulse">
                            申请系统演示 <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                    </Link>
                    <Link href="/solution-plan" className="w-full sm:w-auto">
                        <Button variant="tech" size="lg" className="w-full text-lg">
                            获取建设方案
                        </Button>
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto text-gray-400 text-sm border-t border-white/10 pt-8">
                    <div className="flex items-center justify-center gap-2">
                        <ShieldCheck className="w-5 h-5 text-brand-gold" />
                        <span>国家高新技术企业</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                        <Server className="w-5 h-5 text-brand-gold" />
                        <span>支持私有化部署</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                        <Activity className="w-5 h-5 text-brand-gold" />
                        <span>高并发稳定运行</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
