import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ROUTES } from '../paths';
import Deputy1 from '../assets/img/Deputy1.jpg'
import Deputy3 from '../assets/img/Deputy3.jpg'

const Management = () => {

  const { t } = useTranslation();


  const deputies = useMemo(() => [
    {
      id: 1,
      name: t('management.names.egamov'),
      role: t('management.deputy_role'),
      dept: t('management.depts.spiritual'),
      photo: Deputy1
    },
    {
      id: 2,
      name: t('management.names.radjabov'),
      role: t('management.deputy_role'),
      dept: t('management.depts.academic'),
      photo: ""
    },
    {
      id: 3,
      name: t('management.names.shakarimov'),
      role: t('management.deputy_role'),
      dept: t('management.depts.fields'),
      photo: Deputy3
    },
    {
      id: 4,
      name: t('management.names.tagaev'),
      role: t('management.deputy_role'),
      dept: t('management.depts.economic'),
      photo: ""
    },
  ], [t]);

  return (
    <main className="bg-[#F8F6F2] min-h-screen py-24 px-6 text-[#1B2A44] font-sans">
      <div className="max-w-7xl mx-auto">

        {/* Заголовок секции */}
        <div className="flex flex-col items-center mb-24 text-center hover:opacity-80 transition-opacity cursor-default">
          <h2 className="text-5xl md:text-6xl font-medium tracking-tight mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
            {t('management.title')}
          </h2>
          <div className="w-20 h-[1px] bg-[#D4A259]"></div>
        </div>

        {/* Главная фигура: Директор (БЕЗ ИЗМЕНЕНИЙ) */}
        <div className="mb-32">
          <Link to={ROUTES.DIRECTOR} className="group block">
            <div className="relative max-w-5xl mx-auto bg-white rounded-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.03)] overflow-hidden transition-all duration-700 hover:shadow-[0_40px_80px_rgba(212,162,89,0.1)] border border-transparent hover:border-[#D4A259]/10">
              <div className="absolute top-0 right-0 p-8 z-0 opacity-10 group-hover:opacity-15 transition-opacity">
                <div className="w-32 h-32 rounded-full overflow-hidden" style={{
                  backgroundImage: `
                    linear-gradient(135deg, #D4A259 10%, transparent 10%),
                    linear-gradient(225deg, #D4A259 10%, transparent 10%),
                    linear-gradient(315deg, #D4A259 10%, transparent 10%),
                    linear-gradient(45deg, #D4A259 10%, transparent 10%)
                  `,
                  backgroundSize: '16px 16px',
                  backgroundPosition: '0 0, 8px 0, 8px 8px, 0 8px'
                }}></div>
              </div>

              <div className="md:flex items-stretch relative z-10">
                <div className="md:w-[45%] min-h-[500px] overflow-hidden bg-gray-50 border-r border-gray-100/50">
                  <img
                    src="URL_ФОТО_ДИРЕКТОРА"
                    className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                    alt="Director"
                  />
                </div>
                <div className="md:w-[55%] p-12 lg:p-20 flex flex-col justify-center relative bg-white/80 backdrop-blur-sm">
                  <h4 className="text-[#D4A259] font-semibold tracking-widest uppercase text-sm mb-6 underline decoration-1 underline-offset-8">
                    {t('management.director_label')}
                  </h4>
                  <h3 className="text-4xl lg:text-5xl font-bold mb-8 leading-[1.1] text-[#1B2A44]" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {t('management.director_name')}<br />{t('management.director_name2')}
                  </h3>
                  <p className="text-gray-600/90 text-lg leading-relaxed mb-10 max-w-md font-light italic">
                    {t('management.director_quote')}
                  </p>
                  <div className="flex items-center gap-4 text-[#1B2A44] font-bold group-hover:text-[#D4A259] transition-colors">
                    <span className="text-sm uppercase tracking-widest">{t('management.profile_link')}</span>
                    <span className="text-2xl transition-transform group-hover:translate-x-2">→</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Сетка заместителей — СДЕЛАЛ КАРТОЧКИ БОЛЬШЕ (2 в ряд) */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-medium text-center mb-16 text-[#1B2A44] uppercase tracking-[0.2em]" style={{ fontFamily: "'Playfair Display', serif" }}>
            {t('management.deputies_title')}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10"> {/* Сетка 2 в ряд для солидности */}
            {deputies.map((dep) => (
              <Link key={dep.id} to={`/management/deputy/${dep.id}`} className="group h-full">
                <div className="relative bg-white rounded-[40px] p-10 h-full shadow-[0_15px_40px_rgba(0,0,0,0.02)] border border-gray-100/50 transition-all duration-500 hover:shadow-[0_30px_60px_rgba(212,162,89,0.12)] hover:-translate-y-2 flex flex-col">

                  {/* Декоративная линия */}
                  <div className="w-12 h-[1px] bg-[#D4A259] mb-8 group-hover:w-full transition-all duration-700"></div>

                  <div className="relative z-10 flex flex-col flex-grow">
                    <h4 className="text-2xl font-bold text-[#1B2A44] mb-3 leading-snug group-hover:text-[#D4A259] transition-colors" style={{ fontFamily: "'Playfair Display', serif" }}>
                      {dep.name}
                    </h4>
                    <p className="text-[#D4A259] font-semibold text-base mb-8 uppercase tracking-wider">
                      {dep.role}
                    </p>

                    {/* Фото стало больше и качественнее по пропорциям */}
                    {/* Фото теперь всегда цветное */}
                    <div className="w-full h-[320px] bg-gray-50 rounded-[24px] mb-8 overflow-hidden border border-gray-100">
                      {dep.photo ? (
                        <img
                          src={dep.photo}
                          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                          alt={dep.name}
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-gray-200 bg-[#FDFCFB]">
                          <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5">
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                            <circle cx="12" cy="7" r="4" />
                          </svg>
                        </div>
                      )}
                    </div>

                    <div className="mt-auto flex justify-between items-end">
                      <p className="text-gray-400 text-xs uppercase tracking-[0.2em] leading-relaxed max-w-[70%]">
                        {dep.dept}
                      </p>
                      <span className="text-[#D4A259] text-2xl opacity-0 group-hover:opacity-100 transition-all transform translate-x-4 group-hover:translate-x-0">
                        →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
};

export default Management;