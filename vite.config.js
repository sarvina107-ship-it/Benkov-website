import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import Sitemap from 'vite-plugin-sitemap';


async function getDynamicRoutes() {
  const API_URL = 'https://sarvina-production.up.railway.app/api/news'; // Твой адрес API

  try {
    const response = await fetch(API_URL);
    const newsData = await response.json();

    // 1. Проверяем, если сервер СРАЗУ вернул чистый массив
    let postsArray = [];
    if (Array.isArray(newsData)) {
      postsArray = newsData;
    }
    // 2. Если вернулся объект, ищем массив внутри популярных ключей (news, data, posts)
    else if (newsData && typeof newsData === 'object') {
      postsArray = newsData.news || newsData.data || newsData.posts || [];
    }

    // Проверяем, нашли ли мы массив в итоге
    if (!Array.isArray(postsArray)) {
      console.warn('Предупреждение: API вернул данные, но массив новостей не найден.', newsData);
      return [];
    }

    // Формируем ссылки: /news/1, /news/2
    const newsRoutes = postsArray.map(post => `/news/${post.id}`);
    console.log(`Успешно добавлено ${newsRoutes.length} новостей в Sitemap!`);
    return newsRoutes;

  } catch (error) {
    console.error('Ошибка при получении новостей для Sitemap:', error);
    return [];
  }
}

export default defineConfig(async () => {
  // Получаем динамические пути перед началом сборки
  const newsRoutes = await getDynamicRoutes();

  // Все статичные страницы школы Бенькова
  const staticRoutes = [
    '/',
    '/about',
    '/achievements',
    '/contacts',
    '/directions',
    '/directionsdetail',
    '/documents',
    '/director',
    '/deputy',
    '/infrastructure',
    '/studyplan',
    '/studydetail',
    '/schedule',
    '/faq',
    '/management',
    '/gallery',
    '/conditions',
    '/newsSection',
    '/newsList',
    '/newsDetail',
    '/login',
    '/adminNews'
  ];

  return {
    plugins: [
      react(),
      tailwindcss(),

      // Автоматическая генерация карты сайта (Sitemap)
      Sitemap({
        hostname: 'https://benkov-website.vercel.app', // Укажи здесь реальный будущий домен школы
        dynamicRoutes: [
          ...staticRoutes,
          ...newsRoutes // Объединяем статичные страницы и новости из API
        ],
      }),

      // Оптимизатор картинок (сохранили все твои настройки)
      ViteImageOptimizer({
        test: /\.(jpe?g|png|gif|tiff|webp|svg)$/i,
        webp: {
          quality: 80,
        },
        png: {
          quality: 80,
        },
        jpeg: {
          quality: 80,
        },
      }),

      // Настройка PWA (сохранили полностью твой манифест и кэш)
      VitePWA({
        registerType: 'autoUpdate',
        workbox: {
          globPatterns: ['**/*.{js,css,html,ico,png,svg,jpg,jpeg,webmanifest}'],
          maximumFileSizeToCacheInBytes: 5 * 1024 * 1024, // 5 МБ
        },
        manifest: {
          name: 'Республиканская специализированная художественная школа имени П. Бенькова',
          short_name: 'Школа Бенькова',
          description: 'Официальный сайт Художественной Школы имени П. Бенькова в Ташкенте',
          theme_color: '#0E1A2B',
          background_color: '#ffff',
          display: 'standalone',
          orientation: 'portrait',
          start_url: '/',
          icons: [
            {
              src: 'pwa-192x192.png',
              sizes: '192x192',
              type: 'image/png'
            },
            {
              src: 'pwa-512x512.png',
              sizes: '512x512',
              type: 'image/png'
            }
          ]
        }
      })
    ],
    build: {
      rollupOptions: {
        output: {
          manualChunks(id) {
            // Если библиотека лежит в node_modules, выносим её в отдельный чанк vendor
            if (id.includes('node_modules')) {
              return 'vendor';
            }
          }
        }
      }
    }
  };
});