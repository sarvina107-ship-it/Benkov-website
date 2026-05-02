import React from 'react';

const Contacts = () => {
  return (
    <section className="py-16 bg-[#F8F6F2] text-[#1B2A44] min-h-screen">
      {/* Заголовок и описание */}
      <div className="max-w-7xl mx-auto text-center mb-16 px-6">
        <h2 className="text-5xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
          Контакты
        </h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
          Свяжитесь с нами через официальные контакты школы. Мы всегда рады ответить на ваши вопросы и
          предоставить нужную информацию.
        </p>
        <div className="w-32 h-1 bg-[#D4A259] mx-auto mt-6 rounded-full"></div>
      </div>

      {/* Большая карточка изображения */}
      <div className="max-w-5xl mx-auto mb-16 relative rounded-[40px] overflow-hidden shadow-2xl px-4 md:px-0">
        <div className="w-full h-[400px] bg-gray-300">
          <img
            src=""
            alt="Фасад школы"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute bottom-0 w-full bg-[#1B2A44]/80 backdrop-blur-sm text-white p-6 font-semibold text-center text-xl">
          Фасад школы / Главный офис
        </div>
      </div>

      {/* Контактная информация */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 px-6">

        {/* Карточка 1: Администрация */}
        <div className="bg-white rounded-[32px] shadow-xl p-8 flex flex-col items-center text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100">
          <div className="w-12 h-12 bg-[#D4A259]/10 rounded-full flex items-center justify-center mb-4">
            <span className="text-[#D4A259] text-2xl">👤</span>
          </div>
          <h3 className="text-2xl font-semibold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Администрация школы
          </h3>
          <div className="space-y-2">
            <p className="text-gray-800 font-medium">Бенков Алексей</p>
            <p className="text-gray-600">
              <a href="tel:+998901234567" className="hover:text-[#D4A259] transition">+998 90 123 45 67</a>
            </p>
            <p className="text-gray-600 italic">
              <a href="mailto:admin@artschool.uz" className="hover:text-[#D4A259] transition">admin@artschool.uz</a>
            </p>
          </div>
        </div>

        {/* Карточка 2: Приемная */}
        <div className="bg-white rounded-[32px] shadow-xl p-8 flex flex-col items-center text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100">
          <div className="w-12 h-12 bg-[#D4A259]/10 rounded-full flex items-center justify-center mb-4">
            <span className="text-[#D4A259] text-2xl">📞</span>
          </div>
          <h3 className="text-2xl font-semibold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Приемная / Секретариат
          </h3>
          <div className="space-y-2">
            <p className="text-gray-800 font-medium">Ирина Смирнова</p>
            <p className="text-gray-600">
              <a href="tel:+998919876543" className="hover:text-[#D4A259] transition">+998 91 987 65 43</a>
            </p>
            <p className="text-gray-600 italic">
              <a href="mailto:reception@artschool.uz" className="hover:text-[#D4A259] transition">reception@artschool.uz</a>
            </p>
          </div>
        </div>

        {/* Карточка 3: Бухгалтерия */}
        <div className="bg-white rounded-[32px] shadow-xl p-8 flex flex-col items-center text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100">
          <div className="w-12 h-12 bg-[#D4A259]/10 rounded-full flex items-center justify-center mb-4">
            <span className="text-[#D4A259] text-2xl">💰</span>
          </div>
          <h3 className="text-2xl font-semibold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Бухгалтерия
          </h3>
          <div className="space-y-2">
            <p className="text-gray-800 font-medium">Виктория Петрова</p>
            <p className="text-gray-600">
              <a href="tel:+998935551234" className="hover:text-[#D4A259] transition">+998 93 555 12 34</a>
            </p>
            <p className="text-gray-600 italic">
              <a href="mailto:finance@artschool.uz" className="hover:text-[#D4A259] transition">finance@artschool.uz</a>
            </p>
          </div>
        </div>

        {/* Карточка 4: Директор */}
        <div className="bg-white rounded-[32px] shadow-xl p-8 flex flex-col items-center text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100">
          <div className="w-12 h-12 bg-[#D4A259]/10 rounded-full flex items-center justify-center mb-4">
            <span className="text-[#D4A259] text-2xl">🏢</span>
          </div>
          <h3 className="text-2xl font-semibold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Директор школы
          </h3>
          <div className="space-y-2">
            <p className="text-gray-800 font-medium">Ольга Иванова</p>
            <p className="text-gray-600">
              <a href="tel:+998973214567" className="hover:text-[#D4A259] transition">+998 97 321 45 67</a>
            </p>
            <p className="text-gray-600 italic">
              <a href="mailto:director@artschool.uz" className="hover:text-[#D4A259] transition">director@artschool.uz</a>
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contacts;