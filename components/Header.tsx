import Link from 'next/link';
import { Button } from "@/components/ui/Button";
import { Menu } from "lucide-react";

export default function Header() {
    return (
        <header className="fixed top-0 w-full z-50 bg-brand-dark/80 backdrop-blur-md border-b border-white/10">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2">
                    <span className="text-2xl font-bold bg-gradient-to-r from-brand-red to-brand-red-light bg-clip-text text-transparent">
                        TangThink
                    </span>
                </Link>

                <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
                    <Link href="#solution" className="hover:text-white transition-colors">解决方案</Link>
                    <Link href="#capabilities" className="hover:text-white transition-colors">核心能力</Link>
                    <Link href="#cases" className="hover:text-white transition-colors">应用案例</Link>
                    <Link href="#process" className="hover:text-white transition-colors">合作流程</Link>
                </nav>

                <div className="flex items-center gap-4">
                    <button className="hidden md:block px-4 py-2 text-sm font-medium text-brand-gold border border-brand-gold/30 rounded hover:bg-brand-gold/10 transition-colors">
                        申请演示
                    </button>
                    <button className="md:hidden text-white">
                        <Menu className="w-6 h-6" />
                    </button>
                </div>
            </div>
        </header>
    );
}
