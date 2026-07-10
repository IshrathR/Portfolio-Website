import SectionTitle from '../ui/SectionTitle';
import { personal } from '../../data/personal';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function About() {
    const revealRef = useScrollReveal();

    return (
        <section id="about" className="py-24">
            <div className="max-w-[1100px] mx-auto px-6">
                <SectionTitle title="About Me" subtitle="My introduction" />

                <div
                    ref={revealRef}
                    className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-10 items-center text-center md:text-left"
                >
                    {/* Image */}
                    <div className="relative max-w-[250px] mx-auto md:max-w-none reveal">
                        <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-primary to-accent opacity-30 -z-10" />
                        <img
                            src={personal.aboutImage}
                            alt={`About ${personal.name}`}
                            className="rounded-2xl shadow-xl w-full"
                        />
                    </div>

                    {/* Info */}
                    <div>
                        <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-8 text-sm md:text-base reveal">
                            {personal.aboutDescription}
                        </p>

                        <div className="flex justify-center md:justify-start gap-8">
                            {personal.stats.map((stat, i) => (
                                <div key={i} className="text-center p-4 reveal">
                                    <span className="block text-2xl md:text-3xl font-extrabold gradient-text">
                                        {stat.value}
                                    </span>
                                    <span className="text-xs text-slate-500 dark:text-slate-400 leading-tight whitespace-pre-line">
                                        {stat.label}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
