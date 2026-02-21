import {
    Globe, Rocket, Shield, BarChart3, Users, Building2,
    Search, FileText, TrendingUp, Target, Zap,
    CheckCircle2, ArrowRight, Star, Network, Mail,
    Award, MapPin, Lock, Languages, PenTool, ChevronRight, Layers
} from "lucide-react";
import DemoForm from "@/components/demo/DemoForm";

export const metadata = {
    title: '出海服务（北美市场）| 北京圣唐科技有限公司',
    description: '北美软件出海加速平台 — 提供出海评估、本地化改造、合规架构、北美获客、本地代表等一站式出海服务。',
};

/* ─── Data ─── */

const platformModules = [
    {
        icon: Search,
        title: "出海评估系统",
        subtitle: "SaaS出海智能评估",
        tag: "入口产品",
        tagColor: "bg-blue-500/20 text-blue-400 border-blue-500/30",
        color: "border-blue-500/20 hover:border-blue-500/50",
        iconBg: "bg-blue-500/10",
        iconColor: "text-blue-400",
        description: "输入行业、产品类型、客户类型、价格区间，AI自动生成出海可行性报告。",
        outputs: ["北美市场评分", "竞争强度分析", "定价建议", "合规建议", "进入路径规划"],
    },
    {
        icon: Languages,
        title: "本地化改造工具",
        subtitle: "AI驱动产品本地化",
        tag: "SaaS工具",
        tagColor: "bg-violet-500/20 text-violet-400 border-violet-500/30",
        color: "border-violet-500/20 hover:border-violet-500/50",
        iconBg: "bg-violet-500/10",
        iconColor: "text-violet-400",
        description: "产品化、自动化的本地化改造工具集，减少人工干预，加速出海进程。",
        outputs: ["UI英文化辅助", "隐私政策自动生成", "Terms生成工具", "CCPA/GDPR检测", "美式销售文案生成"],
    },
    {
        icon: Shield,
        title: "合规与架构方案",
        subtitle: "一站式合规保障",
        tag: "专家网络",
        tagColor: "bg-purple-500/20 text-purple-400 border-purple-500/30",
        color: "border-purple-500/20 hover:border-purple-500/50",
        iconBg: "bg-purple-500/10",
        iconColor: "text-purple-400",
        description: "整合SOC2顾问、法律顾问、税务顾问、AWS架构专家等专业资源。",
        outputs: ["SOC2认证辅导", "美国公司注册", "税务合规方案", "云架构设计", "数据合规审查"],
    },
    {
        icon: TrendingUp,
        title: "北美获客系统",
        subtitle: "出海增长引擎",
        tag: "增长系统",
        tagColor: "bg-fuchsia-500/20 text-fuchsia-400 border-fuchsia-500/30",
        color: "border-fuchsia-500/20 hover:border-fuchsia-500/50",
        iconBg: "bg-fuchsia-500/10",
        iconColor: "text-fuchsia-400",
        description: "从官网优化到销售漏斗设计，覆盖北美SaaS获客全链路。",
        outputs: ["英文官网优化", "SEO策略模板", "LinkedIn自动触达", "冷邮件系统", "Product Hunt发布"],
    },
    {
        icon: Users,
        title: "北美本地代表网络",
        subtitle: "最强出海壁垒",
        tag: "核心壁垒",
        tagColor: "bg-indigo-500/20 text-indigo-400 border-indigo-500/30",
        color: "border-indigo-500/20 hover:border-indigo-500/50",
        iconBg: "bg-indigo-500/10",
        iconColor: "text-indigo-400",
        description: "搭建美国本地销售代表、渠道代理、展会合作等本地化网络。",
        outputs: ["本地销售代表", "渠道代理网络", "展会合作网络", "客户对接服务", "本地BD支持"],
    },
];

const pricingPlans = [
    {
        name: "基础会员",
        price: "$999",
        period: "/年",
        description: "适合初步探索北美市场的企业",
        features: [
            "出海评估报告（不限次数）",
            "本地化工具全套使用",
            "隐私政策 & Terms 生成",
            "CCPA/GDPR合规检测",
            "定价换算工具",
            "邮件支持",
        ],
        highlight: false,
        cta: "开始出海之旅",
    },
    {
        name: "高级会员",
        price: "$5,000",
        period: "/年起",
        description: "适合认真规划北美市场的企业",
        features: [
            "基础会员全部权益",
            "专属出海顾问1对1",
            "SOC2/合规咨询对接",
            "北美获客方案定制",
            "LinkedIn获客系统配置",
            "月度策略复盘会议",
        ],
        highlight: true,
        cta: "获取定制方案",
    },
    {
        name: "战略合伙人",
        price: "$20,000",
        period: "/年起",
        description: "全方位出海加速，配备本地团队",
        features: [
            "高级会员全部权益",
            "北美本地销售代表",
            "渠道代理网络接入",
            "展会联合参展",
            "北美客户对接",
            "股权换服务可选",
        ],
        highlight: false,
        cta: "申请战略合作",
    },
];

const verticals = [
    { icon: Zap, label: "AI企业软件", desc: "智能化SaaS产品出海" },
    { icon: Building2, label: "建筑科技", desc: "ConTech北美市场" },
    { icon: FileText, label: "审计风控", desc: "GRC合规工具出海" },
    { icon: Star, label: "医疗科技", desc: "HealthTech出海" },
    { icon: Layers, label: "垂直行业SaaS", desc: "行业深度解决方案" },
];



const barriers = [
    { icon: MapPin, label: "北美本地资源", desc: "深度的本地化合作网络" },
    { icon: FileText, label: "出海知识库", desc: "行业领先的出海方法论" },
    { icon: Award, label: "案例积累", desc: "真实可验证的成功案例" },
    { icon: Network, label: "合作网络", desc: "顾问、代理、渠道生态" },
    { icon: Target, label: "行业垂直化", desc: "深耕垂直赛道的专业壁垒" },
];

export default function OverseasPage() {
    return (
        <main className="min-h-screen text-white pt-20">
            {/* ━━━ Hero ━━━ */}
            <section className="relative py-24 md:py-32 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/40 via-black to-black" />
                <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-purple-600/15 rounded-full blur-[150px] pointer-events-none" />
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-sm font-medium mb-8">
                        <Globe className="w-4 h-4" />
                        North America SaaS Expansion Infrastructure
                    </div>

                    <h1 className="text-4xl md:text-7xl font-bold mb-6 tracking-tight">
                        <span className="block text-white mb-2">中国软件企业进入北美的</span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-fuchsia-500">
                            基础设施平台
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-4 leading-relaxed font-light">
                        不只是翻译服务，而是<span className="text-white font-medium">出海工具</span>、
                        <span className="text-white font-medium">出海合规</span>、
                        <span className="text-white font-medium">出海获客</span>、
                        <span className="text-white font-medium">出海销售</span>的<br className="hidden md:block" />
                        一站式整合平台
                    </p>
                    <p className="text-gray-500 mb-12">聚焦 AI企业软件 · 垂直行业SaaS · 医疗科技 · 建筑科技 · 审计风控</p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <a href="#demo" className="w-full sm:w-auto">
                            <button className="w-full px-8 py-3.5 rounded-lg bg-gradient-to-r from-blue-600 via-purple-600 to-fuchsia-500 text-white font-semibold hover:shadow-[0_0_40px_rgba(139,92,246,0.4)] transition-all hover:-translate-y-0.5 inline-flex items-center justify-center gap-2">
                                免费获取出海评估 <ArrowRight className="w-5 h-5" />
                            </button>
                        </a>
                        <a href="#pricing" className="w-full sm:w-auto">
                            <button className="w-full px-8 py-3.5 rounded-lg border border-white/20 text-white font-semibold hover:bg-white/5 transition-all hover:-translate-y-0.5">
                                查看会员方案
                            </button>
                        </a>
                    </div>
                </div>
            </section>

            {/* ━━━ Platform Modules ━━━ */}
            <section className="relative py-24 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-purple-900/15 via-transparent to-transparent" />
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">五大核心模块</h2>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">模块化、产品化的出海基础设施，覆盖从评估到落地全流程</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {platformModules.map((mod) => (
                            <div key={mod.title} className={`bg-white/[0.03] border ${mod.color} rounded-2xl p-8 backdrop-blur-sm transition-all`}>
                                <div className="flex items-start justify-between mb-4">
                                    <div className={`w-12 h-12 rounded-xl ${mod.iconBg} flex items-center justify-center`}>
                                        <mod.icon className={`w-6 h-6 ${mod.iconColor}`} />
                                    </div>
                                    <span className={`px-3 py-1 rounded-full border text-xs font-medium ${mod.tagColor}`}>{mod.tag}</span>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-1">{mod.title}</h3>
                                <p className="text-gray-500 text-sm mb-4">{mod.subtitle}</p>
                                <p className="text-gray-400 text-sm mb-6 leading-relaxed">{mod.description}</p>
                                <div className="space-y-2">
                                    {mod.outputs.map((item) => (
                                        <div key={item} className="flex items-center gap-2 text-sm text-gray-300">
                                            <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" />
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ━━━ Vertical Focus ━━━ */}
            <section className="relative py-24 overflow-hidden">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">聚焦垂直赛道</h2>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">不做泛出海，深耕垂直行业AI出海，打造差异化竞争力</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-5xl mx-auto">
                        {verticals.map((v) => (
                            <div key={v.label} className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 text-center hover:border-purple-500/30 transition-all group">
                                <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                                    <v.icon className="w-6 h-6 text-purple-400" />
                                </div>
                                <h3 className="text-white font-bold text-sm mb-1">{v.label}</h3>
                                <p className="text-gray-500 text-xs">{v.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ━━━ How It Works ━━━ */}
            <section className="relative py-24 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/15 via-transparent to-transparent" />
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">出海四步流程</h2>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">从评估到落地，四步完成出海</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
                        {[
                            { step: "01", title: "出海评估", desc: "AI智能分析市场可行性、竞争态势、合规要求", icon: Search },
                            { step: "02", title: "产品改造", desc: "本地化UI、合规文档、定价策略、文案优化", icon: PenTool },
                            { step: "03", title: "合规落地", desc: "公司注册、SOC2认证、税务合规、架构部署", icon: Shield },
                            { step: "04", title: "增长获客", desc: "SEO优化、LinkedIn触达、销售漏斗、渠道拓展", icon: Rocket },
                        ].map((item, i) => (
                            <div key={item.step} className="relative">
                                <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 hover:border-blue-500/30 transition-all text-center">
                                    <span className="text-5xl font-black text-white/[0.05] absolute top-4 right-6">{item.step}</span>
                                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mx-auto mb-4">
                                        <item.icon className="w-6 h-6 text-blue-400" />
                                    </div>
                                    <h3 className="text-white font-bold mb-2">{item.title}</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                                {i < 3 && (
                                    <div className="hidden md:flex absolute top-1/2 -right-3 z-10">
                                        <ChevronRight className="w-5 h-5 text-blue-500/40" />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ━━━ Pricing ━━━ */}
            <section id="pricing" className="relative py-24 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/15 via-transparent to-transparent" />
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">会员方案</h2>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">从探索到全面出海，选择适合您的方案</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {pricingPlans.map((plan) => (
                            <div
                                key={plan.name}
                                className={`relative rounded-2xl p-8 transition-all ${plan.highlight
                                    ? 'bg-gradient-to-b from-purple-500/10 to-blue-500/5 border-2 border-purple-500/40 shadow-[0_0_40px_rgba(139,92,246,0.15)]'
                                    : 'bg-white/[0.03] border border-white/10 hover:border-white/20'
                                    }`}
                            >
                                {plan.highlight && (
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-bold">
                                        最受欢迎
                                    </div>
                                )}
                                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                                <p className="text-gray-500 text-sm mb-6">{plan.description}</p>
                                <div className="mb-8">
                                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                                    <span className="text-gray-500 text-sm ml-1">{plan.period}</span>
                                </div>
                                <ul className="space-y-3 mb-8">
                                    {plan.features.map((f) => (
                                        <li key={f} className="flex items-start gap-2 text-sm text-gray-300">
                                            <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                                <a href="#demo">
                                    <button className={`w-full py-3 rounded-lg font-semibold transition-all ${plan.highlight
                                        ? 'bg-gradient-to-r from-blue-600 via-purple-600 to-fuchsia-500 text-white hover:shadow-[0_0_30px_rgba(139,92,246,0.3)]'
                                        : 'border border-white/20 text-white hover:bg-white/5'
                                        }`}>
                                        {plan.cta}
                                    </button>
                                </a>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-8">
                        <p className="text-gray-500 text-sm">另支持：交易额抽佣 5%-15% · 合规/注册服务抽佣 · AI创业公司股权换服务</p>
                    </div>
                </div>
            </section>

            {/* ━━━ Core Barriers ━━━ */}
            <section className="relative py-24 overflow-hidden">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">我们的核心壁垒</h2>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">规模化平台的护城河，不可轻易复制</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-5xl mx-auto">
                        {barriers.map((b) => (
                            <div key={b.label} className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 text-center hover:border-blue-500/30 transition-all group">
                                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                                    <b.icon className="w-6 h-6 text-blue-400" />
                                </div>
                                <h3 className="text-white font-bold text-sm mb-1">{b.label}</h3>
                                <p className="text-gray-500 text-xs">{b.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>



            {/* ━━━ Demo Form CTA ━━━ */}
            <section id="demo" className="relative py-24 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-black" />
                <div className="container mx-auto px-4 relative z-10 max-w-2xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">开启北美出海之旅</h2>
                        <p className="text-gray-400 text-lg">填写信息，获取免费出海评估报告</p>
                    </div>
                    <DemoForm industry="出海服务" />
                </div>
            </section>
        </main>
    );
}
