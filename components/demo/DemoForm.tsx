'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/Button";
import { Loader2, CheckCircle } from "lucide-react";

export default function DemoForm() {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await fetch('/api/demo', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setSuccess(true);
            } else {
                alert('提交失败，请稍后重试');
            }
        } catch (error) {
            console.error('Submission error:', error);
            alert('提交出错，请检查网络');
        } finally {
            setLoading(false);
        }
    }

    if (success) {
        return (
            <div className="bg-white/5 border border-brand-gold/30 rounded-2xl p-8 text-center animate-fade-in-up">
                <div className="w-16 h-16 bg-brand-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-brand-gold" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">您的演示申请已提交成功</h3>
                <p className="text-gray-400 mb-8">
                    专属顾问将在24小时内与您联系<br />
                    如需紧急咨询，请拨打：<span className="text-brand-gold font-bold">(+86) 18701319280</span>
                </p>
                <Button variant="outline" onClick={() => window.location.href = '/'}>
                    返回首页
                </Button>
            </div>
        );
    }

    return (
        <div id="form" className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm relative overflow-hidden group hover:border-brand-gold/30 transition-all duration-500">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-gold/0 via-brand-gold to-brand-gold/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">预约专属演示（仅需1分钟）</h3>
                <p className="text-brand-gold/80 text-sm">填写信息，我们将在24小时内与您联系</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-gray-400 text-sm mb-1">学校名称 <span className="text-brand-red">*</span></label>
                    <input
                        name="school"
                        required
                        type="text"
                        className="w-full bg-black/50 border border-white/10 rounded px-4 py-3 text-white focus:border-brand-gold focus:outline-none focus:ring-1 focus:ring-brand-gold transition-all"
                        placeholder="请输入学校全称"
                    />
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-gray-400 text-sm mb-1">联系人姓名 <span className="text-brand-red">*</span></label>
                        <input
                            name="name"
                            required
                            type="text"
                            className="w-full bg-black/50 border border-white/10 rounded px-4 py-3 text-white focus:border-brand-gold focus:outline-none focus:ring-1 focus:ring-brand-gold transition-all"
                            placeholder="您的姓名"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-400 text-sm mb-1">联系电话 <span className="text-brand-red">*</span></label>
                        <input
                            name="phone"
                            required
                            type="tel"
                            className="w-full bg-black/50 border border-white/10 rounded px-4 py-3 text-white focus:border-brand-gold focus:outline-none focus:ring-1 focus:ring-brand-gold transition-all"
                            placeholder="手机号码"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-gray-400 text-sm mb-1">职务</label>
                        <select
                            name="role"
                            defaultValue=""
                            className="w-full bg-black/50 border border-white/10 rounded px-4 py-3 text-white focus:border-brand-gold focus:outline-none focus:ring-1 focus:ring-brand-gold transition-all appearance-none"
                        >
                            <option value="" disabled>请选择</option>
                            <option value="principal">校长</option>
                            <option value="vice_principal">副校长</option>
                            <option value="director">教务主任</option>
                            <option value="it_head">信息化负责人</option>
                            <option value="other">其他</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-gray-400 text-sm mb-1">学校规模</label>
                        <select
                            name="size"
                            defaultValue=""
                            className="w-full bg-black/50 border border-white/10 rounded px-4 py-3 text-white focus:border-brand-gold focus:outline-none focus:ring-1 focus:ring-brand-gold transition-all appearance-none"
                        >
                            <option value="" disabled>请选择</option>
                            <option value="<1000">1000人以下</option>
                            <option value="1000-3000">1000-3000人</option>
                            <option value="3000-8000">3000-8000人</option>
                            <option value=">8000">8000人以上</option>
                        </select>
                    </div>
                </div>

                <div>
                    <label className="block text-gray-400 text-sm mb-1">当前使用系统（可选）</label>
                    <input
                        name="current_system"
                        type="text"
                        className="w-full bg-black/50 border border-white/10 rounded px-4 py-3 text-white focus:border-brand-gold focus:outline-none focus:ring-1 focus:ring-brand-gold transition-all"
                        placeholder="如：智学网、极课或是传统读卡机"
                    />
                </div>

                <div>
                    <label className="block text-gray-400 text-sm mb-1">需求简述（可选）</label>
                    <textarea
                        name="requirements"
                        rows={3}
                        className="w-full bg-black/50 border border-white/10 rounded px-4 py-3 text-white focus:border-brand-gold focus:outline-none focus:ring-1 focus:ring-brand-gold transition-all"
                        placeholder="您最想解决的问题是..."
                    />
                </div>

                <Button
                    type="submit"
                    variant="secondary"
                    size="lg"
                    className="w-full text-lg mt-2 font-bold shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] transition-all duration-300 transform hover:scale-[1.02]"
                    disabled={loading}
                >
                    {loading ? (
                        <><Loader2 className="mr-2 w-5 h-5 animate-spin" /> 提交中...</>
                    ) : (
                        '预约专属演示'
                    )}
                </Button>

                <div className="grid grid-cols-3 gap-2 text-[10px] text-gray-500 text-center mt-4">
                    <div className="flex items-center justify-center gap-1"><CheckCircle className="w-3 h-3 text-brand-gold" /> 专属系统演示</div>
                    <div className="flex items-center justify-center gap-1"><CheckCircle className="w-3 h-3 text-brand-gold" /> 定制部署方案</div>
                    <div className="flex items-center justify-center gap-1"><CheckCircle className="w-3 h-3 text-brand-gold" /> 初步预算建议</div>
                </div>
            </form>
        </div>
    );
}
