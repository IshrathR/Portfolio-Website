import { LuCalendar } from 'react-icons/lu';
import SectionTitle from '../ui/SectionTitle';
import certifications from '../../data/certifications';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function Certifications() {
    const revealRef = useScrollReveal();

    return (
        <section id="certifications" className="py-24">
            <div className="max-w-[1100px] mx-auto px-6">
                <SectionTitle title="Certifications" subtitle="Professional development" />

                <div
                    ref={revealRef}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
                >
                    {certifications.map((cert) => (
                        <div
                            key={cert.id}
                            className="glass p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10 reveal flex flex-col gap-3"
                        >
                            {cert.logo ? (
                                <img
                                    src={cert.logo}
                                    alt={cert.issuer}
                                    className="w-10 h-10 object-contain rounded shrink-0"
                                />
                            ) : (
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                    <span className="text-primary font-bold text-xs">{cert.issuer[0]}</span>
                                </div>
                            )}
                            <div>
                                <h3 className="text-sm font-bold leading-snug mb-1">
                                    {cert.title}
                                </h3>
                                <p className="text-xs text-slate-500 dark:text-slate-400">
                                    {cert.issuer}
                                </p>
                                <span className="text-[11px] font-medium text-primary-light flex items-center gap-1 mt-2">
                                    <LuCalendar size={11} />
                                    {cert.date}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
