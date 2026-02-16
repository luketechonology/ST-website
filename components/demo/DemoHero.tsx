import { ArrowDown } from "lucide-react";

export default function DemoHero() {
    return (
        <section className="relative pt-32 pb-20 bg-brand-dark overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-brand-red/10 via-brand-dark to-brand-dark"></div>
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>

            <div className="container mx-auto px-4 relative z-10 text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                    <span className="block text-white mb-2">用AI重构学校考试体系</span>
                    <span className="text-gradient-gold">30分钟看清未来三年的升级方向</span>
                </h1>

                <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed font-light">
                    智能命题 · 自动阅卷 · 数据诊断 · 教学优化<br />
                    <span className="text-brand-gold">一对一专属演示，现场解答部署与预算问题</span>
                </p>

                <div className="flex justify-center">
                    <a
                        href="#form"
                        className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-brand-dark bg-brand-gold rounded hover:bg-brand-gold-light hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] transition-all transform hover:scale-105"
                    >
                        立即预约专属演示 <ArrowDown className="ml-2 w-5 h-5 animate-bounce" />
                    </a>
                </div>
            </div>
        </section>
    );
}
