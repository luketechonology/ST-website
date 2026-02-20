"use client";

import {
    Activity,
    Brain,
    Heart,
    Shield,
    Server,
    Lock,
    Eye,
    FileText,
    Users,
    Building2,
    Hospital,
    Stethoscope,
    ArrowRight,
    ChevronRight,
    Zap,
    BarChart3,
    Clock,
    CheckCircle2,
    Sparkles,
    Network,
    MessageSquare,
    Search,
    Settings,
    Headphones,
    ClipboardCheck,
    TrendingUp,
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

/* ─── Scenarios Data ─── */
const scenarios = [
    {
        icon: Eye,
        title: "医学影像辅助诊断",
        headline: "AI影像识别 · 提升诊断效率与准确率",
        description: "AI自动分析CT、MRI、DR、超声等影像数据，精准标注病灶区域，辅助医生快速判断，提高诊断一致性。",
        features: [
            "自动病灶检测与标注",
            "多模态影像融合分析",
            "病灶风险等级评估",
            "自动生成辅助诊断报告",
        ],
        color: "from-blue-500 to-cyan-400",
        accent: "text-cyan-400",
        accentBg: "bg-cyan-500/10",
        accentBorder: "border-cyan-500/20",
    },
    {
        icon: FileText,
        title: "智能病历质控",
        headline: "全流程病历质控 · 降低医疗风险",
        description: "基于自然语言处理技术，自动检查病历规范性、完整性与合规性，提前识别潜在医疗风险。",
        features: [
            "病历书写规范检查",
            "术前术后记录审查",
            "DRG编码辅助校验",
            "医疗风险提示与评分",
        ],
        values: [
            "降低医保扣费风险",
            "减少医疗纠纷隐患",
            "提升医院等级评审通过率",
        ],
        color: "from-purple-500 to-violet-400",
        accent: "text-violet-400",
        accentBg: "bg-violet-500/10",
        accentBorder: "border-violet-500/20",
    },
    {
        icon: Heart,
        title: "个性化健康管理",
        headline: "从治疗到预防 · 打造智能健康管理体系",
        description: "基于患者多维数据构建健康画像，预测慢病风险，生成个性化康复与健康管理方案。",
        features: [
            "慢病风险预测模型",
            "用药依从性提醒",
            "个性化康复计划生成",
            "智能随访管理",
        ],
        color: "from-rose-500 to-pink-400",
        accent: "text-pink-400",
        accentBg: "bg-pink-500/10",
        accentBorder: "border-pink-500/20",
    },
];

/* ─── AI中台能力 ─── */
const capabilities = [
    { icon: Network, label: "医疗知识图谱" },
    { icon: MessageSquare, label: "NLP语义理解引擎" },
    { icon: Eye, label: "深度学习影像模型" },
    { icon: TrendingUp, label: "医疗风险预测模型" },
    { icon: Brain, label: "大模型问答系统" },
];

/* ─── 安全合规 ─── */
const securityItems = [
    { icon: Server, label: "本地私有化部署", desc: "数据不出院区，确保信息安全" },
    { icon: Lock, label: "数据加密存储", desc: "全链路AES-256加密保护" },
    { icon: Shield, label: "访问权限分级控制", desc: "基于角色的精细化权限管理" },
    { icon: Search, label: "操作日志可追溯", desc: "全操作轨迹审计追踪" },
    { icon: CheckCircle2, label: "医疗数据合规", desc: "满足等保三级及医疗行业规范" },
];

/* ─── 对比数据 ─── */
const comparisons = [
    { label: "影像判读时间", traditional: "15分钟", ai: "3分钟", improvement: "80" },
    { label: "病历质检效率", traditional: "人工抽检", ai: "全量自动检测", improvement: "100" },
    { label: "医疗风险识别率", traditional: "65%", ai: "92%", improvement: "42" },
    { label: "报告生成时间", traditional: "1天", ai: "5分钟", improvement: "99" },
];

/* ─── 适用客户 ─── */
const clients = [
    { icon: Hospital, label: "三甲医院" },
    { icon: Building2, label: "二级医院" },
    { icon: Stethoscope, label: "专科医院" },
    { icon: Users, label: "医疗集团" },
    { icon: Activity, label: "区域医疗中心" },
];

/* ─── 合作流程 ─── */
const process = [
    { step: 1, icon: Search, title: "需求调研", desc: "深入了解医院信息化现状与AI需求" },
    { step: 2, icon: ClipboardCheck, title: "方案设计", desc: "定制化AI解决方案与技术选型" },
    { step: 3, icon: Server, title: "系统部署", desc: "私有化部署与系统集成对接" },
    { step: 4, icon: Settings, title: "模型优化", desc: "基于真实数据持续优化AI模型" },
    { step: 5, icon: Headphones, title: "持续运维支持", desc: "7×24小时技术保障与迭代升级" },
];

/* ═══════════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════════ */
export default function MedicalPage() {
    return (
        <main className="min-h-screen text-white selection:bg-brand-blue/30 relative overflow-hidden">
            {/* grid overlay */}
            <div className="fixed inset-0 bg-[url('/grid.svg')] opacity-5 pointer-events-none z-0"></div>

            {/* ═══ HERO ═══ */}
            <section className="relative pt-32 pb-24 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-blue/25 via-brand-purple/10 to-transparent"></div>
                {/* floating particles */}
                <div className="absolute top-20 left-[15%] w-2 h-2 bg-cyan-400/40 rounded-full animate-pulse"></div>
                <div className="absolute top-40 right-[20%] w-1.5 h-1.5 bg-purple-400/40 rounded-full animate-pulse delay-700"></div>
                <div className="absolute bottom-20 left-[30%] w-1 h-1 bg-pink-400/40 rounded-full animate-pulse delay-1000"></div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm mb-8">
                        <Activity className="w-4 h-4" />
                        AI + 医疗解决方案
                    </div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
                        <span className="block text-white mb-2">AI赋能医疗</span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
                            智能提升诊疗质量
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
                        以<span className="text-white font-medium">医学影像识别</span>、
                        <span className="text-white font-medium">智能病历质控</span>与
                        <span className="text-white font-medium">个性化健康管理</span>为核心
                        <br />
                        构建覆盖诊疗全流程的智能医疗解决方案
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-4">
                        <a href="#demo" className="px-8 py-3.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all hover:-translate-y-0.5">
                            预约演示
                        </a>
                        <a href="#scenarios" className="px-8 py-3.5 rounded-lg border border-white/20 text-white font-semibold hover:bg-white/5 transition-all">
                            了解解决方案
                        </a>
                    </div>
                </div>
            </section>

            {/* ═══ CORE SCENARIOS ═══ */}
            <section id="scenarios" className="relative py-24">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-purple/10 via-transparent to-transparent"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">核心应用场景</h2>
                        <p className="text-gray-400 text-lg">三大核心场景，覆盖诊疗全流程</p>
                    </div>

                    <div className="space-y-20">
                        {scenarios.map((s, i) => (
                            <div key={s.title} className={`flex flex-col lg:flex-row items-center gap-12 ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                                {/* Info Card */}
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

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                            {s.features.map((f) => (
                                                <div key={f} className={`flex items-center gap-2 px-4 py-3 rounded-xl bg-white/[0.03] border ${s.accentBorder}`}>
                                                    <CheckCircle2 className={`w-4 h-4 ${s.accent} flex-shrink-0`} />
                                                    <span className="text-gray-300 text-sm">{f}</span>
                                                </div>
                                            ))}
                                        </div>

                                        {s.values && (
                                            <div className="mt-6 pt-6 border-t border-white/10">
                                                <p className="text-sm text-gray-500 mb-3 font-semibold">价值体现</p>
                                                <div className="flex flex-wrap gap-2">
                                                    {s.values.map((v) => (
                                                        <span key={v} className={`px-3 py-1.5 rounded-full text-xs ${s.accentBg} ${s.accent} border ${s.accentBorder}`}>
                                                            {v}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Visual side */}
                                <div className="flex-1 w-full">
                                    <div className={`relative w-full aspect-[4/3] rounded-2xl bg-gradient-to-br ${s.color} p-px`}>
                                        <div className="w-full h-full rounded-2xl bg-gray-950/95 flex items-center justify-center overflow-hidden">
                                            <div className="text-center p-8">
                                                <s.icon className={`w-20 h-20 ${s.accent} mx-auto mb-4 opacity-30`} />
                                                <p className={`text-lg font-bold ${s.accent}`}>{s.title}</p>
                                                <p className="text-gray-500 text-sm mt-2">AI驱动的智能解决方案</p>
                                            </div>
                                            {/* decorative lines */}
                                            <div className="absolute inset-0 overflow-hidden rounded-2xl">
                                                <div className={`absolute top-0 left-0 w-full h-px bg-gradient-to-r ${s.color} opacity-30`}></div>
                                                <div className={`absolute bottom-0 left-0 w-full h-px bg-gradient-to-r ${s.color} opacity-30`}></div>
                                                <div className={`absolute top-1/3 left-0 w-full h-px bg-gradient-to-r ${s.color} opacity-10`}></div>
                                                <div className={`absolute top-2/3 left-0 w-full h-px bg-gradient-to-r ${s.color} opacity-10`}></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══ AI CAPABILITY CENTER ═══ */}
            <section className="relative py-24">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">AI能力中台</h2>
                        <p className="text-gray-400 text-lg">打造可扩展的医疗智能中枢</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                        {capabilities.map((c) => (
                            <div key={c.label} className="bg-white/[0.03] border border-white/10 rounded-xl p-6 text-center hover:border-cyan-500/30 transition-all group">
                                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                                    <c.icon className="w-6 h-6 text-cyan-400" />
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
                            医疗级安全保障
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">数据安全与合规</h2>
                        <p className="text-gray-400 text-lg">医疗级数据安全保障体系</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
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

            {/* ═══ AI vs TRADITIONAL COMPARISON ═══ */}
            <section className="relative py-24">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-purple/15 via-transparent to-transparent"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">AI赋能效果对比</h2>
                        <p className="text-gray-400 text-lg">用数据证明AI的价值</p>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        {/* Table Header */}
                        <div className="grid grid-cols-4 gap-4 mb-4 px-6">
                            <div className="text-gray-500 text-sm font-semibold">指标</div>
                            <div className="text-gray-500 text-sm font-semibold text-center">传统模式</div>
                            <div className="text-cyan-400 text-sm font-semibold text-center">AI赋能</div>
                            <div className="text-gray-500 text-sm font-semibold text-center">提升</div>
                        </div>

                        {/* Table Rows */}
                        <div className="space-y-3">
                            {comparisons.map((c) => (
                                <div key={c.label} className="grid grid-cols-4 gap-4 items-center bg-white/[0.03] border border-white/10 rounded-xl px-6 py-5 hover:border-cyan-500/20 transition-colors">
                                    <div className="text-white font-medium text-sm">{c.label}</div>
                                    <div className="text-gray-500 text-sm text-center">{c.traditional}</div>
                                    <div className="text-cyan-400 font-bold text-sm text-center">{c.ai}</div>
                                    <div className="text-center">
                                        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-bold">
                                            <TrendingUp className="w-3 h-3" />
                                            <AnimatedNumber target={parseInt(c.improvement)} suffix="%" />
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══ APPLICABLE CLIENTS ═══ */}
            <section className="relative py-24">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">适用客户</h2>
                        <p className="text-gray-400 text-lg">服务各类型医疗机构</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-4xl mx-auto">
                        {clients.map((c) => (
                            <div key={c.label} className="bg-white/[0.03] border border-white/10 rounded-xl p-6 text-center hover:border-brand-purple/30 transition-all group">
                                <div className="w-12 h-12 rounded-xl bg-brand-purple/10 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                                    <c.icon className="w-6 h-6 text-brand-purple" />
                                </div>
                                <p className="text-white font-semibold text-sm">{c.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══ COOPERATION PROCESS ═══ */}
            <section className="relative py-24">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-blue/10 via-transparent to-transparent"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">合作流程</h2>
                        <p className="text-gray-400 text-lg">五步走，让AI在医院落地</p>
                    </div>

                    <div className="flex flex-col md:flex-row items-stretch gap-4 max-w-5xl mx-auto">
                        {process.map((p, i) => (
                            <div key={p.step} className="flex-1 relative">
                                <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6 text-center h-full hover:border-blue-500/30 transition-all group">
                                    <div className="text-5xl font-black text-white/[0.05] absolute top-3 right-4">{p.step}</div>
                                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                                        <p.icon className="w-6 h-6 text-blue-400" />
                                    </div>
                                    <p className="text-white font-bold text-sm mb-1">{p.title}</p>
                                    <p className="text-gray-500 text-xs">{p.desc}</p>
                                </div>
                                {/* Arrow connector */}
                                {i < process.length - 1 && (
                                    <div className="hidden md:flex absolute top-1/2 -right-3 -translate-y-1/2 z-10">
                                        <ChevronRight className="w-5 h-5 text-blue-500/40" />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══ CTA ═══ */}
            <section id="demo" className="relative py-24">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-brand-blue/25 via-brand-purple/10 to-transparent"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-3xl mx-auto">
                        <div className="text-center mb-10">
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                                开启医疗AI智能化之旅
                            </h2>
                            <p className="text-gray-400 text-lg">
                                让AI成为医疗机构提升诊疗质量的核心引擎
                            </p>
                        </div>
                        <DemoForm industry="医疗" />
                    </div>
                </div>
            </section>
        </main>
    );
}
