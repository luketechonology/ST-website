export default function Footer() {
    return (
        <footer className="bg-black py-12 border-t border-white/10">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-center md:text-left">
                        <h3 className="text-xl font-bold text-white mb-2">圣唐科技</h3>
                        <p className="text-gray-400 text-sm">
                            用AI重构学校考试体系
                        </p>
                    </div>

                    <div className="flex gap-8 text-sm text-gray-400">
                        <a href="#" className="hover:text-brand-gold transition-colors">关于我们</a>
                        <a href="#" className="hover:text-brand-gold transition-colors">联系方式</a>
                        <a href="#" className="hover:text-brand-gold transition-colors">隐私政策</a>
                    </div>

                    <div className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} 圣唐科技 Sheng Tang Science&Technology Co.,Ltd. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
}
