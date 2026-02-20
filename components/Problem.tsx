
export default function Problem() {
    const problems = [
        { title: "出题", desc: "依赖人工，效率低且质量难统一" },
        { title: "阅卷", desc: "消耗大量教师时间，反馈滞后" },
        { title: "数据", desc: "无法沉淀形成教学决策依据" },
        { title: "管理", desc: "考试组织成本高、管理复杂" },
        { title: "体系", desc: "缺乏标准化与智能化体系支撑" }
    ];

    return (
        <section className="py-24 relative">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-blue/50 to-transparent"></div>

            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        传统考试体系，正在成为<br />
                        <span className="text-brand-blue">学校数字化升级的瓶颈</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-16">
                    {problems.map((item, index) => (
                        <div key={index} className="bg-white/5 border border-white/10 p-6 rounded-lg hover:border-brand-blue/50 transition-colors group">
                            <div className="text-brand-purple text-lg font-bold mb-3 group-hover:text-brand-blue transition-colors">
                                {item.title}痛点
                            </div>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <p className="text-xl md:text-2xl text-white font-medium border-l-4 border-brand-purple pl-6 py-2 inline-block bg-gradient-to-r from-white/10 to-transparent pr-8">
                        如果考试体系没有升级，教学质量提升将难以实现。
                    </p>
                </div>
            </div>
        </section>
    );
}
