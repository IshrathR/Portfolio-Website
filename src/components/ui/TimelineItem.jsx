import { LuCalendar } from 'react-icons/lu';

export default function TimelineItem({ item }) {
    return (
        <div className="relative pl-12 mb-8 reveal">
            {/* Dot */}
            <div className="absolute left-[5px] top-6 w-4 h-4 rounded-full bg-gradient-to-r from-primary to-accent shadow-[0_0_0_4px_rgba(124,58,237,0.2)]" />
            {/* Card */}
            <div className="glass p-5">
                <h3 className="text-sm font-bold mb-0.5">{item.title}</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-1.5">
                    {item.subtitle}
                </p>
                <span className="text-[11px] font-medium text-primary-light flex items-center gap-1">
                    <LuCalendar size={12} />
                    {item.date}
                </span>
            </div>
        </div>
    );
}
