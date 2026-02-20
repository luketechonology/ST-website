"use client";

import {
    HardHat,
    Shield,
    Camera,
    Eye,
    Flame,
    Users,
    BarChart3,
    FileText,
    Ruler,
    Layers,
    ArrowRight,
    ChevronRight,
    CheckCircle2,
    TrendingUp,
    Building2,
    Cpu,
    Video,
    Map,
    Wrench,
    AlertTriangle,
    Search,
    ClipboardCheck,
    Settings,
    Headphones,
    Server,
    Lock,
    Network,
    Brain,
    Boxes,
    Hammer,
    Zap,
    CircleDot,
    Package,
    Construction,
    Train,
    Factory,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import DemoForm from "@/components/demo/DemoForm";

/* ─── Animated Counter ─── */
function AnimatedNumber({ target, suffix = "" }: { target: number; suffix?: string }) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const [started, setStarted] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting && !started) setStarted(true); },
            { threshold: 0.3 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [started]);

    useEffect(() => {
        if (!started) return;
        const duration = 1500;
        const steps = 40;
        const increment = target / steps;
        let current = 0;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) { setCount(target); clearInterval(timer); }
            else setCount(Math.round(current));
        }, duration / steps);
        return () => clearInterval(timer);
    }, [started, target]);

    return <span ref={ref}>{count}{suffix}</span>;
}

/* ═══ DATA ═══ */

const scenarios = [
    {
        icon: Camera,
        title: "智慧工地监控",
        headline: "施工现场安全智能监管，降低事故风险",
        description: "通过计算机视觉与边缘计算技术，对施工现场进行全天候智能监控，自动识别各类安全违规行为，实时报警并形成数据留痕。",
        features: [
            { icon: HardHat, label: "安全帽识别" },
            { icon: Shield, label: "反光衣识别" },
            { icon: AlertTriangle, label: "危险区域闯入" },
            { icon: Users, label: "高空作业违规" },
            { icon: Flame, label: "明火作业识别" },
            { icon: Eye, label: "人员聚集异常" },
        ],
        techTags: ["计算机视觉(CV)", "行为识别算法", "实时视频流分析", "边缘计算推理"],
        values: ["实时风险报警", "降低安全事故率", "减少人工巡检成本", "安全数据留痕"],
        color: "from-orange-500 to-amber-400",
        accent: "text-amber-400",
        accentBg: "bg-amber-500/10",
        accentBorder: "border-amber-500/20",
    },
    {
        icon: BarChart3,
        title: "工程进度自动分析",
        headline: "施工进度自动化、可视化管理",
        description: "利用无人机航拍结合AI分析技术，实现施工进度的自动采集、智能对比与偏差预警，告别人工统计的低效与误差。",
        features: [
            { icon: Map, label: "无人机航拍AI分析" },
            { icon: Layers, label: "三维模型对比" },
            { icon: Boxes, label: "自动计算土方量" },
            { icon: CheckCircle2, label: "结构完成度识别" },
        ],
        highlights: ["施工进度偏差预警", "实际vs计划进度对比", "施工区域自动识别", "施工质量图像分析"],
        comparison: [
            { label: "进度统计", traditional: "人工统计", ai: "自动识别" },
            { label: "偏差发现", traditional: "延迟发现", ai: "实时预警" },
            { label: "数据准确率", traditional: "低", ai: "高" },
        ],
        color: "from-blue-500 to-cyan-400",
        accent: "text-cyan-400",
        accentBg: "bg-cyan-500/10",
        accentBorder: "border-cyan-500/20",
    },
    {
        icon: FileText,
        title: "图纸智能审查",
        headline: "减少设计缺陷与规范冲突风险",
        description: "基于建筑知识图谱与NLP技术，自动解析CAD图纸，检测规范冲突与设计缺陷，大幅缩短审图周期。",
        features: [
            { icon: Search, label: "规范冲突识别" },
            { icon: Ruler, label: "结构合理性检查" },
            { icon: Layers, label: "管线冲突检测" },
            { icon: FileText, label: "强制性规范比对" },
            { icon: Eye, label: "版本差异对比" },
        ],
        techTags: ["CAD图纸解析", "建筑知识图谱", "规则引擎匹配", "NLP文本识别"],
        values: ["降低返工率", "缩短审图周期", "提升设计质量", "降低项目成本"],
        color: "from-violet-500 to-purple-400",
        accent: "text-purple-400",
        accentBg: "bg-purple-500/10",
        accentBorder: "border-purple-500/20",
    },
];

const extendedCapabilities = [
    {
        title: "工程质量智能检测",
        icon: Search,
        items: ["混凝土裂缝识别", "表面缺陷识别", "焊接质量识别", "钢结构偏移检测"],
        accent: "text-orange-400",
        accentBg: "bg-orange-500/10",
    },
    {
        title: "成本与风险控制",
        icon: AlertTriangle,
        items: ["材料消耗异常识别", "采购价格异常分析", "合同条款风险识别", "预算偏差预警"],
        accent: "text-rose-400",
        accentBg: "bg-rose-500/10",
    },
    {
        title: "智能设备管理",
        icon: Wrench,
        items: ["塔吊安全监测", "起重设备异常识别", "设备使用率分析", "预测性维护"],
        accent: "text-cyan-400",
        accentBg: "bg-cyan-500/10",
    },
];

const architectureLayers = [
    {
        title: "数据层",
        icon: Layers,
        items: ["视频监控", "无人机航拍", "BIM模型", "CAD图纸", "施工日志", "传感器数据"],
    },
    {
        title: "AI能力层",
        icon: Brain,
        items: ["视觉识别模型", "3D建模对比", "图纸解析引擎", "风险预测模型", "工程知识图谱"],
    },
    {
        title: "应用层",
        icon: Cpu,
        items: ["智慧工地平台", "进度管理系统", "图纸审查系统", "风险预警系统", "数据驾驶舱"],
    },
];

const stats = [
    { label: "安全事故率下降", value: 40, suffix: "%", icon: Shield },
    { label: "审图效率提升", value: 60, suffix: "%", icon: FileText },
    { label: "进度统计效率提升", value: 70, suffix: "%", icon: BarChart3 },
    { label: "人工巡检成本降低", value: 50, suffix: "%", icon: TrendingUp },
];

const clientTypes = [
    { icon: Building2, label: "房地产开发" },
    { icon: Construction, label: "市政工程" },
    { icon: Train, label: "轨道交通" },
    { icon: CircleDot, label: "桥梁隧道" },
    { icon: Factory, label: "工业园区建设" },
    { icon: Package, label: "大型基建项目" },
];

const securityItems = [
    { icon: Server, label: "私有化部署", desc: "数据不出工地，确保信息安全" },
    { icon: Cpu, label: "边缘计算节点", desc: "现场实时推理，低延迟响应" },
    { icon: Video, label: "本地视频分析", desc: "视频流本地处理不上云" },
    { icon: Lock, label: "数据加密存储", desc: "全链路AES-256加密保护" },
    { icon: Shield, label: "分级权限管理", desc: "基于角色的多级权限控制" },
];

const processSteps = [
    { step: 1, icon: Search, title: "需求调研", desc: "深入了解工地现状与管理痛点" },
    { step: 2, icon: ClipboardCheck, title: "方案设计", desc: "定制化AI方案与硬件选型" },
    { step: 3, icon: Server, title: "系统部署", desc: "边缘节点部署与系统集成" },
    { step: 4, icon: Settings, title: "模型调优", desc: "基于真实场景持续优化模型" },
    { step: 5, icon: Headphones, title: "持续运维", desc: "7×24小时技术保障与迭代" },
];

/* ═══════════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════════ */
export default function ConstructionPage() {
    return (
        <main className="min-h-screen text-white selection:bg-amber-500/30 relative overflow-hidden">
            <div className="fixed inset-0 bg-[url('/grid.svg')] opacity-5 pointer-events-none z-0"></div>

            {/* ═══ HERO ═══ */}
            <section className="relative pt-32 pb-24 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-900/25 via-orange-900/10 to-transparent"></div>
                <div className="absolute top-20 left-[10%] w-2 h-2 bg-amber-400/40 rounded-full animate-pulse"></div>
                <div className="absolute top-40 right-[20%] w-1.5 h-1.5 bg-orange-400/40 rounded-full animate-pulse delay-700"></div>
                <div className="absolute bottom-20 left-[30%] w-1 h-1 bg-yellow-400/40 rounded-full animate-pulse delay-1000"></div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 text-sm mb-8">
                        <HardHat className="w-4 h-4" />
                        AI + 建筑工程解决方案
                    </div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
                        <span className="block text-white mb-2">智能建造与安全监控</span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-red-400">
                            AI赋能建筑全流程
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
                        通过人工智能技术重构工程管理流程
                        <br />
                        实现<span className="text-white font-medium">施工安全可控</span>、
                        <span className="text-white font-medium">进度可视</span>、
                        <span className="text-white font-medium">成本可管</span>、
                        <span className="text-white font-medium">风险可预警</span>
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-4">
                        <Link href="/demo" className="px-8 py-3.5 rounded-lg bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold hover:shadow-lg hover:shadow-amber-500/25 transition-all hover:-translate-y-0.5">
                            预约演示
                        </Link>
                        <a href="#scenarios" className="px-8 py-3.5 rounded-lg border border-white/20 text-white font-semibold hover:bg-white/5 transition-all">
                            了解解决方案
                        </a>
                    </div>

                    {/* Coverage tags */}
                    <div className="flex flex-wrap items-center justify-center gap-3 mt-12">
                        {["施工现场", "项目管理", "设计审查", "安全监管", "运营分析"].map((tag) => (
                            <span key={tag} className="px-4 py-1.5 rounded-full border border-amber-500/20 bg-amber-500/5 text-amber-300 text-sm">
                                ✔ {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══ CORE SCENARIOS ═══ */}
            <section id="scenarios" className="relative py-24">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-900/10 via-transparent to-transparent"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">核心应用场景</h2>
                        <p className="text-gray-400 text-lg">三大核心场景，覆盖建筑全生命周期</p>
                    </div>

                    <div className="space-y-24">
                        {scenarios.map((s, i) => (
                            <div key={s.title} className={`flex flex-col lg:flex-row items-start gap-12 ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                                {/* Main Card */}
                                <div className="flex-1 w-full">
                                    <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 lg:p-10 backdrop-blur-sm hover:border-white/20 transition-all">
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className={`w-12 h-12 rounded-xl ${s.accentBg} flex items-center justify-center`}>
                                                <s.icon className={`w-6 h-6 ${s.accent}`} />
                                            </div>
                                            <span className={`text-sm font-medium ${s.accent}`}>{s.title}</span>
                                        </div>
                                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{s.headline}</h3>
                                        <p className="text-gray-400 leading-relaxed mb-8">{s.description}</p>

                                        {/* Feature Grid */}
                                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
                                            {s.features.map((f) => (
                                                <div key={f.label} className={`flex items-center gap-2 px-3 py-2.5 rounded-xl bg-white/[0.03] border ${s.accentBorder}`}>
                                                    <f.icon className={`w-4 h-4 ${s.accent} flex-shrink-0`} />
                                                    <span className="text-gray-300 text-sm">{f.label}</span>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Tech Tags */}
                                        {s.techTags && (
                                            <div className="flex flex-wrap gap-2 mb-6">
                                                {s.techTags.map((t) => (
                                                    <span key={t} className="px-3 py-1 rounded-full text-xs text-gray-400 bg-white/5 border border-white/10">
                                                        {t}
                                                    </span>
                                                ))}
                                            </div>
                                        )}

                                        {/* Values */}
                                        {s.values && (
                                            <div className="pt-5 border-t border-white/10">
                                                <p className="text-xs text-gray-500 font-semibold mb-3">价值体现</p>
                                                <div className="flex flex-wrap gap-2">
                                                    {s.values.map((v) => (
                                                        <span key={v} className={`px-3 py-1.5 rounded-full text-xs ${s.accentBg} ${s.accent} border ${s.accentBorder}`}>
                                                            {v}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        {/* Highlights for scenario 2 */}
                                        {s.highlights && (
                                            <div className="grid grid-cols-2 gap-2 mb-6">
                                                {s.highlights.map((h) => (
                                                    <div key={h} className={`flex items-center gap-2 px-3 py-2 rounded-lg bg-white/[0.02]`}>
                                                        <CheckCircle2 className={`w-3.5 h-3.5 ${s.accent} flex-shrink-0`} />
                                                        <span className="text-gray-400 text-xs">{h}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Side Visual / Comparison */}
                                <div className="flex-1 w-full">
                                    {s.comparison ? (
                                        /* Mini comparison table for scenario 2 */
                                        <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
                                            <h4 className={`text-lg font-bold ${s.accent} mb-6`}>传统 vs AI赋能</h4>
                                            <div className="space-y-3">
                                                {s.comparison.map((c) => (
                                                    <div key={c.label} className="grid grid-cols-3 gap-3 items-center bg-white/[0.03] rounded-xl px-4 py-3 border border-white/5">
                                                        <span className="text-white text-sm font-medium">{c.label}</span>
                                                        <span className="text-gray-500 text-sm text-center">{c.traditional}</span>
                                                        <span className={`${s.accent} text-sm text-center font-bold`}>{c.ai}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    ) : (
                                        /* Visual placeholder */
                                        <div className={`relative w-full aspect-[4/3] rounded-2xl bg-gradient-to-br ${s.color} p-px`}>
                                            <div className="w-full h-full rounded-2xl bg-gray-950/95 flex items-center justify-center overflow-hidden">
                                                <div className="text-center p-8">
                                                    <s.icon className={`w-20 h-20 ${s.accent} mx-auto mb-4 opacity-30`} />
                                                    <p className={`text-lg font-bold ${s.accent}`}>{s.title}</p>
                                                    <p className="text-gray-500 text-sm mt-2">AI驱动的智能解决方案</p>
                                                </div>
                                                <div className="absolute inset-0 overflow-hidden rounded-2xl">
                                                    <div className={`absolute top-0 left-0 w-full h-px bg-gradient-to-r ${s.color} opacity-30`}></div>
                                                    <div className={`absolute bottom-0 left-0 w-full h-px bg-gradient-to-r ${s.color} opacity-30`}></div>
                                                    <div className={`absolute top-1/3 left-0 w-full h-px bg-gradient-to-r ${s.color} opacity-10`}></div>
                                                    <div className={`absolute top-2/3 left-0 w-full h-px bg-gradient-to-r ${s.color} opacity-10`}></div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══ EXTENDED CAPABILITIES ═══ */}
            <section className="relative py-24">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">扩展应用能力</h2>
                        <p className="text-gray-400 text-lg">更多AI赋能场景，持续扩展中</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {extendedCapabilities.map((c) => (
                            <div key={c.title} className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all">
                                <div className="flex items-center gap-3 mb-5">
                                    <div className={`w-10 h-10 rounded-lg ${c.accentBg} flex items-center justify-center`}>
                                        <c.icon className={`w-5 h-5 ${c.accent}`} />
                                    </div>
                                    <h3 className="text-white font-bold">{c.title}</h3>
                                </div>
                                <div className="space-y-2">
                                    {c.items.map((item) => (
                                        <div key={item} className="flex items-center gap-2 text-gray-400 text-sm">
                                            <CheckCircle2 className={`w-3.5 h-3.5 ${c.accent} flex-shrink-0`} />
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══ PLATFORM ARCHITECTURE ═══ */}
            <section className="relative py-24">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-amber-900/15 via-transparent to-transparent"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">平台整体架构</h2>
                        <p className="text-gray-400 text-lg">从数据采集到智能应用的全栈平台</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {architectureLayers.map((layer, i) => (
                            <div key={layer.title} className="relative">
                                <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 h-full hover:border-amber-500/20 transition-all">
                                    <div className="flex items-center gap-3 mb-5">
                                        <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center">
                                            <layer.icon className="w-5 h-5 text-amber-400" />
                                        </div>
                                        <h3 className="text-white font-bold">{layer.title}</h3>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {layer.items.map((item) => (
                                            <span key={item} className="px-3 py-1.5 rounded-lg text-xs text-gray-300 bg-white/5 border border-white/10">
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                {i < architectureLayers.length - 1 && (
                                    <div className="hidden md:flex absolute top-1/2 -right-4 -translate-y-1/2 z-10">
                                        <ChevronRight className="w-5 h-5 text-amber-500/40" />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══ AI STATS ═══ */}
            <section className="relative py-24">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">AI赋能效果</h2>
                        <p className="text-gray-400 text-lg">用数据证明AI的价值</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                        {stats.map((s) => (
                            <div key={s.label} className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 text-center hover:border-amber-500/20 transition-all group">
                                <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                                    <s.icon className="w-6 h-6 text-amber-400" />
                                </div>
                                <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400 mb-2">
                                    <AnimatedNumber target={s.value} suffix={s.suffix} />
                                </div>
                                <p className="text-gray-400 text-sm">{s.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══ APPLICABLE CLIENTS ═══ */}
            <section className="relative py-24">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">适用行业</h2>
                        <p className="text-gray-400 text-lg">服务各类型建筑与基建项目</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
                        {clientTypes.map((c) => (
                            <div key={c.label} className="bg-white/[0.03] border border-white/10 rounded-xl p-5 text-center hover:border-amber-500/30 transition-all group">
                                <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                                    <c.icon className="w-6 h-6 text-amber-400" />
                                </div>
                                <p className="text-white font-semibold text-sm">{c.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══ DATA SECURITY ═══ */}
            <section className="relative py-24">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-sm mb-4">
                            <Shield className="w-4 h-4" />
                            数据安全保障
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">数据安全与部署</h2>
                        <p className="text-gray-400 text-lg">企业级数据安全保障体系</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
                        {securityItems.map((s) => (
                            <div key={s.label} className="bg-white/[0.03] border border-white/10 rounded-xl p-6 hover:border-green-500/20 transition-all group">
                                <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                    <s.icon className="w-5 h-5 text-green-400" />
                                </div>
                                <p className="text-white font-semibold text-sm mb-1">{s.label}</p>
                                <p className="text-gray-500 text-xs">{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══ PROCESS ═══ */}
            <section className="relative py-24">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-900/10 via-transparent to-transparent"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">合作流程</h2>
                        <p className="text-gray-400 text-lg">五步走，让AI在工地落地</p>
                    </div>

                    <div className="flex flex-col md:flex-row items-stretch gap-4 max-w-5xl mx-auto">
                        {processSteps.map((p, i) => (
                            <div key={p.step} className="flex-1 relative">
                                <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6 text-center h-full hover:border-amber-500/30 transition-all group">
                                    <div className="text-5xl font-black text-white/[0.05] absolute top-3 right-4">{p.step}</div>
                                    <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                                        <p.icon className="w-6 h-6 text-amber-400" />
                                    </div>
                                    <p className="text-white font-bold text-sm mb-1">{p.title}</p>
                                    <p className="text-gray-500 text-xs">{p.desc}</p>
                                </div>
                                {i < processSteps.length - 1 && (
                                    <div className="hidden md:flex absolute top-1/2 -right-3 -translate-y-1/2 z-10">
                                        <ChevronRight className="w-5 h-5 text-amber-500/40" />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══ CTA ═══ */}
            <section className="relative py-24">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-amber-900/25 via-orange-900/10 to-transparent"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-3xl mx-auto">
                        <div className="text-center mb-10">
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                                开启智能建造之旅
                            </h2>
                            <p className="text-gray-400 text-lg">
                                让AI成为工程管理的数字化引擎，实现安全、高效、可控的智慧工地
                            </p>
                        </div>
                        <DemoForm industry="建筑工程" />
                    </div>
                </div>
            </section>
        </main>
    );
}
