'use client';

import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/Button";
import { useRouter } from 'next/navigation';

export default function DashboardTabs() {
    const [activeTab, setActiveTab] = useState<'demo' | 'solution'>('demo');
    const [data, setData] = useState<{ demo: any[], solution: any[] }>({ demo: [], solution: [] });
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        fetchData();
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

    function formatDate(dateStr: string) {
        return new Date(dateStr).toLocaleString('zh-CN');
    }

    if (loading) return <div className="p-8 text-center text-slate-500">加载中...</div>;

    return (
        <div>
            <div className="flex gap-4 border-b border-slate-200 mb-6">
                <button
                    onClick={() => setActiveTab('demo')}
                    className={`px-6 py-3 font-medium transition-colors ${activeTab === 'demo' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-slate-500 hover:text-slate-700'}`}
                >
                    演示申请 ({data.demo.length})
                </button>
                <button
                    onClick={() => setActiveTab('solution')}
                    className={`px-6 py-3 font-medium transition-colors ${activeTab === 'solution' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-slate-500 hover:text-slate-700'}`}
                >
                    建设方案 ({data.solution.length})
                </button>
            </div>

            <div className="bg-white rounded-lg shadow overflow-hidden border border-slate-200">
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-slate-200">
                        <thead className="bg-slate-50">
                            <tr>
                                {activeTab === 'demo' ? (
                                    <>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-slate-700 uppercase tracking-wider">时间</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">学校</th>
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
                            {activeTab === 'demo' ? (
                                data.demo.map((item: any) => (
                                    <tr key={item.id} className="hover:bg-slate-50">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">{formatDate(item.createdAt)}</td>
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
                            {((activeTab === 'demo' && data.demo.length === 0) || (activeTab === 'solution' && data.solution.length === 0)) && (
                                <tr>
                                    <td colSpan={6} className="px-6 py-8 text-center text-slate-400">暂无数据</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
