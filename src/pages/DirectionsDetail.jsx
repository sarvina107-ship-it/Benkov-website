import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { directionsData, directionsCategories } from "../data/directionsData";
import { ROUTES } from '../paths';
import PageWrapper from '../components/PageWrapper';
import Seo from '../components/Seo';

const DirectionsDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { t } = useTranslation();

    const currentDirection = directionsData && directionsData[id];

    // Если данных по такому id нет, показываем заглушку и не даем коду упасть
    if (!currentDirection) {
        return (
            <div className="pt-24 text-center font-serif text-[#0E1A2B] px-4">
                {t('directions.data.undefined')}
            </div>
        );
    }

    // Собираем все изображения направления
    const allImages = currentDirection.images ? [currentDirection.images[0], ...currentDirection.images.slice(1, 5)] : [];

    return (
        <PageWrapper>
            <Seo
                title={`${t(`directions.items.${id}.title`)}`}
                description={t(`directions.items.${id}.desc`)}
            />
            <div className="min-h-screen bg-[#F8F6F2] dark:bg-gray-950 pb-16 sm:pb-20 md:pb-24 text-[#0E1A2B] dark:text-gray-100">

                {/* Навигация */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-24 sm:pt-28 md:pt-32 mb-6 sm:mb-8">
                    <button
                        onClick={() => navigate(-1)}
                        className="inline-flex items-center gap-2.5 text-[#0E1A2B]/80 dark:text-gray-300 hover:text-[var(--gold-primary)] dark:hover:text-[var(--gold-primary)] transition-all font-medium uppercase tracking-[0.18em] text-xs sm:text-sm group select-none"
                    >
                        {/* Живая стрелка */}
                        <span className="text-lg sm:text-xl transition-transform duration-300 ease-out group-hover:-translate-x-1.5">
                            ←
                        </span>

                        {/* Текст с премиальным подчеркиванием при ховере */}
                        <span className="relative after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[1px] after:bg-[var(--gold-primary)] after:transition-all after:duration-300 group-hover:after:w-full">
                            {t('directions.data.back')}
                        </span>
                    </button>
                </div>

                {/* 1. ТЕКСТОВЫЙ БЛОК НАВЕРХУ (Выровнен строго по левому краю, в одну линию с кнопкой "Назад") */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 mb-16 sm:mb-20 md:mb-24 text-left">
                    <div className="space-y-6 sm:space-y-8 max-w-4xl"> {/* Ограничиваем только ширину текста для комфортного чтения */}

                        {/* Хедер секции */}
                        <div className="flex flex-col items-start gap-3">
                            <div className="flex items-center gap-3">
                                <div className="w-8 sm:w-12 h-[1px] bg-[var(--gold-primary)]"></div>
                                <h3 className="text-[var(--gold-primary)] text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] sm:tracking-[0.3em]">
                                    {t('directions.about.deric')}
                                </h3>
                            </div>
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-[1.15] text-[#0E1A2B] dark:text-gray-100">
                                {t(`directions.items.${id}.title`)}
                            </h1>
                        </div>

                        {/* Описание с художественной буквицей */}
                        <div className="relative pt-2">
                            <div className="absolute -top-12 left-0 text-[100px] sm:text-[130px] md:text-[160px] font-serif text-[var(--gold-primary)]/5 dark:text-[var(--gold-primary)]/3 select-none pointer-events-none">
                                Art
                            </div>
                            <p className="relative z-10 text-base sm:text-lg md:text-xl text-[#0E1A2B]/80 dark:text-gray-300 leading-[1.7] font-light
                          first-letter:text-5xl sm:first-letter:text-6xl first-letter:font-serif first-letter:font-bold 
                          first-letter:text-[var(--gold-primary)] first-letter:mr-3 first-letter:float-left 
                          first-letter:leading-[0.8] first-letter:mt-1">
                                {t(`directions.items.${id}.desc`)}
                                <br />
                                <br />
                                {t(`directions.items.${id}.desc1`)}
                            </p>
                        </div>

                        {/* Декоративная линия, уходящая в прозрачность вправо */}
                        <div className="w-32 h-[1px] bg-gradient-to-r from-[var(--gold-primary)]/40 to-transparent"></div>
                    </div>
                </section>

                {/* 2. ДЕТАЛЬНАЯ ВЫСТАВОЧНАЯ ГАЛЕРЕЯ КАРТОЧЕК */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 mb-20 sm:mb-28 md:mb-32">
                    {/* Сетка: 1 колонка на моб, 2 на планшетах/десктопе */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10 lg:gap-12">
                        {allImages.map((img, idx) => (
                            <div
                                key={idx}
                                className="group relative bg-gradient-to-b from-white to-[#FDFDFD] dark:from-gray-900 dark:to-gray-900/70
                                           rounded-[24px] sm:rounded-[32px] p-4 sm:p-5
                                           border border-[#0E1A2B]/5 dark:border-gray-800/60
                                           shadow-[0_10px_40px_rgba(14,26,43,0.02)] dark:shadow-[0_15px_40px_rgba(0,0,0,0.15)]
                                           transition-all duration-700 ease-out
                                           hover:-translate-y-2 hover:shadow-[0_25px_50px_rgba(212,162,89,0.12)] dark:hover:shadow-[0_25px_50px_rgba(212,162,89,0.06)]"
                            >
                                {/* Внутреннее декоративное паспарту (тонкая рамка вокруг контента карточки) */}
                                <div className="absolute inset-2 sm:inset-3 rounded-[18px] sm:rounded-[24px] border border-[var(--gold-primary)]/10 dark:border-[var(--gold-primary)]/5 pointer-events-none transition-all duration-700 group-hover:border-[var(--gold-primary)]/30" />

                                {/* Контейнер холста изображения */}
                                <div className="relative rounded-[16px] sm:rounded-[22px] overflow-hidden aspect-[4/3] bg-[#0E1A2B]/5 dark:bg-black/30 flex items-center justify-center">
                                    <img
                                        src={img}
                                        className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                                        alt={`${t('directions.data.work')} ${idx + 1}`}
                                        loading="lazy"
                                    />

                                    {/* Премиальный стеклянный шильдик с номером экспоната */}
                                    <div className="absolute top-3 left-3 sm:top-4 sm:left-4 px-3 py-1 bg-white/40 dark:bg-black/40 backdrop-blur-md rounded-full border border-white/20 dark:border-gray-800/30 shadow-sm select-none">
                                        <span className="font-serif text-[10px] sm:text-xs tracking-widest text-[#0E1A2B] dark:text-gray-200 font-medium">
                                            {String(idx + 1).padStart(2, '0')}
                                        </span>
                                    </div>

                                    {/* Мягкий виньетный градиент при наведении */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent 
                                                    opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                                </div>

                                {/* Описание экспоната снизу под фото */}
                                <div className="mt-5 px-1 pb-2 flex items-end justify-between relative z-10">
                                    <div className="flex flex-col gap-1">
                                        <div className="flex items-center gap-1.5">
                                            <span className="w-1.5 h-1.5 rounded-full bg-[var(--gold-primary)] opacity-60"></span>
                                            <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-[#0E1A2B]/40 dark:text-gray-500">
                                                {t('directions.about.deric' || 'Экспонат')}
                                            </span>
                                        </div>
                                        <h4 className="text-sm sm:text-base font-serif font-medium text-[#0E1A2B] dark:text-gray-200 transition-colors duration-500 group-hover:text-[var(--gold-primary)]">
                                            Student Works & Creative Process
                                        </h4>
                                    </div>

                                    {/* Графический элемент направления */}
                                    <div className="flex flex-col items-end gap-1 group/arrow">
                                        <div className="w-8 h-[1px] bg-[var(--gold-primary)]/30 transition-all duration-500 group-hover:w-12 group-hover:bg-[var(--gold-primary)]" />
                                        <div className="w-4 h-[1px] bg-[var(--gold-primary)]/20 transition-all duration-500 group-hover:w-6 group-hover:bg-[var(--gold-primary)]/60" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Секция поступления */}
                <section className="py-16 sm:py-20 bg-[#F4F2EE] dark:bg-gray-900 border-t border-[var(--gold-primary)]/10 dark:border-[var(--gold-primary)]/5">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6">
                        <div className="bg-white dark:bg-gray-800 rounded-[24px] md:rounded-[30px] p-6 sm:p-8 md:p-12 shadow-inner border border-[var(--gold-primary)]/10 dark:border-[var(--gold-primary)]/5 relative overflow-hidden">
                            <div className="absolute -bottom-6 -right-6 sm:-bottom-8 sm:-right-8 md:-bottom-10 md:-right-10 text-[100px] sm:text-[140px] md:text-[180px] font-serif font-bold text-[var(--gold-primary)]/5 dark:text-[var(--gold-primary)]/3 select-none pointer-events-none">
                                Art
                            </div>
                            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 relative z-10">
                                <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-[#F4F2EE] dark:bg-gray-700 flex items-center justify-center border-4 border-white dark:border-gray-800 shadow-lg">
                                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--gold-primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                        <polyline points="14 2 14 8 20 8"></polyline>
                                        <line x1="12" y1="18" x2="12" y2="12"></line>
                                        <line x1="9" y1="15" x2="15" y2="15"></line>
                                    </svg>
                                </div>

                                <div className="flex-1 text-center md:text-left space-y-3 sm:space-y-4">
                                    <div className="flex items-center gap-3 justify-center md:justify-start">
                                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#0E1A2B] dark:text-gray-100">
                                            {t('directions.about.apply')}
                                        </h2>
                                    </div>
                                    <div className="h-[2px] w-16 sm:w-20 bg-[var(--gold-primary)] mx-auto md:mx-0"></div>
                                    <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl">
                                        {t('directions.about.desc')}
                                    </p>
                                </div>

                                <div className="flex-shrink-0">
                                    <Link to={ROUTES.CONDITIONS}>
                                        <button className="group relative px-5 sm:px-6 md:px-8 lg:px-10 py-2.5 sm:py-3 md:py-4 bg-[#1B2A44] dark:bg-gray-900 text-white rounded-xl font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-xs sm:text-sm border border-[var(--gold-primary)]/30 hover:border-white transition-all duration-300">
                                            <span className="absolute inset-0 border border-white rounded-xl opacity-0 scale-100 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"></span>
                                            <span className="relative z-10 flex items-center gap-2">
                                                {t('directions.about.btn')}
                                                <span className="relative w-3 h-3">
                                                    <span className="absolute top-1/2 left-0 w-full h-[1px] bg-white transition-transform group-hover:rotate-90"></span>
                                                    <span className="absolute top-1/2 left-0 w-full h-[1px] bg-white"></span>
                                                </span>
                                            </span>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                            <div className="absolute inset-x-0 bottom-0 h-1 sm:h-2 bg-gradient-to-r from-transparent via-[var(--gold-primary)]/40 dark:via-[var(--gold-primary)]/20 to-transparent"></div>
                        </div>
                    </div>
                </section>
            </div>
        </PageWrapper>
    );
};

export default DirectionsDetail;