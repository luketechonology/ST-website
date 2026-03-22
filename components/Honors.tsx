import { getHonorsData } from "@/lib/db";
import Image from "next/image";

export default function Honors() {
    const honors = getHonorsData();

    if (!honors || honors.length === 0) {
        return null;
    }

    return (
        <section id="honors" className="relative py-24 overflow-hidden">
            {/* BG gradient similar to other sections */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-blue/10 via-transparent to-transparent"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16 relative">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        企业荣誉
                    </h2>
                    <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                        多年来，我们致力于技术创新与行业深耕，在人工智能领域获得了多项权威资质认证与荣誉，这是对我们实力的最佳证明。
                    </p>
                    <div className="absolute left-1/2 -bottom-6 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full" />
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {honors.map((honor) => (
                        <div 
                            key={honor.id} 
                            className="group relative bg-white/[0.03] border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:border-blue-500/30 transition-all duration-300 transform hover:-translate-y-2"
                        >
                            <div className="aspect-[4/3] w-full relative mb-6 bg-white/5 flex items-center justify-center rounded-xl overflow-hidden group-hover:bg-white/10 transition-colors">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={honor.imageUrl}
                                    alt={honor.title}
                                    className="max-w-full max-h-full object-contain p-2 transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <h3 className="text-lg font-bold text-white text-center line-clamp-2 group-hover:text-blue-400 transition-colors">
                                {honor.title}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
