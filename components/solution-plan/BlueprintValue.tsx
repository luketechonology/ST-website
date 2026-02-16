import { FileText, Database, Layers, TrendingUp } from "lucide-react";

export default function BlueprintValue() {
    const contents = [
        { title: "建设现状评估", desc: "基于学校现有软硬件的专业评估" },
        { title: "目标体系设计", desc: "符合学校发展阶段的顶层设计" },
        { title: "功能模块架构", desc: "详细的软硬件系统架构图" },
        { title: "部署模式建议", desc: "私有化/混合云部署的技术对比" },
        { title: "预算区间参考", desc: "分阶段实施的投资预算分析" },
        { title: "实施周期规划", desc: "从部署到交付的甘特图" },
    ];

    return (
        <section className="py-20 bg-white text-slate-800">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">一套完整的考试体系升级蓝图</h2>
                    <p className="text-slate-500 text-lg">不是卖系统，而是为您设计面向未来的智能化体系</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {contents.map((item, index) => (
                        <div key={index} className="p-6 border border-slate-200 rounded-lg hover:shadow-lg transition-shadow bg-slate-50">
                            <div className="flex items-center gap-4 mb-3">
                                <div className="w-8 h-8 rounded bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
                                    {index + 1}
                                </div>
                                <h3 className="text-xl font-bold text-slate-800">{item.title}</h3>
                            </div>
                            <p className="text-slate-600 pl-12">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
