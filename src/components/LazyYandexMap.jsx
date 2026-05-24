import React, { useState, useEffect, useRef } from 'react';

const LazyYandexMap = () => {
    const [isVisible, setIsVisible] = useState(false);
    const mapRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1, rootMargin: '200px' }
        );

        if (mapRef.current) {
            observer.observe(mapRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div ref={mapRef} className="relative group">
            <div className="absolute -inset-2 bg-[var(--gold-primary)]/10 dark:bg-[var(--gold-primary)]/5 blur-xl rounded-3xl opacity-50 group-hover:opacity-100 transition"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-white/5 dark:border-gray-700/30 h-[250px] sm:h-[280px] md:h-[300px]">
                {isVisible ? (
                    <iframe
                        src="https://yandex.uz/map-widget/v1/org/139373972732/?ll=69.240921%2C41.317897&z=16"
                        className="w-full h-full"
                        frameBorder="0"
                        allowFullScreen={true}
                        loading="lazy"
                        title="yandex-map"
                    />
                ) : (
                    <div className="w-full h-full bg-[#1B2A44] dark:bg-gray-800 flex items-center justify-center">
                        <div className="text-center">
                            <div className="text-4xl mb-2">🗺️</div>
                            <p className="text-gray-400 text-sm">Загрузка карты...</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default LazyYandexMap;