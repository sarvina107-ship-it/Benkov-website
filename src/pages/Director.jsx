import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { getDirectorContent } from '../data/deputiesContent';
import PageWrapper from '../components/PageWrapper';
import Seo from '../components/Seo';

const Director = () => {
    const { t, i18n } = useTranslation();

    // Передаем и t, и i18n, чтобы функция внутри могла использовать i18n.exists
    const data = useMemo(() => getDirectorContent(t, i18n), [t, i18n.language]);

    // Безопасное разделение имени на Имя и Фамилию/Отчество
    const firstName = data?.name ? data.name.split(' ')[0] : '';
    const lastNameAndPatronymic = data?.name ? data.name.split(' ').slice(1).join(' ') : '';

    return (
        <PageWrapper>
            <Seo
                title={`${data?.name || ''} — ${data?.role || ''}`}
                description={`${data?.additionalRole || ''}. ${t('director.birth')}: ${data?.birthDate || ''}`}
            />
            <main className="bg-[#F8F6F2] dark:bg-gray-950 min-h-screen py-12 sm:py-16 md:py-20 px-4 sm:px-6 text-[#1B2A44] dark:text-gray-100">
                <div className="max-w-5xl mx-auto">

                    {/* Кнопка назад */}
                    <Link to="/management" className="inline-flex items-center gap-2 text-[var(--gold-primary)] font-bold uppercase tracking-widest text-xs sm:text-sm mb-8 sm:mb-10 md:mb-12 hover:gap-4 transition-all">
                        <span>←</span> {t('director.back')}
                    </Link>

                    {/* Главная карточка директора */}
                    <div className="bg-white dark:bg-gray-900 rounded-[24px] sm:rounded-[32px] md:rounded-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.03)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.3)] overflow-hidden mb-8 sm:mb-12 border border-gray-100 dark:border-gray-800">
                        <div className="flex flex-col md:flex-row">

                            {/* Фото */}
                            <div className="md:w-2/5 aspect-square bg-gray-100 dark:bg-gray-800 overflow-hidden">
                                <img
                                    src={data.photo}
                                    alt={data.name}
                                    loading="lazy"
                                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                                />
                            </div>

                            {/* Основная инфо */}
                            <div className="md:w-3/5 p-6 sm:p-8 md:p-10 lg:p-16 flex flex-col justify-center">
                                <span className="text-[var(--gold-primary)] font-bold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-lg sm:text-base md:text-sm lg:text-base mb-3 sm:mb-4 block text-center md:text-left">
                                    {data.role}
                                </span>

                                <h1 className="text-4xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-4 md:mb-6 leading-tight text-center md:text-left dark:text-gray-100" style={{ fontFamily: "'Playfair Display', serif" }}>
                                    {firstName} <br /> {lastNameAndPatronymic}
                                </h1>

                                <div className="space-y-4 sm:space-y-4 text-[#1B2A44]/80 dark:text-gray-300 text-lg sm:text-base md:text-base lg:text-lg">
                                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-2">
                                        <strong className="text-[#1B2A44] dark:text-gray-200 min-w-[100px] text-lg sm:text-base md:text-base lg:text-lg">
                                            {t('director.birth')}:
                                        </strong>
                                        <span className="text-lg sm:text-base md:text-base lg:text-lg">{data.birthDate}</span>
                                    </div>
                                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-2">
                                        <strong className="text-[#1B2A44] dark:text-gray-200 min-w-[100px] text-lg sm:text-base md:text-base lg:text-lg">
                                            {t('director.nat_label')}:
                                        </strong>
                                        <span className="text-lg sm:text-base md:text-base lg:text-lg">{data.nationality}</span>
                                    </div>
                                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-2">
                                        <strong className="text-[#1B2A44] dark:text-gray-200 min-w-[100px] text-lg sm:text-base md:text-base lg:text-lg">
                                            {t('director.lang_label')}:
                                        </strong>
                                        <span className="text-lg sm:text-base md:text-base lg:text-lg">{data.languages}</span>
                                    </div>

                                    {data.additionalRole && (
                                        <p className="text-lg sm:text-base md:text-sm lg:text-base italic pt-3 sm:pt-4 text-[var(--gold-primary)] leading-relaxed border-t mt-3 sm:mt-4 border-gray-100 dark:border-gray-800 text-center md:text-left">
                                            {data.additionalRole}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* СЕКЦИЯ НАГРАД */}
                    {data && data.awards && (
                        <div className="relative overflow-hidden bg-gradient-to-b from-white to-[#FBFBF9] dark:from-gray-900 dark:to-gray-950 rounded-[24px] sm:rounded-[32px] lg:rounded-[48px] p-5 sm:p-8 md:p-10 lg:p-14 xl:p-16 shadow-[0_30px_70px_rgba(27,42,68,0.04)] dark:shadow-[0_30px_70px_rgba(0,0,0,0.4)] border border-gray-100/80 dark:border-gray-800/50 mt-8 sm:mt-12 lg:mt-16">

                            <div className="absolute -top-20 sm:-top-24 -right-20 sm:-right-24 w-48 sm:w-64 md:w-72 h-48 sm:h-64 md:h-72 bg-[var(--gold-primary)]/5 dark:bg-[var(--gold-primary)]/10 rounded-full blur-2xl sm:blur-3xl pointer-events-none" />
                            <div className="absolute -bottom-20 sm:-bottom-24 -left-20 sm:-left-24 w-48 sm:w-64 md:w-72 h-48 sm:h-64 md:h-72 bg-[#1B2A44]/5 dark:bg-gray-800/20 rounded-full blur-2xl sm:blur-3xl pointer-events-none" />

                            <div className="relative mb-8 sm:mb-10 md:mb-12 lg:mb-14 text-center md:text-left">
                                <span className="text-[var(--gold-primary)] font-bold uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[10px] sm:text-xs mb-2 sm:mb-3 block">
                                    {t('director.achievements_subtitle')}
                                </span>
                                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1B2A44] dark:text-gray-100 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                                    {data.awardsTitle}
                                </h2>
                                <div className="w-16 sm:w-20 h-[2px] sm:h-[3px] bg-gradient-to-r from-[var(--gold-primary)] to-transparent mt-3 sm:mt-4 mx-auto md:mx-0 rounded-full" />
                            </div>

                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 md:gap-7 lg:gap-8 relative z-10">
                                {data.awards.map((award, index) => (
                                    <li
                                        key={`director-award-${index}`}
                                        className="group relative flex gap-4 sm:gap-5 p-5 sm:p-6 md:p-7 lg:p-8 rounded-2xl bg-white dark:bg-gray-900/60 border border-gray-100 dark:border-gray-800/80 items-start shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:shadow-[0_20px_40px_rgba(27,42,68,0.06)] dark:hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] hover:border-[var(--gold-primary)]/40 dark:hover:border-[var(--gold-primary)]/40 transition-all duration-500 hover:-translate-y-0.5 sm:hover:-translate-y-1"
                                    >
                                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[var(--gold-primary)]/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                                        <div className="flex-shrink-0 relative w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-[#F8F6F2] dark:bg-gray-950 border border-gray-200/60 dark:border-gray-800 flex items-center justify-center transition-all duration-500 group-hover:bg-gradient-to-br group-hover:from-[#1B2A44] group-hover:to-gray-900 dark:group-hover:from-[var(--gold-primary)] dark:group-hover:to-[#b09252] group-hover:border-transparent group-hover:rotate-[3deg] sm:group-hover:rotate-[6deg] shadow-inner">
                                            <svg
                                                className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--gold-primary)] group-hover:text-white transition-colors duration-500"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                                            </svg>

                                            <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-sm flex items-center justify-center text-[10px] font-bold text-[#1B2A44]/60 dark:text-gray-400 group-hover:bg-[var(--gold-primary)] group-hover:text-white group-hover:border-transparent transition-all duration-500">
                                                {index + 1}
                                            </span>
                                        </div>

                                        <div className="flex-1 space-y-1 pt-1">
                                            <p className="text-base sm:text-lg text-[#1B2A44]/90 dark:text-gray-200 leading-relaxed font-semibold transition-colors duration-300 group-hover:text-[#1B2A44] dark:group-hover:text-[var(--gold-primary)]">
                                                {award}
                                            </p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                </div>
            </main>
        </PageWrapper>
    );
};

export default Director;