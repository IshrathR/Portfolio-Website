import { LuCalendar } from 'react-icons/lu';

export default function ProjectCard({ project }) {
    return (
        <div className="glass overflow-hidden group transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:shadow-primary/10">
            {project.image ? (
                <div className="h-44 overflow-hidden flex items-center justify-center bg-white dark:bg-slate-700 p-6">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                </div>
            ) : (
                <div className="h-2 bg-gradient-to-r from-primary to-accent" />
            )}
            <div className="p-5">
                {project.url ? (
                    <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-base font-bold mb-1.5 block hover:text-primary transition-colors"
                    >
                        {project.title} ↗
                    </a>
                ) : (
                    <h3 className="text-base font-bold mb-1.5">{project.title}</h3>
                )}
                {project.timeline && (
                    <span className="text-[11px] font-medium text-primary-light flex items-center gap-1 mb-2">
                        <LuCalendar size={11} />
                        {project.timeline}
                    </span>
                )}
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-3">
                    {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                        <span
                            key={tag}
                            className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-primary/10 text-primary"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}
