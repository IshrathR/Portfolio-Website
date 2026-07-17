import socials from '../../data/social';
import { personal } from '../../data/personal';

export default function Footer() {
    return (
        <footer className="bg-white dark:bg-slate-800 border-t border-slate-200/50 dark:border-slate-700/30 pt-12 pb-6">
            <div className="max-w-[1100px] mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8 text-center md:text-left">
                    <div>
                        <h2 className="text-lg font-bold">{personal.name}</h2>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                            {personal.title}
                        </p>
                    </div>

                    <div className="flex gap-3">
                        {socials.map((s) => (
                            <a
                                key={s.name}
                                href={s.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={s.name}
                                className="w-10 h-10 rounded-full flex items-center justify-center bg-primary/10 text-primary transition-all duration-300 hover:bg-gradient-to-r hover:from-primary hover:to-accent hover:text-white hover:-translate-y-0.5 dark:text-violet-200 dark:bg-violet-500/15"
                            >
                                <s.icon size={18} />
                            </a>
                        ))}
                    </div>
                </div>

                <p className="text-center text-[11px] text-slate-500 dark:text-slate-400 pt-6 border-t border-slate-200/50 dark:border-slate-700/30">
                    &copy; {new Date().getFullYear()} {personal.name}. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
