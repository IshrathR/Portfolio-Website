import { useState, useEffect, useRef } from 'react';
import SectionTitle from '../ui/SectionTitle';
import SkillBar from '../ui/SkillBar';
import skills from '../../data/skills';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function Skills() {
    const revealRef = useScrollReveal();
    const [barsVisible, setBarsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const node = sectionRef.current;
        if (!node) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setBarsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.15 }
        );

        observer.observe(node);
        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} id="skills" className="py-24 bg-slate-50/50 dark:bg-slate-800/30">
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
                            <div className="flex flex-col gap-4">
                                {category.items.map((skill) => (
                                    <SkillBar
                                        key={skill.name}
                                        name={skill.name}
                                        level={skill.level}
                                        visible={barsVisible}
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
