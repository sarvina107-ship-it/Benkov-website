import React from 'react';

export default function PageLoader() {
    return (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#1B2A44]/60 backdrop-blur-md">
            {/* Стеклянная карточка по центру */}
            <div className="flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-[#1B2A44]/80 p-8 shadow-2xl shadow-black/40">

                {/* Кастомный красивый спиннер */}
                <div className="relative flex h-16 w-16 items-center justify-center">
                    {/* Внешнее светящееся кольцо */}
                    <div className="absolute inset-0 animate-spin rounded-full border-2 border-t-[#D4A259] border-r-transparent border-b-transparent border-l-transparent"></div>
                    {/* Внутреннее быстрое кольцо */}
                    <div className="absolute h-10 w-10 animate-[spin_0.6s_linear_infinite] rounded-full border-2 border-b-[#D4A259] border-t-transparent border-r-transparent border-l-transparent opacity-60"></div>
                    {/* Золотая точка в центре */}
                    <div className="h-2 w-2 rounded-full bg-[#D4A259] shadow-[0_0_10px_#D4A259]"></div>
                </div>

                {/* Текст загрузки */}
                <h2 className="mt-6 text-sm font-semibold uppercase tracking-widest text-[#D4A259] animate-pulse">
                    Loading...
                </h2>
                <p className="mt-1 text-xs text-slate-400">Please wait</p>
            </div>
        </div>
    );
}