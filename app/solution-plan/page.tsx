import SolutionHero from "@/components/solution-plan/SolutionHero";
import BlueprintValue from "@/components/solution-plan/BlueprintValue";
import SolutionForm from "@/components/solution-plan/SolutionForm";

export const metadata = {
    title: '获取建设方案 | 圣唐科技 AI考试系统',
    description: '为您的学校定制专属升级路径与预算框架。',
};

export default function SolutionPage() {
    return (
        <main className="min-h-screen bg-slate-50 text-slate-900">
            <SolutionHero />
            <BlueprintValue />

            {/* Form Section */}
            <section className="py-24 bg-gradient-to-b from-white to-slate-100">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-slate-800 mb-4">定制您的专属方案</h2>
                        <p className="text-slate-500">完善以下信息，协助专家为您量身打造</p>
                    </div>
                    <SolutionForm />
                </div>
            </section>
        </main>
    );
}
