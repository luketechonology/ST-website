
export default function Process() {
    const steps = [
        "需求沟通",
        "系统演示",
        "定制建设方案",
        "部署实施",
        "培训与持续服务"
    ];

    return (
        <section id="process" className="py-24 relative">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">简单五步，完成考试体系升级</h2>
                </div>

                <div className="relative flex flex-col md:flex-row justify-between items-center max-w-5xl mx-auto">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-white/10 -translate-y-1/2 z-0"></div>

                    {steps.map((step, index) => (
                        <div key={index} className="relative z-10 flex flex-col items-center mb-8 md:mb-0 w-full md:w-auto">
                            <div className="w-10 h-10 rounded-full bg-black/40 border-2 border-brand-purple flex items-center justify-center text-brand-purple font-bold mb-4 shadow-[0_0_10px_rgba(213,0,249,0.2)] backdrop-blur-sm">
                                {index + 1}
                            </div>
                            <h3 className="text-lg font-medium text-white">{step}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
