import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { DIRECTIONS } from '../data/studyPlan';
import { ROUTES } from '../paths';

const StudyDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation();

  // Умный поиск направления
  const currentDir = DIRECTIONS.find(
    (d) => String(d.id).toLowerCase() === String(id).toLowerCase()
  );

  if (!currentDir) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FDFCFB] px-4">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-serif text-[#0E1A2B] mb-4">{t('study_detail.not_found', 'Направление не найдено')}</h2>
          <button
            onClick={() => navigate(ROUTES.STUDYPLAN)}
            className="text-[var(--gold-primary)] hover:underline font-bold uppercase tracking-widest text-xs sm:text-sm"
          >
            {t('study_detail.back_to_list', '← Вернуться к списку')}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#FDFCFB] dark:bg-gray-950 min-h-screen pt-20 sm:pt-24 md:pt-28 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">

        {/* Кнопка назад */}
        <button
          onClick={() => navigate(-1)}
          className="group mb-8 sm:mb-10 md:mb-12 flex items-center gap-2 sm:gap-3 text-[#0E1A2B]/60 dark:text-gray-400 hover:text-[var(--gold-primary)] transition-all duration-300 uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[10px] sm:text-xs font-bold"
        >
          <span className="transform group-hover:-translate-x-2 transition-transform duration-300">←</span>
          {t('study_detail.back', 'Назад')}
        </button>

        {/* Заголовок направления */}
        <header className="mb-10 sm:mb-12 md:mb-16 relative">
          <div className="absolute -left-4 sm:-left-6 md:-left-8 top-0 w-1 h-full bg-[var(--gold-primary)] hidden md:block"></div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#0E1A2B] dark:text-gray-100 mb-3 sm:mb-4 leading-tight text-center sm:text-left">
            {t(`directions.items.${currentDir.id}.title`, currentDir.title)}
          </h1>
          <p className="text-[var(--gold-primary)] font-serif italic text-base sm:text-lg text-center sm:text-left">
            {t('study_detail.curriculum_label', 'Программа обучения по классам')}
          </p>
        </header>

        {/* Сетка классов */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
          {Object.entries(currentDir.grades).map(([grade, subjects]) => (
            <div
              key={grade}
              className="group bg-white dark:bg-gray-900 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-7 lg:p-8 shadow-[0_10px_30px_rgba(0,0,0,0.02)] dark:shadow-[0_10px_30px_rgba(0,0,0,0.3)] border border-[var(--gold-primary)]/10 dark:border-[var(--gold-primary)]/5 hover:border-[var(--gold-primary)]/40 transition-all duration-500 relative overflow-hidden"
            >
              {/* Фоновый номер класса */}
              <span className="absolute -right-3 -top-4 sm:-right-4 sm:-top-6 text-7xl sm:text-8xl md:text-9xl font-serif font-bold text-[var(--gold-primary)]/5 dark:text-[var(--gold-primary)]/3 select-none pointer-events-none group-hover:text-[var(--gold-primary)]/10 transition-colors duration-500">
                {grade}
              </span>

              <h3 className="text-xl sm:text-2xl font-bold text-[#0E1A2B] dark:text-gray-100 mb-5 sm:mb-6 md:mb-7 lg:mb-8 flex items-center justify-center sm:justify-start gap-3 sm:gap-4">
                <span className="w-6 sm:w-8 h-[1px] bg-[var(--gold-primary)]"></span>
                {grade} {t('study_detail.grade_suffix', 'КЛАСС')}
                <span className="w-6 sm:w-8 h-[1px] bg-[var(--gold-primary)] hidden sm:block"></span>
              </h3>

              <ul className="space-y-3 sm:space-y-4 relative z-10">
                {subjects.map((subject, idx) => (
                  <li key={idx} className="flex items-start gap-3 sm:gap-4 group/item">
                    <div className="mt-1.5 sm:mt-2 w-1.5 h-1.5 rounded-full bg-[var(--gold-primary)] group-hover/item:scale-150 transition-transform duration-300 flex-shrink-0"></div>
                    <span className="text-gray-700 dark:text-gray-300 font-medium leading-relaxed text-sm sm:text-base group-hover/item:text-[#0E1A2B] dark:group-hover/item:text-gray-100 transition-colors">
                      {t(`subjects.${subject.toLowerCase().replace(/\s+/g, '_')}`, subject)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default StudyDetail;