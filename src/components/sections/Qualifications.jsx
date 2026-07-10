import { useState, useEffect } from 'react';
import { LuGraduationCap, LuBriefcase } from 'react-icons/lu';
import SectionTitle from '../ui/SectionTitle';
import TimelineItem from '../ui/TimelineItem';
import qualifications from '../../data/qualifications';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function Qualifications() {
    const [activeTab, setActiveTab] = useState('education');
    const revealRef = useScrollReveal();

    // When tab switches, immediately reveal all newly rendered items
    useEffect(() => {
        const container = revealRef.current;
        if (!container) return;
        // Small delay to let React render the new children
        const timer = setTimeout(() => {
            container.querySelectorAll('.reveal').forEach((el) => {
                el.classList.add('visible');
            });
        }, 50);
        return () => clearTimeout(timer);
    }, [activeTab, revealRef]);

    return (
        <section id="qualifications" className="py-24">
            <div className="max-w-[1100px] mx-auto px-6">
                <SectionTitle title="My Journey" subtitle="Education & Experience" />

                {/* Tabs */}
                <div className="flex justify-center gap-3 mb-10">
                    <button
                        onClick={() => setActiveTab('education')}
                        className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-semibold text-sm cursor-pointer transition-all duration-300 ${activeTab === 'education'
                                ? 'bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/30'
                                : 'border-2 border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:border-primary hover:text-primary'
                            }`}
                    >
                        <LuGraduationCap size={18} />
                        Education
                    </button>
                    <button
                        onClick={() => setActiveTab('work')}
                        className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-semibold text-sm cursor-pointer transition-all duration-300 ${activeTab === 'work'
                                ? 'bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/30'
                                : 'border-2 border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:border-primary hover:text-primary'
                            }`}
                    >
                        <LuBriefcase size={18} />
                        Work
                    </button>
                </div>

                {/* Timeline */}
                <div ref={revealRef} className="max-w-[600px] mx-auto relative">
                    {/* Vertical line */}
                    <div className="absolute left-[12px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-accent opacity-30" />

                    {activeTab === 'education'
                        ? qualifications.education.map((item) => (
                            <TimelineItem key={item.id} item={item} />
                        ))
                        : qualifications.work.map((item) => (
                            <TimelineItem key={item.id} item={item} />
                        ))}
                </div>
            </div>
        </section>
    );
}
