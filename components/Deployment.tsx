
import { Server, Cloud, HardDrive, Shield } from "lucide-react";

export default function Deployment() {
    const options = [
        { icon: Server, title: "私有服务器部署", desc: "数据完全掌握在学校手中" },
        { icon: HardDrive, title: "校园本地部署", desc: "内网访问，速度极快" },
        { icon: Cloud, title: "云端部署", desc: "低成本快速上线，免维护" },
        { icon: Shield, title: "混合部署", desc: "核心数据本地化，业务上云" },
    ];

    return (
        <section id="deployment" className="py-24 relative">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">支持多种部署方式</h2>
                    <p className="text-gray-400">全面保障数据安全，符合学校信息化建设规范</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {options.map((opt, index) => (
                        <div key={index} className="bg-white/5 border border-white/5 p-6 rounded-lg text-center hover:border-brand-purple/30 transition-colors group backdrop-blur-sm">
                            <div className="w-16 h-16 mx-auto bg-white/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-brand-purple/10 transition-colors">
                                <opt.icon className="w-8 h-8 text-gray-400 group-hover:text-brand-purple transition-colors" />
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2">{opt.title}</h3>
                            <p className="text-sm text-gray-500">{opt.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
