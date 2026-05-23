import React from 'react';

export default function CardSkeleton() {
    return (
        <div className="overflow-hidden rounded-xl border border-white/5 bg-[#1B2A44] p-4 shadow-lg">

            {/* Скелетон фотки с золотистым отливом при пульсации */}
            <div className="relative h-48 w-full animate-pulse rounded-lg bg-slate-800/80 overflow-hidden">
                {/* Имитация блика на фото */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D4A259]/5 to-transparent animate-[shimmer_2s_infinite]" />
            </div>

            <div className="mt-4 space-y-3">
                {/* Категория */}
                <div className="h-3 w-1/4 animate-pulse rounded bg-slate-800" />

                {/* Заголовок (две строки) */}
                <div className="space-y-2">
                    <div className="h-5 w-full animate-pulse rounded bg-slate-800" />
                    <div className="h-5 w-2/3 animate-pulse rounded bg-slate-800" />
                </div>

                {/* Низ карточки: цена и кнопка */}
                <div className="flex items-center justify-between pt-2">
                    {/* Цена */}
                    <div className="h-6 w-16 animate-pulse rounded bg-slate-800" />
                    {/* Кнопка */}
                    <div className="h-9 w-24 animate-pulse rounded-lg bg-[#D4A259]/20" />
                </div>
            </div>
        </div>
    );
}