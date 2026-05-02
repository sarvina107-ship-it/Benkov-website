import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
// Импортируем Swiper и его стили
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const NewsDetail = () => {
    const { id } = useParams();
    const { t, i18n } = useTranslation();
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);

    const getLocalizedField = (item, field) => {
        const lang = i18n.language;
        return item[`${field}_${lang}`] || item[field];
    };

    useEffect(() => {
        setLoading(true);
        axios.get('https://sarvina-production.up.railway.app/api/news')
            .then(res => {
                const allNews = Array.isArray(res.data) ? res.data : (res.data.news || res.data.data || []);
                const foundItem = allNews.find(n => (n._id === id || n.id === id));
                if (foundItem) {
                    setItem(foundItem);
                }
                setLoading(false);
            })
            .catch(err => {
                console.error("Ошибка API:", err);
                setLoading(false);
            });
    }, [id]);

    if (loading) return <div className="py-20 text-center text-xl text-[#0E1A2B]">{t('newsDetail.loading')}</div>;
    if (!item) return <div className="py-20 text-center text-xl text-red-500">{t('newsDetail.not_found')}</div>;

    const dateLocale = i18n.language === 'uz' ? 'uz-UZ' : i18n.language === 'en' ? 'en-US' : 'ru-RU';

    const formattedDate = rawDate
        ? new Date(rawDate).toLocaleDateString('ru-RU', {
            day: '2-digit',
            month: 'long',
            year: 'numeric'
        })
        : t('newsDetail.date_placeholder');

    // РАЗБИВАЕМ СТРОКУ С КАРТИНКАМИ В МАССИВ
    const images = item.image ? item.image.split(',').map(img => img.trim()) : [];

    return (
        <div className="min-h-screen bg-white">


            <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
                <div className="grid grid-cols-1 lg:grid-cols-[2fr,1fr] gap-12">

                    <div className="prose prose-lg max-w-none">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-[#0E1A2B] mb-6 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                            {getLocalizedField(item, 'title')}
                        </h1>

                        <div className="flex items-center gap-2 text-gray-500 mb-10 border-b border-gray-200 pb-6">
                            <svg className="w-5 h-5 text-[#D4A259]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <span className="font-medium">{formattedDate}</span>
                        </div>

                        {/* ТУТ ТЕПЕРЬ КАРУСЕЛЬ ВМЕСТО ОДНОЙ КАРТИНКИ */}
                        {images.length > 0 && (
                            <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl bg-gray-50">
                                <Swiper
                                    modules={[Navigation, Pagination]}
                                    navigation={images.length > 1}
                                    pagination={{ clickable: true }}
                                    className="h-auto"
                                >
                                    {images.map((imgUrl, index) => (
                                        <SwiperSlide key={index}>
                                            <img
                                                src={imgUrl}
                                                alt={`Slide ${index}`}
                                                className="w-full h-full object-contain max-h-[600px] mx-auto"
                                            />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        )}

                        <div className="text-gray-800 leading-relaxed space-y-6" style={{ fontFamily: "'Merriweather', serif", fontSize: '1.125rem' }}>
                            {getLocalizedField(item, 'description')?.split('\n').map((paragraph, i) => (
                                paragraph.trim() && <p key={i}>{paragraph}</p>
                            ))}
                        </div>
                    </div>

                </div>
            </div>


            {/* СТИЛИ ДЛЯ КНОПОК КАРУСЕЛИ (чтобы были красивые и поверх фото) */}
            <style>{`
                .swiper-button-next, .swiper-button-prev { color: white !important; background: rgba(0,0,0,0.3); width: 45px; height: 45px; border-radius: 50%; backdrop-filter: blur(4px); }
                .swiper-button-next:after, .swiper-button-prev:after { font-size: 18px; font-weight: bold; }
                .swiper-pagination-bullet-active { background: #D4A259 !important; }
            `}</style>
        </div>
    );
};

export default NewsDetail;