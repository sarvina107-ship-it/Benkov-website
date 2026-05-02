import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { directionsData } from '../data/directionsData';
import { ROUTES } from '../paths';

const DirectionsDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { t } = useTranslation();
    const data = directionsData[id];

    // Если данных нет, показываем заглушку
    if (!data) return <div className="pt-24 text-center font-serif text-[#0E1A2B]">Направление не найдено</div>;

    return (
        <div className="min-h-screen bg-[#F8F6F2] pb-24 text-[#0E1A2B]">
            {/* Навигация */}
            <div className="max-w-7xl mx-auto px-6 pt-28">
                <button
                    onClick={() => navigate(-1)}
                    className="flex items-center gap-2 text-[#0E1A2B]/70 hover:text-[#D4A259] transition-all font-medium uppercase tracking-widest text-xs group"
                >
                    <span className="text-lg transition-transform group-hover:-translate-x-1">←</span>
                    Назад к направлениям
                </button>
            </div>

            {/* Блок Главы Кафедры */}
            <section className="max-w-7xl mx-auto px-6 mt-12 mb-20">
                <div className="relative bg-white shadow-[0_20px_50px_rgba(0,0,0,0.05)] rounded-[40px] p-10 md:p-16 border border-[#D4A259]/10">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="relative">
                            <div className="w-56 h-72 rounded-[30px] overflow-hidden border-[6px] border-[#F8F6F2] shadow-xl">
                                <img src={data.head.photo} alt={t(`directions.items.${id}.name`)} className="w-full h-full object-cover" />
                            </div>
                            <div className="absolute -bottom-4 -right-4 bg-[#D4A259] text-white px-5 py-3 rounded-2xl shadow-lg">
                                <p className="text-[10px] uppercase tracking-tighter opacity-80">{t('directions.about.founded')}</p>
                                <p className="text-xl font-bold">{data.founded}</p>
                            </div>
                        </div>

                        <div className="flex-1 relative">
                            <span className="absolute -top-10 -left-4 text-[120px] text-[#D4A259]/10 font-serif leading-none select-none">“</span>
                            <p className="relative z-10 text-2xl md:text-3xl font-serif italic leading-relaxed text-[#0E1A2B] mb-8">
                                {t(`directions.items.${id}.quote`)}
                            </p>
                            <div className="h-[2px] w-20 bg-[#D4A259] mb-4"></div>
                            <h2 className="text-xl font-bold uppercase tracking-widest">{t(`directions.items.${id}.name`)}</h2>
                            <p className="text-[#D4A259] font-medium">{t('directions.about.head')}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Галерея */}
            <section className="max-w-7xl mx-auto px-6 mb-20">
                <div className="grid grid-cols-12 grid-rows-2 gap-4 h-[700px]">
                    <div className="col-span-12 md:col-span-7 row-span-2 rounded-[30px] overflow-hidden shadow-2xl">
                        <img src={data.images[0]} className="w-full h-full object-cover hover:scale-105 transition duration-500" alt="Focus" />
                    </div>
                    <div className="hidden md:block col-span-5 row-span-1 rounded-[30px] overflow-hidden shadow-lg">
                        <img src={data.images[1]} className="w-full h-full object-cover hover:scale-105 transition duration-500" alt="Detail" />
                    </div>
                    <div className="hidden md:block col-span-2 row-span-1 rounded-[30px] overflow-hidden shadow-lg">
                        <img src={data.images[2]} className="w-full h-full object-cover hover:scale-105 transition duration-500" alt="Process" />
                    </div>
                    <div className="hidden md:block col-span-3 row-span-1 rounded-[30px] overflow-hidden shadow-lg">
                        <img src={data.images[3]} className="w-full h-full object-cover hover:scale-105 transition duration-500" alt="Result" />
                    </div>
                </div>
            </section>

            {/* Контентная часть */}
            <section className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-start">
                    <div className="md:w-1/3 sticky top-24">
                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-[1px] bg-[#D4A259]"></div>
                                <h3 className="text-[#D4A259] text-xs font-bold uppercase tracking-[0.3em]">{t('directions.about.direc')}</h3>
                            </div>
                            <h1 className="text-4xl md:text-6xl font-serif font-bold leading-[1.1] text-[#0E1A2B]">
                                {t(`directions.items.${id}.title`)}
                            </h1>
                        </div>
                    </div>

                    <div className="md:w-2/3">
                        <div className="relative">
                            <div className="absolute -top-10 -left-10 text-[160px] font-serif text-[#D4A259]/5 select-none pointer-events-none">Art</div>
                            <p className="relative z-10 text-xl md:text-2xl text-[#0E1A2B]/90 leading-[1.7] font-light 
                                first-letter:text-6xl first-letter:font-serif first-letter:font-bold 
                                first-letter:text-[#D4A259] first-letter:mr-2 first-letter:float-left 
                                first-letter:leading-[0.8] first-letter:mt-2">
                                {t(`directions.items.${id}.desc`)}
                            </p>
                            <div className="mt-16 w-full h-[1px] bg-gradient-to-r from-[#D4A259]/30 to-transparent"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Секция поступления */}
            <section className="py-24 bg-[#F4F2EE] border-t border-[#D4A259]/10">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="bg-white rounded-[30px] p-12 shadow-inner border border-[#D4A259]/10 relative overflow-hidden">

                        {/* Декоративный элемент на фоне (Art) */}
                        <div className="absolute -bottom-10 -right-10 text-[180px] font-serif font-bold text-[#D4A259]/5 select-none pointer-events-none">
                            Art
                        </div>

                        <div className="flex flex-col md:flex-row items-center gap-12 relative z-10">
                            {/* Иконка или графический элемент */}
                            <div className="flex-shrink-0 w-24 h-24 rounded-full bg-[#F4F2EE] flex items-center justify-center border-4 border-white shadow-lg">
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#D4A259" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                    <polyline points="14 2 14 8 20 8"></polyline>
                                    <line x1="12" y1="18" x2="12" y2="12"></line>
                                    <line x1="9" y1="15" x2="15" y2="15"></line>
                                </svg>
                            </div>

                            {/* Текст */}
                            <div className="flex-1 text-center md:text-left space-y-4">
                                <div className="flex items-center gap-3 justify-center md:justify-start">
                                    <h2 className="text-4xl font-serif font-bold text-[#0E1A2B]">
                                        {t('directions.about.apply')}
                                    </h2>

                                </div>
                                <div className="h-[2px] w-20 bg-[#D4A259] mx-auto md:mx-0"></div>
                                <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
                                    {t('directions.about.desc')}
                                </p>
                            </div>

                            {/* Кнопка */}
                            <div className="flex-shrink-0">
                                <Link to={ROUTES.CONDITIONS}>
                                    <button className="group relative px-10 py-4 bg-[#1B2A44] text-white rounded-xl font-bold uppercase tracking-[0.2em] text-sm border border-[#D4A259]/30 transition-all duration-300 hover:border-white">
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

                        {/* Нижняя разделительная линия */}
                        <div className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-transparent via-[#D4A259]/40 to-transparent"></div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DirectionsDetail;