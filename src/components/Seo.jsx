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

    const defaultTitle = "Pavel Benkov nomidagi Respublika ixtisoslashtirilgan rassomlik maktabi";
    const fullTitle = title ? `${title} | Benkov` : defaultTitle;
    const metaDesc = description || "Pavel Benkov nomidagi Respublika ixtisoslashtirilgan san’at maktabi — tasviriy san’at yo‘nalishida professional ta’lim.";

    return (
        <Helmet defaultTitle={defaultTitle}>
            <title>{fullTitle}</title>
            <meta name="description" content={metaDesc} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={metaDesc} />

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