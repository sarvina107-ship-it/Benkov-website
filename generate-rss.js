import { Feed } from 'feed';
import fs from 'fs';
import path from 'path';

async function generateRss() {
    const SITE_URL = 'https://benkov-website.vercel.app'; // Убрал лишний слэш на конце, чтобы ссылки не дублировались (будет /news/, а не //news/)

    // 1. Настройки самой ленты
    const feed = new Feed({
        title: "Республиканская специализированная художественная школа им. П. Бенькова",
        description: "Новости, объявления и события школы Бенькова в Ташкенте",
        id: SITE_URL,
        link: SITE_URL,
        language: "ru",
        image: `${SITE_URL}/logo.png`,
        favicon: `${SITE_URL}/favicon.ico`,
        copyright: `All rights reserved ${new Date().getFullYear()}, Benkov Art School`,
    });

    try {
        // 2. Запрос к твоему API на Railway
        const response = await fetch('https://sarvina-production.up.railway.app/api/news');
        const data = await response.json();

        // Проверяем в консоли, что именно прилетает с бэка:
        console.log('--- ОТВЕТ ОТ API БЕНЬКОВА: ---', data);

        // Если данные лежат в поле data (например, { success: true, data: [...] }), добавим и эту проверку:
        const newsArray = data.news || data.posts || data.data || data;

        // Защита от дурака
        const safeNewsArray = Array.isArray(newsArray) ? newsArray : [];
        console.log(`Найдено новостей для обработки: ${safeNewsArray.length}`);

        // 3. Перебираем массив новостей
        safeNewsArray.forEach((news) => {
            // Проверяем, какие поля используются в твоей схеме на бэке (id или _id, description или text)
            const newsId = news.id || news._id;
            const newsTitle = news.title || "Без названия";
            const newsDesc = news.description || news.text || news.content || "";
            // Проверяем дату: если на бэке поле называется createdAt, подхватим его
            const newsDate = news.date || news.createdAt || new Date();

            feed.addItem({
                title: newsTitle,
                id: `${SITE_URL}/news/${newsId}`,
                link: `${SITE_URL}/news/${newsId}`,
                description: newsDesc,
                date: new Date(newsDate),
            });
        });

        // 4. Запись в файл
        const publicDir = path.join(process.cwd(), 'public');
        if (!fs.existsSync(publicDir)) {
            fs.mkdirSync(publicDir);
        }
        fs.writeFileSync(path.join(publicDir, 'rss.xml'), feed.rss2());
        console.log('✅ RSS Feed успешно сгенерирован в public/rss.xml');

    } catch (error) {
        console.error('❌ Ошибка при генерации RSS:', error);
    }
}

generateRss();