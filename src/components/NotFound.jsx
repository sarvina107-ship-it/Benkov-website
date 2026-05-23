import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from 'react-router-dom'; // или твой роутер

export default function NotFound() {
    const { t, i18n } = useTranslation();
    const navigate = useNavigate();
    const location = useLocation();
    const [timeLeft, setTimeLeft] = useState(15);

    // Считаем переводы прямо тут, если они ещё не добавлены в твои файлы локализации
    const translations = {
        ru: {
            badge: "Холст не найден / Мазок мимо кассы",
            title: "Ой! Кто-то пролил растворитель...",
            desc: "Похоже, этот URL ушел в чистый кубизм, или его случайно закрасили белилами. Наш худсовет постановил: данной композиции на сайте не существует.",
            quote: "«Я так вижу, и точка» — ответил веб-разработчик.",
            btn: "Смыть краску (На главную)",
            timer: "До начала просмотра осталось:",
            sec: "секунд",
            hint: "Не забудьте помыть кисти."
        },
        uz: {
            badge: "Polotno topilmadi / Mo‘yqalam xatosi",
            title: "Voy! Kimdir erituvchini to‘kib yubordi...",
            desc: "Aftidan, bu URL sof kubizmga o‘tib ketgan yoki adashib oq bo‘yoq bilan bo‘yalgan. Badiiy kengashimiz qaror qildi: saytda ushbu kompozitsiya mavjud emas.",
            quote: "«Men buni shunday ko‘ryapman, tamom» — deb javob berdi veb-dasturchi.",
            btn: "Bo‘yoqni yuvish (Asosiy sahifa)",
            timer: "Ko‘rik boshlanishiga qoldi:",
            sec: "soniya",
            hint: "Mo‘yqalamlarni yuvishni unutmang."
        },
        en: {
            badge: "Canvas not found / Brush stroke missed",
            title: "Oh! Someone spilled the solvent...",
            desc: "It seems this URL went into pure cubism or was accidentally painted over with zinc white. Our art committee ruled: this composition does not exist on the website.",
            quote: "“That's my vision, period” — replied the web developer.",
            btn: "Wash the canvas (Go Home)",
            timer: "Exhibition starts in:",
            sec: "seconds",
            hint: "Don't forget to wash your brushes."
        }
    };

    // Определяем, какой язык сейчас активен в i18next (дефолт — ru)
    const lang = translations[i18n.language?.substring(0, 2)] ? i18n.language.substring(0, 2) : 'ru';
    const text = translations[lang];

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 1) {
                    clearInterval(interval);
                    // Умный редирект с учетом языкового префикса
                    if (i18n.language?.startsWith('uz')) navigate('/uz');
                    else if (i18n.language?.startsWith('en')) navigate('/en');
                    else navigate('/');
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [navigate, i18n.language]);

    return (
        <div className="bg-[#1B2A44] text-[#E2E8F0] min-h-[80vh] flex flex-col items-center justify-center p-6 font-sans relative overflow-hidden select-none w-full">
            {/* Декоративные круги */}
            <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-[#D4A259] opacity-[0.03] rounded-full blur-[120px] pointer-events-none transform rotate-45"></div>
            <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-[#D4A259] opacity-[0.05] rounded-full blur-[80px] pointer-events-none"></div>

            <div className="max-w-xl w-full text-center z-10 space-y-6">
                {/* Бейдж */}
                <div className="inline-flex items-center gap-2 bg-[#D4A259]/10 text-[#D4A259] text-xs font-mono tracking-widest uppercase px-4 py-1.5 rounded-full border border-[#D4A259]/20">
                    <span className="w-2 h-2 rounded-full bg-[#D4A259] animate-pulse"></span>
                    {text.badge}
                </div>

                {/* Цифры 404 */}
                <div className="relative inline-block select-none my-2 animate-[paint-drip_5s_ease-in-out_infinite]">
                    <h1 className="text-[120px] sm:text-[150px] font-black tracking-tighter leading-none text-[#D4A259] font-serif italic drop-shadow-[0_10px_30px_rgba(212,162,89,0.2)]">
                        404
                    </h1>
                    <div className="absolute -bottom-2 right-4 text-[10px] font-mono text-slate-500 italic">
                        {lang === 'ru' ? '«Потерянная страница»' : lang === 'uz' ? '«Yo‘qolgan sahifa»' : '«The Missing Page»'}
                    </div>
                </div>

                {/* Тексты */}
                <div className="space-y-3 max-w-md mx-auto">
                    <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">{text.title}</h2>
                    <p className="text-slate-400 text-sm sm:text-base leading-relaxed">{text.desc}</p>
                    <p className="text-[#D4A259] text-xs italic font-medium">{text.quote}</p>
                </div>

                {/* Кнопка */}
                <div className="pt-4">
                    <button
                        onClick={() => navigate(lang === 'ru' ? '/' : `/${lang}`)}
                        className="inline-block bg-transparent border-2 border-[#D4A259] text-[#D4A259] hover:bg-[#D4A259] hover:text-[#1B2A44] font-bold text-sm tracking-wider uppercase px-8 py-3.5 rounded-md shadow-[0_4px_20px_rgba(212,162,89,0.1)] hover:shadow-[0_4px_25px_rgba(212,162,89,0.3)] transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
                    >
                        {text.btn}
                    </button>
                </div>

                {/* Таймер */}
                <div className="text-[11px] text-slate-500 tracking-wider uppercase pt-6">
                    {text.timer} <span className="text-[#D4A259] font-mono font-bold text-xs">{timeLeft}</span> {text.sec}
                </div>
            </div>

            <div className="absolute bottom-4 text-[10px] text-slate-600 font-mono">
                {text.hint}
            </div>

            {/* Стили для анимации, если Tailwind v4 еще не вкомпилировал её */}
            <style>{`
        @keyframes paint-drip {
          0%, 100% { transform: translateY(0) scaleY(1); }
          50% { transform: translateY(8px) scaleY(1.05); }
        }
      `}</style>
        </div>
    );
}