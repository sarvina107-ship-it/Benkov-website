import React from 'react'
import { useTranslation } from 'react-i18next'

const Achievements = () => {
  const { t } = useTranslation()

  // Достаем массив достижений из конфига i18n
  // Убедись, что в i18n.js структура совпадает: achievements.items
  const achievementsData = t('achievements.items', { returnObjects: true }) || []

  return (
    <main className="bg-[#FAF9F6] text-[#1B2A44] min-h-screen pb-24">

      {/* --- HEADER СЕКЦИЯ --- */}
      <section className="relative py-32 px-6 overflow-hidden">
        {/* Декоративный фон */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="text-[#D4A259] font-bold tracking-[0.3em] uppercase text-sm mb-4 block">
            {t('achievements.subtitle')}
          </span>
          <h1 className="text-6xl md:text-7xl font-bold mb-8 whitespace-pre-line" style={{ fontFamily: "'Playfair Display', serif" }}>
            {t('achievements.title')}
          </h1>
          <div className="w-24 h-[2px] bg-[#D4A259] mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 leading-relaxed font-serif italic">
            {t('achievements.description')}
          </p>
        </div>
      </section>

      {/* --- ТАЙМЛАЙН ДОСТИЖЕНИЙ --- */}
      <section className="max-w-6xl mx-auto px-6 relative">

        {/* Центральная линия таймлайна (золотая нить) */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[1px] bg-gradient-to-b from-[#D4A259] via-[#D4A259]/50 to-transparent hidden md:block"></div>

        <div className="space-y-24">
          {achievementsData.map((item, index) => (
            <AchievementItem
              key={index}
              year={item.year}
              title={item.title}
              desc={item.desc}
              // Автоматическое чередование сторон: четные направо, нечетные налево
              align={index % 2 === 0 ? 'left' : 'right'}
            />
          ))}
        </div>
      </section>

      {/* --- ЦИТАТА В ФУТЕРЕ --- */}
      <section className="mt-32 px-6">
        <div className="max-w-4xl mx-auto bg-[#1B2A44] p-16 rounded-[3rem] text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4A259]/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
          <h3 className="text-[#D4A259] text-3xl font-serif italic mb-6">
            {t('achievements.footer_quote')}
          </h3>
          <p className="text-white/50 tracking-widest uppercase text-xs">
            {t('achievements.admin')}
          </p>
        </div>
      </section>
    </main>
  )
}

// Вспомогательный компонент для карточки достижения
const AchievementItem = ({ year, title, desc, align }) => {
  const isLeft = align === 'left';

  return (
    <div className={`flex flex-col md:flex-row items-center w-full ${isLeft ? 'md:flex-row-reverse' : ''}`}>
      <div className="hidden md:block w-1/2"></div>

      {/* Линия и анимированная точка */}
      <div className="relative z-10 w-12 h-12 flex items-center justify-center">
        <div className="w-4 h-4 bg-[#D4A259] rotate-45 shadow-[0_0_20px_rgba(212,162,89,0.5)]"></div>
        <div className="absolute inset-0 border border-[#D4A259]/20 rounded-full animate-ping opacity-20"></div>
      </div>

      <div className={`w-full md:w-1/2 ${isLeft ? 'md:pr-16 text-right' : 'md:pl-16 text-left'} mt-8 md:mt-0`}>
        <div className="group bg-white p-8 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-gray-100 hover:border-[#D4A259]/50 transition-all duration-700 relative overflow-hidden">

          {/* Декоративный паттерн */}
          <div className="absolute top-0 right-0 p-4 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity pointer-events-none">
            <svg width="120" height="120" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M50 0L93.3013 25V75L50 100L6.69873 75V25L50 0Z" fill="#D4A259" />
            </svg>
          </div>

          <div className={`flex items-center gap-4 mb-6 ${isLeft ? 'justify-end' : 'justify-start'}`}>
            <span className="text-5xl font-black text-[#1B2A44]/5 group-hover:text-[#D4A259]/10 transition-colors duration-500" style={{ fontFamily: "'Playfair Display', serif" }}>
              {year}
            </span>
            <div className="w-12 h-[1px] bg-[#D4A259]/30"></div>
          </div>

          {/* Иконка */}
          <div className={`mb-6 flex ${isLeft ? 'justify-end' : 'justify-start'}`}>
            <div className="w-16 h-16 rounded-2xl bg-[#F5EFE6] flex items-center justify-center group-hover:bg-[#D4A259] transition-colors duration-500 shadow-inner">
              <svg className="w-8 h-8 text-[#D4A259] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-7.714 2.143L11 21l-2.286-6.857L1 12l7.714-2.143L11 3z" />
              </svg>
            </div>
          </div>

          <h4 className="text-2xl font-bold mb-4 text-[#1B2A44] leading-tight group-hover:text-[#D4A259] transition-colors">
            {title}
          </h4>

          <p className="text-gray-500 leading-relaxed text-sm relative z-10">
            {desc}
          </p>

          {/* Маленькая золотая деталь в углу */}
          <div className={`absolute bottom-0 ${isLeft ? 'left-0' : 'right-0'} w-24 h-1 bg-gradient-to-r from-transparent via-[#D4A259]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity`}></div>
        </div>
      </div>
    </div>
  )
}

export default Achievements