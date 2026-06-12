import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { getAcademicsContent } from '../data/academicsContent';
import PageWrapper from '../components/PageWrapper';

const Academic = () => {
    const { t } = useTranslation();

    const academicsList = useMemo(() => {
        return getAcademicsContent(t);
    }, [t]);

    return (
        <PageWrapper>
            <main className="bg-[#FBFBFA] dark:bg-gray-950 min-h-screen py-16 sm:py-24 px-4 sm:px-6 md:px-8 text-[#1B2A44] dark:text-gray-100 relative overflow-hidden">

                {/* Тонкие дизайнерские фоновые линии, как в галереях */}
                <div className="absolute top-0 left-1/4 w-[1px] h-full bg-gray-200/40 dark:bg-gray-800/20 pointer-events-none hidden md:block" />
                <div className="absolute top-0 left-3/4 w-[1px] h-full bg-gray-200/40 dark:bg-gray-800/20 pointer-events-none hidden md:block" />

                <div className="max-w-6xl mx-auto relative z-10">

                    {/* Асимметричный заголовок страницы (смещен влево) */}
                    <div className="max-w-3xl mb-20 md:mb-32 md:pl-12">
                        <span className="text-[var(--gold-primary)] font-bold uppercase tracking-[0.3em] text-[10px] sm:text-xs mb-3 block">
                            {t('academic_page.base.subtitle')}
                        </span>
                        <h1
                            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight"
                            style={{ fontFamily: "'Playfair Display', serif" }}
                        >
                            {t('academic_page.base.page_title')}
                        </h1>
                        <div className="w-20 h-[2px] bg-[var(--gold-primary)] mt-8 rounded-full" />
                    </div>

                    {/* Сетка со смещением (Шахматный порядок / Зигзаг) */}
                    <div className="space-y-24 md:space-y-40">
                        {academicsList.map((person, idx) => {
                            const sampledAwards = person.awards && Array.isArray(person.awards) && person.awards.length > 0;
                            // Если индекс нечетный — смещаем карточку вправо на десктопе
                            const isEven = idx % 2 === 0;

                            return (
                                <div
                                    key={person.id}
                                    className={`flex flex-col w-full ${isEven ? 'items-start' : 'md:items-end'}`}
                                >
                                    <div
                                        className={`w-full md:w-[75%] lg:w-[65%] bg-white dark:bg-gray-900 rounded-[32px] p-6 sm:p-10 md:p-12 
                                            shadow-[0_10px_40px_rgba(27,42,68,0.02)] border border-gray-100 dark:border-gray-800/80 
                                            relative transition-all duration-500 hover:shadow-[0_20px_50px_rgba(184,142,67,0.05)]
                                            ${!isEven ? 'md:mr-12' : 'md:ml-12'}`}
                                    >
                                        {/* Большая декоративная полупрозрачная цифра на заднем плане */}
                                        <div className="absolute -top-6 left-6 md:left-auto md:right-10 text-7xl md:text-8xl font-black text-gray-100/60 dark:text-gray-800/20 font-serif select-none pointer-events-none">
                                            {String(idx + 1).padStart(2, '0')}
                                        </div>

                                        {/* Роль и ФИО */}
                                        <div className="mb-8 pt-6 md:pt-0 relative z-10">
                                            <h2
                                                className="text-2xl sm:text-3xl font-bold leading-tight dark:text-gray-100 max-w-[90%]"
                                                style={{ fontFamily: "'Playfair Display', serif" }}
                                            >
                                                {person.name}
                                            </h2>
                                        </div>

                                        {/* Награждения */}
                                        {sampledAwards && (
                                            <div className="border-t border-gray-100 dark:border-gray-800/60 pt-6 mt-6 relative z-10">
                                                <h3 className="text-[10px] font-bold text-[#1B2A44]/40 dark:text-gray-400 uppercase tracking-widest mb-4">
                                                    {person.awardsTitle || t('academic_page.base.awards_default_title', { defaultValue: 'Награждения' })}
                                                </h3>

                                                <ul className="space-y-4">
                                                    {person.awards.map((award, index) => (
                                                        <li
                                                            key={`award-${person.id}-${index}`}
                                                            className="flex gap-4 items-start"
                                                        >
                                                            {/* Строгий маркер в виде золотой точки */}
                                                            <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[var(--gold-primary)] mt-2.5" />

                                                            <div className="flex-1">
                                                                <p className="text-sm sm:text-base text-[#1B2A44]/80 dark:text-gray-300 font-medium leading-relaxed">
                                                                    {award}
                                                                </p>
                                                            </div>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                </div>
            </main>
        </PageWrapper>
    );
};

export default Academic;