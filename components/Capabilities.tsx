
import { Brain, Shuffle, Eye, CheckCircle, BarChart2 } from "lucide-react";

export default function Capabilities() {
    const capabilities = [
        {
            icon: Brain,
            title: "AI智能出题",
            features: ["按知识点自动生成题目", "控制难度比例", "支持批量生成题库", "基于校本教材训练模型"],
            value: "大幅降低出题成本，统一命题标准"
        },
        {
            icon: Shuffle,
            title: "智能组卷系统",
            features: ["多规则自动组卷", "随机A/B卷", "防重复抽题", "专业分层组卷"],
            value: "提升考试公平性与规范性"
        },
        {
            icon: Eye,
            title: "在线考试与监考",
            features: ["防切屏监测", "异常行为识别", "人脸识别登录", "支持大规模并发"],
            value: "保障考试严肃性与公信力"
        },
        {
            icon: CheckCircle,
            title: "AI自动阅卷",
            features: ["客观题全自动评分", "主观题辅助评分", "自动生成成绩报告", "批量统计与分析"],
            value: "释放教师精力，回归教学本身"
        },
        {
            icon: BarChart2,
            title: "数据分析与决策",
            features: ["知识点掌握度分析", "班级对比", "学生能力画像", "学期趋势报告"],
            value: "真正实现数据驱动教学管理"
        }
    ];

    return (
        <section id="capabilities" className="py-24 bg-[url('/grid.svg')] bg-fixed bg-opacity-5">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">核心能力</h2>
                    <div className="w-20 h-1 bg-gradient-gemini mx-auto"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {capabilities.map((cap, index) => (
                        <div key={index} className="bg-white/5 border border-white/10 rounded-xl p-8 hover:border-brand-purple/50 hover:bg-white/10 transition-all duration-300 group">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-lg bg-brand-blue/20 flex items-center justify-center text-brand-blue group-hover:bg-brand-purple/20 group-hover:text-brand-purple transition-colors">
                                    <cap.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-white">{cap.title}</h3>
                            </div>

                            <ul className="space-y-3 mb-6">
                                {cap.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start text-gray-400 text-sm">
                                        <span className="w-1.5 h-1.5 rounded-full bg-brand-purple mt-1.5 mr-2"></span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <div className="pt-6 border-t border-white/10 text-brand-purple text-sm font-medium">
                                价值：{cap.value}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
