import { LuMouse, LuArrowDown, LuMessageCircle, LuDownload } from 'react-icons/lu';
import Button from '../ui/Button';
import socials from '../../data/social';
import { personal } from '../../data/personal';

export default function Hero() {
    return (
        <section
            id="home"
            className="min-h-screen flex items-center pt-20 pb-16 relative overflow-hidden"
        >
            {/* Background glows */}
            <div className="absolute -top-1/2 -right-1/3 w-[80%] h-[150%] bg-[radial-gradient(circle,rgba(124,58,237,0.08)_0%,transparent_60%)] pointer-events-none" />
            <div className="absolute -bottom-1/3 -left-1/5 w-[60%] h-full bg-[radial-gradient(circle,rgba(59,130,246,0.06)_0%,transparent_60%)] pointer-events-none" />

            <div className="max-w-[1100px] mx-auto px-6 w-full relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-[60px_1fr_350px] gap-8 items-center">
                    {/* Social sidebar */}
                    <div className="flex md:flex-col justify-center gap-5 order-3 md:order-1">
                        {socials.map((s) => (
                            <a
                                key={s.name}
                                href={s.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={s.name}
                                className="text-slate-400 dark:text-slate-500 hover:text-primary transition-all duration-300 hover:-translate-y-0.5"
                            >
                                <s.icon size={20} />
                            </a>
                        ))}
                    </div>

                    {/* Info */}
                    <div className="text-center md:text-left order-2 md:order-2">
                        <span className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                            {personal.greeting}
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold leading-tight my-2 gradient-text">
                            {personal.name}
                        </h1>
                        <p className="text-lg md:text-xl font-semibold mb-4">
                            {personal.title}
                        </p>
                        <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-4 max-w-[500px] mx-auto md:mx-0">
                            {personal.description}
                        </p>

                        {/* Top Skills Badges */}
                        <div className="flex gap-2 flex-wrap justify-center md:justify-start mb-6">
                            {personal.topSkills.map((skill) => (
                                <span
                                    key={skill}
                                    className="px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 dark:text-violet-200 dark:border-violet-500/30 dark:bg-violet-500/15"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>

                        <div className="flex gap-3 flex-wrap justify-center md:justify-start">
                            <Button href="#contact" icon={LuMessageCircle}>
                                Get In Touch
                            </Button>
                            <Button
                                variant="outline"
                                href={personal.cvPath}
                                download
                                icon={LuDownload}
                            >
                                Download CV
                            </Button>
                        </div>
                    </div>

                    {/* Profile image */}
                    <div className="flex justify-center order-1 md:order-3">
                        <div className="w-[250px] h-[250px] md:w-[320px] md:h-[320px] rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%] overflow-hidden bg-gradient-to-r from-primary to-accent p-1 animate-blob shadow-[0_0_40px_rgba(124,58,237,0.2)]">
                            <img
                                src={personal.profileImage}
                                alt={personal.name}
                                className="w-full h-full object-cover rounded-[inherit]"
                            />
                        </div>
                    </div>
                </div>

                {/* Scroll indicator */}
                <a
                    href="#about"
                    className="absolute -bottom-16 left-1/2 -translate-x-1/2 flex items-center gap-2 text-slate-400 dark:text-slate-500 text-xs font-medium animate-scroll-bounce hidden md:flex"
                    onClick={(e) => {
                        e.preventDefault();
                        document
                            .querySelector('#about')
                            ?.scrollIntoView({ behavior: 'smooth' });
                    }}
                >
                    <LuMouse size={16} />
                    <span>Scroll Down</span>
                    <LuArrowDown size={14} />
                </a>
            </div>
        </section>
    );
}
