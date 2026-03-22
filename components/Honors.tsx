import { getHonorsData } from "@/lib/db";
import Image from "next/image";

export default function Honors() {
    const honors = getHonorsData();

    if (!honors || honors.length === 0) {
        return null;
    }

    return (
        <section id="honors" className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16 relative">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 font-serif">
                        企业荣誉
                    </h2>
                    <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                        多年来，我们致力于技术创新与行业深耕，在人工智能领域获得了多项权威资质认证与荣誉，这是对我们实力的最佳证明。
                    </p>
                    <div className="absolute left-1/2 -bottom-6 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full" />
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {honors.map((honor) => (
                        <div 
                            key={honor.id} 
                            className="group relative bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                        >
                            <div className="aspect-[4/3] w-full relative mb-6 bg-slate-50 flex items-center justify-center rounded-xl overflow-hidden group-hover:bg-slate-100 transition-colors">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={honor.imageUrl}
                                    alt={honor.title}
                                    className="max-w-full max-h-full object-contain p-2 mix-blend-multiply transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <h3 className="text-lg font-bold text-slate-800 text-center line-clamp-2 group-hover:text-blue-600 transition-colors">
                                {honor.title}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
