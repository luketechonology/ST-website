import { LucideIcon } from "lucide-react";

interface IndustryHeroProps {
    title: string;
    subtitle: string;
    description: string;
    icon: LucideIcon;
}

export default function IndustryHero({ title, subtitle, description, icon: Icon }: IndustryHeroProps) {
    return (
        <section className="relative pt-32 pb-20 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-brand-blue/20 via-transparent to-transparent"></div>
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>

            <div className="container mx-auto px-4 relative z-10 text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-brand-blue/10 border border-brand-blue/30 mb-8 animate-fade-in-up">
                    <Icon className="w-10 h-10 text-brand-blue" />
                </div>

                <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                    <span className="text-gradient-gemini">{title}</span>
                </h1>

                <p className="text-xl md:text-2xl text-white font-medium mb-4">
                    {subtitle}
                </p>

                <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed font-light">
                    {description}
                </p>
            </div>
        </section>
    );
}
