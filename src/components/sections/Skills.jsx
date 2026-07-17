import SectionTitle from '../ui/SectionTitle';
import skills from '../../data/skills';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function Skills() {
    const revealRef = useScrollReveal();

    return (
        <section id="skills" className="py-24 bg-slate-50/50 dark:bg-slate-800/30">
            <div className="max-w-[1100px] mx-auto px-6">
                <SectionTitle title="Skills" subtitle="My technical expertise" />

                <div
                    ref={revealRef}
                    className="grid grid-cols-1 md:grid-cols-2 gap-5"
                >
                    {skills.map((category) => (
                        <div
                            key={category.category}
                            className="glass p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10 reveal"
                        >
                            <div className="flex items-center gap-3 mb-5">
                                <category.icon size={24} className="text-primary" />
                                <h3 className="text-base font-bold">{category.category}</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {category.items.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 transition-all duration-300 hover:bg-primary hover:text-white dark:text-violet-200 dark:border-violet-500/30 dark:bg-violet-500/15 dark:hover:bg-violet-500 dark:hover:text-white"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
