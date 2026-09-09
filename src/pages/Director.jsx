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

                </div>
            </main>
        </PageWrapper>
    );
};

export default Director;