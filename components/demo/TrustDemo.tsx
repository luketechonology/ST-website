import { ShieldCheck, Server, Users, PenTool } from "lucide-react";

export default function TrustDemo() {
    const items = [
        { icon: ShieldCheck, text: "国家高新技术企业认证" },
        { icon: Server, text: "支持私有化部署" },
        { icon: Users, text: "多所院校实际应用" },
        { icon: PenTool, text: "专业技术团队支持" },
    ];

    return (
        <section className="py-16 bg-black/30 border-t border-white/5">
            <div className="container mx-auto px-4">
                <div className="text-center mb-10">
                    <h2 className="text-2xl font-bold text-white mb-2">为什么选择我们</h2>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
                    {items.map((item, index) => (
                        <div key={index} className="flex flex-col items-center justify-center gap-3 text-center p-4">
                            <div className="w-12 h-12 rounded-full bg-brand-purple/10 flex items-center justify-center text-brand-purple">
                                <item.icon className="w-6 h-6" />
                            </div>
                            <span className="text-gray-300 font-medium">{item.text}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
