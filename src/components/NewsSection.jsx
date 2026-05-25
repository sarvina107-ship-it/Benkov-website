import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ROUTES } from '../paths';
import PageWrapper from './PageWrapper';
// 1. ИМПОРТИРУЙ СВОЙ КОМПОНЕНТ СКЕЛЕТОНА ТУТ (исправь путь, если он другой)
import CardSkeleton from './CardSkeleton';

const NewsSection = () => {
    const { t, i18n } = useTranslation();
    const [news, setNews] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [loading, setLoading] = useState(true);
    const [itemsPerSlide, setItemsPerSlide] = useState(4);

    const getLocalizedField = (item, field) => {
        const lang = i18n.language;
        return item[`${field}_${lang}`] || item[field];
    };

    const getItemsPerSlide = () => {
        const width = window.innerWidth;
        if (width < 640) return 1;      // Мобилки: 1 новость
        if (width < 1024) return 2;     // Планшеты: 2 новости
        return 4;                        // Десктоп: 4 новости
    };

    useEffect(() => {
        const handleResize = () => {
            const newItemsPerSlide = getItemsPerSlide();
            if (newItemsPerSlide !== itemsPerSlide) {
                setItemsPerSlide(newItemsPerSlide);
                setCurrentIndex(0);
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, [itemsPerSlide]);

    // Загрузка новостей
    useEffect(() => {
        axios.get('https://sarvina-production.up.railway.app/api/news')
            .then(res => {
                const data = Array.isArray(res.data)
                    ? res.data
                    : (res.data.news || res.data.data || []);
                setNews(data);
                setLoading(false);
            })
            .catch(err => {
                console.error("Ошибка API:", err);
                setLoading(false);
            });
    }, []);

    // 2. УБРАЛИ ДИРЕКТИВНЫЙ RETURN ПРИ LOADING, НО ОСТАВИЛИ ДЛЯ ПУСТОГО МАССИВА ПОСЛЕ ЗАГРУЗКИ
    if (!loading && news.length === 0) return null;

    // Считаем слайды (если идет загрузка, берем itemsPerSlide как один слайд по умолчанию)
    const totalSlides = loading ? 1 : Math.ceil(news.length / itemsPerSlide);

    const nextSlide = () => {
        if (loading) return;
        setCurrentIndex((prev) => (prev + 1) % totalSlides);
    };

    const prevSlide = () => {
        if (loading) return;
        setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
    };

    // Выбираем новости для текущего слайда (только если загрузка завершена)
    const currentNews = loading
        ? []
        : news.slice(currentIndex * itemsPerSlide, currentIndex * itemsPerSlide + itemsPerSlide);

    return (
        <PageWrapper>
            <section className="py-[60px] sm:py-[100px] md:py-[120px] lg:py-[150px] bg-[#F4F6F9] dark:bg-gray-950 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

                    {/* Заголовок */}
                    <div className="flex flex-col sm:flex-row justify-between items-center mb-12 sm:mb-16">
                        <div className="text-center sm:text-left mb-6 sm:mb-0">
                            <h2 className="text-3xl sm:text-4xl font-bold text-[#0E1A2B] dark:text-gray-100" style={{ fontFamily: "'Playfair Display', serif" }}>
                                {t('home.news.title')}
                            </h2>
                            <div className="w-20 h-[3px] bg-[var(--gold-primary)] mt-4 rounded-full mx-auto sm:mx-0"></div>
                        </div>

                        {/* Кнопки навигации */}
                        {totalSlides > 1 && (
                            <div className="flex gap-3">
                                <button
                                    onClick={prevSlide}
                                    className="w-10 h-10 rounded-full border border-[var(--gold-primary)] text-[var(--gold-primary)] text-xl hover:bg-[var(--gold-primary)] hover:text-[#0E1A2B] dark:hover:text-gray-900 transition-all duration-300 flex items-center justify-center"
                                >
                                    ‹
                                </button>
                                <button
                                    onClick={nextSlide}
                                    className="w-10 h-10 rounded-full border border-[var(--gold-primary)] text-[var(--gold-primary)] text-xl hover:bg-[var(--gold-primary)] hover:text-[#0E1A2B] dark:hover:text-gray-900 transition-all duration-300 flex items-center justify-center"
                                >
                                    ›
                                </button>
                            </div>
                        )}
                    </div>

                    <div className="relative">
                        {totalSlides > 1 && (
                            <>
                                <button
                                    onClick={prevSlide}
                                    className="hidden xl:flex absolute -left-4 lg:-left-8 xl:-left-12 top-1/2 -translate-y-1/2 w-10 h-10 lg:w-12 lg:h-12 rounded-full border border-[var(--gold-primary)] text-[var(--gold-primary)] text-xl lg:text-2xl hover:bg-[var(--gold-primary)] hover:text-[#0E1A2B] dark:hover:text-gray-900 transition-all duration-300 z-20 items-center justify-center bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm"
                                >
                                    ‹
                                </button>
                                <button
                                    onClick={nextSlide}
                                    className="hidden xl:flex absolute -right-4 lg:-right-8 xl:-right-12 top-1/2 -translate-y-1/2 w-10 h-10 lg:w-12 lg:h-12 rounded-full border border-[var(--gold-primary)] text-[var(--gold-primary)] text-xl lg:text-2xl hover:bg-[var(--gold-primary)] hover:text-[#0E1A2B] dark:hover:text-gray-900 transition-all duration-300 z-20 items-center justify-center bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm"
                                >
                                    ›
                                </button>
                            </>
                        )}

                        {/* Сетка новостей */}
                        <div className={`
                            grid gap-6 md:gap-8
                            ${itemsPerSlide === 1 ? 'grid-cols-1' : ''}
                            ${itemsPerSlide === 2 ? 'grid-cols-1 sm:grid-cols-2' : ''}
                            ${itemsPerSlide === 4 ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4' : ''}
                        `}>
                            {/* 3. ЕСЛИ ИДЕТ ЗАГРУЗКА, РЕНДЕРИМ СКЕЛЕТОНЫ */}
                            {loading ? (
                                Array.from({ length: itemsPerSlide }).map((_, idx) => (
                                    <CardSkeleton key={idx} />
                                ))
                            ) : (
                                // ЕСЛИ ЗАГРУЗКА ЗАКОНЧИЛАСЬ, РЕНДЕРИМ НАСТОЯЩИЕ КАРТОЧКИ
                                currentNews.map((item, index) => (
                                    <div
                                        key={item._id || index}
                                        className="bg-white dark:bg-gray-900 relative group rounded-2xl overflow-hidden shadow-xl dark:shadow-gray-900/50 hover:shadow-2xl transition-shadow duration-500 flex flex-col h-full"
                                    >
                                        <div className="overflow-hidden h-[200px] sm:h-[220px]">
                                            <img
                                                src={item.image || null}
                                                alt={item.title || "News"}
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                            />
                                        </div>
                                        <div className="p-4 sm:p-6 flex flex-col flex-grow">
                                            <h3 className="text-lg sm:text-xl font-bold text-[#0E1A2B] dark:text-gray-100 mb-2 line-clamp-2 sm:line-clamp-1" style={{ fontFamily: "'Playfair Display', serif" }}>
                                                {getLocalizedField(item, 'title')}
                                            </h3>
                                            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 line-clamp-3 sm:line-clamp-2 flex-grow" style={{ fontFamily: "'Merriweather', serif" }}>
                                                {getLocalizedField(item, 'description') || t('home.news.placeholder_desc')}
                                            </p>

                                            <Link to={`/news/${item._id}`} className="mt-auto">
                                                <button className="group/btn relative w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-[var(--gold-primary)] text-white hover:text-[var(--gold-primary)] rounded-xl font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[11px] sm:text-sm border border-[var(--gold-primary)]/50 transition-colors duration-500 hover:border-[var(--gold-primary)] hover:bg-[var(--gold-primary)]/5">
                                                    <span className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-[var(--gold-primary)] opacity-0 group-hover/btn:opacity-100 transition-all duration-300 rounded-tl-lg"></span>
                                                    <span className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-[var(--gold-primary)] opacity-0 group-hover/btn:opacity-100 transition-all duration-300 rounded-br-lg"></span>

                                                    <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3">
                                                        {t('home.news.read_more')}
                                                        <span className="relative flex items-center justify-center">
                                                            <span className="w-3 sm:w-4 h-[1px] bg-white group-hover/btn:bg-[var(--gold-primary)] transform origin-right transition-transform duration-300 group-hover/btn:scale-x-125"></span>
                                                            <span className="absolute right-0 w-1 h-1 sm:w-1.5 sm:h-1.5 border-t border-r border-white group-hover/btn:border-[var(--gold-primary)] rotate-45 transition-transform duration-300 group-hover/btn:translate-x-1"></span>
                                                        </span>
                                                    </span>

                                                    <span className="absolute inset-0 rounded-xl opacity-0 group-hover/btn:opacity-100 shadow-[0_0_20px_rgba(212,162,89,0.1)] transition-opacity duration-500"></span>
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>

                        {/* Индикаторы слайдов */}
                        {totalSlides > 1 && (
                            <div className="flex justify-center gap-2 mt-8 sm:mt-10 md:mt-12">
                                {Array.from({ length: totalSlides }).map((_, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setCurrentIndex(idx)}
                                        className={`transition-all duration-300 rounded-full ${currentIndex === idx
                                            ? 'w-8 h-2 bg-[var(--gold-primary)]'
                                            : 'w-2 h-2 bg-[var(--gold-primary)]/40 dark:bg-[var(--gold-primary)]/20 hover:bg-[var(--gold-primary)]/70'
                                            }`}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* Кнопка "Все новости" */}
                <div className="mt-12 sm:mt-16 text-center">
                    <Link to={ROUTES.NEWSLIST}>
                        <button className="group relative px-6 sm:px-8 md:px-10 py-3 sm:py-4 bg-[#1B2A44] dark:bg-gray-800 text-white rounded-xl font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-xs sm:text-sm border border-white/30 dark:border-gray-700 transition-colors duration-300 hover:border-white dark:hover:border-gray-600">
                            <span className="absolute inset-0 border border-[#1B2A44] dark:border-gray-700 rounded-xl opacity-0 scale-100 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"></span>
                            <span className="relative z-10 flex items-center gap-2">
                                {t('home.news.all_news')}
                                <span className="relative w-3 h-3">
                                    <span className="absolute top-1/2 left-0 w-full h-[1px] bg-white transition-transform group-hover:rotate-90"></span>
                                    <span className="absolute top-1/2 left-0 w-full h-[1px] bg-white"></span>
                                </span>
                            </span>
                        </button>
                    </Link>
                </div>
            </section>
        </PageWrapper>
    );
};

export default NewsSection;