import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Logo from '../assets/icon/Logo.png';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="relative overflow-hidden font-serif">

      {/* ===== СЕКЦИЯ 1: КОНТАКТЫ И КАРТА ===== */}
      <div className="bg-[#1B2A44] text-white py-20 relative">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: `url('https://www.transparenttextures.com/patterns/canvas-orange.png')` }}></div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* Текстовый блок контактов */}
          <div className="space-y-10">
            <div>
              <span className="text-[#D4A259] uppercase tracking-[0.3em] text-xs mb-4 block font-sans font-semibold">{t('footer.connect')}</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                {t('footer.visit_us')} <span className="text-[#D4A259]">{t('footer.visit_us_highlight')}</span>
              </h2>
            </div>

            <div className="space-y-6">
              {/* Адрес */}
              <div className="flex items-start gap-4 group">
                <div className="mt-1 w-10 h-10 rounded-full border border-[#D4A259]/30 flex items-center justify-center text-[#D4A259] group-hover:bg-[#D4A259] group-hover:text-[#1B2A44] transition-all">📍</div>
                <div>
                  <h3 className="text-[#D4A259] font-bold text-sm uppercase tracking-wider mb-1">{t('footer.address_title')}</h3>
                  <p className="text-gray-300 text-sm">{t('footer.address_value')}</p>
                </div>
              </div>

              {/* Телефон */}
              <div className="flex items-start gap-4 group">
                <div className="mt-1 w-10 h-10 rounded-full border border-[#D4A259]/30 flex items-center justify-center text-[#D4A259] group-hover:bg-[#D4A259] group-hover:text-[#1B2A44] transition-all">📞</div>
                <div>
                  <h3 className="text-[#D4A259] font-bold text-sm uppercase tracking-wider mb-1">{t('footer.reception')}</h3>
                  <p className="text-gray-300 text-sm">+998 71 765 43 21, +998 90 123 45 67</p>
                </div>
              </div>
            </div>
          </div>

          {/* КАРТА: теперь всегда цветная и яркая */}
          <div className="relative group">
            <div className="absolute -inset-2 bg-[#D4A259]/10 blur-xl rounded-3xl opacity-50 group-hover:opacity-100 transition"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-white/5 h-[300px]">
              <iframe
                className="w-full h-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.243542287823!2d69.255!3d41.285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDE3JzA2LjAiTiA2OcKwMTUnMTguMCJF!5e0!3m2!1sru!2suz!4v1620000000000!5m2!1sru!2suz"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="map"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* ===== СЕКЦИЯ 2: ИНФО, МЕНЮ И ЛОГО ===== */}
      <div className="bg-[#0B1524] text-white py-20 relative border-t border-white/5">

        {/* Арт-декор на фоне */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4A259]/5 rounded-full blur-[150px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 relative z-10">

          {/* ЛОГОТИП: теперь в круге */}
          <div className="md:col-span-3 flex flex-col items-center md:items-start gap-4">
            <div className="relative group">
              <div className="absolute inset-0 bg-[#D4A259]/20 rounded-full blur-md group-hover:blur-xl transition-all"></div>
              <div className="bg-white rounded-full p-2 w-[140px] h-[140px] flex items-center justify-center shadow-2xl relative">
                <img className="w-[100px] h-[100px] object-contain" src={Logo} alt="School Logo" />
              </div>
            </div>
            <p className="text-[#D4A259] font-bold tracking-[0.5em] text-[10px] mt-2 uppercase">Benkov School</p>
          </div>

          {/* МИССИЯ */}
          <div className="md:col-span-4 lg:pr-10">
            <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-3">
              <span className="w-8 h-[1px] bg-[#D4A259]"></span>{t('footer.mission_title')}
            </h3>
            <p className="text-gray-400 leading-relaxed text-[15px] italic font-serif">
              {t('footer.mission_text')}
            </p>
          </div>

          {/* НАВИГАЦИЯ: отдельным блоком */}
          <div className="md:col-span-3">
            <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-3">
              <span className="w-8 h-[1px] bg-[#D4A259]"></span> {t('footer.navigation')}
            </h3>
            <div className="grid grid-cols-2 gap-x-10 gap-y-4 text-gray-400 text-sm">
              <Link to="/" className="hover:text-[#D4A259] transition-all">{t('nav.home')}</Link>
              <Link to="/news" className="hover:text-[#D4A259] transition-all">{t('nav.news')}</Link>
              <Link to="/contacts" className="hover:text-[#D4A259] transition-all">{t('nav.contacts')}</Link>
              <Link to="/gallery" className="hover:text-[#D4A259] transition-all">{t('nav.gallery')}</Link>
            </div>
          </div>

          {/* СОЦСЕТИ */}
          <div className="md:col-span-2">
            <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-3">
              <span className="w-8 h-[1px] bg-[#D4A259]"></span>{t('footer.socials')}
            </h3>

            <div className="flex gap-4">
              {[
                { label: 'F', link: 'https://www.facebook.com/people/Pavel-Benkov-nomidagi-Respublika-ixtisoslashtirilgan-rassomlik-maktabi/61553361282120/?mibextid=ZbWKwL' },
                { label: 'I', link: 'https://www.instagram.com/benkov_maktabi?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' },
                { label: 'T', link: 'https://t.me/benkovmaktabi' }
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg border border-[#D4A259]/30 flex items-center justify-center text-[#D4A259] hover:bg-[#D4A259] hover:text-[#0B1524] hover:-translate-y-1 transition-all duration-300"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* НИЖНЯЯ ЛИНИЯ */}
        <div className="mt-20 pt-10 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] text-gray-500 uppercase tracking-widest">
            <p>{t('footer.rights')}</p>
            <div className="flex items-center gap-2 group">
              <span>Design & Dev:</span>
              <a href="https://t.me/suuun_o" className="text-[#D4A259] font-bold hover:text-white transition-colors">SARA</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;