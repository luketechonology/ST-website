
import { Database, FileText, Monitor, PenTool, PieChart } from "lucide-react";

export default function Solution() {
    const steps = [
        { icon: Database, title: "AI智能题库", desc: "校本资源数字化与标签化" },
        { icon: FileText, title: "自动组卷", desc: "多维细目表精准命题" },
        { icon: Monitor, title: "智能考试", desc: "防作弊与稳定并发保障" },
        { icon: PenTool, title: "AI自动阅卷", desc: "主客观题全自动批改" },
        { icon: PieChart, title: "数据分析", desc: "多维学情诊断与决策" },
    ];

    return (
        <section id="solution" className="py-24 bg-black relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-gold/5 rounded-full blur-3xl pointer-events-none"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        TangThink <span className="text-brand-gold">AI考试体系</span> 整体架构
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        我们不是做一个在线考试系统，而是为学校构建完整的智能考试体系。
                    </p>
                </div>

                <div className="relative">
                    {/* Connector Line */}
                    <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent z-0"></div>

                    <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                        {steps.map((step, index) => (
                            <div key={index} className="relative z-10 flex flex-col items-center text-center group">
                                <div className="w-24 h-24 rounded-full bg-brand-dark border border-brand-gold/30 flex items-center justify-center mb-6 group-hover:border-brand-gold group-hover:shadow-[0_0_20px_rgba(212,175,55,0.2)] transition-all duration-300 bg-black">
                                    <step.icon className="w-10 h-10 text-brand-gold group-hover:scale-110 transition-transform" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                                <p className="text-sm text-gray-500">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-20 text-center">
                    <div className="inline-block px-8 py-3 rounded-lg bg-brand-red/10 border border-brand-red/30 text-brand-red-light font-medium">
                        形成完整闭环：出题 → 组卷 → 考试 → 阅卷 → 数据分析 → 教学优化
                    </div>
                </div>
            </div>
        </section>
    );
}
