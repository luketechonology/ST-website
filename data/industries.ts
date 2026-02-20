import { FileText, Stethoscope, HardHat, Pickaxe, CheckCircle, BarChart2, Shield, Activity, Truck } from "lucide-react";

export const industries = [
    {
        slug: "audit",
        title: "AI + 审计",
        subtitle: "智能审计与风险防控",
        description: "利用AI技术重构审计流程，自动识别风险点，提升审计效率与准确性。",
        icon: FileText,
        heroImage: "/images/audit-hero.jpg", // Placeholder
        features: [
            {
                title: "智能凭证识别",
                desc: "OCR自动识别发票、合同等凭证，自动匹配会计分录。",
                icon: FileText
            },
            {
                title: "异常数据检测",
                desc: "基于机器学习算法，自动发现财务数据中的异常模式和舞弊风险。",
                icon: Shield
            },
            {
                title: "自动化审计报告",
                desc: "一键生成标准审计工作底稿和初步审计报告。",
                icon: BarChart2
            }
        ],
        cases: [
            {
                title: "某大型会计师事务所",
                desc: "应用AI审计系统后，基础性审计工作效率提升70%，漏检率降低90%。"
            }
        ]
    }
];
