import Link from 'next/link';
import Image from 'next/image';
import { Button } from "@/components/ui/Button";
import { Menu } from "lucide-react";

export default function Header() {
    return (
        <header className="fixed top-0 w-full z-50 bg-black/60 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_30px_-10px_rgba(212,175,55,0.1)]">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-3">
                    <div className="flex flex-col">
                        <span className="text-xl md:text-3xl font-bold font-serif tracking-wide text-transparent bg-clip-text bg-gradient-to-b from-[#FFD700] via-[#D4AF37] to-[#AA8A2E]">
                            圣唐科技
                        </span>
                        <span className="text-[0.5rem] md:text-[0.65rem] text-[#D4AF37] font-serif tracking-[0.15em] uppercase opacity-80">
                            SHENG TANG SCIENCE & TECHNOLOGY
                        </span>
                    </div>
                </Link>

                <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
                    <Link href="#solution" className="hover:text-white transition-colors">解决方案</Link>
                    <Link href="#capabilities" className="hover:text-white transition-colors">核心能力</Link>
                    <Link href="#cases" className="hover:text-white transition-colors">应用案例</Link>
                    <Link href="#process" className="hover:text-white transition-colors">合作流程</Link>
                </nav>

                <div className="flex items-center gap-4">
                    <Link href="/demo">
                        <button className="hidden md:block px-4 py-2 text-sm font-medium text-brand-gold border border-brand-gold/30 rounded hover:bg-brand-gold/10 transition-colors">
                            申请演示
                        </button>
                    </Link>
                    <button className="md:hidden text-white">
                        <Menu className="w-6 h-6" />
                    </button>
                </div>
            </div>
        </header>
    );
}
