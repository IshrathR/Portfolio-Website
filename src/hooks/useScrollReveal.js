import { useEffect, useRef } from 'react';

export function useScrollReveal() {
    const ref = useRef(null);

    useEffect(() => {
        const node = ref.current;
        if (!node) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.05, rootMargin: '0px 0px -20px 0px' }
        );

        // Observe the element itself or its children
        if (node.classList.contains('reveal')) {
            observer.observe(node);
        } else {
            node.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
        }

        return () => observer.disconnect();
    }, []);

    return ref;
}
