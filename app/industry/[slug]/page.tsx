import { notFound } from "next/navigation";
import { industries } from "@/data/industries";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import IndustryHero from "@/components/industry/IndustryHero";
import IndustryContent from "@/components/industry/IndustryContent";
import DemoHero from "@/components/demo/DemoHero";
import DemoForm from "@/components/demo/DemoForm";

// Helper function to get params safely
async function getIndustry(slug: string) {
    const industry = industries.find((i) => i.slug === slug);
    if (!industry) {
        return null;
    }
    return industry;
}

export default async function IndustryPage({ params }: { params: { slug: string } }) {
    // Await params if necessary according to newer Next.js versions, 
    // but in current stable app directory it's passed as prop.
    // However, to be safe and future proof or strictly follow types:
    const { slug } = await params;

    // In Next.js 13/14 app dir, sometimes params are not promises yet but they might change. 
    // If it's a plain object, await does nothing harmful.

    const industry = await getIndustry(slug);

    if (!industry) {
        notFound();
    }

    return (
        <main className="min-h-screen text-white selection:bg-brand-blue/30 relative">
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 pointer-events-none"></div>

            <IndustryHero
                title={industry.title}
                subtitle={industry.subtitle}
                description={industry.description}
                icon={industry.icon}
            />
            <IndustryContent
                features={industry.features}
                cases={industry.cases}
            />

            {/* Reusing Demo Section */}
            <section id="demo" className="relative py-20">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-brand-blue/20 via-transparent to-transparent"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-3xl mx-auto">
                        <div className="text-center mb-10">
                            <h2 className="text-3xl font-bold text-white mb-4">预约您的{industry.title}专属演示</h2>
                            <p className="text-gray-400">了解AI如何具体应用到您的业务场景中</p>
                        </div>
                        <DemoForm industry={industry.title} />
                    </div>
                </div>
            </section>
        </main>
    );
}

export async function generateStaticParams() {
    return industries.map((industry) => ({
        slug: industry.slug,
    }));
}
