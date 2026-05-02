import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const NewsList = () => {
    const { t, i18n } = useTranslation();
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);

    // ПАГИНАЦИЯ
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6; // По 6 новостей на страницу (2 ряда по 3)

    const getLocalizedField = (item, field) => {
        const lang = i18n.language;
        return item[`${field}_${lang}`] || item[field];
    };

    useEffect(() => {
        axios.get('https://sarvina-production.up.railway.app/api/news')
            .then(res => {
                const data = Array.isArray(res.data) ? res.data : (res.data.news || res.data.data || []);
                setNews(data);
                setLoading(false);
            })
            .catch(err => {
                console.error("Ошибка API:", err);
                setLoading(false);
            });
    }, []);

    if (loading) return <div className="py-20 text-center font-bold text-[#0E1A2B]">{t('newsList.loading')}</div>;

    // Логика расчета страниц
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentNews = news.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(news.length / itemsPerPage);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="bg-white min-h-screen">
            {/* Хедер страницы */}
            <div className="bg-[#F4F6F9] py-20 border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-6">
                    <h1 className="text-5xl font-bold text-[#0E1A2B] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                        {t('newsList.header_title')}
                    </h1>
                    <div className="w-24 h-[3px] bg-[#D4A259] rounded-full"></div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-20">
                {/* Сетка новостей (ТВОЙ СТИЛЬ) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {currentNews.map((item, index) => (
                        <div
                            key={item._id || index}
                            className="bg-white group rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col border border-gray-100"
                        >
                            <div className="overflow-hidden h-[250px] relative">
                                <img
                                    src={item.image ? item.image.split(',')[0].trim() : null}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                {item.createdAt && (
                                    <div className="absolute bottom-4 left-4 bg-[#0E1A2B]/80 backdrop-blur-md text-white text-[10px] px-3 py-1 rounded-full uppercase tracking-widest font-bold">
                                        {new Date(item.createdAt).toLocaleDateString(i18n.language === 'ru' ? 'ru-RU' : i18n.language === 'uz' ? 'uz-UZ' : 'en-US')}
                                    </div>
                                )}
                            </div>

                            <div className="p-8 flex flex-col flex-grow">
                                <h3 className="text-2xl font-bold text-[#0E1A2B] mb-4 line-clamp-2 group-hover:text-[#D4A259] transition-colors duration-300" style={{ fontFamily: "'Playfair Display', serif" }}>
                                    {getLocalizedField(item, 'title')}
                                </h3>
                                <p className="text-gray-600 mb-8 line-clamp-3 flex-grow leading-relaxed" style={{ fontFamily: "'Merriweather', serif" }}>
                                    {getLocalizedField(item, 'description') || t('newsList.placeholder_desc')}
                                </p>

                                <Link to={`/news/${item._id}`} className="mt-auto">
                                    <button className="flex items-center gap-2 text-[#D4A259] font-bold uppercase text-xs tracking-widest group/btn">
                                        {t('newsList.read_full')}
                                        <span className="w-6 h-[1px] bg-[#D4A259] group-hover/btn:w-10 transition-all duration-300"></span>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* ПАГИНАЦИЯ (в тон твоему дизайну) */}
                {totalPages > 1 && (
                    <div className="mt-20 flex justify-center items-center gap-3">
                        <button
                            onClick={() => currentPage > 1 && paginate(currentPage - 1)}
                            className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all ${currentPage === 1 ? 'border-gray-100 text-gray-300 cursor-not-allowed' : 'border-[#D4A259] text-[#D4A259] hover:bg-[#D4A259] hover:text-white'}`}
                        >
                            ‹
                        </button>

                        {[...Array(totalPages)].map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => paginate(idx + 1)}
                                className={`w-12 h-12 rounded-full font-bold text-sm transition-all duration-300 ${currentPage === idx + 1 ? 'bg-[#0E1A2B] text-white' : 'text-[#0E1A2B] hover:bg-[#F4F6F9]'}`}
                            >
                                {idx + 1}
                            </button>
                        ))}

                        <button
                            onClick={() => currentPage < totalPages && paginate(currentPage + 1)}
                            className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all ${currentPage === totalPages ? 'border-gray-100 text-gray-300 cursor-not-allowed' : 'border-[#D4A259] text-[#D4A259] hover:bg-[#D4A259] hover:text-white'}`}
                        >
                            ›
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default NewsList;