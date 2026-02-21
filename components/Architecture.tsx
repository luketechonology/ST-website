import {
    FileText, Brain, Bot, Globe, Server, Network, Eye, Users,
    Factory, ShoppingBag, Building2, Wifi,
    ScanSearch, Wrench, BarChart3, MapPin, Package, TrendingUp,
    BookOpen, FileCheck, Shield, Sparkles, Layers, Radio,
    ChevronRight
} from "lucide-react";

/* ─── Data ─── */

const industries = [
    {
        icon: Factory,
        label: "医疗行业",
        tagline: "AI赋能精准医疗与健康管理",
        items: ["医学影像辅助诊断", "智能病历质控", "个性化健康管理"],
        color: "from-blue-500 to-cyan-400",
        bg: "bg-blue-500/10",
        text: "text-blue-400",
        border: "border-blue-500/20",
    },
    {
        icon: ShoppingBag,
        label: "教育行业",
        tagline: "AI重构学校考试体系",
        items: ["AI智能出题", "智能组卷系统", "在线考试与监考", "AI自动阅卷", "数据分析与决策"],
        color: "from-violet-500 to-purple-400",
        bg: "bg-violet-500/10",
        text: "text-violet-400",
        border: "border-violet-500/20",
    },
    {
        icon: Building2,
        label: "央国企",
        tagline: "沉淀组织智慧，保障运营安全",
        items: ["企业知识大脑", "智能公文处理", "舆情监控与风险预警"],
        color: "from-purple-600 to-fuchsia-400",
        bg: "bg-purple-500/10",
        text: "text-purple-400",
        border: "border-purple-500/20",
    },
    {
        icon: Wifi,
        label: "互联网",
        tagline: "驱动算法革新，定义智能体验",
        items: ["新一代智能推荐", "系统AIGC内容生态", "用户增长智能决策"],
        color: "from-indigo-500 to-blue-400",
        bg: "bg-indigo-500/10",
        text: "text-indigo-400",
        border: "border-indigo-500/20",
    },
];

const infra = [
    { icon: Server, en: "Local Deployment", zh: "私有化本地部署" },
    { icon: Network, en: "LLM Gateway", zh: "统一模型网关" },
    { icon: Eye, en: "Observability Platform", zh: "可观测性平台" },
    { icon: Users, en: "Multi-Agent Framework", zh: "多智能体协作框架" },
];

/* ─── Component ─── */

export default function Architecture() {
    return (
        <section className="relative py-24 overflow-hidden">
            {/* BG */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-blue/20 via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-purple/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Title */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        AI 全栈平台架构
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        端到端的企业级AI解决方案，从文档处理到智能体落地
                    </p>
                </div>

                {/* Three-pillar layout */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                    {/* ── Pillar 1: IDP ── */}
                    <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 backdrop-blur-sm hover:border-blue-500/30 transition-colors group">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                                <FileText className="w-5 h-5 text-blue-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white">IDP文档智能处理</h3>
                        </div>
                        <p className="text-gray-400 text-sm mb-6">
                            支持PDF、Word、Excel、PPT、图片等多种格式的智能解析与结构化提取
                        </p>
                        <div className="grid grid-cols-4 gap-3">
                            {["PDF", "Word", "Excel", "PPT", "图片", "邮件", "网页", "扫描件"].map((type) => (
                                <div key={type} className="bg-white/5 border border-white/10 rounded-lg px-2 py-2 text-center text-xs text-gray-300 hover:border-blue-500/30 hover:text-blue-300 transition-colors">
                                    {type}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ── Pillar 2: Agent Training ── */}
                    <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 backdrop-blur-sm hover:border-purple-500/30 transition-colors group">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center">
                                <Brain className="w-5 h-5 text-purple-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white">智能体训练与编排</h3>
                        </div>
                        <div className="space-y-4">
                            {[
                                { icon: BookOpen, name: "AI KM", desc: "知识库管理" },
                                { icon: Bot, name: "AI Agent", desc: "智能体编排" },
                                { icon: Globe, name: "AI Hub", desc: "智能体门户" },
                            ].map((item) => (
                                <div key={item.name} className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl px-4 py-3 hover:border-purple-500/20 transition-colors">
                                    <div className="w-9 h-9 rounded-lg bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                                        <item.icon className="w-4 h-4 text-purple-400" />
                                    </div>
                                    <div>
                                        <div className="text-white font-semibold text-sm">{item.name}</div>
                                        <div className="text-gray-500 text-xs">{item.desc}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-4 flex flex-wrap gap-2">
                            {["Dify", "FastGPT", "Coze", "LangChain"].map((tool) => (
                                <span key={tool} className="px-3 py-1 rounded-full border border-white/10 text-gray-400 text-xs bg-white/5">
                                    {tool}
                                </span>
                            ))}
                            <span className="px-3 py-1 rounded-full border border-white/10 text-gray-500 text-xs bg-white/5">
                                ···
                            </span>
                        </div>
                    </div>

                    {/* ── Pillar 3: Applications ── */}
                    <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 backdrop-blur-sm hover:border-fuchsia-500/30 transition-colors group">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-lg bg-fuchsia-500/10 flex items-center justify-center">
                                <Sparkles className="w-5 h-5 text-fuchsia-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white">智能体应用与落地</h3>
                        </div>
                        <div className="space-y-4">
                            {industries.map((ind) => (
                                <div key={ind.label} className={`border ${ind.border} rounded-xl px-4 py-3 bg-white/[0.02] hover:bg-white/[0.04] transition-colors`}>
                                    <div className="flex items-center gap-2 mb-1.5">
                                        <ind.icon className={`w-4 h-4 ${ind.text}`} />
                                        <span className={`font-bold text-sm ${ind.text}`}>{ind.label}</span>
                                        <span className="text-gray-500 text-xs ml-1">{ind.tagline}</span>
                                    </div>
                                    <div className="flex flex-wrap gap-1.5">
                                        {ind.items.map((item) => (
                                            <span key={item} className="text-xs text-gray-400 bg-white/5 px-2 py-0.5 rounded">
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* ── Flow Arrows (visual connector) ── */}
                <div className="hidden lg:flex justify-center items-center gap-4 mb-4 -mt-10">
                    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-purple-500/50"></div>
                    <ChevronRight className="w-5 h-5 text-purple-500/50" />
                    <div className="flex-1 h-px bg-gradient-to-r from-purple-500/50 via-fuchsia-500/30 to-transparent"></div>
                </div>

                {/* ── Infrastructure Layer ── */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                    {infra.map((item) => (
                        <div key={item.en} className="bg-white/[0.03] border border-white/10 rounded-xl p-5 text-center hover:border-blue-500/30 transition-colors group">
                            <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                                <item.icon className="w-5 h-5 text-blue-400" />
                            </div>
                            <div className="text-white font-semibold text-sm">{item.en}</div>
                            <div className="text-gray-500 text-xs mt-0.5">{item.zh}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
