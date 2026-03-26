import { 
    Database, FileText, GitMerge, Coins, Users, TrendingUp,
    MessageSquare, Plug, PenTool, Search, ShieldCheck, Server,
    Rocket, PiggyBank, Smile, Blocks,
    LineChart, Zap, Network, Cpu, Globe, MonitorSmartphone
} from "lucide-react";
import DemoForm from "@/components/demo/DemoForm";

export const metadata = {
    title: 'AI智能体驱动企业系统转型方案 | 圣唐科技',
    description: '非侵入式 AI 智能体叠加架构。对话即办公，告别繁琐表单录入。不改变原有系统内核，实现业务智能化重塑。',
};

/* --- Data --- */

const painPoints = [
    {
        title: "数据孤岛与系统割裂",
        desc: "ERP、CRM、OA、PM等系统相互独立，信息流转依赖人工搬运，无法实现真正的业务贯通。",
        icon: Database
    },
    {
        title: "表单冗长、重复录入",
        desc: "一线业务人员面临大量繁琐表单，重复填写易错且耗时，严重影响核心业务开展效率。",
        icon: FileText
    },
    {
        title: "流程复杂、跨系统跳转",
        desc: "一个审批往往涉及多个系统登录与切换，审批链条长，人工跟进成本高，用户体验极差。",
        icon: GitMerge
    },
    {
        title: "IT改造成本高周期长",
        desc: "传统系统架构僵化，新需求开发动辄数月，难以快速响应市场变化，创新严重受限。",
        icon: Coins
    },
    {
        title: "系统复杂、学习成本高",
        desc: "复杂的操作界面导致新员工上手慢，企业每年需投入大量人力物力进行系统操作培训。",
        icon: Users
    },
    {
        title: "ROI 难衡量",
        desc: "数字化投入巨大但见效慢，价值难以量化，导致约70%的传统数字化转型项目未能达到预期。",
        icon: TrendingUp
    }
];

const coreModules = [
    {
        title: "对话式入口",
        desc: "支持Web、移动端及主流IM（企微/飞书/钉钉）内嵌，一句自然语言即可触发复杂业务流程。",
        icon: MessageSquare
    },
    {
        title: "无缝集成能力",
        desc: "灵活适配 RESTful API、数据库直连或 RPA 模拟操作，打通新旧系统数据壁垒。",
        icon: Plug
    },
    {
        title: "智能表单自动化",
        desc: "AI自动提取对话关键信息填入表单，支持字段校验、异常纠错与草稿自动保存。",
        icon: PenTool
    },
    {
        title: "跨系统数据检索",
        desc: "基于 RAG 技术，聚合多系统数据，实现“一问即得”的跨系统统计与报表生成。",
        icon: Search
    },
    {
        title: "企业级权限合规",
        desc: "严格遵循 RBAC 权限模型，支持 SSO 单点登录，所有对话与操作全程审计留痕。",
        icon: ShieldCheck
    },
    {
        title: "稳定性与运维",
        desc: "内置 AgentOps 观测体系，提供 SLA 指标监控、故障回滚与智能重试策略。",
        icon: Server
    }
];

const coreValues = [
    {
        title: "提效增速",
        metric: "30-50%",
        metricDesc: "审批周期平均缩短",
        desc: "告别繁琐的人工录入与跨系统切换，AI 智能体实现业务流程的自动化流转，让审批不再等待。",
        icon: Rocket,
        tag: "速度"
    },
    {
        title: "降本增收",
        metric: "2-4 FTE",
        metricDesc: "每年释放等效全职人力",
        desc: "大幅减少重复性劳动与返工成本，释放一线业务人员与IT运维人力，专注于高价值创新工作。",
        icon: PiggyBank,
        tag: "成本"
    },
    {
        title: "极致易用",
        metric: "0 成本",
        metricDesc: "员工学习与培训投入",
        desc: "像日常聊天一样处理工作，自然语言交互彻底打破系统操作门槛，无需任何专业培训。",
        icon: Smile,
        tag: "体验"
    },
    {
        title: "灵活扩展",
        metric: "1 周",
        metricDesc: "新场景平均上线周期",
        desc: "模块化工具架构设计，支持按需接入新场景、新系统 API 与自定义插件，随业务成长。",
        icon: Blocks,
        tag: "扩展"
    }
];

const implementationSteps = [
    {
        step: "Step 1",
        title: "价值诊断",
        time: "2 Weeks",
        tasks: [
            "盘点现有系统 API 与数据接口现状",
            "梳理 Top 3 高频业务痛点场景",
            "明确 ROI 测算模型与 SLA 指标"
        ],
        deliverable: "可行性诊断报告 & 实施蓝图",
        icon: LineChart
    },
    {
        step: "Step 2",
        title: "试点上线",
        time: "4-8 Weeks",
        tasks: [
            "MVP 场景开发（如请假/销量统计）",
            "对接单一业务系统与 IM 入口",
            "小范围灰度发布与 A/B 测试优化"
        ],
        deliverable: "MVP 生产环境上线 & 效果验证",
        icon: Zap
    },
    {
        step: "Step 3",
        title: "规模化推广",
        time: "8-12 Weeks",
        tasks: [
            "多场景、多系统、多角色全面扩展",
            "建立企业知识库与 RAG 增强检索",
            "AgentOps 治理体系与标准化模板"
        ],
        deliverable: "全员推广 & 智能化运营体系",
        icon: Network
    }
];

export default function EnterpriseAgentPage() {
    return (
        <main className="min-h-screen text-white selection:bg-blue-500/30 relative">
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 pointer-events-none"></div>

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/40 via-transparent to-transparent"></div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-sm font-medium mb-8">
                        <Cpu className="w-4 h-4" />
                        适用于现有系统兼容
                    </div>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
                        <span className="block text-white mb-4">AI智能体驱动</span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                            企业系统转型方案
                        </span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12">
                        对话即办公，告别繁琐表单录入
                    </p>
                    
                    <div className="flex flex-wrap justify-center gap-3 mb-16">
                        {['传统 OA', 'ERP 系统', '项目管理', 'CRM', '财务系统', '其他管理系统'].map((sys) => (
                            <span key={sys} className="px-5 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm">
                                {sys}
                            </span>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto text-left">
                        <div className="bg-white/5 border border-white/10 rounded-xl p-6 flex flex-col items-center text-center">
                            <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mb-4 border border-blue-500/30">
                                <ShieldCheck className="w-6 h-6 text-blue-400" />
                            </div>
                            <h3 className="text-white font-bold mb-1">无需改造</h3>
                            <p className="text-gray-400 text-sm">不改变原有系统架构</p>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-xl p-6 flex flex-col items-center text-center">
                            <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mb-4 border border-purple-500/30">
                                <Cpu className="w-6 h-6 text-purple-400" />
                            </div>
                            <h3 className="text-white font-bold mb-1">智能叠加</h3>
                            <p className="text-gray-400 text-sm">后台植入AI Agent</p>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-xl p-6 flex flex-col items-center text-center">
                            <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center mb-4 border border-emerald-500/30">
                                <MessageSquare className="w-6 h-6 text-emerald-400" />
                            </div>
                            <h3 className="text-white font-bold mb-1">极速体验</h3>
                            <p className="text-gray-400 text-sm">自然语言对话交互</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pain Points Section */}
            <section className="py-24 relative bg-black/40 border-y border-white/5">
                <div className="container mx-auto px-4">
                    <div className="mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 border-l-4 border-blue-500 pl-4">
                            为什么现在需要对话式办公？
                        </h2>
                        <p className="text-gray-400 text-lg pl-5">传统企业数字化转型的 <span className="text-blue-400">三大阻力</span> 与 <span className="text-blue-400">六大困境</span></p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                        {painPoints.map((point, idx) => (
                            <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors">
                                <div className="w-12 h-12 rounded-xl bg-gray-800 flex items-center justify-center mb-6">
                                    <point.icon className="w-6 h-6 text-blue-400" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{point.title}</h3>
                                <p className="text-gray-400 leading-relaxed text-sm">{point.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="bg-red-950/30 border border-red-500/30 rounded-2xl p-6 flex items-center gap-6">
                        <div className="bg-red-500/20 p-3 rounded-full shrink-0">
                            <ShieldCheck className="w-8 h-8 text-red-500" />
                        </div>
                        <div>
                            <div className="text-red-400 font-bold mb-1 text-sm">市场现状警示</div>
                            <p className="text-white">据行业研究显示，企业员工每天约花费 <span className="text-red-500 font-bold text-lg">30%</span> 的时间在非核心流程处理与表单录入上。</p>
                        </div>
                        <div className="ml-auto text-gray-500 text-xs hidden md:block">
                            数据来源: 2025 企业数字化效能报告
                        </div>
                    </div>
                </div>
            </section>

            {/* Solution Architecture */}
            <section className="py-24 relative">
                <div className="container mx-auto px-4">
                    <div className="mb-20">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 border-l-4 border-purple-500 pl-4">
                            解决方案：非侵入式 AI 智能体叠加架构
                        </h2>
                        <p className="text-gray-400 text-lg pl-5">
                            在不改造原有系统内核的前提下，通过 <span className="font-bold text-purple-400">Agent Layer</span> 实现业务智能化重塑
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        <div className="col-span-1 lg:col-span-5 flex flex-col gap-4">
                            {/* Layer: Front-end */}
                            <div className="bg-blue-950/20 border border-blue-500/20 rounded-xl p-6 relative">
                                <div className="absolute -left-3 top-1/2 -translate-y-1/2 bg-blue-600 text-xs py-1 px-2 rounded font-bold">交互层</div>
                                <h3 className="text-center font-bold text-blue-400 mb-4 pl-6">对话式入口 (FRONT-END)</h3>
                                <div className="flex justify-center gap-4 text-sm text-gray-300">
                                    <span className="flex items-center gap-2"><Globe className="w-4 h-4"/> 内建Web</span>
                                    <span className="flex items-center gap-2"><MonitorSmartphone className="w-4 h-4"/> 自有App</span>
                                    <span className="flex items-center gap-2"><MessageSquare className="w-4 h-4"/> 企微/钉钉</span>
                                </div>
                            </div>
                            
                            <div className="text-center text-gray-500">↓</div>

                            {/* Layer: Agent */}
                            <div className="bg-purple-950/20 border border-purple-500/20 rounded-xl p-6 relative shadow-[0_0_30px_rgba(168,85,247,0.1)]">
                                <div className="absolute -left-3 top-1/2 -translate-y-1/2 bg-purple-600 text-xs py-1 px-2 rounded font-bold">智能层</div>
                                <h3 className="text-center font-bold text-purple-400 mb-6 pl-6 text-xl flex items-center justify-center gap-2">
                                    <Cpu className="w-5 h-5"/> AI 智能体编排引擎
                                </h3>
                                <div className="grid grid-cols-2 gap-3 pl-6">
                                    <div className="bg-white/5 border border-white/10 rounded text-center py-2 text-sm text-gray-300">意图识别 (NLU)</div>
                                    <div className="bg-white/5 border border-white/10 rounded text-center py-2 text-sm text-gray-300">任务拆解 (Chain)</div>
                                    <div className="bg-white/5 border border-white/10 rounded text-center py-2 text-sm text-gray-300">记忆管理 (Memory)</div>
                                    <div className="bg-white/5 border border-white/10 rounded text-center py-2 text-sm text-gray-300">安全围栏 (Guard)</div>
                                </div>
                            </div>

                            <div className="text-center text-gray-500">↓ API / RPA / SQL</div>

                            {/* Layer: Back-end */}
                            <div className="bg-gray-900 border border-gray-700 rounded-xl p-6 relative">
                                <div className="absolute -left-3 top-1/2 -translate-y-1/2 bg-gray-700 text-xs py-1 px-2 rounded font-bold">系统层</div>
                                <h3 className="text-center font-bold text-gray-400 mb-4 pl-6">原有业务系统 (BACK-END)</h3>
                                <div className="flex justify-center gap-6 text-sm text-gray-500 font-medium">
                                    <span>ERP</span>
                                    <span>CRM</span>
                                    <span>OA</span>
                                    <span>HRM</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-span-1 lg:col-span-7">
                            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                                六大核心能力模块
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {coreModules.map((module, idx) => (
                                    <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-blue-500/30 transition-colors">
                                        <div className="flex items-center gap-4 mb-3">
                                            <div className="bg-blue-500/20 p-2 rounded-lg text-blue-400">
                                                <module.icon className="w-5 h-5" />
                                            </div>
                                            <h4 className="font-bold text-white">{module.title}</h4>
                                        </div>
                                        <p className="text-gray-400 text-sm leading-relaxed">{module.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-24 relative bg-black/40 border-y border-white/5 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-900/20 blur-[120px] rounded-full pointer-events-none"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 border-l-4 border-cyan-400 pl-4">
                            核心优势：四大价值支柱
                        </h2>
                        <p className="text-gray-400 text-lg pl-5">Why Choose AI Agent? <span className="text-cyan-400 font-medium">业务价值全景图</span></p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
                        {/* Centered Decorative Element */}
                        <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-br from-blue-900 to-black border border-white/10 rounded-full items-center justify-center z-20 shadow-[0_0_50px_rgba(56,189,248,0.2)]">
                            <div className="text-center">
                                <div className="text-yellow-500 text-xl font-black">★</div>
                                <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-1">Core<br/>Value</div>
                            </div>
                        </div>

                        {coreValues.map((val, idx) => (
                            <div key={idx} className="bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all relative overflow-hidden group">
                                <span className="absolute top-6 right-6 px-3 py-1 rounded bg-blue-500/20 text-blue-400 text-xs font-bold">
                                    {val.tag}
                                </span>
                                <div className="w-14 h-14 bg-blue-900/40 rounded-xl flex items-center justify-center mb-6 border border-blue-500/20 group-hover:scale-110 transition-transform">
                                    <val.icon className="w-7 h-7 text-blue-400" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">{val.title}</h3>
                                <p className="text-gray-400 leading-relaxed mb-6">{val.desc}</p>
                                <div className="border-t border-white/10 pt-6">
                                    <div className="text-4xl font-black text-cyan-400 mb-1">{val.metric}</div>
                                    <div className="text-sm text-gray-500">{val.metricDesc}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Implementation Path */}
            <section className="py-24 relative">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="mb-20 text-center">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                            实施路径：三步落地，低风险快速见效
                        </h2>
                        <p className="text-gray-400 text-lg">
                            从 <span className="text-blue-400">价值诊断</span> 到 <span className="text-blue-400">规模化推广</span> 的标准化演进路线
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {implementationSteps.map((step, idx) => (
                            <div key={idx} className="relative">
                                {/* Next Arrow on Desktop */}
                                {idx < 2 && (
                                    <div className="hidden md:block absolute -right-6 top-1/2 -translate-y-1/2 text-gray-600 z-10">
                                        &gt;
                                    </div>
                                )}
                                <div className="bg-white/5 border border-white/10 rounded-2xl h-full hover:border-blue-500/40 transition-colors flex flex-col">
                                    <div className="p-8 border-b border-white/10 text-center">
                                        <div className="w-16 h-16 mx-auto bg-blue-500/10 rounded-full flex items-center justify-center mb-4 text-blue-400">
                                            <step.icon className="w-8 h-8" />
                                        </div>
                                        <div className="text-sm font-bold text-blue-500 mb-1">{step.step}. {step.title}</div>
                                        <div className="inline-flex items-center gap-1 bg-white/5 px-3 py-1 rounded-full text-xs text-gray-400 mt-2">
                                            <span className="w-2 h-2 rounded-full bg-gray-500 animate-pulse"></span>
                                            {step.time}
                                        </div>
                                    </div>
                                    <div className="p-8 flex-1">
                                        <div className="text-xs text-gray-500 font-bold mb-4">核心任务 / KEY TASKS</div>
                                        <ul className="space-y-3 mb-8">
                                            {step.tasks.map((t, i) => (
                                                <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                                                    <div className="mt-1 w-4 h-4 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 text-[10px]">✓</div>
                                                    {t}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="p-6 bg-black/40 border-t border-white/10 rounded-b-2xl mt-auto">
                                        <div className="text-xs text-gray-500 font-bold mb-2">关键交付物</div>
                                        <div className="text-sm text-purple-400 font-medium flex items-center gap-2">
                                            <FileText className="w-4 h-4" />
                                            {step.deliverable}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Consultation Form Section */}
            <section id="demo" className="relative py-24 bg-black/60 border-t border-white/5">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-blue-900/30 via-transparent to-transparent pointer-events-none"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-3xl mx-auto">
                        <div className="text-center mb-10">
                            <div className="inline-block p-4 rounded-full bg-blue-500/10 text-blue-400 mb-6 border border-blue-500/20">
                                <Cpu className="w-8 h-8" />
                            </div>
                            <h2 className="text-3xl font-bold text-white mb-4">免费获取企业 AI 转型蓝图</h2>
                            <p className="text-gray-400">留下您的联系方式，我们的 AI 资深顾问将为您提供专属的系统智能化升级评估。</p>
                        </div>
                        <DemoForm industry="AI智能体企业转型" />
                    </div>
                </div>
            </section>
        </main>
    );
}
