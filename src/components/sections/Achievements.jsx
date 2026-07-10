import { LuTrophy, LuStar, LuLightbulb, LuMedal } from 'react-icons/lu';
import SectionTitle from '../ui/SectionTitle';
import achievements from '../../data/achievements';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const iconMap = {
    star: LuStar,
    trophy: LuTrophy,
    lightbulb: LuLightbulb,
    medal: LuMedal,
};

export default function Achievements() {
    const revealRef = useScrollReveal();

    return (
        <section id="achievements" className="py-24 bg-slate-50/50 dark:bg-slate-800/30">
            <div className="max-w-[1100px] mx-auto px-6">
                <SectionTitle title="Achievements" subtitle="Recognition & awards" />

                <div
                    ref={revealRef}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-[800px] mx-auto"
                >
                    {achievements.map((a) => {
                        const Icon = iconMap[a.icon] || LuStar;
                        return (
                            <div
                                key={a.id}
                                className="glass p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10 reveal flex items-start gap-4"
                            >
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                    <Icon size={20} className="text-primary" />
                                </div>
                                <div>
                                    <h3 className="text-sm font-bold leading-snug">{a.title}</h3>
                                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                                        {a.award}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
