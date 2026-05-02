import React, { useState, useEffect } from 'react';
import { ROUTES } from '../paths';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import HistoryImg from '../assets/img/HistoryImg.png';
import BenkovTarixi1 from '../assets/img/BenkovTarixi1.jpg';
import BenkovTarixi2 from '../assets/img/BenkovTarixi2.jpg';
import BenkovTarixi3 from '../assets/img/BenkovTarixi3.jpg';
import BenkovTarixi4 from '../assets/img/BenkovTarixi4.png';
import BenkovTarixi5 from '../assets/img/BenkovTarixi5.png';

const About = () => {
  const { t } = useTranslation();
  const images = [HistoryImg, BenkovTarixi1, BenkovTarixi2, BenkovTarixi3, BenkovTarixi4, BenkovTarixi5];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);


  return (
    <section className="bg-[#F8F6F2] py-16 px-4 md:px-8 text-[#1B2A44]">
      <div className="max-w-7xl mx-auto">

        {/* --- КАРУСЕЛЬ С ПОЛНЫМ КОНТРОЛЕМ --- */}
        <div className="mb-20 relative group px-4 md:px-0">
          <div className="w-full h-[400px] md:h-[500px] bg-gray-200 rounded-[40px] overflow-hidden shadow-lg relative">

            {/* Слайды */}
            {images.map((img, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                  }`}
              >
                <img
                  src={img}
                  alt={`Слайд ${index + 1}`}
                  className="w-full h-full object-cover grayscale-[10%] brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              </div>
            ))}

            {/* Кнопка Влево */}
            <button
              onClick={() => setCurrentIndex((currentIndex - 1 + images.length) % images.length)}
              className="absolute left-6 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-md p-4 rounded-full text-white opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/40"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>

            {/* Кнопка Вправо */}
            <button
              onClick={() => setCurrentIndex((currentIndex + 1) % images.length)}
              className="absolute right-6 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-md p-4 rounded-full text-white opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/40"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>

            {/* Точки навигации (Кликабельные) */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`transition-all duration-500 rounded-full h-2 ${index === currentIndex
                    ? 'bg-[#D4A259] w-10'
                    : 'bg-white/40 w-2 hover:bg-white/70'
                    }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* --- ОСНОВНОЙ ТЕКСТ (ИНТРО) --- */}
        <div className="max-w-4xl mx-auto text-center mb-24">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 italic text-[#D4A259]">
            {t('about.quote')}
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            {t('about.intro')}
          </p>
        </div>

        {/* --- ИСТОРИЯ ПО ПОЛОЧКАМ (БЕЗ ПОВТОРОВ ФОТО) --- */}
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-24 mb-32 items-start">

          {/* Секция 1918-1924 */}
          <div className="border-t border-gray-200 pt-8">
            <span className="text-[#D4A259] font-mono text-sm tracking-widest uppercase mb-2 block">{t(`about.stages.one.tag`)}</span>
            <h3 className="text-2xl font-bold mb-4">{t(`about.stages.one.title`)}</h3>
            <p className="text-gray-600 leading-relaxed">
              {t(`about.stages.one.text1`)}
              <br />
              <br />
              {t(`about.stages.one.text2`)}
              <br />
              {t(`about.stages.one.text3`)}
              <br />
              <br />
              {t(`about.stages.one.text4`)}
            </p>
          </div>

          {/* Секция 1928-1949 */}
          <div className="border-t border-gray-200 pt-8">
            <span className="text-[#D4A259] font-mono text-sm tracking-widest uppercase mb-2 block">{t(`about.stages.two.tag`)}</span>
            <h3 className="text-2xl font-bold mb-4">{t(`about.stages.two.title`)}</h3>
            <p className="text-gray-600 leading-relaxed">
              {t(`about.stages.two.text1`)}
              <br />
              <br />
              {t(`about.stages.two.text2`)}
              <br />
              {t(`about.stages.two.text3`)}
              <br />
              {t(`about.stages.two.text4`)}
            </p>
          </div>

          {/* Секция 1995-1997 */}
          <div className="border-t border-gray-200 pt-8">
            <span className="text-[#D4A259] font-mono text-sm tracking-widest uppercase mb-2 block">{t(`about.stages.three.tag`)}</span>
            <h3 className="text-2xl font-bold mb-4">{t(`about.stages.three.title`)}</h3>
            <p className="text-gray-600 leading-relaxed">
              {t(`about.stages.three.text1`)}
              <br />
              <br />
              {t(`about.stages.three.text2`)}
            </p>
          </div>

          {/* Секция 2017-2019 */}
          <div className="border-t border-gray-200 pt-8">
            <span className="text-[#D4A259] font-mono text-sm tracking-widest uppercase mb-2 block">{t(`about.stages.four.tag`)}</span>
            <h3 className="text-2xl font-bold mb-4">{t(`about.stages.four.title`)}</h3>
            <p className="text-gray-600 leading-relaxed">
              {t(`about.stages.four.text1`)}
              <br />
              <br />
              {t(`about.stages.four.text2`)}
            </p>
          </div>

          {/* Секция 2020 */}
          <div className="border-t border-gray-200 pt-8">
            <span className="text-[#D4A259] font-mono text-sm tracking-widest uppercase mb-2 block">{t(`about.stages.five.tag`)}</span>
            <h3 className="text-2xl font-bold mb-4">{t(`about.stages.five.title`)}</h3>
            <p className="text-gray-600 leading-relaxed">
              {t(`about.stages.five.text1`)}
            </p>
          </div>
        </div>

        {/* --- МЕСТО ДЛЯ ФАКУЛЬТЕТОВ (ОРИГИНАЛЬНАЯ СЕТКА) --- */}
        <div className="bg-[#1B2A44] rounded-[40px] p-10 md:p-16 text-white mb-24">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
            <div>
              <h2 className="text-3xl font-bold mb-2">{t('about.faculties.title')}</h2>
              <p className="text-white/50">{t('about.faculties.subtitle')}</p>
            </div>
            <div className="h-px flex-grow bg-white/10 mx-8 hidden md:block"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {t('about.faculties.items', { returnObjects: true }).map((item, index) => (
              <div key={index} className="space-y-3">
                <div className="text-[#D4A259] font-bold">{item.year}</div>
                <h4 className="text-lg font-semibold">{item.name}</h4>
                <p className="text-sm text-white/60 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* --- ФИНАЛ --- */}
        <div className="text-center">
          <Link to={ROUTES.CONDITIONS}>
            <button className="group relative px-10 py-4 bg-[#D4A259] text-[#1B2A44] rounded-xl font-bold uppercase tracking-[0.2em] text-sm border border-[#D4A259]/30 transition-all duration-300 hover:border-[#1B2A44]">
              <span className="absolute inset-0 border border-[#1B2A44] rounded-xl opacity-0 scale-100 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"></span>
              <span className="relative z-10 flex items-center gap-2">
                {t('about.button')}
                <span className="relative w-3 h-3">
                  <span className="absolute top-1/2 left-0 w-full h-[1px] bg-[#1B2A44] transition-transform group-hover:rotate-90"></span>
                  <span className="absolute top-1/2 left-0 w-full h-[1px] bg-[#1B2A44]"></span>
                </span>
              </span>
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default About;