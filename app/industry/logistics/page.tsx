import { Package, Globe, ShieldCheck, TrendingDown, Users, MonitorSmartphone, BarChart, Settings, Repeat, Layers } from "lucide-react";
import DemoForm from "@/components/demo/DemoForm";

export const metadata = {
    title: '北美市场仓储物流管理系统 | 圣唐科技',
    description: '以协同打破信息孤岛，以智能应对复杂业务场景。专为北美市场打造的多仓协同、智能高效、合规可控的WMS。',
};

/* ─── Data ─── */

const coreModules = [
    {
        title: "基础数据与全局配置",
        icon: Settings,
        desc: "系统的地基，建立统一的商品和库位视图，为解决多仓数据割裂问题打下基础。",
        items: [
            "多层级主数据管理：支持多租户隔离，满足3PL合规需求。美东、美西、美南多仓集中建模。",
            "全球仓库与货位管理：定义FBA中转、退货处理等专业仓属性。",
            "系统与权限管理：四级权限控制、多语言多币种支持及严格的审计追踪。"
        ],
    },
    {
        title: "核心作业执行",
        icon: Repeat,
        desc: "系统的“四肢”，通过智能上架与拣选规划，最大化空间利用率与作业效率。",
        items: [
            "入库管理：ASN自动预约Dock Door防拥堵，RFID智能收货与动态上架推荐。",
            "出库管理：动态波次应对订单洪峰，AI路径规划，全渠道订单聚合。",
            "库内管理：细至批次/序列号的实时库存，支持FIFO/FEFO，无停工动态盘点。",
            "退货管理：高效的RMA全流程及FBA退货换标增值服务。"
        ],
    },
    {
        title: "智能协同与优化",
        icon: Globe,
        desc: "系统的核心竞争力，解决北美地域跨度大、劳动力短缺与供应链整体协同问题。",
        items: [
            "多仓协同与全局库存：全局库存视图，“一地库存，多仓发货”的最优分单调拨。",
            "劳动力精细化管理：游戏化激励与计件统计，提升20%生产力，缓解用工荒。",
            "场站与运输端到端协同：YMS场站管理与TMS车辆配载无缝集成。"
        ],
    },
    {
        title: "自动化与开放平台",
        icon: Layers,
        desc: "系统的神经末梢，作为控制中枢直连硬件与外部庞大生态。",
        items: [
            "WES内嵌调度：指挥AGV/AMR与输送线，实现高效“货到人”工作流。",
            "IoT与数字孪生：温湿度监控保障冷链合规，3D孪生可视化管理。",
            "无缝生态互联：对接主流ERP、Shopify/Amazon平台及UPS/FedEx。"
        ],
    },
    {
        title: "决策分析与客户门户",
        icon: BarChart,
        desc: "系统的仪表盘，通过数据驱动优化决策与优质的货主自助履约体验。",
        items: [
            "BI决策支持：自定义报表、AI预测库存需求及物流成本分析。",
            "高粘性客户门户：货主自助下单、实时追踪及多币种智能计费对账。"
        ],
    }
];

const naFeatures = [
    {
        title: "FBA全流程深度管理",
        icon: Package,
        desc: "针对服务亚马逊的海外仓，提供从入库打托、中转补仓到退货处理换标的一站式工作流封装。",
    },
    {
        title: "尾程物流智能比价系统",
        icon: TrendingDown,
        desc: "内置北美最新物流成本数据库，实时拉取三大承运商费率，自动推荐最优派送方案，最高节约30%尾程费用。",
    },
    {
        title: "多语种语音与AR拣选",
        icon: Users,
        desc: "适配北美仓储多族裔劳工现状，提供英语/西语双语语音指引及AR视觉辅助，大幅度降低新员工培训成本。",
    },
    {
        title: "FDA/DSCSA合规性模板",
        icon: ShieldCheck,
        desc: "针对严格的北美监管环境，预置食品与生命科学领域的序列化追溯体系设计，一键满足审计规范。",
    }
];

/* ─── Components ─── */

function ModuleBlock({ module, index }: { module: typeof coreModules[0]; index: number }) {
    return (
        <div className="flex flex-col md:flex-row gap-8 items-start mb-16 relative group">
            <div className="md:w-1/3 sticky top-24">
                <div className="flex z-10 items-center justify-center w-16 h-16 rounded-2xl bg-teal-500/10 border border-teal-500/30 text-teal-400 mb-6 group-hover:scale-110 transition-transform shadow-[0_0_30px_rgba(20,184,166,0.15)]">
                    <module.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 flex items-center gap-4">
                    <span className="text-teal-500/50 text-4xl font-black">0{index + 1}</span>
                    {module.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed border-l-2 border-teal-500/30 pl-4">{module.desc}</p>
            </div>
            <div className="md:w-2/3 grid grid-cols-1 gap-4">
                {module.items.map((item, i) => {
                    const [title, desc] = item.split('：');
                    return (
                        <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-teal-500/40 transition-colors">
                            <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-teal-400"></div>
                                {title}
                            </h4>
                            <p className="text-gray-400 text-sm leading-relaxed">{desc || title}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

/* ─── Page ─── */

export default function LogisticsPage() {
    return (
        <main className="min-h-screen text-white selection:bg-teal-500/30 relative">
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 pointer-events-none"></div>

            {/* Hero */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-teal-900/40 via-transparent to-transparent"></div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-400 text-sm font-medium mb-8">
                        <Globe className="w-4 h-4" />
                        出海北美市场专属
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                        <span className="block text-white mb-2">现代仓储物流管理系统</span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-300">
                            打破信息孤岛 · 智能应对洪峰
                        </span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        基于云原生架构设计的全套供应链操作系统。针对北美多仓网络割裂、
                        <br /> 履约时效要求高、合规严格与劳动力短缺等核心痛点量身打造。
                    </p>
                </div>
            </section>

            {/* Realities/Pain Points */}
            <section className="py-16 relative border-y border-white/5 bg-white/[0.02]">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-x divide-white/10">
                        <div className="px-4">
                            <div className="text-3xl font-bold text-white mb-2">多仓协同难</div>
                            <div className="text-sm text-gray-400">美东/西/南数据割裂</div>
                        </div>
                        <div className="px-4">
                            <div className="text-3xl font-bold text-white mb-2">峰值履约压</div>
                            <div className="text-sm text-gray-400">黑五/网一爆发式洪峰</div>
                        </div>
                        <div className="px-4">
                            <div className="text-3xl font-bold text-white mb-2">尾程成本高</div>
                            <div className="text-sm text-gray-400">渠道时效与价格复杂</div>
                        </div>
                        <div className="px-4">
                            <div className="text-3xl font-bold text-white mb-2">严合规/用工荒</div>
                            <div className="text-sm text-gray-400">FDA追溯与高薪劳资</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Architecture / Modules */}
            <section className="py-24 relative">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">新一代 WMS 五大体系层级</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                            从底层主数据引擎到顶层商业智能与生态互联，构建不断生长的“Evergreen”系统
                        </p>
                    </div>

                    <div className="relative">
                        {/* Vertical line connecting modules */}
                        <div className="hidden md:block absolute left-[16.5%] top-16 bottom-16 w-px bg-gradient-to-b from-teal-500/50 via-teal-500/20 to-transparent"></div>
                        
                        {coreModules.map((module, idx) => (
                            <ModuleBlock key={idx} module={module} index={idx} />
                        ))}
                    </div>
                </div>
            </section>

            {/* North America NA Enhancements */}
            <section className="py-24 relative bg-black/40 border-t border-white/5">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-teal-900/20 via-transparent to-transparent pointer-events-none"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="mb-16 md:flex justify-between items-end border-b border-white/10 pb-8">
                        <div className="max-w-2xl">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                北美本土化 <span className="text-teal-400">极客增强功能</span>
                            </h2>
                            <p className="text-gray-400">并非简单的功能堆积，而是深刻理解落地市场的每一项本土商业规则，重塑业务竞争力中心。</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {naFeatures.map((feature, idx) => (
                            <div key={idx} className="bg-gradient-to-br from-white/5 to-transparent border border-white/10 p-8 rounded-2xl hover:border-teal-500/30 transition-all group">
                                <div className="flex items-center gap-5 mb-5">
                                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-teal-500/20 transition-colors">
                                        <feature.icon className="w-6 h-6 text-gray-300 group-hover:text-teal-400 transition-colors" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                                </div>
                                <p className="text-gray-400 leading-relaxed text-sm">
                                    {feature.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Demo Section */}
            <section id="demo" className="relative py-24">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-teal-900/30 via-transparent to-transparent pointer-events-none"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-3xl mx-auto">
                        <div className="text-center mb-10">
                            <div className="inline-block p-4 rounded-full bg-teal-500/10 text-teal-400 mb-6">
                                <MonitorSmartphone className="w-8 h-8" />
                            </div>
                            <h2 className="text-3xl font-bold text-white mb-4">申请仓储系统架构评估演示</h2>
                            <p className="text-gray-400">获取符合您业务体量的高效自动化与协同实施方案，让供应链运营更省心</p>
                        </div>
                        <DemoForm industry="仓储物流" />
                    </div>
                </div>
            </section>
        </main>
    );
}
