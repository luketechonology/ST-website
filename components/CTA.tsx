import { Button } from "@/components/ui/Button";
import Link from "next/link";

export default function CTA() {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Dynamic Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-red to-brand-dark z-0"></div>
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20 z-0"></div>

            <div className="container mx-auto px-4 relative z-10 text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    现在升级您的考试体系
                </h2>
                <p className="text-xl text-brand-gold-light mb-10 font-medium">
                    让AI成为学校考试的核心能力
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <Link href="/demo">
                        <Button size="lg" className="bg-white text-brand-red hover:bg-gray-100 shadow-lg text-lg px-10 w-full sm:w-auto">
                            预约专属演示
                        </Button>
                    </Link>
                    <Link href="/solution-plan">
                        <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 text-lg px-10 w-full sm:w-auto">
                            获取建设方案
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
