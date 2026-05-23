import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import PageWrapper from '../components/PageWrapper';

const AdminNews = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    // ПРОВЕРКА ПРИ ЗАГРУЗКЕ
    useEffect(() => {
        const token = localStorage.getItem('adminToken');
        if (token !== 'secret-key-777') {
            navigate('/login');
        }
        fetchNews();
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('adminToken');
        navigate('/login');
    };

    const [formData, setFormData] = useState({
        title_ru: '',
        title_uz: '',
        title_en: '',
        description_ru: '',
        description_uz: '',
        description_en: '',
        image: '',
        date: ''
    });

    const [editId, setEditId] = useState(null);
    const [newsList, setNewsList] = useState([]);
    const [status, setStatus] = useState('');
    const [loading, setLoading] = useState(false);
    const [uploading, setUploading] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const IMGBB_API_KEY = '24e129c25ed502eb69213676bb176822';

    const fetchNews = async () => {
        try {
            const res = await axios.get('https://sarvina-production.up.railway.app/api/news');
            const data = Array.isArray(res.data) ? res.data : (res.data.news || res.data.data || []);
            setNewsList(data);
        } catch (err) {
            console.error("Ошибка при загрузке списка:", err);
        }
    };

    const uploadToImgBB = async (file) => {
        const body = new FormData();
        body.append('image', file);
        try {
            const res = await axios.post(`https://api.imgbb.com/1/upload?key=${IMGBB_API_KEY}`, body);
            return res.data.data.url;
        } catch (err) {
            console.error("Ошибка ImgBB:", err);
            throw new Error("Failed to upload photo");
        }
    };

    const handlePaste = async (e) => {
        const items = e.clipboardData.items;
        for (let i = 0; i < items.length; i++) {
            if (items[i].type.indexOf("image") !== -1) {
                const file = items[i].getAsFile();
                setUploading(true);
                try {
                    const url = await uploadToImgBB(file);
                    setFormData(prev => ({
                        ...prev,
                        image: prev.image ? `${prev.image}, ${url}` : url
                    }));
                    setStatus(t('admin.photo_added'));
                } catch (err) {
                    setStatus(t('admin.photo_error'));
                } finally {
                    setUploading(false);
                }
            }
        }
    };

    // Загрузка фото с телефона (через input)
    const handleFileUpload = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        setUploading(true);
        try {
            const url = await uploadToImgBB(file);
            setFormData(prev => ({
                ...prev,
                image: prev.image ? `${prev.image}, ${url}` : url
            }));
            setStatus(t('admin.photo_added'));
        } catch (err) {
            setStatus(t('admin.photo_error'));
        } finally {
            setUploading(false);
        }
    };

    const handleEdit = (news) => {
        setEditId(news._id || news.id);
        setFormData({
            title_ru: news.title_ru || '',
            title_uz: news.title_uz || '',
            title_en: news.title_en || '',
            description_ru: news.description_ru || '',
            description_uz: news.description_uz || '',
            description_en: news.description_en || '',
            date: news.date ? news.date.split('T')[0] : '',
            image: news.image || ''
        });
        window.scrollTo({ top: 0, behavior: 'smooth' });
        if (window.innerWidth < 768) {
            setMobileMenuOpen(false);
        }
    };

    const resetForm = () => {
        setEditId(null);
        setFormData({
            title_ru: '', title_uz: '', title_en: '',
            description_ru: '', description_uz: '', description_en: '',
            date: '', image: ''
        });
        setStatus('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus(editId ? t('admin.updating') : t('admin.sending'));

        try {
            if (editId) {
                await axios.put(`https://sarvina-production.up.railway.app/api/news/${editId}`, formData);
                setStatus(t('admin.update_success'));
            } else {
                await axios.post('https://sarvina-production.up.railway.app/api/news', formData);
                setStatus(t('admin.create_success'));
            }
            resetForm();
            fetchNews();
        } catch (err) {
            setStatus(t('admin.error') + err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (e, id) => {
        e.stopPropagation();
        if (window.confirm(t('admin.delete_confirm'))) {
            try {
                await axios.delete(`https://sarvina-production.up.railway.app/api/news/${id}`);
                fetchNews();
                if (editId === id) resetForm();
            } catch (err) {
                alert(t('admin.delete_error'));
            }
        }
    };

    return (
        <PageWrapper>
            <div className="min-h-screen bg-gray-50 dark:bg-gray-950 py-4 sm:py-8 md:py-12 px-3 sm:px-4" onPaste={handlePaste}>
                {/* Верхняя панель */}
                <div className="max-w-6xl mx-auto mb-4 flex flex-col sm:flex-row justify-between items-center gap-3">
                    <h2 className="text-lg sm:text-xl font-bold text-gray-400 dark:text-gray-600">{t('admin.panel')}</h2>
                    <button onClick={handleLogout} className="text-red-500 font-medium hover:underline text-sm sm:text-base dark:text-red-400 dark:hover:text-red-300">
                        {t('admin.logout')}
                    </button>
                </div>

                {/* Мобильная кнопка для показа/скрытия списка новостей */}
                <div className="max-w-6xl mx-auto mb-4 lg:hidden">
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="w-full py-3 bg-[#0E1A2B] dark:bg-gray-800 text-white rounded-xl font-bold text-sm flex items-center justify-center gap-2"
                    >
                        {mobileMenuOpen ? t('admin.hide_list') : t('admin.show_list')}
                        <span className={`transition-transform duration-300 ${mobileMenuOpen ? 'rotate-180' : ''}`}>▼</span>
                    </button>
                </div>

                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.5fr,1fr] gap-4 sm:gap-6 md:gap-8">

                    {/* ФОРМА - всегда первая на мобилках */}
                    <div className="bg-white dark:bg-gray-900 p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl shadow-xl border border-gray-100 dark:border-gray-800 order-1">
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-4">
                            <h1 className="text-xl sm:text-2xl font-bold text-[#0E1A2B] dark:text-gray-100">
                                {editId ? t('admin.editing') : t('admin.new_publication')}
                            </h1>
                            {editId && (
                                <button onClick={resetForm} className="text-sm text-blue-500 dark:text-blue-400 hover:underline">
                                    {t('admin.cancel')}
                                </button>
                            )}
                        </div>
                        <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-4 sm:mb-6 italic">
                            {t('admin.tip')}
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                            {/* ДАТА */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">{t('admin.date')}</label>
                                <input
                                    type="date"
                                    className="w-full p-3 sm:p-4 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl sm:rounded-2xl focus:ring-2 focus:ring-[var(--gold-primary)] outline-none transition text-sm sm:text-base dark:text-gray-200"
                                    value={formData.date}
                                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                                    required
                                />
                            </div>

                            {/* РУССКАЯ ВЕРСИЯ */}
                            <div className="p-3 sm:p-5 bg-blue-50/50 dark:bg-blue-950/20 rounded-xl sm:rounded-2xl border border-blue-100 dark:border-blue-900/50 space-y-3 sm:space-y-4">
                                <h3 className="text-blue-600 dark:text-blue-400 font-bold text-xs sm:text-sm uppercase tracking-wider">{t('admin.russian_version')}</h3>
                                <input
                                    type="text"
                                    placeholder={t('admin.title_ru')}
                                    className="w-full p-3 sm:p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl outline-none focus:border-blue-400 dark:focus:border-blue-500 text-sm sm:text-base dark:text-gray-200"
                                    value={formData.title_ru}
                                    onChange={(e) => setFormData({ ...formData, title_ru: e.target.value })}
                                    required
                                />
                                <textarea
                                    placeholder={t('admin.description_ru')}
                                    className="w-full p-3 sm:p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl h-24 sm:h-32 outline-none focus:border-blue-400 dark:focus:border-blue-500 text-sm sm:text-base dark:text-gray-200"
                                    value={formData.description_ru}
                                    onChange={(e) => setFormData({ ...formData, description_ru: e.target.value })}
                                    required
                                />
                            </div>

                            {/* УЗБЕКСКАЯ ВЕРСИЯ */}
                            <div className="p-3 sm:p-5 bg-green-50/50 dark:bg-green-950/20 rounded-xl sm:rounded-2xl border border-green-100 dark:border-green-900/50 space-y-3 sm:space-y-4">
                                <h3 className="text-green-600 dark:text-green-400 font-bold text-xs sm:text-sm uppercase tracking-wider">{t('admin.uzbek_version')}</h3>
                                <input
                                    type="text"
                                    placeholder={t('admin.title_uz')}
                                    className="w-full p-3 sm:p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl outline-none focus:border-green-400 dark:focus:border-green-500 text-sm sm:text-base dark:text-gray-200"
                                    value={formData.title_uz}
                                    onChange={(e) => setFormData({ ...formData, title_uz: e.target.value })}
                                    required
                                />
                                <textarea
                                    placeholder={t('admin.description_uz')}
                                    className="w-full p-3 sm:p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl h-24 sm:h-32 outline-none focus:border-green-400 dark:focus:border-green-500 text-sm sm:text-base dark:text-gray-200"
                                    value={formData.description_uz}
                                    onChange={(e) => setFormData({ ...formData, description_uz: e.target.value })}
                                    required
                                />
                            </div>

                            {/* АНГЛИЙСКАЯ ВЕРСИЯ */}
                            <div className="p-3 sm:p-5 bg-red-50/50 dark:bg-red-950/20 rounded-xl sm:rounded-2xl border border-red-100 dark:border-red-900/50 space-y-3 sm:space-y-4">
                                <h3 className="text-red-600 dark:text-red-400 font-bold text-xs sm:text-sm uppercase tracking-wider">{t('admin.english_version')}</h3>
                                <input
                                    type="text"
                                    placeholder={t('admin.title_en')}
                                    className="w-full p-3 sm:p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl outline-none focus:border-red-400 dark:focus:border-red-500 text-sm sm:text-base dark:text-gray-200"
                                    value={formData.title_en}
                                    onChange={(e) => setFormData({ ...formData, title_en: e.target.value })}
                                    required
                                />
                                <textarea
                                    placeholder={t('admin.description_en')}
                                    className="w-full p-3 sm:p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl h-24 sm:h-32 outline-none focus:border-red-400 dark:focus:border-red-500 text-sm sm:text-base dark:text-gray-200"
                                    value={formData.description_en}
                                    onChange={(e) => setFormData({ ...formData, description_en: e.target.value })}
                                    required
                                />
                            </div>

                            {/* ЗАГРУЗКА ФОТО */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">{t('admin.photos')}</label>

                                {/* Кнопка для выбора фото с телефона */}
                                <div className="mb-3">
                                    <label className="block w-full p-3 text-center bg-gray-100 dark:bg-gray-800 border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-xl cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 transition text-sm dark:text-gray-300">
                                        {t('admin.select_photo')}
                                        <input
                                            type="file"
                                            accept="image/*"
                                            onChange={handleFileUpload}
                                            className="hidden"
                                        />
                                    </label>
                                </div>

                                <textarea
                                    className="w-full p-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-xs text-gray-400 dark:text-gray-500 h-16 sm:h-20 outline-none"
                                    value={formData.image}
                                    onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                                    placeholder={t('admin.photo_links')}
                                />
                            </div>

                            {/* ПРЕДПРОСМОТР ФОТО */}
                            <div className="flex gap-2 sm:gap-3 flex-wrap">
                                {formData.image && formData.image.split(',').map((url, i) => url.trim() && (
                                    <div key={i} className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden border-2 border-[var(--gold-primary)] group">
                                        <img src={url.trim()} className="w-full h-full object-cover" alt="preview" />
                                        <button
                                            type="button"
                                            onClick={() => {
                                                const images = formData.image.split(',').filter((_, index) => index !== i);
                                                setFormData({ ...formData, image: images.join(',') });
                                            }}
                                            className="absolute inset-0 bg-black/40 text-white opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-[10px] sm:text-xs"
                                        >
                                            ✕
                                        </button>
                                    </div>
                                ))}
                                {uploading && (
                                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-700 flex items-center justify-center text-[10px] text-gray-400 dark:text-gray-600 animate-pulse">
                                        ⏳
                                    </div>
                                )}
                            </div>

                            {/* КНОПКА ОТПРАВКИ */}
                            <button
                                type="submit"
                                disabled={loading || uploading}
                                className={`w-full py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-white shadow-lg transition-all text-sm sm:text-base ${loading || uploading ? 'bg-gray-400 dark:bg-gray-700' : 'bg-[#0E1A2B] dark:bg-gray-800 hover:bg-[var(--gold-primary)] dark:hover:bg-[var(--gold-primary)] active:scale-95'}`}
                            >
                                {loading ? t('admin.processing') : (editId ? t('admin.save_changes') : t('admin.publish'))}
                            </button>

                            {status && (
                                <div className={`p-3 rounded-xl text-center text-xs sm:text-sm font-medium ${status.includes('❌') ? 'bg-red-50 dark:bg-red-950/30 text-red-600 dark:text-red-400' : 'bg-green-50 dark:bg-green-950/30 text-green-600 dark:text-green-400'}`}>
                                    {status}
                                </div>
                            )}
                        </form>
                    </div>

                    {/* СПИСОК НОВОСТЕЙ - на мобилках скрывается/показывается кнопкой */}
                    <div className={`${mobileMenuOpen ? 'block' : 'hidden lg:block'} order-2 lg:order-2`}>
                        <div className="bg-white dark:bg-gray-900 p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl shadow-xl border border-gray-100 dark:border-gray-800 h-fit">
                            <h2 className="text-lg sm:text-xl font-bold text-[#0E1A2B] dark:text-gray-100 mb-4 sm:mb-6">{t('admin.news_list')}</h2>
                            <div className="space-y-3 sm:space-y-4 max-h-[500px] overflow-y-auto pr-2">
                                {newsList.length === 0 ? (
                                    <p className="text-center text-gray-400 dark:text-gray-600 py-8 text-sm">{t('admin.no_news')}</p>
                                ) : (
                                    newsList.map((news) => (
                                        <div
                                            key={news._id || news.id}
                                            onClick={() => handleEdit(news)}
                                            className={`flex items-center justify-between p-3 rounded-xl sm:rounded-2xl border cursor-pointer transition-all ${editId === (news._id || news.id) ? 'bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-800' : 'bg-gray-50 dark:bg-gray-800/50 border-gray-100 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800'}`}
                                        >
                                            <div className="flex items-center gap-3 flex-1 min-w-0">
                                                <img
                                                    src={news.image?.split(',')[0]}
                                                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg object-cover bg-gray-200 dark:bg-gray-700 flex-shrink-0"
                                                    alt=""
                                                />
                                                <div className="flex-1 min-w-0">
                                                    <p className="font-bold text-xs sm:text-sm text-[#0E1A2B] dark:text-gray-200 line-clamp-1">
                                                        {news.title_ru || news.title_uz || news.title_en}
                                                    </p>
                                                    <p className="text-[8px] sm:text-[10px] text-blue-500 dark:text-blue-400 italic">
                                                        {t('admin.click_to_edit')}
                                                    </p>
                                                </div>
                                            </div>
                                            <button
                                                onClick={(e) => handleDelete(e, news._id || news.id)}
                                                className="p-2 text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition-colors flex-shrink-0"
                                            >
                                                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                </svg>
                                            </button>
                                        </div>
                                    ))
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </PageWrapper>
    );
};

export default AdminNews;