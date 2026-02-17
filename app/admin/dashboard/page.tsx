import DashboardTabs from "@/components/admin/DashboardTabs";
import Link from 'next/link';

export const metadata = {
    title: '管理后台 | 圣唐科技',
    robots: 'noindex, nofollow',
};

export default function AdminDashboardPage() {
    return (
        <div className="min-h-screen bg-slate-100">
            {/* Admin Header */}
            <header className="bg-white border-b border-slate-200">
                <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                    <div className="font-bold text-xl text-slate-800">圣唐科技 <span className="text-sm font-normal text-slate-500 ml-2">线索管理后台</span></div>
                    <Link href="/" className="text-sm text-blue-600 hover:underline">返回官网</Link>
                </div>
            </header>

            <main className="container mx-auto px-4 py-8">
                <DashboardTabs />
            </main>
        </div>
    );
}
