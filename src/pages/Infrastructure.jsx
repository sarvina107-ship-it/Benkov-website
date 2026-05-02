import React from 'react'
import { Link } from 'react-router-dom';
import { ROUTES } from '../paths'

const Infrastructure = () => {
  return (
    <main className="bg-[#FAF9F6] text-[#1B2A44] overflow-hidden">

      {/* --- Внешний вид школы --- */}
      <section className="py-24 relative">
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#D4A259]/5 blur-[100px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto text-center mb-20 px-6">
          <span className="text-[#D4A259] font-medium tracking-[0.3em] uppercase text-xs mb-4 block">Архитектура и природа</span>
          <h2 className="text-5xl md:text-6xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Внешний вид школы
          </h2>
          <p className="text-lg text-[#1B2A44]/70 max-w-2xl mx-auto leading-relaxed font-serif italic">
            Гармоничное сочетание академической строгости фасадов и умиротворяющей зелени внутреннего дворика.
          </p>
          <div className="w-16 h-[1px] bg-[#D4A259] mx-auto mt-8"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 items-end">
          <div className="group relative">
            <div className="overflow-hidden rounded-2xl aspect-[4/5] shadow-xl border-[12px] border-white transition-transform duration-700 group-hover:-translate-y-2">
              <div className="w-full h-full bg-gray-200"></div> {/* Имитация фото */}
            </div>
            <p className="mt-4 text-center font-medium tracking-wider uppercase text-xs text-[#D4A259]">Фасад школы</p>
          </div>

          <div className="group relative mb-12">
            <div className="overflow-hidden rounded-2xl aspect-[3/4] shadow-2xl border-[12px] border-white transition-transform duration-700 group-hover:-translate-y-2">
              <div className="w-full h-full bg-gray-300"></div>
            </div>
            <p className="mt-4 text-center font-medium tracking-wider uppercase text-xs text-[#D4A259]">Внутренний двор</p>
          </div>

          <div className="group relative">
            <div className="overflow-hidden rounded-2xl aspect-[4/5] shadow-xl border-[12px] border-white transition-transform duration-700 group-hover:-translate-y-2">
              <div className="w-full h-full bg-gray-200"></div>
            </div>
            <p className="mt-4 text-center font-medium tracking-wider uppercase text-xs text-[#D4A259]">Главный вход</p>
          </div>
        </div>
      </section>

      {/* 2. АКТОВЫЙ ЗАЛ — ИСПРАВЛЕНО: Фото сделано крупнее и сбалансировано с текстом */}
      <section className="py-24 bg-[#1B2A44] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row-reverse gap-16 items-center">
            <div className="w-full md:w-2/5"> {/* Текст занимает чуть меньше места */}
              <h2 className="text-5xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>Актовый зал</h2>
              <p className="text-[#FAF9F6]/80 text-lg leading-relaxed relative z-10">
                Центр творческих событий. Здесь проходят концерты, выставки и театральные постановки.
                Зал оснащен профессиональной акустикой и сценой, которая помнит поколения юных талантов.
              </p>
            </div>
            <div className="w-full md:w-3/5"> {/* Фото теперь крупнее */}
              <div className="relative group">
                <div className="absolute -inset-4 border border-[#D4A259]/30 rounded-2xl translate-x-4 translate-y-4"></div>
                <div className="relative h-[550px] bg-gray-500 rounded-2xl overflow-hidden shadow-2xl"> {/* Увеличили высоту */}
                  <img src="/src/assets/infra/hall.jpg" className="w-full h-full object-cover" alt="Зал" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Художественные классы (Мастерские) --- */}
      <section className="py-24 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
              <h2 className="text-5xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Художественные классы</h2>
              <p className="text-[#1B2A44]/60 italic font-serif">Пространства, залитые северным светом, созданны специально для творчества.</p>
            </div>
            <div className="w-32 h-[1px] bg-[#D4A259] mb-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Кабинет Живописи */}
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-sm mb-6">
                <div className="w-full h-[400px] bg-gray-200 grayscale group-hover:grayscale-0 transition-all duration-1000">
                  <img src="" alt="Живопись" className="w-full h-full object-cover" />
                </div>
                <div className="absolute inset-0 border border-[#D4A259]/20 group-hover:inset-4 transition-all duration-500"></div>
              </div>
              <h3 className="text-xl font-bold tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                Кабинет Живописи
              </h3>
              <p className="text-sm text-gray-500 mt-2">Пространство для работы с маслом и акварелью</p>
            </div>

            {/* Кабинет Графики */}
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-sm mb-6">
                <div className="w-full h-[400px] bg-gray-200 grayscale group-hover:grayscale-0 transition-all duration-1000">
                  <img src="" alt="Графика" className="w-full h-full object-cover" />
                </div>
                <div className="absolute inset-0 border border-[#D4A259]/20 group-hover:inset-4 transition-all duration-500"></div>
              </div>
              <h3 className="text-xl font-bold tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                Кабинет Графики
              </h3>
              <p className="text-sm text-gray-500 mt-2">Мастерская линогравюры и рисунка</p>
            </div>

            {/* Кабинет Скульптуры */}
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-sm mb-6">
                <div className="w-full h-[400px] bg-gray-200 grayscale group-hover:grayscale-0 transition-all duration-1000">
                  <img src="" alt="Скульптура" className="w-full h-full object-cover" />
                </div>
                <div className="absolute inset-0 border border-[#D4A259]/20 group-hover:inset-4 transition-all duration-500"></div>
              </div>
              <h3 className="text-xl font-bold tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                Кабинет Скульптуры
              </h3>
              <p className="text-sm text-gray-500 mt-2">Работа с глиной, гипсом и объемом</p>
            </div>

          </div>

          <div className="text-center mt-16">
            <Link to={ROUTES.DIRECTIONS}>
              <button className="group relative px-10 py-4 bg-[#D4A259] text-[#1B2A44] rounded-xl font-bold uppercase tracking-[0.2em] text-sm border border-[#D4A259]/30 transition-all duration-300 hover:border-[#1B2A44]">
                <span className="absolute inset-0 border border-[#1B2A44] rounded-xl opacity-0 scale-100 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"></span>
                <span className="relative z-10 flex items-center gap-2">
                  Узнать больше об направлениях
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

      {/* --- Компьютерный класс --- */}
      <section className="py-32 bg-[#F0EEEA] overflow-hidden"> {/* Увеличили отступы для маневра */}
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-16 items-center">

          {/* ЛЕВАЯ ЧАСТЬ — Блок с динамичными фото */}
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <div className="flex items-start gap-6 lg:gap-10"> {/* Flexbox для выравнивания по верху */}

              {/* ПЕРВОЕ ФОТО (Уходит ВЫШЕ) */}
              <div className="w-1/2 rounded-3xl overflow-hidden shadow-2xl transform -translate-y-16 border-4 border-white transition-transform duration-500 hover:-translate-y-20">
                <img
                  src="" // Вставь сюда путь к первому фото (например, IT-класс крупным планом)
                  alt="Цифровое искусство 1"
                  className="w-full h-[450px] object-cover bg-gray-300" // Большая высота для вертикального эффекта
                />
              </div>

              {/* ВТОРОЕ ФОТО (Уходит НИЖЕ) */}
              <div className="w-1/2 rounded-3xl overflow-hidden shadow-2xl transform translate-y-16 border-4 border-white transition-transform duration-500 hover:translate-y-20">
                <img
                  src="" // Вставь сюда путь ко второму фото (например, ученик за планшетом)
                  alt="Цифровое искусство 2"
                  className="w-full h-[450px] object-cover bg-gray-400"
                />
              </div>

            </div>
          </div>

          {/* ПРАВАЯ ЧАСТЬ — Текст (без изменений) */}
          <div className="w-full md:w-1/2 order-1 md:order-2 z-10">
            <h2 className="text-5xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Цифровое искусство
            </h2>
            <p className="text-lg text-[#1B2A44]/70 leading-relaxed mb-8 font-serif italic">
              Современный компьютерный класс — это мост между классической школой и технологиями будущего. Здесь ученики осваивают графический дизайн и 3D-моделирование.
            </p>
            <div className="flex items-center gap-4 text-[#D4A259] font-bold text-sm tracking-widest">
              <span className="w-8 h-[1px] bg-[#D4A259]"></span> ТЕХНОЛОГИИ
            </div>
          </div>

        </div>
      </section>

      {/* --- Библиотека --- */}
      <section className="py-24 bg-[#FAF9F6] relative overflow-hidden">
        {/* Декоративный золотой элемент на фоне */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4A259]/5 rounded-full blur-3xl -mr-32 -mt-32"></div>

        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="text-center mb-16">
            <h2 className="text-6xl font-bold mb-4 text-[#1B2A44]" style={{ fontFamily: "'Playfair Display', serif" }}>
              Храм знаний
            </h2>
            <div className="flex justify-center items-center gap-4 mb-4">
              <span className="w-12 h-[1px] bg-[#D4A259]"></span>
              <p className="text-[#1B2A44]/60 italic font-serif text-lg">
                Тишина, запах старых книг и бесконечное вдохновение
              </p>
              <span className="w-12 h-[1px] bg-[#D4A259]"></span>
            </div>
          </div>

          {/* Сетка с золотыми деталями и разной высотой фото */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[600px]">

            {/* Большое центральное фото (Библиотечный зал) */}
            <div className="md:col-span-6 relative group">
              <div className="absolute inset-0 border-2 border-[#D4A259] translate-x-3 translate-y-3 rounded-xl opacity-50 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500"></div>
              <div className="relative h-full min-h-[400px] bg-gray-200 rounded-xl overflow-hidden shadow-2xl border border-[#D4A259]/20">
                <img src="" alt="Зал библиотеки" className="w-full h-full object-cover" />
                {/* Золотой шильдик */}
                <div className="absolute bottom-6 left-6 bg-[#1B2A44] border-l-4 border-[#D4A259] px-4 py-2">
                  <span className="text-[#D4A259] text-xs font-bold tracking-tighter uppercase">Главный зал</span>
                </div>
              </div>
            </div>

            {/* Правая колонка с двумя фото */}
            <div className="md:col-span-6 grid grid-cols-2 gap-6">

              {/* Фото 2 (Архивы) */}
              <div className="col-span-2 md:col-span-1 relative group">
                <div className="h-full min-h-[250px] bg-gray-300 rounded-xl overflow-hidden border-b-4 border-[#D4A259] shadow-lg">
                  <img src="" alt="Книжные полки" className="w-full h-full object-cover" />
                </div>
              </div>

              {/* Фото 3 (Зона чтения) */}
              <div className="col-span-2 md:col-span-1 relative group md:translate-y-12">
                <div className="h-full min-h-[250px] bg-gray-400 rounded-xl overflow-hidden border-t-4 border-[#D4A259] shadow-lg">
                  <img src="" alt="Учебная зона" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- НОВЫЙ РАЗДЕЛ: Трапезная (Столовая) --- */}
      <section className="py-24 bg-[#F5EFE6] border-y border-[#D4A259]/20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-[#D4A259] font-medium tracking-[0.3em] uppercase text-xs mb-4 block">Забота о здоровье</span>
            <h2 className="text-5xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>Школьная трапезная</h2>
            <p className="text-lg text-[#1B2A44]/70 leading-relaxed mb-6">
              Светлая и уютная столовая, где ученики могут восстановить силы. Мы уделяем особое внимание качеству питания и эстетике места, чтобы даже обеденный перерыв был приятным.
            </p>
            <ul className="space-y-3 text-[#1B2A44]/80 font-medium">
              <li className="flex items-center gap-3"><span className="text-[#D4A259]">✦</span> Сбалансированное меню</li>
              <li className="flex items-center gap-3"><span className="text-[#D4A259]">✦</span> Чистота и уют</li>
              <li className="flex items-center gap-3"><span className="text-[#D4A259]">✦</span> Свежие продукты ежедневно</li>
            </ul>
          </div>
          <div className="relative group">
            <div className="absolute inset-0 border-2 border-[#D4A259] translate-x-4 translate-y-4 rounded-2xl group-hover:translate-x-2 group-hover:translate-y-2 transition-all"></div>
            <div className="relative h-[400px] bg-gray-300 rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-[#1B2A44]/40 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Выставка картин (Второй этаж) --- */}
      <section className="py-24 bg-[#FAF9F6] border-t border-[#D4A259]/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-6xl font-bold mb-6 text-[#1B2A44]" style={{ fontFamily: "'Playfair Display', serif" }}>
              Живая галерея
            </h2>
            <div className="flex justify-center items-center gap-3">
              <div className="w-2 h-2 bg-[#D4A259] rotate-45"></div>
              <p className="text-lg text-gray-500 font-serif italic">Коридоры второго этажа — экспозиция лучших работ наших воспитанников</p>
              <div className="w-2 h-2 bg-[#D4A259] rotate-45"></div>
            </div>
          </div>

          {/* Сетка галереи */}
          <div className="columns-1 md:columns-2 lg:columns-3 gap-10 space-y-12">

            {/* Картина 1 — Классическая рама */}
            <div className="break-inside-avoid group">
              <div className="bg-white p-6 shadow-[0_20px_50px_rgba(0,0,0,0.1)] border-t-4 border-[#D4A259] transition-all duration-500 group-hover:-translate-y-2">
                <div className="relative overflow-hidden bg-gray-200 aspect-[3/4] mb-4 outline outline-1 outline-offset-[15px] outline-gray-100">
                  <img src="" alt="Работа 1" className="w-full h-full object-cover" />
                </div>
                <div className="pt-4 border-t border-gray-100 flex justify-between items-end">
                  <div>
                    <p className="text-[#1B2A44] font-bold text-sm uppercase tracking-widest">Академический рисунок</p>
                    <p className="text-xs text-gray-400 mt-1 italic">Холст, масло. 2024</p>
                  </div>
                  <span className="text-[#D4A259] text-lg font-serif">01</span>
                </div>
              </div>
            </div>

            {/* Картина 2 — Минимализм с золотой деталью */}
            <div className="break-inside-avoid group">
              <div className="bg-[#1B2A44] p-5 shadow-2xl transition-all duration-500 group-hover:rotate-1">
                <div className="bg-gray-300 aspect-square mb-6 border border-[#D4A259]/30">
                  <img src="" alt="Работа 2" className="w-full h-full object-cover" />
                </div>
                <div className="text-center pb-2">
                  <div className="h-[1px] w-12 bg-[#D4A259] mx-auto mb-3"></div>
                  <p className="text-white text-xs tracking-[0.2em] uppercase">Экспериментальная графика</p>
                </div>
              </div>
            </div>

            {/* Картина 3 — Широкое паспарту */}
            <div className="break-inside-avoid group">
              <div className="bg-white p-10 shadow-xl border border-gray-100 transition-all duration-500 group-hover:scale-[1.02]">
                <div className="bg-gray-200 aspect-[4/5] shadow-inner relative">
                  <img src="" alt="Работа 3" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 border-[12px] border-white/20"></div>
                </div>
                <p className="mt-6 text-center text-gray-400 font-serif italic text-sm">«Утренний этюд»</p>
              </div>
            </div>

            {/* Картина 4 — Тёмная элегантность */}
            <div className="break-inside-avoid group">
              <div className="relative p-1 bg-gradient-to-br from-[#D4A259] to-[#1B2A44] shadow-2xl transition-all duration-700 group-hover:shadow-[#D4A259]/20">
                <div className="bg-white p-4">
                  <div className="bg-gray-300 aspect-[3/2]">
                    <img src="" alt="Работа 4" className="w-full h-full object-cover" />
                  </div>
                  <div className="mt-4 flex items-center gap-3">
                    <div className="w-1 h-10 bg-[#D4A259]"></div>
                    <p className="text-[10px] leading-tight text-[#1B2A44] font-bold uppercase tracking-tighter">Секция живописи <br /> и композиции</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Картина 5 — Простота и акцент */}
            <div className="break-inside-avoid group">
              <div className="bg-white p-6 shadow-md border-b-2 border-[#D4A259]/50 transition-all duration-300 group-hover:shadow-orange-100">
                <div className="bg-gray-200 aspect-[3/4] mb-4">
                  <img src="" alt="Работа 5" className="w-full h-full object-cover" />
                </div>
                <p className="text-right text-[#1B2A44] font-bold italic font-serif">Мастерская №4</p>
              </div>
            </div>

            {/* Картина 6 — Музейный стиль */}
            <div className="break-inside-avoid group">
              <div className="bg-white p-2 shadow-2xl border border-gray-200">
                <div className="border border-gray-100 p-6 transition-colors duration-500 group-hover:bg-[#FAF9F6]">
                  <div className="bg-gray-400 aspect-video mb-4 grayscale group-hover:grayscale-0 transition-all duration-1000">
                    <img src="" alt="Работа 6" className="w-full h-full object-cover" />
                  </div>
                  <p className="text-center text-xs tracking-widest text-[#D4A259] font-bold">EXHIBITION PIECE</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- Общеобразовательные кабинеты --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>Общеобразовательный блок</h2>

          {/* Заменили Flex на Grid для создания красивых карточек */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {['Математика', 'Литература', 'Физика', 'Химия'].map((subject) => (
              <div key={subject} className="bg-[#FAF9F6] rounded-2xl overflow-hidden shadow-sm border border-gray-100 group hover:shadow-md transition-all">
                {/* Место под фото кабинета */}
                <div className="h-48 bg-gray-200">
                  <img src={`/src/assets/infra/class-${subject}.jpg`} className="w-full h-full object-cover" alt={subject} />
                </div>
                {/* Текст внутри карточки */}
                <div className="p-6">
                  <h4 className="text-xl font-bold text-[#1B2A44] group-hover:text-[#D4A259] transition-colors">{subject}</h4>
                  <p className="text-sm text-gray-500 mt-1">Кабинет полностью оснащен</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Галерея учеников (Футер-секция) --- */}
      <section className="py-32 bg-[#FAF9F6] relative">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-6xl font-bold mb-8 text-[#D4A259]" style={{ fontFamily: "'Playfair Display', serif" }}>Галерея работ</h2>
          <p className="text-xl text-gray-600 mb-12 leading-relaxed">
            Каждая работа — это шаг к мастерству. Приглашаем вас познакомиться с лучшими творениями наших воспитанников в полном объеме.
          </p>
          <Link to={ROUTES.GALLERY}>
            <button className="group relative px-10 py-4 bg-[#1B2A44] text-white rounded-xl font-bold uppercase tracking-[0.2em] text-sm border border-[#D4A259]/30 transition-all duration-300 hover:border-white">
              <span className="absolute inset-0 border border-white rounded-xl opacity-0 scale-100 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"></span>
              <span className="relative z-10 flex items-center gap-2">
                Перейти в галерею
                <span className="relative w-3 h-3">
                  <span className="absolute top-1/2 left-0 w-full h-[1px] bg-white transition-transform group-hover:rotate-90"></span>
                  <span className="absolute top-1/2 left-0 w-full h-[1px] bg-white"></span>
                </span>
              </span>
            </button>
          </Link>
        </div>
      </section>

    </main>
  )
}

export default Infrastructure