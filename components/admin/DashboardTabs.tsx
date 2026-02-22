'use client';

import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/Button";
import { useRouter } from 'next/navigation';

export default function DashboardTabs() {
    const [activeTab, setActiveTab] = useState<'overseas' | 'demo' | 'solution' | 'privacy'>('overseas');
    const [data, setData] = useState<{ demo: any[], solution: any[] }>({ demo: [], solution: [] });
    const [loading, setLoading] = useState(true);
    const [privacyContent, setPrivacyContent] = useState('');
    const [savingPrivacy, setSavingPrivacy] = useState(false);
    const router = useRouter();

    useEffect(() => {
        fetchData();
        fetchPrivacy();
    }, []);

    async function fetchData() {
        try {
            const res = await fetch('/api/admin/data');
            if (res.status === 401) {
                router.push('/admin/login');
                return;
            }
            const json = await res.json();
            setData(json);
        } catch (e) {
            console.error('Failed to fetch data');
        } finally {
            setLoading(false);
        }
    }

    async function fetchPrivacy() {
        try {
            const res = await fetch('/api/admin/privacy');
            if (res.ok) {
                const json = await res.json();
                if (json.content) setPrivacyContent(json.content);
            }
        } catch (e) {
            console.error('Failed to fetch privacy content');
        }
    }

    async function handleSavePrivacy() {
        setSavingPrivacy(true);
        try {
            const res = await fetch('/api/admin/privacy', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ content: privacyContent }),
            });
            if (res.ok) {
                alert('隐私政策已更新');
            } else {
                alert('更新失败');
            }
        } catch (e) {
            alert('更新出错');
        } finally {
            setSavingPrivacy(false);
        }
    }

    function formatDate(dateStr: string) {
        return new Date(dateStr).toLocaleString('zh-CN');
    }

    if (loading) return <div className="p-8 text-center text-slate-500">加载中...</div>;

    return (
        <div>
            <div className="flex gap-4 border-b border-slate-200 mb-6">
                <button
                    onClick={() => setActiveTab('overseas')}
                    className={`px-6 py-3 font-medium transition-colors ${activeTab === 'overseas' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-slate-500 hover:text-slate-700'}`}
                >
                    出海服务 ({data.demo.filter(d => d.industry === '出海服务').length})
                </button>
                <button
                    onClick={() => setActiveTab('demo')}
                    className={`px-6 py-3 font-medium transition-colors ${activeTab === 'demo' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-slate-500 hover:text-slate-700'}`}
                >
                    其他咨询 ({data.demo.filter(d => d.industry !== '出海服务').length})
                </button>
                <button
                    onClick={() => setActiveTab('solution')}
                    className={`px-6 py-3 font-medium transition-colors ${activeTab === 'solution' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-slate-500 hover:text-slate-700'}`}
                >
                    建设方案 ({data.solution.length})
                </button>
                <button
                    onClick={() => setActiveTab('privacy')}
                    className={`px-6 py-3 font-medium transition-colors ${activeTab === 'privacy' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-slate-500 hover:text-slate-700'}`}
                >
                    隐私政策管理
                </button>
            </div>

            <div className="bg-white rounded-lg shadow overflow-hidden border border-slate-200">
                {activeTab === 'privacy' ? (
                    <div className="p-6">
                        <div className="mb-4">
                            <label className="block text-slate-700 font-bold mb-2">隐私政策内容 (支持 HTML)</label>
                            <p className="text-sm text-slate-500 mb-4">您可以直接编辑下方的 HTML 代码来修改隐私政策页面展示的内容。</p>
                            <textarea
                                className="w-full h-96 border border-slate-300 rounded p-4 font-mono text-sm focus:outline-none focus:border-blue-500 text-slate-900"
                                value={privacyContent}
                                onChange={(e) => setPrivacyContent(e.target.value)}
                            ></textarea>
                        </div>
                        <div className="flex justify-end">
                            <Button
                                onClick={handleSavePrivacy}
                                className="bg-blue-600 hover:bg-blue-700 text-white"
                                disabled={savingPrivacy}
                            >
                                {savingPrivacy ? '保存中...' : '保存更改'}
                            </Button>
                        </div>
                    </div>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-slate-200">
                            <thead className="bg-slate-50">
                                <tr>
                                    {activeTab === 'demo' || activeTab === 'overseas' ? (
                                        <>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-slate-700 uppercase tracking-wider">时间</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">来源行业</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">学校/单位</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">联系人</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">电话</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">职务</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">规模</th>
                                        </>
                                    ) : (
                                        <>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">时间</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">评级</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">学校</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">联系人</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">电话</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">详情</th>
                                        </>
                                    )}
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-slate-200 text-black">
                                {activeTab === 'demo' || activeTab === 'overseas' ? (
                                    data.demo
                                        .filter(item => activeTab === 'overseas' ? item.industry === '出海服务' : item.industry !== '出海服务')
                                        .map((item: any) => (
                                            <tr key={item.id} className="hover:bg-slate-50">
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">{formatDate(item.createdAt)}</td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${item.industry === '出海服务' ? 'bg-fuchsia-100 text-fuchsia-800' :
                                                        item.industry === '建筑工程' ? 'bg-amber-100 text-amber-800' :
                                                            item.industry === '采矿工程' ? 'bg-emerald-100 text-emerald-800' :
                                                                item.industry === '审计' ? 'bg-blue-100 text-blue-800' :
                                                                    item.industry === '教育' ? 'bg-purple-100 text-purple-800' :
                                                                        item.industry === '医疗' ? 'bg-rose-100 text-rose-800' :
                                                                            'bg-gray-100 text-gray-800'
                                                        }`}>
                                                        {item.industry || '通用'}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap font-medium">{item.school}</td>
                                                <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
                                                <td className="px-6 py-4 whitespace-nowrap">{item.phone}</td>
                                                <td className="px-6 py-4 whitespace-nowrap">{item.role}</td>
                                                <td className="px-6 py-4 whitespace-nowrap">{item.size}</td>
                                            </tr>
                                        ))
                                ) : (
                                    data.solution.map((item: any) => (
                                        <tr key={item.id} className="hover:bg-slate-50">
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">{formatDate(item.createdAt)}</td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className={`px-2 py-1 rounded-full text-xs font-bold ${item.grade === 'A' ? 'bg-green-100 text-green-800' :
                                                    item.grade === 'B' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'
                                                    }`}>
                                                    {item.grade || 'C'}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap font-medium">{item.school}</td>
                                            <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
                                            <td className="px-6 py-4 whitespace-nowrap">{item.phone}</td>
                                            <td className="px-6 py-4 text-sm text-slate-500 max-w-xs truncate">
                                                {item.goals && item.goals.length ? item.goals.join(', ') : '-'}
                                            </td>
                                        </tr>
                                    ))
                                )}
                                {((activeTab === 'overseas' && data.demo.filter(d => d.industry === '出海服务').length === 0) ||
                                    (activeTab === 'demo' && data.demo.filter(d => d.industry !== '出海服务').length === 0) ||
                                    (activeTab === 'solution' && data.solution.length === 0)) && (
                                        <tr>
                                            <td colSpan={7} className="px-6 py-8 text-center text-slate-400">暂无数据</td>
                                        </tr>
                                    )}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div >
    );
}
