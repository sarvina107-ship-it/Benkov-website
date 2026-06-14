import React from 'react';
import { useTranslation } from 'react-i18next';
import PageWrapper from '../components/PageWrapper';
import Pavel from '../assets/img/Pavel.webp';
import PavelImg1 from '../assets/img/PavelImg1.webp';
import PavelImg2 from '../assets/img/PavelImg2.webp';
import PavelImg3 from '../assets/img/PavelImg3.webp';

const Benkov = () => {
    const { t } = useTranslation();

    // Фирменные цвета Бенькова (данные берутся из i18n.js)
    const paletteColors = [
        { hex: '#E5A93C', name: t('benkov.palette.color1.name'), desc: t('benkov.palette.color1.desc') },
        { hex: '#2A7B9B', name: t('benkov.palette.color2.name'), desc: t('benkov.palette.color2.desc') },
        { hex: '#D26941', name: t('benkov.palette.color3.name'), desc: t('benkov.palette.color3.desc') },
        { hex: '#1B2A44', name: t('benkov.palette.color4.name'), desc: t('benkov.palette.color4.desc') },
    ];

    // Массив шедевров с импортированными картинками
    const masterpieces = [
        {
            title: t('benkov.gallery.art1.title'),
            year: t('benkov.gallery.art1.year'),
            img: PavelImg1,
            desc: t('benkov.gallery.art1.desc')
        },
        {
            title: t('benkov.gallery.art2.title'),
            year: t('benkov.gallery.art2.year'),
            img: PavelImg2,
            desc: t('benkov.gallery.art2.desc')
        },
        {
            title: t('benkov.gallery.art3.title'),
            year: t('benkov.gallery.art3.year'),
            img: PavelImg3,
            desc: t('benkov.gallery.art3.desc')
        }
    ];

    return (
        <PageWrapper>
            <main className="bg-[#F4F1EA] dark:bg-gray-950 min-h-screen py-16 sm:py-24 px-4 sm:px-6 text-[#1B2A44] dark:text-gray-100 font-sans selection:bg-[var(--gold-primary)] selection:text-white">
                <div className="max-w-6xl mx-auto">

                    {/* Главная секция-выставка */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">

                        {/* ЛЕВАЯ СТОРОНА: Музейная рама с фото */}
                        <div className="lg:col-span-5 flex justify-center">
                            <div className="relative p-4 bg-[#EFECE6] dark:bg-gray-900 rounded-sm shadow-[0_30px_60px_rgba(0,0,0,0.1)] dark:shadow-[0_30px_60px_rgba(0,0,0,0.5)] border-4 border-[#D1C9BC] dark:border-gray-800 w-full max-w-sm aspect-[3/4] flex flex-col justify-between group">

                                <div className="w-full h-[85%] bg-gray-200 dark:bg-gray-800 overflow-hidden relative border border-[#C5BBAE] dark:border-gray-700">
                                    <img
                                        src={Pavel}
                                        alt=""
                                        loading="lazy"
                                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />
                                </div>

                                <div className="text-center pt-3 border-t border-[#D1C9BC] dark:border-gray-800">
                                    <p className="text-xs font-serif italic text-gray-500 dark:text-gray-400 tracking-wider">
                                        П. П. Беньков (1879 – 1949)
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* ПРАВАЯ СТОРОНА: Величественное введение */}
                        <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
                            <span className="text-[var(--gold-primary)] font-bold uppercase tracking-[0.3em] text-xs sm:text-sm block">
                                {t('benkov.badge')}
                            </span>

                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight dark:text-gray-100" style={{ fontFamily: "'Playfair Display', serif" }}>
                                {t('benkov.titleFirst')} <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1B2A44] to-[var(--gold-primary)] dark:from-gray-100 dark:to-[var(--gold-primary)]">
                                    {t('benkov.titleLast')}
                                </span>
                            </h1>

                            <div className="h-[2px] w-24 bg-[var(--gold-primary)] mx-auto lg:mx-0 my-4" />

                            <p className="text-xl font-serif italic text-[#1B2A44]/70 dark:text-gray-300 leading-relaxed max-w-2xl">
                                {t('benkov.quote')}
                            </p>

                            <p className="text-base text-[#1B2A44]/80 dark:text-gray-400 leading-relaxed">
                                {t('benkov.description')}
                            </p>
                        </div>
                    </div>

                    {/* БЛОК: Интерактивная палитра Мастера */}
                    <div className="mb-24 bg-white/40 dark:bg-gray-900/40 backdrop-blur-md rounded-[32px] p-8 sm:p-12 border border-white/50 dark:border-gray-800">
                        <div className="text-center max-w-2xl mx-auto mb-10">
                            <h2 className="text-2xl sm:text-3xl font-bold mb-3 font-serif">{t('benkov.palette.title')}</h2>
                            <p className="text-sm text-gray-500 dark:text-gray-400">{t('benkov.palette.subtitle')}</p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {paletteColors.map((color, idx) => (
                                <div key={idx} className="bg-white dark:bg-gray-900 rounded-2xl p-5 shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-md transition-shadow group">
                                    <div
                                        className="w-full h-24 rounded-xl mb-4 transition-transform group-hover:scale-[1.02] duration-300"
                                        style={{ backgroundColor: color.hex }}
                                    />
                                    <div className="flex justify-between items-center mb-1">
                                        <h4 className="font-bold text-sm">{color.name}</h4>
                                        <span className="text-[10px] font-mono opacity-50">{color.hex}</span>
                                    </div>
                                    <p className="text-xs text-gray-500 dark:text-gray-400 leading-snug">{color.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* СЕКЦИЯ: Главные вехи (Асимметричные карточки-этюды) */}
                    <div className="mb-28 space-y-8">
                        <div className="text-center lg:text-left mb-10">
                            <h2 className="text-3xl sm:text-4xl font-bold font-serif">{t('benkov.facts.mainTitle')}</h2>
                            <div className="w-12 h-1 bg-[var(--gold-primary)] mt-3 rounded-full mx-auto lg:mx-0" />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Факт 1 */}
                            <div className="bg-white dark:bg-gray-900 p-8 rounded-[24px] border border-gray-100 dark:border-gray-800 shadow-[0_4px_30px_rgba(0,0,0,0.01)] relative overflow-hidden group">
                                <div className="absolute top-0 right-0 text-7xl font-serif font-black text-gray-100 dark:text-gray-800/30 select-none translate-x-4 -translate-y-2">01</div>
                                <span className="text-xs font-bold text-[var(--gold-primary)] uppercase tracking-widest block mb-2">{t('benkov.facts.fact1.badge')}</span>
                                <h3 className="text-xl font-bold mb-3 font-serif">{t('benkov.facts.fact1.title')}</h3>
                                <p className="text-sm text-[#1B2A44]/80 dark:text-gray-400 leading-relaxed">
                                    {t('benkov.facts.fact1.desc')}
                                </p>
                            </div>

                            {/* Факт 2 */}
                            <div className="bg-white dark:bg-gray-900 p-8 rounded-[24px] border border-gray-100 dark:border-gray-800 shadow-[0_4px_30px_rgba(0,0,0,0.01)] relative overflow-hidden group md:translate-y-4">
                                <div className="absolute top-0 right-0 text-7xl font-serif font-black text-gray-100 dark:text-gray-800/30 select-none translate-x-4 -translate-y-2">02</div>
                                <span className="text-xs font-bold text-[var(--gold-primary)] uppercase tracking-widest block mb-2">{t('benkov.facts.fact2.badge')}</span>
                                <h3 className="text-xl font-bold mb-3 font-serif">{t('benkov.facts.fact2.title')}</h3>
                                <p className="text-sm text-[#1B2A44]/80 dark:text-gray-400 leading-relaxed">
                                    {t('benkov.facts.fact2.desc')}
                                </p>
                            </div>

                            {/* Факт 3 */}
                            <div className="bg-white dark:bg-gray-900 p-8 rounded-[24px] border border-gray-100 dark:border-gray-800 shadow-[0_4px_30px_rgba(0,0,0,0.01)] relative overflow-hidden group">
                                <div className="absolute top-0 right-0 text-7xl font-serif font-black text-gray-100 dark:text-gray-800/30 select-none translate-x-4 -translate-y-2">03</div>
                                <span className="text-xs font-bold text-[var(--gold-primary)] uppercase tracking-widest block mb-2">{t('benkov.facts.fact3.badge')}</span>
                                <h3 className="text-xl font-bold mb-3 font-serif">{t('benkov.facts.fact3.title')}</h3>
                                <p className="text-sm text-[#1B2A44]/80 dark:text-gray-400 leading-relaxed">
                                    {t('benkov.facts.fact3.desc')}
                                </p>
                            </div>

                            {/* Факт 4 */}
                            <div className="bg-white dark:bg-gray-900 p-8 rounded-[24px] border border-gray-100 dark:border-gray-800 shadow-[0_4px_30px_rgba(0,0,0,0.01)] relative overflow-hidden group md:translate-y-4">
                                <div className="absolute top-0 right-0 text-7xl font-serif font-black text-gray-100 dark:text-gray-800/30 select-none translate-x-4 -translate-y-2">04</div>
                                <span className="text-xs font-bold text-[var(--gold-primary)] uppercase tracking-widest block mb-2">{t('benkov.facts.fact4.badge')}</span>
                                <h3 className="text-xl font-bold mb-3 font-serif">{t('benkov.facts.fact4.title')}</h3>
                                <p className="text-sm text-[#1B2A44]/80 dark:text-gray-400 leading-relaxed">
                                    {t('benkov.facts.fact4.desc')}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* СЕКЦИЯ: Главные шедевры Бенькова */}
                    <div className="mb-24 space-y-12">
                        <div className="text-center">
                            <span className="text-[var(--gold-primary)] font-bold uppercase tracking-[0.25em] text-xs block mb-2">
                                {t('benkov.gallery.badge')}
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-bold font-serif">{t('benkov.gallery.title')}</h2>
                            <div className="w-16 h-[2px] bg-[var(--gold-primary)] mx-auto mt-4 rounded-full" />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {masterpieces.map((art, idx) => (
                                <div
                                    key={idx}
                                    className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800 shadow-[0_8px_30px_rgba(0,0,0,0.02)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.15)] flex flex-col justify-between"
                                >
                                    {/* Рамка с изображением картины */}
                                    <div className="aspect-[4/3] bg-gray-100 dark:bg-gray-800 overflow-hidden relative">
                                        <img
                                            src={art.img}
                                            alt={art.title}
                                            loading="lazy"
                                            className="w-full h-full object-cover"
                                        />
                                        {/* Год создания */}
                                        <div className="absolute bottom-4 right-4 bg-[#1B2A44]/80 dark:bg-gray-900/90 backdrop-blur-sm text-[#F4F1EA] text-xs px-3 py-1 rounded-md font-serif tracking-wide">
                                            {art.year}
                                        </div>
                                    </div>

                                    {/* Описание картины а-ля строгий музейный экспликат */}
                                    <div className="p-6 flex-1 flex flex-col justify-between space-y-3">
                                        <div>
                                            <h3 className="font-serif text-xl font-bold text-[#1B2A44] dark:text-gray-100 mb-1">
                                                {art.title}
                                            </h3>
                                            <p className="text-xs text-[var(--gold-primary)] font-serif italic mb-3">{t('benkov.gallery.medium')}</p>
                                            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                                {art.desc}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Финальная художественная цитата */}
                    <div className="mt-32 text-center max-w-3xl mx-auto border-t border-gray-200 dark:border-gray-800 pt-12">
                        <p className="font-serif italic text-2xl text-[var(--gold-primary)] mb-4">
                            {t('benkov.footerQuote')}
                        </p>
                        <div className="w-3 h-3 bg-[var(--gold-primary)] rounded-full mx-auto" />
                    </div>

                </div>
            </main>
        </PageWrapper>
    );
};

export default Benkov;