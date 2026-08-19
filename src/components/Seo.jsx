import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const Seo = ({ title, description }) => {
    const location = useLocation();

    const baseUrl = 'https://benkov-website.vercel.app';

    // Вырезаем из пути любой языковой префикс (/uz, /ru, /en), чтобы получить чистый адрес страницы
    const cleanPath = location.pathname.replace(/^\/(uz|ru|en)/, '') || '/';
    const pathSuffix = cleanPath === '/' ? '' : cleanPath;

    // ТАК КАК ГЛАВНЫЙ ЯЗЫК УЗБЕКСКИЙ:
    // Чистая ссылка без префикса — это теперь УЗБЕКСКИЙ язык
    const uzUrl = `${baseUrl}${pathSuffix}`;

    // Для русского и английского теперь ОБЯЗАТЕЛЬНО добавляем их префиксы
    const ruUrl = `${baseUrl}/ru${pathSuffix}`;
    const enUrl = `${baseUrl}/en${pathSuffix}`;

    return (
        <Helmet>
            <title>{title} | Benkov</title>
            <meta name="description" content={description} />
            <meta property="og:title" content={`${title} | Benkov`} />
            <meta property="og:description" content={description} />

            {/* Теги hreflang для робота Google */}
            <link rel="alternate" hrefLang="uz" href={uzUrl} />
            <link rel="alternate" hrefLang="ru" href={ruUrl} />
            <link rel="alternate" hrefLang="en" href={enUrl} />

            {/* x-default — это страница по умолчанию, когда язык пользователя не распознан. У нас это узбекский */}
            <link rel="alternate" hrefLang="x-default" href={uzUrl} />
        </Helmet>
    );
};

export default Seo;