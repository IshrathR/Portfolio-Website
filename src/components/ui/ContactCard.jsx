export default function ContactCard({ icon: Icon, title, detail }) {
    return (
        <div className="glass p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10 reveal">
            <Icon size={28} className="text-primary mx-auto mb-2" />
            <h3 className="text-sm font-bold mb-0.5">{title}</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">{detail}</p>
        </div>
    );
}
