import SectionTitle from '../ui/SectionTitle';
import ProjectCard from '../ui/ProjectCard';
import projects from '../../data/projects';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function Projects() {
    const revealRef = useScrollReveal();

    return (
        <section id="projects" className="py-24 bg-slate-50/50 dark:bg-slate-800/30">
            <div className="max-w-[1100px] mx-auto px-6">
                <SectionTitle title="Projects" subtitle="Recent work" />

                <div
                    ref={revealRef}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
                >
                    {projects.map((project, i) => (
                        <div key={project.id} className="reveal" style={{ transitionDelay: `${i * 100}ms` }}>
                            <ProjectCard project={project} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
