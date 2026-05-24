import { useState, useEffect, useRef, useCallback } from 'react';

export default function ScrollProgress() {
    const [progress, setProgress] = useState(0);
    const ticking = useRef(false);

    const updateProgress = useCallback(() => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = (scrollTop / docHeight) * 100;
        setProgress(scrolled);
        ticking.current = false;
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (!ticking.current) {
                requestAnimationFrame(updateProgress);
                ticking.current = true;
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [updateProgress]);

    return (
        <div className="fixed top-0 left-0 w-full h-1 bg-white/5 backdrop-blur-sm z-[9999]">
            <div
                className="h-full transition-all duration-100 ease-out"
                style={{ width: `${progress}%`, backgroundColor: '#D4A259' }}
            />
        </div>
    );
}