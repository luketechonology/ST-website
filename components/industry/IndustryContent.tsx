import { LucideIcon, CheckCircle } from "lucide-react";

interface Feature {
    title: string;
    desc: string;
    icon: LucideIcon;
}

interface Case {
    title: string;
    desc: string;
}

interface IndustryContentProps {
    features: Feature[];
    cases: Case[];
}

export default function IndustryContent({ features, cases }: IndustryContentProps) {
    return (
        <section className="py-20 relative">
            <div className="container mx-auto px-4">
                {/* Features */}
                <div className="mb-20">
                    <h2 className="text-3xl font-bold text-white mb-10 text-center">核心应用场景</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <div key={index} className="bg-white/5 border border-white/10 p-8 rounded-xl hover:border-brand-purple/50 transition-colors group backdrop-blur-sm">
                                <div className="w-12 h-12 rounded-lg bg-brand-purple/20 flex items-center justify-center text-brand-purple mb-6 group-hover:scale-110 transition-transform">
                                    <feature.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                                <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Cases */}
                <div>
                    <h2 className="text-3xl font-bold text-white mb-10 text-center">成功案例</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {cases.map((item, index) => (
                            <div key={index} className="flex gap-4 p-6 bg-brand-blue/5 border border-brand-blue/10 rounded-xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-4 opacity-10">
                                    <CheckCircle className="w-24 h-24 text-brand-blue" />
                                </div>
                                <div className="flex-shrink-0 mt-1">
                                    <CheckCircle className="w-6 h-6 text-brand-blue" />
                                </div>
                                <div className="relative z-10">
                                    <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                                    <p className="text-gray-400">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
