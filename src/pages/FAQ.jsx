import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { faqData } from '../data/faqData';
import PageWrapper from '../components/PageWrapper';
import Seo from '../components/Seo';

const FAQ = () => {
    const { t } = useTranslation();
    const [activeCategory, setActiveCategory] = useState('admission');
    const [openIndex, setOpenIndex] = useState(null);

    const categories = [
        { id: 'admission' },
        { id: 'exams' },
        { id: 'study' },
        { id: 'finance' },
        { id: 'life' },
        { id: 'contacts' },
    ];

    const filteredFaq = faqData.filter(item => item.category === activeCategory);

    return (
        <PageWrapper>
            <Seo
                title={t('titles.faq')}
                description={t('faq.subtitle')}
            />
            <section className="bg-[#F8F6F2] dark:bg-gray-950 py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 text-[#1B2A44] dark:text-gray-100 min-h-screen relative overflow-hidden">
                {/* Фоновые декоративные элементы */}
                <div className="absolute top-0 left-1/4 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-[var(--gold-primary)]/5 dark:bg-[var(--gold-primary)]/3 rounded-full blur-3xl pointer-events-none"></div>
                <div className="absolute bottom-0 right-1/4 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-[#1B2A44]/5 dark:bg-white/5 rounded-full blur-3xl pointer-events-none"></div>

                <div className="max-w-5xl mx-auto relative z-10">
                    {/* --- ЗАГОЛОВОК СТРАНИЦЫ --- */}
                    <div className="text-center mb-10 sm:mb-14 md:mb-20">
                        <span className="text-[var(--gold-primary)] font-mono text-[10px] sm:text-xs md:text-sm tracking-[0.2em] sm:tracking-[0.25em] uppercase mb-2 sm:mb-3 block font-semibold">
                            {t('faq.subtitle')}
                        </span>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif tracking-tight mb-4 sm:mb-6 text-[#1B2A44] dark:text-gray-100 font-bold px-4">
                            {t('faq.title')}
                        </h1>
                        <div className="flex justify-center items-center gap-2 sm:gap-3">
                            <div className="w-8 sm:w-12 h-[1px] bg-[var(--gold-primary)]/50"></div>
                            <div className="w-2 h-2 sm:w-3 sm:h-3 rotate-45 border border-[var(--gold-primary)] bg-[#F8F6F2] dark:bg-gray-950"></div>
                            <div className="w-8 sm:w-12 h-[1px] bg-[var(--gold-primary)]/50"></div>
                        </div>
                    </div>

                    {/* --- ТАБЫ / КАТЕГОРИИ --- */}
                    <div className="flex flex-wrap justify-center gap-2 sm:gap-2.5 md:gap-3 mb-8 sm:mb-12 md:mb-16 max-w-4xl mx-auto">
                        {categories.map((cat) => {
                            const isActive = activeCategory === cat.id;
                            return (
                                <button
                                    key={cat.id}
                                    onClick={() => {
                                        setActiveCategory(cat.id);
                                        setOpenIndex(null);
                                    }}
                                    className={`px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 md:py-3 rounded-xl text-[11px] sm:text-xs md:text-sm font-semibold tracking-wider uppercase transition-all duration-300 border ${isActive
                                        ? 'bg-[var(--gold-primary)] text-[#1B2A44] dark:text-gray-900 border-[var(--gold-primary)] shadow-lg shadow-[var(--gold-primary)]/20 translate-y-[-1px]'
                                        : 'bg-white/80 dark:bg-gray-900/80 text-[#1B2A44] dark:text-gray-300 border-gray-200/60 dark:border-gray-800 hover:border-[var(--gold-primary)] hover:bg-white dark:hover:bg-gray-800 hover:shadow-md'
                                        }`}
                                >
                                    {t(`faq.categories.${cat.id}`)}
                                </button>
                            );
                        })}
                    </div>

                    {/* --- СПИСОК ВОПРОСОВ (АККОРДЕОН) --- */}
                    <div className="space-y-3 sm:space-y-4 max-w-4xl mx-auto">
                        {filteredFaq.length > 0 ? (
                            filteredFaq.map((item, index) => {
                                const isOpen = openIndex === index;
                                return (
                                    <div
                                        key={index}
                                        className={`bg-white dark:bg-gray-900 rounded-xl sm:rounded-2xl border transition-all duration-300 overflow-hidden ${isOpen
                                            ? 'border-[var(--gold-primary)]/40 dark:border-[var(--gold-primary)]/30 shadow-xl shadow-[#1B2A44]/5 dark:shadow-gray-950/50 ring-1 ring-[var(--gold-primary)]/10'
                                            : 'border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md hover:border-gray-200 dark:hover:border-gray-700'
                                            }`}
                                    >
                                        <button
                                            onClick={() => setOpenIndex(isOpen ? null : index)}
                                            className="w-full text-left p-4 sm:p-5 md:p-6 flex justify-between items-start sm:items-center gap-3 sm:gap-4 focus:outline-none group"
                                        >
                                            <span className={`text-sm sm:text-base md:text-lg font-medium tracking-tight transition-colors duration-300 leading-relaxed sm:leading-snug pr-2 ${isOpen
                                                ? 'text-[var(--gold-primary)]'
                                                : 'text-[#1B2A44] dark:text-gray-200 group-hover:text-[var(--gold-primary)]'
                                                }`}>
                                                {t(item.questionKey)}
                                            </span>

                                            <div className={`p-1.5 sm:p-2 rounded-xl transition-all duration-300 flex-shrink-0 ${isOpen
                                                ? 'rotate-180 bg-[var(--gold-primary)]/10 text-[var(--gold-primary)]'
                                                : 'bg-gray-50 dark:bg-gray-800 text-[#1B2A44]/70 dark:text-gray-400 group-hover:bg-gray-100 dark:group-hover:bg-gray-700'
                                                }`}>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth={2.5}
                                                    stroke="currentColor"
                                                    className="w-3 h-3 sm:w-4 sm:h-4"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                                </svg>
                                            </div>
                                        </button>

                                        <div
                                            className="transition-all duration-500 ease-in-out overflow-hidden"
                                            style={{
                                                maxHeight: isOpen ? '1000px' : '0px',
                                                opacity: isOpen ? 1 : 0
                                            }}
                                        >
                                            <div className="px-4 sm:px-5 md:px-6 pb-4 sm:pb-5 md:pb-6 text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed border-t border-gray-50/80 dark:border-gray-800/50 pt-3 sm:pt-4 bg-[#FBFBFA]/50 dark:bg-gray-900/50">
                                                {t(item.answerKey)}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        ) : (
                            <div className="text-center py-8 sm:py-10 md:py-12 text-gray-400 dark:text-gray-600 bg-white dark:bg-gray-900 rounded-xl sm:rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm">
                                <p className="text-sm sm:text-base px-4">{t('faq.noQuestions') || 'Вопросы не найдены'}</p>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </PageWrapper>
    );
};

export default FAQ;