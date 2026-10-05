import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import PageWrapper from '../components/PageWrapper';
import Seo from '../components/Seo';

const Director = () => {
    const { t } = useTranslation();

    return (
        <PageWrapper>
            <Seo
                title={`${t('director.director_name')} — ${t('director.director_label')}`}
                description={t('director.director_description')}
            />
            <main className="bg-[#F8F6F2] dark:bg-gray-950 min-h-screen py-12 sm:py-16 md:py-20 px-4 sm:px-6 text-[#1B2A44] dark:text-gray-100">
                <div className="max-w-4xl mx-auto">

                    {/* Кнопка назад */}
                    <Link
                        to="/management"
                        className="inline-flex items-center gap-2 text-[var(--gold-primary)] font-bold uppercase tracking-widest text-xs sm:text-sm mb-8 sm:mb-10 md:mb-12 hover:gap-3 transition-all"
                    >
                        <span>←</span> {t('director.back', 'Назад')}
                    </Link>

                    {/* Главная карточка директора */}
                    <div className="bg-white dark:bg-gray-900 rounded-[24px] sm:rounded-[32px] shadow-[0_20px_50px_rgba(0,0,0,0.03)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-gray-100 dark:border-gray-800 p-8 sm:p-12 md:p-16">

                        <span className="text-[var(--gold-primary)] font-bold uppercase tracking-[0.2em] text-xs sm:text-sm mb-2 block">
                            {t('director.director_label')}
                        </span>

                        <h1
                            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 leading-tight text-[#1B2A44] dark:text-gray-100"
                            style={{ fontFamily: "'Playfair Display', serif" }}
                        >
                            {t('director.director_name')}
                        </h1>

                        {/* Текстовый блок */}
                        <div className="space-y-6 text-base sm:text-lg text-[#1B2A44]/85 dark:text-gray-300 leading-relaxed border-l-2 border-[var(--gold-primary)] pl-6 sm:pl-8">

                            <p className="font-medium text-[19px] sm:text-xl text-[#1B2A44] dark:text-gray-100 leading-snug">
                                {t('director.director_description1')}
                            </p>

                            <p>
                                {t('director.director_description2')}
                            </p>

                            <p className="text-sm sm:text-base text-[#1B2A44]/70 dark:text-gray-400 pt-2">
                                {t('director.director_description3')}
                            </p>

                        </div>

                    </div>

                </div>
            </main>
        </PageWrapper>
    );
};

export default Director;