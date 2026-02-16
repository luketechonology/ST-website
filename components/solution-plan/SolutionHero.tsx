export default function SolutionHero() {
    return (
        <section className="relative pt-32 pb-20 bg-gradient-to-b from-[#0a192f] to-[#112240] overflow-hidden text-white">
            {/* Abstract Tech Background */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-400 via-transparent to-transparent"></div>
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>

            <div className="container mx-auto px-4 relative z-10 text-center">
                <div className="inline-block px-4 py-1 mb-6 border border-blue-400/30 rounded-full bg-blue-900/30 text-blue-200 text-sm tracking-widest uppercase">
                    Premium Service
                </div>

                <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight font-serif">
                    获取 <span className="text-blue-200">AI考试体系建设方案</span>
                </h1>

                <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
                    为您的学校定制专属升级路径与预算框架<br />
                    <span className="text-sm opacity-70 mt-4 block">一套完整的考试体系升级蓝图 · 3个工作日内提供初稿</span>
                </p>
            </div>
        </section>
    );
}
