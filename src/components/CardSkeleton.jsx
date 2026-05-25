import React from 'react';

export default function CardSkeleton() {
    return (
        <div className="bg-white dark:bg-gray-900 relative rounded-2xl overflow-hidden shadow-xl dark:shadow-gray-900/50 flex flex-col h-full border border-black/5 dark:border-white/5">

            {/* Скелетон фотки — ВЫСОТА ОДИН В ОДИН как в NewsSection */}
            <div className="relative h-[200px] sm:h-[220px] w-full animate-pulse bg-slate-200 dark:bg-slate-800/80 overflow-hidden">
                {/* Твой фирменный блик на фото */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D4A259]/10 to-transparent animate-[shimmer_2s_infinite]" />
            </div>

            {/* Контентная часть — паддинги в точности как у оригинала */}
            <div className="p-4 sm:p-6 flex flex-col flex-grow">

                {/* Заголовок (имитируем 1-2 строки) */}
                <div className="space-y-2 mb-3">
                    <div className="h-5 w-full animate-pulse rounded bg-slate-200 dark:bg-slate-800" />
                    <div className="h-5 w-2/3 animate-pulse rounded bg-slate-200 dark:bg-slate-800 sm:hidden" />
                </div>

                {/* Текст описания (имитируем 2 строчки text-gray-600) */}
                <div className="space-y-2 flex-grow mb-6">
                    <div className="h-4 w-full animate-pulse rounded bg-slate-200/70 dark:bg-slate-800/60" />
                    <div className="h-4 w-5/6 animate-pulse rounded bg-slate-200/70 dark:bg-slate-800/60" />
                </div>

                {/* Кнопка "Читать далее" в самом низу */}
                <div className="mt-auto">
                    <div className="h-[46px] sm:h-[54px] w-full sm:w-36 animate-pulse rounded-xl bg-[#D4A259]/25 dark:bg-[#D4A259]/15" />
                </div>
            </div>
        </div>
    );
}