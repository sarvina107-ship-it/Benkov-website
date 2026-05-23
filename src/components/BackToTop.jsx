import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react'; // Наша аккуратная стрелка

export default function BackToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 400) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-8 right-8 w-14 h-14 rounded-full group
        bg-[#1B2A44]/70 backdrop-blur-lg border border-[#D4A259]/30 text-[#D4A259] 
        flex items-center justify-center shadow-[0_8px_30px_rgb(0,0,0,0.4)] 
        transition-all duration-300 ease-in-out z-50 overflow-hidden
        hover:bg-[#D4A259] hover:text-[#1B2A44] hover:border-[#D4A259] hover:-translate-y-1 hover:shadow-[#D4A259]/30
        focus:outline-none focus:ring-2 focus:ring-[#D4A259] focus:ring-offset-2 focus:ring-offset-[#1B2A44]
        ${isVisible ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-75 invisible'}`}
            aria-label="Наверх"
        >
            {/* Контейнер для анимации стрелки */}
            <div className="relative w-6 h-6 flex flex-col items-center overflow-hidden">
                <ArrowUp
                    size={24}
                    strokeWidth={1.5}
                    className="transition-all duration-300 ease-in-out group-hover:-translate-y-8 group-hover:opacity-0"
                />
                <ArrowUp
                    size={24}
                    strokeWidth={1.5}
                    className="absolute top-8 transition-all duration-300 ease-in-out group-hover:top-0 group-hover:text-[#1B2A44]"
                />
            </div>
        </button>
    );
}