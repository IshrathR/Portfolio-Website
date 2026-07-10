export default function SkillBar({ name, level, visible }) {
    return (
        <div>
            <span className="text-xs font-medium text-slate-500 dark:text-slate-400 block mb-1">
                {name}
            </span>
            <div className="skill-bar-track">
                <span
                    className="skill-bar-fill"
                    style={{ width: visible ? `${level}%` : '0%' }}
                />
            </div>
        </div>
    );
}
