import Link from 'next/link';
import Image from 'next/image';
import { Button } from "@/components/ui/Button";
import { Menu, ChevronDown } from "lucide-react";
import { industries } from "@/data/industries";

export default function Header() {
    return (
        <header className="fixed top-0 w-full z-50 bg-black/60 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_30px_-10px_rgba(41,121,255,0.1)]">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-3">
                    <span className="text-2xl md:text-4xl font-bold font-serif tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-[#2979FF] via-[#D500F9] to-[#F50057]">
                        北京圣唐科技有限公司
                    </span>
                </Link>

                <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
                    <Link href="/" className="hover:text-white transition-colors">首页</Link>
                    {/* Dropdown for Solutions */}
                    <div className="relative group">
                        <button className="flex items-center gap-1 hover:text-white transition-colors py-4">
                            AI赋能行业解决方案 <ChevronDown className="w-4 h-4" />
                        </button>
                        <div className="absolute left-1/2 -translate-x-1/2 top-full w-56 bg-black/90 border border-white/10 rounded-lg shadow-xl backdrop-blur-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top pt-2">
                            <div className="flex flex-col py-2">
                                <Link href="/industry/education" className="px-4 py-2 hover:bg-brand-blue/20 hover:text-brand-blue transition-colors text-left">
                                    AI+教育
                                </Link>
                                <Link href="/industry/medical" className="px-4 py-2 hover:bg-brand-blue/20 hover:text-brand-blue transition-colors text-left">
                                    AI+医疗
                                </Link>
                                <Link href="/industry/construction" className="px-4 py-2 hover:bg-brand-blue/20 hover:text-brand-blue transition-colors text-left">
                                    AI+建筑工程
                                </Link>
                                <Link href="/industry/mining" className="px-4 py-2 hover:bg-brand-blue/20 hover:text-brand-blue transition-colors text-left">
                                    AI+采矿工程
                                </Link>
                                {industries.map((industry) => (
                                    <Link key={industry.slug} href={`/industry/${industry.slug}`} className="px-4 py-2 hover:bg-brand-blue/20 hover:text-brand-blue transition-colors text-left">
                                        {industry.title}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    <Link href="/overseas" className="hover:text-white transition-colors">出海服务（北美市场）</Link>

                </nav>

                <div className="flex items-center gap-4">
                    <Link href="/admin/login" className="text-gray-400 hover:text-white transition-colors text-sm mr-4">
                        管理端
                    </Link>
                    <Link href="/demo">
                        <Button variant="primary" className="bg-gradient-to-r from-brand-blue to-brand-purple text-white hover:opacity-90 font-bold border-none">
                            申请演示
                        </Button>
                    </Link>
                    <button className="md:hidden text-white">
                        <Menu className="w-6 h-6" />
                    </button>
                </div>
            </div>
        </header>
    );
}
