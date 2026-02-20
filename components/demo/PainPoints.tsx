export default function PainPoints() {
    const points = [
        {
            title: "命题效率低",
            desc: "老师重复出卷，质量难统一",
            icon: "⚡️"
        },
        {
            title: "阅卷压力大",
            desc: "人工改卷耗时，误差难避免",
            icon: "📝"
        },
        {
            title: "数据无法指导教学",
            desc: "成绩统计 ≠ 教学改进",
            icon: "📊"
        }
    ];

    return (
        <section className="py-20 bg-white/5 border-y border-white/5">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-white mb-4">为什么现在必须升级考试体系</h2>
                    <div className="w-20 h-1 bg-brand-pink mx-auto rounded"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {points.map((point, index) => (
                        <div key={index} className="bg-white/5 border border-white/10 p-8 rounded-xl text-center hover:border-brand-pink/50 transition-colors group backdrop-blur-sm">
                            <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">{point.icon}</div>
                            <h3 className="text-xl font-bold text-white mb-3">{point.title}</h3>
                            <p className="text-gray-400">{point.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <p className="text-brand-purple text-lg font-medium">AI不是工具升级，而是考试体系重构。</p>
                </div>
            </div>
        </section>
    );
}
