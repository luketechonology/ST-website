import { FileText, Shield, BarChart2, Search, Users, Building, Landmark, Scale, BadgeCheck, AlertTriangle, TrendingUp, ClipboardCheck, Receipt, ShoppingCart, GitBranch, Eye, Database, Layers } from "lucide-react";
import DemoForm from "@/components/demo/DemoForm";

export const metadata = {
    title: 'AI + 审计解决方案 | 圣唐科技',
    description: '智能审计与风险防控，赋能内审部门、会计师事务所等机构。',
};

/* ─── Data ─── */

const internalAudit = {
    title: "内部审计解决方案",
    targets: ["企业内审部门", "集团财务中心", "上市公司"],
    scenarios: [
        {
            label: "场景一",
            title: "费用报销审计",
            icon: Receipt,
            items: ["自动识别重复报销", "跨系统对账", "违规费用标记"],
        },
        {
            label: "场景二",
            title: "采购审计",
            icon: ShoppingCart,
            items: ["异常供应商分析", "价格偏离检测", "关联方识别"],
        },
        {
            label: "场景三",
            title: "合规与内控",
            icon: Shield,
            items: ["内控缺陷识别", "自动生成整改建议", "风险等级分类"],
        },
    ],
};

const externalAudit = {
    title: "外部审计解决方案",
    targets: ["会计师事务所", "专项审计机构"],
    scenarios: [
        {
            label: "场景一",
            title: "财务报表审计",
            icon: FileText,
            items: ["自动抽样", "科目异常分析", "凭证批量分析"],
        },
        {
            label: "场景二",
            title: "专项审计",
            icon: ClipboardCheck,
            items: ["专项资金审计", "政府项目审计", "补贴合规审计"],
        },
        {
            label: "场景三",
            title: "IPO / 上市审计支持",
            icon: TrendingUp,
            items: ["大数据分析", "关联方穿透分析", "财务异常预警"],
        },
    ],
};

/* ─── Components ─── */

function SectionBlock({ section, accent }: { section: typeof internalAudit; accent: "blue" | "purple" }) {
    const colors = accent === "blue"
        ? { badge: "bg-brand-blue/10 text-brand-blue border-brand-blue/30", card: "border-brand-blue/20 hover:border-brand-blue/50", icon: "bg-brand-blue/20 text-brand-blue", dot: "bg-brand-blue" }
        : { badge: "bg-brand-purple/10 text-brand-purple border-brand-purple/30", card: "border-brand-purple/20 hover:border-brand-purple/50", icon: "bg-brand-purple/20 text-brand-purple", dot: "bg-brand-purple" };

    return (
        <div className="mb-24">
            {/* Section Title */}
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{section.title}</h2>
                <div className="flex flex-wrap justify-center gap-3">
                    {section.targets.map((target) => (
                        <span key={target} className={`px-4 py-1.5 rounded-full border text-sm font-medium ${colors.badge}`}>
                            {target}
                        </span>
                    ))}
                </div>
            </div>

            {/* Scenario Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {section.scenarios.map((scenario) => (
                    <div key={scenario.title} className={`bg-white/5 border ${colors.card} rounded-xl p-8 backdrop-blur-sm transition-all duration-300 group`}>
                        <div className={`w-12 h-12 rounded-lg ${colors.icon} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                            <scenario.icon className="w-6 h-6" />
                        </div>
                        <div className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">{scenario.label}</div>
                        <h3 className="text-xl font-bold text-white mb-5">{scenario.title}</h3>
                        <ul className="space-y-3">
                            {scenario.items.map((item) => (
                                <li key={item} className="flex items-center gap-3 text-gray-300">
                                    <span className={`w-2 h-2 rounded-full ${colors.dot} flex-shrink-0`}></span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}

/* ─── Page ─── */

export default function AuditPage() {
    return (
        <main className="min-h-screen text-white selection:bg-brand-blue/30 relative">
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 pointer-events-none"></div>

            {/* Hero */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-blue/20 via-transparent to-transparent"></div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-blue/10 border border-brand-blue/30 text-brand-blue text-sm font-medium mb-8">
                        <FileText className="w-4 h-4" />
                        AI + 审计
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                        <span className="block text-white mb-2">智能审计与风险防控</span>
                        <span className="text-gradient-gemini">AI赋能企事业单位审计体系</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        利用AI技术重构审计流程，自动识别风险点，覆盖内部审计与外部审计全场景，<br />
                        提升审计效率与准确性。
                    </p>
                </div>
            </section>

            {/* Content Sections */}
            <section className="py-20 relative">
                <div className="container mx-auto px-4">
                    <SectionBlock section={internalAudit} accent="blue" />
                    <SectionBlock section={externalAudit} accent="purple" />
                </div>
            </section>

            {/* Demo Section */}
            <section id="demo" className="relative py-20">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-brand-blue/20 via-transparent to-transparent"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-3xl mx-auto">
                        <div className="text-center mb-10">
                            <h2 className="text-3xl font-bold text-white mb-4">预约您的AI+审计专属演示</h2>
                            <p className="text-gray-400">了解AI如何具体应用到您的审计场景中</p>
                        </div>
                        <DemoForm industry="审计" />
                    </div>
                </div>
            </section>
        </main>
    );
}
