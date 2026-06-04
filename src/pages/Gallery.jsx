import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import PageWrapper from '../components/PageWrapper';

const Gallery = () => {
  const { t } = useTranslation();

  // 1. Загрузка всех изображений
  const imageModules = import.meta.glob('/src/assets/gallery/*.{png,jpg,jpeg,webp}', {
    eager: true,
    import: 'default'
  });
  const allImages = Object.values(imageModules);

  // 2. Настройки пагинации - адаптивная (меняется количество на странице)
  const [currentPage, setCurrentPage] = useState(1);
  const [imagesPerPage, setImagesPerPage] = useState(18);

  // Отслеживаем ширину экрана для адаптивной пагинации
  React.useEffect(() => {
    const updateImagesPerPage = () => {
      const width = window.innerWidth;
      if (width < 640) setImagesPerPage(12);      // Мобилки: 4 фото
      else if (width < 1024) setImagesPerPage(18); // Планшеты: 6 фото
      else setImagesPerPage(24);                    // Десктоп: 9 фото
    };

    updateImagesPerPage();
    window.addEventListener('resize', updateImagesPerPage);
    return () => window.removeEventListener('resize', updateImagesPerPage);
  }, []);

  // Сброс страницы при изменении количества фото на странице
  React.useEffect(() => {
    setCurrentPage(1);
  }, [imagesPerPage]);

  // Расчеты
  const totalPages = Math.ceil(allImages.length / imagesPerPage);
  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = allImages.slice(indexOfFirstImage, indexOfLastImage);

  // Функция скролла вверх при смене страницы
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <PageWrapper>
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-[#FAF9F6] dark:bg-gray-950 relative overflow-hidden min-h-screen px-4 sm:px-6">
        <div className="absolute top-0 right-0 w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] bg-[var(--gold-primary)]/5 dark:bg-[var(--gold-primary)]/3 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10">

          {/* Заголовок */}
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <span className="text-[var(--gold-primary)] font-medium tracking-[0.15em] sm:tracking-[0.2em] uppercase text-[11px] sm:text-sm mb-3 sm:mb-4 block">
              {t('gallery.span')}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#1B2A44] dark:text-gray-100 relative inline-block"
              style={{ fontFamily: "'Playfair Display', serif" }}>
              {t('gallery.title')}
              <span className="absolute -bottom-3 sm:-bottom-4 left-1/2 -translate-x-1/2 w-10 sm:w-12 h-[2px] sm:h-[3px] bg-[var(--gold-primary)]"></span>
            </h2>
          </div>

          {/* Masonry сетка - адаптивная */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 sm:gap-6 md:gap-8 space-y-4 sm:space-y-6 md:space-y-8 transition-all duration-500">
            {currentImages.map((src, index) => (
              <div
                key={indexOfFirstImage + index}
                className="relative group break-inside-avoid rounded-xl overflow-hidden bg-white dark:bg-gray-900 
                     shadow-[0_10px_30px_rgba(0,0,0,0.04)] dark:shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_40px_rgba(212,162,89,0.2)] dark:hover:shadow-[0_20px_40px_rgba(212,162,89,0.15)] 
                     transition-all duration-700 ease-in-out cursor-pointer"
              >
                <div className="absolute inset-0 border-[0px] group-hover:border-[8px] sm:group-hover:border-[12px] md:group-hover:border-[15px] border-white/10 dark:border-white/5 transition-all duration-500 z-20 pointer-events-none"></div>
                <img
                  src={src}
                  alt={`${t('gallery.projectTitle')} ${indexOfFirstImage + index + 1}`}
                  className="w-full h-auto object-cover transition-transform duration-[1.5s] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1B2A44]/90 dark:from-gray-950/90 via-[#1B2A44]/20 dark:via-gray-950/20 to-transparent 
                          opacity-0 group-hover:opacity-100 transition-all duration-500 z-10 flex flex-col justify-end p-4 sm:p-6 md:p-8">
                  <div className="transform translate-y-4 sm:translate-y-6 md:translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-[var(--gold-primary)] text-[10px] sm:text-xs uppercase tracking-widest mb-1 sm:mb-2 font-semibold">
                      {t('gallery.directionLabel')}
                    </p>
                    <h3 className="text-white text-base sm:text-lg md:text-xl font-bold mb-1 sm:mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                      {t('gallery.projectTitle')}{indexOfFirstImage + index + 1}
                    </h3>
                    <div className="w-6 h-[1px] bg-[var(--gold-primary)] group-hover:w-full transition-all duration-700"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ПАГИНАЦИЯ - адаптивная */}
          {totalPages > 1 && (
            <div className="mt-12 sm:mt-16 md:mt-20 flex flex-wrap justify-center items-center gap-3 sm:gap-4">
              <button
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg border border-[var(--gold-primary)] transition-all text-sm sm:text-base ${currentPage === 1
                  ? 'opacity-30 cursor-not-allowed'
                  : 'hover:bg-[var(--gold-primary)] hover:text-white text-[var(--gold-primary)]'
                  }`}
              >
                {t('gallery.prev')}
              </button>

              <div className="flex gap-1 sm:gap-2 flex-wrap justify-center">
                {[...Array(totalPages)].map((_, i) => {
                  // Показываем только ближайшие страницы для мобилок
                  const shouldShow = imagesPerPage === 12
                    ? Math.abs(currentPage - (i + 1)) <= 1  // На мобилках покажет текущую, одну прошлую и одну следующую
                    : Math.abs(currentPage - (i + 1)) <= 3;

                  if (!shouldShow) return null;

                  return (
                    <button
                      key={i}
                      onClick={() => paginate(i + 1)}
                      className={`w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full font-medium transition-all text-sm sm:text-base ${currentPage === i + 1
                        ? 'bg-[#1B2A44] dark:bg-gray-800 text-white shadow-lg scale-110'
                        : 'text-[#1B2A44] dark:text-gray-400 hover:bg-[var(--gold-primary)]/10 dark:hover:bg-[var(--gold-primary)]/20'
                        }`}
                    >
                      {i + 1}
                    </button>
                  );
                })}
              </div>

              <button
                onClick={() => paginate(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg border border-[var(--gold-primary)] transition-all text-sm sm:text-base ${currentPage === totalPages
                  ? 'opacity-30 cursor-not-allowed'
                  : 'hover:bg-[var(--gold-primary)] hover:text-white text-[var(--gold-primary)]'
                  }`}
              >
                {t('gallery.next')}
              </button>
            </div>
          )}

          {/* Футер с информацией */}
          <div className="mt-12 sm:mt-16 md:mt-20 text-center">
            <p className="text-[#1B2A44]/60 dark:text-gray-500 italic font-serif text-xs sm:text-sm">
              {t('gallery.footerText', {
                start: indexOfFirstImage + 1,
                end: Math.min(indexOfLastImage, allImages.length),
                total: allImages.length
              })}
            </p>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default Gallery;