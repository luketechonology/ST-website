import { Check } from "lucide-react";

export default function DemoContent() {
    const features = [
        {
            title: "AI智能组卷系统",
            desc: "自动按难度、知识点比例生成试卷"
        },
        {
            title: "AI自动阅卷",
            desc: "客观题秒批，主观题辅助评分"
        },
        {
            title: "学情诊断报告",
            desc: "班级/年级/个人多维度分析"
        },
        {
            title: "教学优化建议",
            desc: "精准定位薄弱知识点"
        }
    ];

    return (
        <section className="py-20 relative">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center justify-center gap-16">
                    <div className="w-full md:w-1/2 max-w-lg">
                        <h2 className="text-3xl font-bold text-white mb-8 border-l-4 border-brand-purple pl-6">
                            本次演示<br />
                            <span className="text-gray-400 font-normal">将为您展示</span>
                        </h2>
                        <div className="space-y-6">
                            {features.map((feature, index) => (
                                <div key={index} className="flex items-start gap-4 p-4 bg-white/5 rounded-lg border border-white/5 hover:bg-white/10 transition-colors">
                                    <div className="w-6 h-6 rounded-full bg-brand-purple/20 flex items-center justify-center flex-shrink-0 mt-1">
                                        <Check className="w-3 h-3 text-brand-purple" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white">{feature.title}</h3>
                                        <p className="text-gray-400 text-sm">{feature.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Visual Placeholder for Demo Interface */}
                    <div className="w-full md:w-1/2 max-w-xl">
                        <div className="relative aspect-video bg-gradient-to-br from-brand-gray to-black rounded-xl border border-white/10 overflow-hidden shadow-2xl group">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-center">
                                    <div className="text-6xl mb-4 opacity-50">💻</div>
                                    <div className="text-gray-500 font-mono text-sm">System Interface Preview</div>
                                </div>
                            </div>
                            {/* Fake UI Elements */}
                            <div className="absolute top-4 left-4 right-4 h-2 bg-white/10 rounded"></div>
                            <div className="absolute top-10 left-4 w-1/3 h-32 bg-white/5 rounded"></div>
                            <div className="absolute top-10 right-4 w-1/2 h-32 bg-white/5 rounded"></div>
                            <div className="absolute bottom-4 left-4 right-4 h-20 bg-brand-blue/5 rounded border border-brand-blue/10"></div>

                            {/* Hover Effect */}
                            <div className="absolute inset-0 bg-brand-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
