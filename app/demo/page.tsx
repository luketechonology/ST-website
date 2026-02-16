import DemoHero from "@/components/demo/DemoHero";
import PainPoints from "@/components/demo/PainPoints";
import DemoContent from "@/components/demo/DemoContent";
import TrustDemo from "@/components/demo/TrustDemo";
import DemoForm from "@/components/demo/DemoForm";

export const metadata = {
    title: '预约演示 | 圣唐科技 AI考试系统',
    description: '预约AI考试系统专属演示，30分钟看清未来三年的升级方向。',
};

export default function DemoPage() {
    return (
        <main className="min-h-screen bg-brand-dark text-white">
            <DemoHero />
            <PainPoints />
            <DemoContent />
            <TrustDemo />

            {/* Form Section */}
            <section id="form" className="py-24 bg-gradient-to-b from-brand-dark to-black relative">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
                <div className="container mx-auto px-4 max-w-3xl relative z-10">
                    <DemoForm />
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="py-16 bg-brand-red/10 border-t border-brand-red/20 text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">让AI成为学校考试改革的核心引擎</h2>
                    <a
                        href="#form"
                        className="inline-block px-10 py-4 text-lg font-bold bg-brand-red text-white rounded hover:bg-brand-red-light hover:shadow-[0_0_30px_rgba(186,28,28,0.5)] transition-all"
                    >
                        立即预约演示
                    </a>
                </div>
            </section>
        </main>
    );
}
