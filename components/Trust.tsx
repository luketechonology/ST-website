
import { Check } from "lucide-react";

export default function Trust() {
    const results = [
        { value: "300%", label: "出题效率提升" },
        { value: "70%", label: "阅卷时间减少" },
        { value: "40%", label: "考试组织成本降低" },
        { value: "100%", label: "数据分析覆盖率" },
    ];

    const reasons = [
        "国家高新技术企业",
        "专注教育行业AI应用",
        "支持私有化部署",
        "支持与教务系统对接",
        "高并发架构保障",
        "数据安全加密机制"
    ];

    return (
        <section id="trust" className="py-24 bg-gradient-to-b from-brand-dark to-black">
            <div className="container mx-auto px-4">

                {/* Results */}
                <div className="mb-24">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">实际应用效果</h2>
                        <p className="text-brand-gold text-xl font-medium">不只是系统升级，而是考试体系升级。</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {results.map((item, index) => (
                            <div key={index} className="text-center p-6 bg-white/5 rounded-lg border border-white/10">
                                <div className="text-4xl md:text-5xl font-bold text-brand-red-light mb-2">{item.value}</div>
                                <div className="text-gray-400">{item.label}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Why Us */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                            为什么选择我们<br />
                            <span className="text-gray-400 text-2xl font-normal mt-2 block">不只是功能，更是体系能力</span>
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                            {reasons.map((reason, index) => (
                                <div key={index} className="flex items-center gap-3 text-gray-300">
                                    <div className="w-5 h-5 rounded-full bg-brand-gold/20 flex items-center justify-center flex-shrink-0">
                                        <Check className="w-3 h-3 text-brand-gold" />
                                    </div>
                                    {reason}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="bg-gradient-to-br from-brand-red/20 to-brand-dark p-8 rounded-2xl border border-brand-red/30 relative overflow-hidden h-64 flex items-center justify-center">
                        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-30"></div>
                        <div className="text-center relative z-10">
                            <span className="text-6xl font-bold text-white opacity-10">TRUST</span>
                            <div className="text-2xl font-bold text-white mt-[-20px]">TangThink Confidence</div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
