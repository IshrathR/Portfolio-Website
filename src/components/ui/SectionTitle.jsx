export default function SectionTitle({ title, subtitle }) {
    return (
        <div className="text-center mb-12">
            <h2 className="section-title">{title}</h2>
            {subtitle && <span className="section-subtitle">{subtitle}</span>}
        </div>
    );
}
