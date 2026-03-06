"use client";

import { CheckCircle2, Cpu, Wrench, Download, Settings, Server, X } from "lucide-react";
import { useState } from "react";

const services = [
    {
        name: "AI编程工具",
        price: "免费",
        period: "",
        icon: Wrench,
        description: "购买AI编程工具及专业咨询服务",
        features: [
            "主流AI编程工具选型建议",
            "基础使用咨询",
            "推荐配置方案",
            "提效最佳实践分享",
        ],
        highlight: false,
        cta: "免费获取",
        isContactTrigger: false,
    },
    {
        name: "OpenClaw 协助安装",
        price: "$39",
        period: "/次",
        icon: Download,
        description: "专业的OpenClaw环境配置与安装指导",
        features: [
            "环境依赖检查与准备",
            "远程协助安装",
            "基础运行测试",
            "常见安装问题排查",
        ],
        highlight: true,
        cta: "立即咨询",
        isContactTrigger: true,
    },
    {
        name: "OpenClaw 本地部署",
        price: "$99",
        period: "/次",
        icon: Server,
        description: "企业级OpenClaw私有化本地部署方案",
        features: [
            "硬件资源评估与规划",
            "完整私有化部署实施",
            "性能调优与并发设置",
            "数据安全与隔离配置",
            "部署后验收测试",
            "1个月技术支持保障",
        ],
        highlight: false,
        cta: "预约部署",
        isContactTrigger: true,
    },
];

export default function AIToolsPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedService, setSelectedService] = useState("");

    // Form state
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        wechat: ""
    });

    const handleOpenModal = (serviceName: string) => {
        setSelectedService(serviceName);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setFormData({ name: "", phone: "", wechat: "" });
    };

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const res = await fetch('/api/ai-tools', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    service: selectedService,
                }),
            });

            if (res.ok) {
                alert("提交成功！我们会尽快与您联系。");
                handleCloseModal();
            } else {
                alert("提交失败，请稍后重试。");
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert("发生错误，请稍后重试。");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <main className="min-h-screen text-white pt-20">
            {/* ━━━ Hero ━━━ */}
            <section className="relative py-24 md:py-32 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/40 via-black to-black" />
                <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-blue-600/15 rounded-full blur-[150px] pointer-events-none" />
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-sm font-medium mb-8">
                        <Cpu className="w-4 h-4" />
                        AI Productivity Tools
                    </div>

                    <h1 className="text-4xl md:text-7xl font-bold mb-6 tracking-tight">
                        <span className="block text-white mb-2">激发开发潜能的</span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400">
                            AI生产力工具
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed font-light">
                        从工具选型到私有化部署，提供全方位的<span className="text-white font-medium">AI编程赋能</span>与
                        <span className="text-white font-medium">模型落地支持</span>。
                    </p>
                </div>
            </section>

            {/* ━━━ Services Pricing ━━━ */}
            <section id="services" className="relative pb-32 -mt-10 overflow-hidden">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {services.map((service) => (
                            <div
                                key={service.name}
                                className={`relative rounded-2xl p-8 transition-all h-full flex flex-col ${service.highlight
                                    ? 'bg-gradient-to-b from-blue-500/10 to-cyan-500/5 border-2 border-blue-500/40 shadow-[0_0_40px_rgba(59,130,246,0.15)] transform md:-translate-y-4'
                                    : 'bg-white/[0.03] border border-white/10 hover:border-white/20'
                                    }`}
                            >
                                {service.highlight && (
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-xs font-bold shadow-lg">
                                        最受欢迎
                                    </div>
                                )}

                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${service.highlight ? 'bg-blue-500/20' : 'bg-white/5'}`}>
                                    <service.icon className={`w-6 h-6 ${service.highlight ? 'text-blue-400' : 'text-gray-400'}`} />
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-2">{service.name}</h3>
                                <p className="text-gray-400 text-sm mb-6 min-h-[40px]">{service.description}</p>

                                <div className="mb-8 pb-8 border-b border-white/10">
                                    <span className="text-4xl font-black tracking-tight text-white">{service.price}</span>
                                    {service.period && <span className="text-gray-500 text-sm ml-1 font-medium">{service.period}</span>}
                                </div>

                                <ul className="space-y-4 mb-8 flex-grow">
                                    {service.features.map((f) => (
                                        <li key={f} className="flex items-start gap-3 text-sm text-gray-300">
                                            <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                                            <span className="leading-snug">{f}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="mt-auto block">
                                    {service.isContactTrigger ? (
                                        <button
                                            onClick={() => handleOpenModal(service.name)}
                                            className={`w-full py-4 rounded-xl font-bold transition-all cursor-pointer ${service.highlight
                                                ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg hover:shadow-cyan-500/25 hover:-translate-y-0.5'
                                                : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'
                                                }`}>
                                            {service.cta}
                                        </button>
                                    ) : (
                                        <a href="#contact" className="w-full inline-block">
                                            <button className="w-full py-4 rounded-xl font-bold transition-all bg-white/5 text-white hover:bg-white/10 border border-white/10">
                                                {service.cta}
                                            </button>
                                        </a>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ━━━ Contact Modal ━━━ */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
                        onClick={handleCloseModal}
                    ></div>

                    {/* Modal Content */}
                    <div className="relative bg-[#0a0a0a] border border-white/10 rounded-2xl w-full max-w-md p-6 shadow-2xl z-10 animate-in fade-in zoom-in-95 duration-200">
                        <button
                            onClick={handleCloseModal}
                            className="absolute right-4 top-4 text-gray-400 hover:text-white transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <h3 className="text-2xl font-bold text-white mb-2">预约服务</h3>
                        <p className="text-gray-400 text-sm mb-6">您选择的服务：<span className="text-blue-400 font-medium">{selectedService}</span></p>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                                    姓名 <span className="text-red-400">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-500"
                                    placeholder="您的称呼"
                                />
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
                                    电话号码 <span className="text-red-400">*</span>
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    required
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-500"
                                    placeholder="您的联系电话"
                                />
                            </div>

                            <div>
                                <label htmlFor="wechat" className="block text-sm font-medium text-gray-300 mb-1">
                                    微信号 <span className="text-gray-500 font-normal text-xs ml-1">(选填)</span>
                                </label>
                                <input
                                    type="text"
                                    id="wechat"
                                    value={formData.wechat}
                                    onChange={(e) => setFormData({ ...formData, wechat: e.target.value })}
                                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-500"
                                    placeholder="您的微信号"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full py-3 mt-6 text-white font-bold rounded-lg transition-colors shadow-lg ${isSubmitting ? 'bg-blue-600/50 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-500 shadow-blue-500/20'}`}
                            >
                                {isSubmitting ? '提交中...' : '提交预约'}
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </main>
    );
}
