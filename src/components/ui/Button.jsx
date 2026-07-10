export default function Button({
    children,
    variant = 'primary',
    href,
    download,
    icon: Icon,
    className = '',
    ...props
}) {
    const base =
        'inline-flex items-center gap-2 px-7 py-3 rounded-full font-semibold text-sm cursor-pointer transition-all duration-300';

    const variants = {
        primary:
            'bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/40 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/50',
        outline:
            'border-2 border-primary text-primary hover:bg-primary hover:text-white hover:-translate-y-0.5',
        full: `${base} w-full justify-center`,
    };

    const classes = `${base} ${variants[variant] || variants.primary} ${className}`;

    if (href) {
        return (
            <a href={href} download={download} className={classes} {...props}>
                {Icon && <Icon size={18} />}
                {children}
            </a>
        );
    }

    return (
        <button className={classes} {...props}>
            {Icon && <Icon size={18} />}
            {children}
        </button>
    );
}
