import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { getDeputiesContent } from '../data/deputiesContent';

const Deputy = () => {
    const { id } = useParams();
    const { t, i18n } = useTranslation();

    // Получаем данные, учитывая вложенную структуру твоего i18n
    const person = useMemo(() => {
        const data = getDeputiesContent(t, i18n.language);
        return data[id];
    }, [id, t, i18n.language]);

    // Если зам не найден
    if (!person) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#F8F6F2]">
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-4">{t('deputy_page.base.not_found')}</h2>
                    <Link to="/management" className="text-[#D4A259] underline">
                        {t('deputy_page.base.return_list')}
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <main className="bg-[#F8F6F2] min-h-screen py-16 px-6 text-[#1B2A44]">
            <div className="max-w-5xl mx-auto">
                {/* Кнопка назад */}
                <Link
                    to="/management"
                    className="inline-flex items-center gap-2 text-[#D4A259] font-bold uppercase tracking-widest text-sm mb-12 hover:gap-4 transition-all"
                >
                    <span>←</span> {t('deputy_page.base.back')}
                </Link>

                {/* Основная карточка */}
                <div className="bg-white rounded-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.03)] overflow-hidden mb-16 border border-gray-100">
                    <div className="md:flex">
                        {/* Фото */}
                        <div className="md:w-2/5 aspect-square bg-gray-100 overflow-hidden">
                            {person.photo ? (
                                <img src={person.photo} alt={person.name} className="w-full h-full object-cover" />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center text-gray-400 font-medium">
                                    No Photo
                                </div>
                            )}
                        </div>

                        {/* Инфо */}
                        <div className="md:w-3/5 p-10 lg:p-16 flex flex-col justify-center">
                            <span className="text-[#D4A259] font-bold uppercase tracking-[0.3em] text-sm mb-4">
                                {person.role}
                            </span>
                            <h1 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                                {person.name}
                            </h1>
                            <div className="space-y-4 text-[#1B2A44]/80 text-lg">
                                <p>
                                    <strong className="text-[#1B2A44]">{t('deputy_page.base.birth_date')}:</strong> {person.birthDate}
                                </p>
                                <p>
                                    <strong className="text-[#1B2A44]">{t('deputy_page.base.languages')}:</strong> {person.languages}
                                </p>

                                <div className="flex items-start gap-2">
                                    <strong className="text-[#1B2A44] whitespace-nowrap">{t('deputy_page.base.awards')}:</strong>
                                    {person.awards ? (
                                        <span className="text-[#D4A259] font-medium leading-tight">{person.awards}</span>
                                    ) : (
                                        <span className="text-[#D4A259] font-bold text-xl leading-none">—</span>
                                    )}
                                </div>

                                <p className="text-base italic pt-4 text-[#D4A259] leading-relaxed uppercase tracking-wider font-semibold">
                                    {person.dept}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Образование и Карьера */}
                <div className="grid md:grid-cols-3 gap-16">
                    {/* Секция Образования */}
                    <div className="md:col-span-1">
                        <h2 className="text-2xl font-bold mb-10 flex items-center gap-3">
                            <span className="w-8 h-[1px] bg-[#D4A259]"></span> {t('deputy_page.base.education')}
                        </h2>
                        <div className="space-y-10">
                            {person.education.map((edu, idx) => (
                                <div key={idx} className="relative pl-8 border-l border-gray-200">
                                    <div className="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-[#D4A259]"></div>
                                    <p className="text-sm font-bold text-[#D4A259] mb-2 uppercase tracking-wide">
                                        {edu.year} — {edu.degree}
                                    </p>
                                    <p className="text-base font-semibold leading-snug mb-1">{edu.school}</p>
                                    <p className="text-sm text-gray-500">{edu.spec}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Секция Карьеры */}
                    <div className="md:col-span-2">
                        <h2 className="text-2xl font-bold mb-10 flex items-center gap-3">
                            <span className="w-8 h-[1px] bg-[#D4A259]"></span> {t('deputy_page.base.career')}
                        </h2>
                        <div className="bg-white rounded-[32px] p-10 shadow-[0_10px_30px_rgba(0,0,0,0.02)] border border-gray-100">
                            <div className="space-y-8">
                                {person.career.map((item, index) => (
                                    <div key={index} className="flex flex-col sm:flex-row gap-4 sm:gap-10 group">
                                        <div className="min-w-[110px] text-sm font-bold text-[#D4A259] pt-1 tracking-wider">
                                            {item.period}
                                        </div>
                                        <div className="pb-8 border-b border-gray-50 w-full group-last:border-0 group-last:pb-0">
                                            <p className="text-base leading-relaxed text-[#1B2A44] font-medium">
                                                {item.position}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Deputy;