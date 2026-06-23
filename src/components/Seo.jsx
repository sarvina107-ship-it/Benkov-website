import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const Seo = ({ title, description }) => {
    const location = useLocation();

    const baseUrl = 'https://benkov-website.vercel.app/';

    // Теперь вырезаем из пути И /uz, И /en, чтобы получить чистый адрес страницы
    const cleanPath = location.pathname.replace(/^\/(uz|en)/, '') || '/';

    // Формируем ссылки для робота Google под все 3 языка
    const ruUrl = `${baseUrl}${cleanPath === '/' ? '' : cleanPath}`;
    const uzUrl = `${baseUrl}/uz${cleanPath === '/' ? '' : cleanPath}`;
    const enUrl = `${baseUrl}/en${cleanPath === '/' ? '' : cleanPath}`; // Добавили EN

    return (
        <Helmet>
            <title>{title} | Benkov</title>
            <meta name="description" content={description} />
            <meta property="og:title" content={`${title} | Benkov`} />
            <meta property="og:description" content={description} />

            {/* Теги hrefLang с большой буквы L для React */}
            <link rel="alternate" hrefLang="ru" href={ruUrl} />
            <link rel="alternate" hrefLang="uz" href={uzUrl} />
            <link rel="alternate" hrefLang="en" href={enUrl} />
            <link rel="alternate" hrefLang="x-default" href={ruUrl} />
        </Helmet>
    );
};

export default Seo;