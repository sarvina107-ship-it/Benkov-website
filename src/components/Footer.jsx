import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Logo from '../assets/icon/Logo.webp';
import { ROUTES } from '../paths';
import LazyYandexMap from './LazyYandexMap';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="relative overflow-hidden font-serif">

      {/* ===== СЕКЦИЯ 1: КОНТАКТЫ И КАРТА ===== */}
      <div className="bg-[#1B2A44] dark:bg-gray-900 text-white py-12 sm:py-16 md:py-20 relative">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 items-center relative z-10">

          {/* Текстовый блок контактов */}
          <div className="space-y-6 sm:space-y-8 md:space-y-10 text-center lg:text-left">
            <div>
              <span className="text-[var(--gold-primary)] uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[10px] sm:text-xs mb-3 sm:mb-4 block font-sans font-semibold">
                {t('footer.connect')}
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                {t('footer.visit_us')} <span className="text-[var(--gold-primary)]">{t('footer.visit_us_highlight')}</span>
              </h2>
            </div>

            <div className="space-y-4 sm:space-y-5 md:space-y-6">
              {/* Адрес */}
              <div className="flex items-center justify-center lg:justify-start gap-3 sm:gap-4 group">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-[var(--gold-primary)]/30 flex items-center justify-center text-[var(--gold-primary)] group-hover:bg-[var(--gold-primary)] group-hover:text-[#1B2A44] dark:group-hover:text-gray-900 transition-all text-sm sm:text-base">
                  📍
                </div>
                <div>
                  <h3 className="text-[var(--gold-primary)] font-bold text-[11px] sm:text-sm uppercase tracking-wider mb-0.5 sm:mb-1">
                    {t('footer.address_title')}
                  </h3>
                  <p className="text-gray-300 dark:text-gray-400 text-xs sm:text-sm">{t('footer.address_value')}</p>
                </div>
              </div>

              {/* Телефон */}
              <div className="flex items-center justify-center lg:justify-start gap-3 sm:gap-4 group">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-[var(--gold-primary)]/30 flex items-center justify-center text-[var(--gold-primary)] group-hover:bg-[var(--gold-primary)] group-hover:text-[#1B2A44] dark:group-hover:text-gray-900 transition-all text-sm sm:text-base">
                  📞
                </div>
                <div>
                  <h3 className="text-[var(--gold-primary)] font-bold text-[11px] sm:text-sm uppercase tracking-wider mb-0.5 sm:mb-1">
                    {t('footer.reception')}
                  </h3>
                  <p className="text-gray-300 dark:text-gray-400 text-xs sm:text-sm">+998 71 245 05 56</p>
                </div>
              </div>
            </div>
          </div>

          {/* КАРТА */}
          <LazyYandexMap />
        </div>
      </div>

      {/* ===== СЕКЦИЯ 2: ИНФО, МЕНЮ И ЛОГО ===== */}
      <div className="bg-[#0B1524] dark:bg-gray-950 text-white py-12 sm:py-16 md:py-20 relative border-t border-white/5 dark:border-gray-800">

        {/* Арт-декор */}
        <div className="absolute top-0 right-0 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-[var(--gold-primary)]/5 dark:bg-[var(--gold-primary)]/3 rounded-full blur-[150px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 md:gap-12 relative z-10">

          {/* ЛОГОТИП - центрируется на мобилках */}
          <div className="sm:col-span-2 lg:col-span-3 flex flex-col items-center sm:items-start gap-3 sm:gap-4">
            <div className="relative group">
              <div className="absolute inset-0 bg-[var(--gold-primary)]/20 dark:bg-[var(--gold-primary)]/10 rounded-full blur-md group-hover:blur-xl transition-all"></div>
              <div className="bg-white dark:bg-gray-800 rounded-full p-2 w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[140px] md:h-[140px] flex items-center justify-center shadow-2xl relative">
                <img className="w-[70px] h-[70px] sm:w-[85px] sm:h-[85px] md:w-[100px] md:h-[100px] object-contain" src={Logo} alt="School Logo" loading="lazy" />
              </div>
            </div>
            <p className="text-[var(--gold-primary)] font-bold tracking-[0.3em] sm:tracking-[0.5em] text-[8px] sm:text-[10px] mt-1 sm:mt-2 uppercase text-center sm:text-left">
              Benkov School
            </p>
          </div>

          {/* МИССИЯ */}
          <div className="sm:col-span-2 lg:col-span-4 lg:pr-4 xl:pr-10">
            <h3 className="text-white font-bold text-base sm:text-lg mb-4 sm:mb-6 flex items-center justify-center sm:justify-start gap-3">
              <span className="w-6 sm:w-8 h-[1px] bg-[var(--gold-primary)]"></span>
              {t('footer.mission_title')}
            </h3>
            <p className="text-gray-400 dark:text-gray-400 leading-relaxed text-[13px] sm:text-[15px] italic font-serif text-center sm:text-left">
              {t('footer.mission_text')}
            </p>
          </div>

          {/* НАВИГАЦИЯ */}
          <div className="sm:col-span-1 lg:col-span-3">
            <h3 className="text-white font-bold text-base sm:text-lg mb-4 sm:mb-6 flex items-center justify-center sm:justify-start gap-3">
              <span className="w-6 sm:w-8 h-[1px] bg-[var(--gold-primary)]"></span>
              {t('footer.navigation')}
            </h3>
            <div className="grid grid-cols-2 gap-x-6 sm:gap-x-10 gap-y-3 sm:gap-y-4 text-gray-400 dark:text-gray-400 text-xs sm:text-sm">
              <Link to="/" className="hover:text-[var(--gold-primary)] transition-all text-center sm:text-left">{t('nav.home')}</Link>
              <Link to={ROUTES.NEWSLIST} className="hover:text-[var(--gold-primary)] transition-all text-center sm:text-left">{t('nav.news')}</Link>
              <Link to="/contacts" className="hover:text-[var(--gold-primary)] transition-all text-center sm:text-left">{t('nav.contacts')}</Link>
              <Link to="/gallery" className="hover:text-[var(--gold-primary)] transition-all text-center sm:text-left">{t('nav.gallery')}</Link>
              <Link to="/faq" className="hover:text-[var(--gold-primary)] transition-all text-center sm:text-left">{t('nav.faq')}</Link>
            </div>
          </div>

          {/* СОЦСЕТИ */}
          <div className="sm:col-span-1 lg:col-span-2">
            <h3 className="text-white font-bold text-base sm:text-lg mb-4 sm:mb-6 flex items-center justify-center sm:justify-start gap-3">
              <span className="w-6 sm:w-8 h-[1px] bg-[var(--gold-primary)]"></span>
              {t('footer.socials')}
            </h3>

            <div className="flex gap-3 sm:gap-4 justify-center sm:justify-start">
              <a
                href="https://www.facebook.com/people/Pavel-Benkov-nomidagi-Respublika-ixtisoslashtirilgan-rassomlik-maktabi/61553361282120/?mibextid=ZbWKwL"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg border border-[var(--gold-primary)]/30 flex items-center justify-center hover:bg-[var(--gold-primary)] hover:border-[var(--gold-primary)] hover:-translate-y-1 transition-all duration-300 group"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--gold-primary)] group-hover:text-[#0B1524] dark:group-hover:text-gray-900 transition-colors" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/benkov_maktabi"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg border border-[var(--gold-primary)]/30 flex items-center justify-center hover:bg-[var(--gold-primary)] hover:border-[var(--gold-primary)] hover:-translate-y-1 transition-all duration-300 group"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--gold-primary)] group-hover:text-[#0B1524] dark:group-hover:text-gray-900 transition-colors" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              <a
                href="https://t.me/benkovmaktabi"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg border border-[var(--gold-primary)]/30 flex items-center justify-center hover:bg-[var(--gold-primary)] hover:border-[var(--gold-primary)] hover:-translate-y-1 transition-all duration-300 group"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--gold-primary)] group-hover:text-[#0B1524] dark:group-hover:text-gray-900 transition-colors" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.6-1.38-.97-2.23-1.56-.99-.69-.35-1.07.22-1.69.15-.15 2.71-2.48 2.76-2.69.01-.03.02-.13-.06-.18-.08-.05-.2-.03-.28-.02-.13.01-2.19 1.39-6.18 4.09-.59.4-1.12.6-1.6.59-.53-.01-1.54-.3-2.3-.54-.93-.3-1.67-.46-1.61-.97.03-.27.4-.55 1.1-.83 4.34-1.89 7.22-3.13 8.65-3.72 4.12-1.71 4.98-2 5.53-2.01.12 0 .4.03.58.18.15.13.19.31.21.48.01.11.01.22-.01.33z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* НИЖНЯЯ ЛИНИЯ */}
        <div className="mt-12 sm:mt-16 md:mt-20 pt-8 sm:pt-10 border-t border-white/5 dark:border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4 text-[9px] sm:text-[11px] text-gray-500 dark:text-gray-600 uppercase tracking-widest">
            <p className="text-center md:text-left">{t('footer.rights')}</p>
            <div className="flex items-center gap-2 group">
              <span>Design & Dev:</span>
              <a href="https://t.me/suuun_o" className="text-[var(--gold-primary)] font-bold hover:text-white dark:hover:text-gray-300 transition-colors">SARA</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;