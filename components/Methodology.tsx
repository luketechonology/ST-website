import { Target, Repeat, TrendingUp } from "lucide-react";

const methodologies = [
    {
        icon: Target,
        title: "精准定位",
        subtitle: "回归业务价值原点",
        color: "text-red-500",
        bg: "bg-red-500/10",
        border: "border-red-500/20",
        points: [
            {
                label: "痛点切入",
                text: "AI定制化需聚焦企事业高频、高成本的业务场景，通过私有化部署确保核心数据不出域，兼顾数据安全与业务连贯性。",
            },
            {
                label: "场景筛选",
                text: "优先选择流程标准化、重复性高的任务，通过AI定制化实现\u201c小单快反\u201d。",
            },
            {
                label: "目标导向",
                text: "每一步AI应用需直指业务增长——或降本、或增效，避免技术空转。",
            },
        ],
    },
    {
        icon: Repeat,
        title: "快速迭代",
        subtitle: "聚焦价值验证闭环",
        color: "text-orange-500",
        bg: "bg-orange-500/10",
        border: "border-orange-500/20",
        points: [
            {
                label: "从工具化到场景化演进",
                text: "AI不应仅是单点工具，需与业务流深度结合。私有化部署保障企业数据在闭环内流转，避免敏感信息外泄。",
            },
            {
                label: "MVP验证",
                text: "通过短周期试点验核心价值。技术选型由简入繁，初期选择低代码、轻量化解决方案，降低试错成本。",
            },
            {
                label: "渐进升级",
                text: "后期根据数据积累逐步升级为定制化私有模型，平衡敏捷性与长期需求。",
            },
        ],
    },
    {
        icon: TrendingUp,
        title: "持续运营",
        subtitle: "让AI成为核心资产",
        color: "text-amber-500",
        bg: "bg-amber-500/10",
        border: "border-amber-500/20",
        points: [
            {
                label: "数据驱动优化",
                text: "私有化部署为企业积累专属数据资产，通过反馈循环持续迭代AI模型。",
            },
            {
                label: "人机协同",
                text: "管理预期，建立人机协同，明确AI能力边界，避免替代员工的误判。",
            },
            {
                label: "持续进化",
                text: "技术更新与威胁防御需双线并行，确保私有化AI系统在长期运营中持续创造价值。",
            },
        ],
    },
];

export default function Methodology() {
    return (
        <section className="relative py-24 overflow-hidden">
            {/* BG */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-brand-purple/15 via-transparent to-transparent"></div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Title */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        我们的方法论
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        三步走策略，让AI真正落地产生价值
                    </p>
                </div>

                {/* Three Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {methodologies.map((m, i) => (
                        <div
                            key={m.title}
                            className={`bg-white/[0.03] border border-white/10 rounded-2xl p-8 backdrop-blur-sm hover:border-white/20 transition-all group relative overflow-hidden`}
                        >
                            {/* Step number watermark */}
                            <span className="absolute top-4 right-6 text-[5rem] font-black text-white/[0.03] leading-none select-none">
                                {i + 1}
                            </span>

                            {/* Header */}
                            <div className="flex items-center gap-3 mb-2">
                                <div className={`w-10 h-10 rounded-lg ${m.bg} flex items-center justify-center`}>
                                    <m.icon className={`w-5 h-5 ${m.color}`} />
                                </div>
                                <h3 className={`text-xl font-bold ${m.color}`}>{m.title}</h3>
                            </div>
                            <p className="text-gray-300 font-medium text-sm mb-6 pl-[52px]">
                                {m.subtitle}
                            </p>

                            {/* Points */}
                            <div className="space-y-4">
                                {m.points.map((p) => (
                                    <div key={p.label}>
                                        <span className={`text-sm font-semibold ${m.color}`}>
                                            {p.label}
                                        </span>
                                        <p className="text-gray-400 text-sm leading-relaxed mt-0.5">
                                            {p.text}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
