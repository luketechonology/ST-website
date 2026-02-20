import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Capabilities from "@/components/Capabilities";
import Trust from "@/components/Trust";
import Deployment from "@/components/Deployment";
import Process from "@/components/Process";
import CTA from "@/components/CTA";

export const metadata = {
    title: "AI+教育考试解决方案 | 圣唐科技",
    description: "用AI重构学校考试体系，覆盖出题、组卷、考试、阅卷、数据分析全流程",
};

export default function EducationPage() {
    return (
        <main className="min-h-screen text-white selection:bg-brand-blue/30 relative">
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 pointer-events-none"></div>

            <Problem />
            <Solution />
            <Capabilities />
            <Trust />
            <Deployment />
            <Process />
            <CTA />
        </main>
    );
}
