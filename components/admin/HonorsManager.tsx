'use client';

import { useState, useEffect, useCallback } from 'react';
import { Button } from "@/components/ui/Button";

interface HonorItem {
    id: string;
    title: string;
    imageUrl: string;
    createdAt: string;
}

export default function HonorsManager() {
    const [honors, setHonors] = useState<HonorItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingId, setEditingId] = useState<string | null>(null);

    // Form states
    const [title, setTitle] = useState('');
    const [file, setFile] = useState<File | null>(null);
    const [saving, setSaving] = useState(false);

    const fetchHonors = useCallback(async () => {
        try {
            const res = await fetch('/api/admin/honors');
            if (res.ok) {
                const data = await res.json();
                setHonors(data);
            }
        } catch (error) {
            console.error('Failed to fetch honors', error);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchHonors();
    }, [fetchHonors]);

    const handleOpenModal = (honor?: HonorItem) => {
        if (honor) {
            setEditingId(honor.id);
            setTitle(honor.title);
            setFile(null); // Keep empty unless changing
        } else {
            setEditingId(null);
            setTitle('');
            setFile(null);
        }
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setEditingId(null);
        setTitle('');
        setFile(null);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!title.trim()) {
            alert('请输入标题');
            return;
        }
        if (!editingId && !file) {
            alert('请选择图片');
            return;
        }

        setSaving(true);
        try {
            let finalImageUrl = '';

            // 1. Upload new image if provided
            if (file) {
                const formData = new FormData();
                formData.append('file', file);
                const uploadRes = await fetch('/api/admin/upload', {
                    method: 'POST',
                    body: formData,
                });
                if (!uploadRes.ok) throw new Error('Failed to upload image');
                const uploadData = await uploadRes.json();
                finalImageUrl = uploadData.imageUrl;
            }

            // 2. Save or Update Honor
            if (editingId) {
                // Find existing to preserve image URL if not changed
                const existing = honors.find(h => h.id === editingId);
                const updatePayload = {
                    id: editingId,
                    title,
                    ...(finalImageUrl ? { imageUrl: finalImageUrl } : {})
                };
                
                const res = await fetch('/api/admin/honors', {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(updatePayload),
                });
                if (!res.ok) throw new Error('Failed to update honor');
            } else {
                const maxOrderRes = await fetch('/api/admin/honors', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ title, imageUrl: finalImageUrl }),
                });
                if (!maxOrderRes.ok) throw new Error('Failed to create honor');
            }

            fetchHonors();
            handleCloseModal();
        } catch (error) {
            console.error(error);
            alert('保存失败，请重试');
        } finally {
            setSaving(false);
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm('确定要删除这项荣誉吗？')) return;
        
        try {
            const res = await fetch(`/api/admin/honors?id=${id}`, {
                method: 'DELETE',
            });
            if (res.ok) {
                fetchHonors();
            } else {
                alert('删除失败');
            }
        } catch (error) {
            console.error('Failed to delete', error);
        }
    };

    if (loading) return <div className="p-8 text-center text-slate-500">加载中...</div>;

    return (
        <div className="p-6">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-slate-800">企业荣誉管理</h2>
                <Button onClick={() => handleOpenModal()} className="bg-blue-600 hover:bg-blue-700 text-white">
                    + 添加荣誉
                </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {honors.map((honor) => (
                    <div key={honor.id} className="border border-slate-200 rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
                        <div className="aspect-video w-full relative bg-slate-100 flex items-center justify-center">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img 
                                src={honor.imageUrl} 
                                alt={honor.title} 
                                className="max-w-full max-h-full object-contain"
                            />
                        </div>
                        <div className="p-4 border-t border-slate-200">
                            <h3 className="font-medium text-slate-800 mb-4">{honor.title}</h3>
                            <div className="flex gap-2">
                                <Button 
                                    variant="outline" 
                                    className="flex-1 border-slate-300 text-slate-700 hover:bg-slate-50"
                                    onClick={() => handleOpenModal(honor)}
                                >
                                    编辑
                                </Button>
                                <Button 
                                    className="flex-1 bg-red-50 text-red-600 hover:bg-red-100 hover:text-red-700 border-none"
                                    onClick={() => handleDelete(honor.id)}
                                >
                                    删除
                                </Button>
                            </div>
                        </div>
                    </div>
                ))}
                
                {honors.length === 0 && (
                    <div className="col-span-full py-12 text-center text-slate-500 border-2 border-dashed border-slate-200 rounded-lg">
                        暂无企业荣誉数据，请点击右上角按钮添加
                    </div>
                )}
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
                    <div className="bg-white rounded-lg shadow-xl w-full max-w-lg p-6">
                        <h3 className="text-lg font-bold text-slate-900 mb-4">
                            {editingId ? '编辑荣誉' : '添加荣誉'}
                        </h3>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">标题</label>
                                <input 
                                    type="text" 
                                    className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-900"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    placeholder="例如：高新技术企业证书"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">
                                    图片 {editingId && <span className="text-slate-400 font-normal">(留空以保留原图片)</span>}
                                </label>
                                <input 
                                    type="file" 
                                    accept="image/*"
                                    className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-900"
                                    onChange={(e) => setFile(e.target.files?.[0] || null)}
                                    required={!editingId}
                                />
                            </div>
                            
                            <div className="flex justify-end gap-3 mt-6 pt-4 border-t border-slate-200">
                                <Button 
                                    type="button" 
                                    variant="outline" 
                                    onClick={handleCloseModal}
                                    className="border-slate-300 text-slate-700"
                                    disabled={saving}
                                >
                                    取消
                                </Button>
                                <Button 
                                    type="submit" 
                                    className="bg-blue-600 hover:bg-blue-700 text-white"
                                    disabled={saving}
                                >
                                    {saving ? '保存中...' : '保存'}
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
