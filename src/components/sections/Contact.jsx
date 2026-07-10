import { LuPhone, LuMail, LuMapPin, LuSend } from 'react-icons/lu';
import SectionTitle from '../ui/SectionTitle';
import ContactCard from '../ui/ContactCard';
import Button from '../ui/Button';
import { personal } from '../../data/personal';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const contactCards = [
    { icon: LuPhone, title: 'Call Me', detail: personal.contact.phone },
    { icon: LuMail, title: 'Email', detail: personal.contact.email },
    { icon: LuMapPin, title: 'Location', detail: personal.contact.location },
];

export default function Contact() {
    const revealRef = useScrollReveal();

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const subject = form.subject.value.trim();
        const message = form.message.value.trim();

        const body = `From: ${name} (${email})\n\n${message}`;
        const mailto = `mailto:${personal.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = mailto;
    };

    return (
        <section id="contact" className="py-24">
            <div className="max-w-[1100px] mx-auto px-6">
                <SectionTitle title="Get In Touch" subtitle="Let's work together" />

                <div ref={revealRef} className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-8">
                    {/* Contact Info */}
                    <div className="flex flex-col gap-4">
                        {contactCards.map((card) => (
                            <ContactCard key={card.title} {...card} />
                        ))}
                    </div>

                    {/* Contact Form */}
                    <form
                        onSubmit={handleSubmit}
                        className="glass p-8 flex flex-col gap-4"
                    >
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                required
                                className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-300 text-sm outline-none focus:border-primary transition-colors"
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                required
                                className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-300 text-sm outline-none focus:border-primary transition-colors"
                            />
                        </div>
                        <input
                            type="text"
                            name="subject"
                            placeholder="Subject"
                            required
                            className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-300 text-sm outline-none focus:border-primary transition-colors"
                        />
                        <textarea
                            rows={6}
                            name="message"
                            placeholder="Your Message"
                            className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-300 text-sm outline-none focus:border-primary transition-colors resize-y"
                        />
                        <Button type="submit" icon={LuSend} variant="full">
                            Send Message
                        </Button>
                    </form>
                </div>
            </div>
        </section>
    );
}
