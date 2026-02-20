"use client";

import {
    Pickaxe,
    Shield,
    Activity,
    Truck,
    Gauge,
    Thermometer,
    Wind,
    ArrowRight,
    ChevronRight,
    CheckCircle2,
    TrendingUp,
    TrendingDown,
    Zap,
    Eye,
    Radio,
    Cpu,
    Server,
    Lock,
    Search,
    ClipboardCheck,
    Settings,
    Headphones,
    Brain,
    Network,
    BarChart3,
    Users,
    Factory,
    Mountain,
    CircleDot,
    Layers,
    Wrench,
    AlertTriangle,
    Timer,
    MapPin,
    Radar,
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
        icon: Activity,
        title: "矿山设备预测性维护",
        subtitle: "Predictive Maintenance",
        headline: "告别盲目维修，防患于未然",
        description: "全面监测采煤机、提升机等核心设备的实时运行数据。依托AI机器学习算法，提前预测潜在故障节点，大幅减少非计划停机时间，降低运维成本，延长设备全生命周期。",
        features: [
            { icon: Gauge, label: "设备运行状态实时监测" },
            { icon: TrendingUp, label: "故障趋势智能预判" },
            { icon: Timer, label: "非计划停机预警" },
            { icon: Wrench, label: "最优维护策略推荐" },
            { icon: BarChart3, label: "设备健康度评分" },
            { icon: Layers, label: "全生命周期管理" },
        ],
        techTags: ["振动频谱分析", "机器学习模型", "时间序列预测", "数字孪生"],
        color: "from-emerald-500 to-teal-400",
        accent: "text-emerald-400",
        accentBg: "bg-emerald-500/10",
        accentBorder: "border-emerald-500/20",
    },
    {
        icon: Truck,
        title: "无人驾驶矿卡调度",
        subtitle: "Unmanned Truck Scheduling",
        headline: "全局最优规划，全天候高效运输",
        description: "融合机器视觉与多传感器技术，智能规划最优运输路径。实现矿用重型卡车的L4级无人驾驶与多车编队协同运行，彻底规避疲劳驾驶风险，提升整体矿区物流吞吐量。",
        features: [
            { icon: MapPin, label: "最优路径智能规划" },
            { icon: Eye, label: "L4级自动驾驶" },
            { icon: Users, label: "多车编队协同" },
            { icon: Radar, label: "障碍物实时感知" },
            { icon: Radio, label: "V2X车路协同" },
            { icon: Cpu, label: "全天候运行保障" },
        ],
        techTags: ["机器视觉", "激光雷达LiDAR", "多传感器融合", "路径优化算法"],
        color: "from-blue-500 to-indigo-400",
        accent: "text-blue-400",
        accentBg: "bg-blue-500/10",
        accentBorder: "border-blue-500/20",
    },
    {
        icon: Shield,
        title: "井下安全监测",
        subtitle: "Underground Safety Monitoring",
        headline: "实时精准洞察，筑牢生命防线",
        description: "7×24小时无死角监测井下瓦斯浓度、温湿度、粉尘等关键环境数据。通过AI智能预警模型，秒级识别异常波动并触发多级联动报警，让安全管理从'事后追溯'走向'事前预防'。",
        features: [
            { icon: Wind, label: "瓦斯浓度实时监测" },
            { icon: Thermometer, label: "温湿度环境感知" },
            { icon: CircleDot, label: "粉尘浓度预警" },
            { icon: AlertTriangle, label: "多级联动报警" },
            { icon: Network, label: "传感器数据融合" },
            { icon: Brain, label: "AI风险预判模型" },
        ],
        techTags: ["IoT传感网络", "边缘计算推理", "异常检测模型", "多级联动报警"],
        color: "from-rose-500 to-red-400",
        accent: "text-rose-400",
        accentBg: "bg-rose-500/10",
        accentBorder: "border-rose-500/20",
    },
];

const valueProps = [
    {
        icon: Shield,
        title: "极致安全",
        description: "将人员从高危、恶劣的作业环境中解放出来，实现本质安全。AI系统全天候守护矿山安全底线。",
        accent: "text-emerald-400",
        accentBg: "bg-emerald-500/10",
    },
    {
        icon: TrendingDown,
        title: "降本增效",
        description: "优化设备稼动率与运输能效，降低人工成本与设备维修开支，实现矿山运营效益最大化。",
        accent: "text-blue-400",
        accentBg: "bg-blue-500/10",
    },
    {
        icon: BarChart3,
        title: "数据驱动",
        description: "打通矿山数据孤岛，让每一个决策都有据可依，打造真正的透明化智慧矿区。",
        accent: "text-violet-400",
        accentBg: "bg-violet-500/10",
    },
];

const stats = [
    { label: "井下作业人员减少", value: 50, suffix: "%", icon: Users },
    { label: "综采效率提升", value: 30, suffix: "%", icon: TrendingUp },
    { label: "非计划停机降低", value: 45, suffix: "%", icon: Timer },
    { label: "安全事故率下降", value: 60, suffix: "%", icon: Shield },
];

const securityItems = [
    { icon: Server, label: "矿端私有化部署", desc: "数据不出矿区，安全可控" },
    { icon: Cpu, label: "边缘计算节点", desc: "井下实时推理，毫秒级响应" },
    { icon: Lock, label: "数据加密传输", desc: "全链路AES-256加密保护" },
    { icon: Shield, label: "分级权限管理", desc: "基于角色的多级权限控制" },
    { icon: Eye, label: "操作日志审计", desc: "全操作轨迹可追溯可审计" },
];

const processSteps = [
    { step: 1, icon: Search, title: "矿山调研", desc: "深入了解矿山现状与智能化需求" },
    { step: 2, icon: ClipboardCheck, title: "方案定制", desc: "量身定制AI解决方案与硬件选型" },
    { step: 3, icon: Server, title: "系统部署", desc: "边缘节点部署与矿山系统集成" },
    { step: 4, icon: Settings, title: "模型调优", desc: "基于真实矿山数据持续优化模型" },
    { step: 5, icon: Headphones, title: "持续运维", desc: "7×24小时技术保障与迭代升级" },
];

/* ═══════════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════════ */
export default function MiningPage() {
    return (
        <main className="min-h-screen text-white selection:bg-emerald-500/30 relative overflow-hidden">
            <div className="fixed inset-0 bg-[url('/grid.svg')] opacity-5 pointer-events-none z-0"></div>

            {/* ═══ HERO ═══ */}
            <section className="relative pt-32 pb-24 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-900/25 via-teal-900/10 to-transparent"></div>
                {/* Decorative particles */}
                <div className="absolute top-20 left-[12%] w-2 h-2 bg-emerald-400/40 rounded-full animate-pulse"></div>
                <div className="absolute top-48 right-[18%] w-1.5 h-1.5 bg-teal-400/40 rounded-full animate-pulse delay-700"></div>
                <div className="absolute bottom-16 left-[28%] w-1 h-1 bg-green-400/40 rounded-full animate-pulse delay-1000"></div>
                <div className="absolute top-32 right-[35%] w-1 h-1 bg-emerald-300/30 rounded-full animate-pulse delay-500"></div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-sm mb-8">
                        <Pickaxe className="w-4 h-4" />
                        AI + 采矿工程解决方案
                    </div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
                        <span className="block text-white mb-2">重塑智慧矿山</span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400">
                            无人作业新生态
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
                        深度融合人工智能技术，全面推动矿山数字化、智能化转型
                        <br />
                        助您迈入<span className="text-white font-medium">"少人化、无人化"</span>的高效开采新时代
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-4">
                        <a href="#demo" className="px-8 py-3.5 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold hover:shadow-lg hover:shadow-emerald-500/25 transition-all hover:-translate-y-0.5 inline-flex items-center gap-2">
                            获取专属解决方案 <ArrowRight className="w-4 h-4" />
                        </a>
                        <a href="#scenarios" className="px-8 py-3.5 rounded-lg border border-white/20 text-white font-semibold hover:bg-white/5 transition-all">
                            了解核心应用
                        </a>
                    </div>
                </div>
            </section>

            {/* ═══ CORE SCENARIOS ═══ */}
            <section id="scenarios" className="relative py-24">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-900/10 via-transparent to-transparent"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">核心应用场景</h2>
                        <p className="text-gray-400 text-lg">三大AI核心能力，驱动矿山全面智能化</p>
                    </div>

                    <div className="space-y-20">
                        {scenarios.map((s, i) => (
                            <div key={s.title} className={`flex flex-col lg:flex-row items-start gap-10 ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                                {/* Content Card */}
                                <div className="flex-1 w-full">
                                    <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 lg:p-10 backdrop-blur-sm hover:border-white/20 transition-all duration-300 group">
                                        <div className="flex items-center gap-3 mb-2">
                                            <div className={`w-12 h-12 rounded-xl ${s.accentBg} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                                                <s.icon className={`w-6 h-6 ${s.accent}`} />
                                            </div>
                                            <div>
                                                <span className={`text-sm font-bold ${s.accent}`}>{s.title}</span>
                                                <span className="text-gray-600 text-xs block">{s.subtitle}</span>
                                            </div>
                                        </div>
                                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 mt-4">{s.headline}</h3>
                                        <p className="text-gray-400 leading-relaxed mb-8">{s.description}</p>

                                        {/* Capability Grid */}
                                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
                                            {s.features.map((f) => (
                                                <div key={f.label} className={`flex items-center gap-2 px-3 py-2.5 rounded-xl bg-white/[0.03] border ${s.accentBorder} hover:bg-white/[0.06] transition-colors`}>
                                                    <f.icon className={`w-4 h-4 ${s.accent} flex-shrink-0`} />
                                                    <span className="text-gray-300 text-sm">{f.label}</span>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Tech Tags */}
                                        <div className="flex flex-wrap gap-2">
                                            {s.techTags.map((t) => (
                                                <span key={t} className="px-3 py-1 rounded-full text-xs text-gray-400 bg-white/5 border border-white/10">
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Visual Side */}
                                <div className="flex-1 w-full">
                                    <div className={`relative w-full aspect-[4/3] rounded-2xl bg-gradient-to-br ${s.color} p-px`}>
                                        <div className="w-full h-full rounded-2xl bg-gray-950/95 flex items-center justify-center overflow-hidden relative">
                                            <div className="text-center p-8 relative z-10">
                                                <s.icon className={`w-20 h-20 ${s.accent} mx-auto mb-4 opacity-30`} />
                                                <p className={`text-xl font-bold ${s.accent}`}>{s.title}</p>
                                                <p className="text-gray-500 text-sm mt-2">{s.subtitle}</p>
                                            </div>
                                            {/* Decorative grid lines */}
                                            <div className="absolute inset-0 overflow-hidden rounded-2xl">
                                                <div className={`absolute top-0 left-0 w-full h-px bg-gradient-to-r ${s.color} opacity-30`}></div>
                                                <div className={`absolute bottom-0 left-0 w-full h-px bg-gradient-to-r ${s.color} opacity-30`}></div>
                                                {[...Array(4)].map((_, j) => (
                                                    <div key={j} className={`absolute bg-gradient-to-r ${s.color} opacity-[0.06]`}
                                                        style={{ top: `${(j + 1) * 20}%`, left: 0, right: 0, height: '1px' }}
                                                    />
                                                ))}
                                                {[...Array(4)].map((_, j) => (
                                                    <div key={j} className={`absolute bg-gradient-to-b ${s.color} opacity-[0.06]`}
                                                        style={{ left: `${(j + 1) * 20}%`, top: 0, bottom: 0, width: '1px' }}
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══ VALUE PROPOSITION ═══ */}
            <section className="relative py-24">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-teal-900/15 via-transparent to-transparent"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">核心价值与优势</h2>
                        <p className="text-gray-400 text-lg">AI赋能矿山，创造可量化的商业价值</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {valueProps.map((v) => (
                            <div key={v.title} className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-300 group text-center">
                                <div className={`w-16 h-16 rounded-2xl ${v.accentBg} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                                    <v.icon className={`w-8 h-8 ${v.accent}`} />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{v.title}</h3>
                                <p className="text-gray-400 leading-relaxed text-sm">{v.description}</p>
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
                        <p className="text-gray-400 text-lg">以某大型煤矿集团5G+AI智慧矿山项目为例</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                        {stats.map((s) => (
                            <div key={s.label} className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 text-center hover:border-emerald-500/20 transition-all group">
                                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                                    <s.icon className="w-6 h-6 text-emerald-400" />
                                </div>
                                <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400 mb-2">
                                    <AnimatedNumber target={s.value} suffix={s.suffix} />
                                </div>
                                <p className="text-gray-400 text-sm">{s.label}</p>
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
                            安全保障
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">数据安全与部署</h2>
                        <p className="text-gray-400 text-lg">矿山级数据安全保障体系</p>
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

            {/* ═══ COOPERATION PROCESS ═══ */}
            <section className="relative py-24">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-900/10 via-transparent to-transparent"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">合作流程</h2>
                        <p className="text-gray-400 text-lg">五步走，让AI在矿山落地</p>
                    </div>

                    <div className="flex flex-col md:flex-row items-stretch gap-4 max-w-5xl mx-auto">
                        {processSteps.map((p, i) => (
                            <div key={p.step} className="flex-1 relative">
                                <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6 text-center h-full hover:border-emerald-500/30 transition-all group">
                                    <div className="text-5xl font-black text-white/[0.05] absolute top-3 right-4">{p.step}</div>
                                    <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                                        <p.icon className="w-6 h-6 text-emerald-400" />
                                    </div>
                                    <p className="text-white font-bold text-sm mb-1">{p.title}</p>
                                    <p className="text-gray-500 text-xs">{p.desc}</p>
                                </div>
                                {i < processSteps.length - 1 && (
                                    <div className="hidden md:flex absolute top-1/2 -right-3 -translate-y-1/2 z-10">
                                        <ChevronRight className="w-5 h-5 text-emerald-500/40" />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══ CTA ═══ */}
            <section id="demo" className="relative py-24">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-emerald-900/25 via-teal-900/10 to-transparent"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-3xl mx-auto">
                        <div className="text-center mb-10">
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                                准备好开启智慧矿山建设了吗？
                            </h2>
                            <p className="text-gray-400 text-lg">
                                我们的行业专家已准备好为您量身定制AI转型方案
                            </p>
                        </div>
                        <DemoForm industry="采矿工程" />
                    </div>
                </div>
            </section>
        </main>
    );
}
