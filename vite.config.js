import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import Sitemap from 'vite-plugin-sitemap';

async function getDynamicRoutes() {
  const API_URL = 'https://sarvina-production.up.railway.app/api/news';

  try {
    const response = await fetch(API_URL);
    const newsData = await response.json();

    let postsArray = [];
    if (Array.isArray(newsData)) {
      postsArray = newsData;
    }
    else if (newsData && typeof newsData === 'object') {
      postsArray = newsData.news || newsData.data || newsData.posts || [];
    }

    if (!Array.isArray(postsArray)) {
      console.warn('Предупреждение: API вернул данные, но массив новостей не найден.', newsData);
      return [];
    }

    const newsRoutes = postsArray.map(post => `/news/${post.id}`);
    console.log(`Успешно добавлено ${newsRoutes.length} новостей в Sitemap!`);
    return newsRoutes;

  } catch (error) {
    console.error('Ошибка при получении новостей для Sitemap:', error);
    return [];
  }
}

export default defineConfig(async () => {
  const newsRoutes = await getDynamicRoutes();

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
    server: {
      headers: {
        'Content-Security-Policy-Report-Only':
          "default-src 'self'; " +
          "script-src 'self' 'unsafe-eval' 'sha256-Z2/iFzh9VMlVkEOar1f/oSHWwQk3ve1qk/C2WdsC4Xk=' https://www.google-analytics.com; " +
          "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; " +
          "font-src 'self' https://fonts.gstatic.com; " +
          "media-src 'self' https://*.public.blob.vercel-storage.com; " +  // ← ЭТА СТРОКА
          "connect-src 'self' https://sarvina-production.up.railway.app ws://localhost:* http://localhost:*; " +
          "img-src 'self' data: https://sarvina-production.up.railway.app *; " +
          "frame-src 'self' https://yandex.uz https://*.yandex.uz;"
      },
      proxy: {
        '/api': {
          target: 'https://sarvina-production.up.railway.app',
          changeOrigin: true,
          secure: false,
        },
      },
    },

    plugins: [
      react({ fastRefresh: true }),
      tailwindcss(),
      Sitemap({
        hostname: 'https://benkov-website.vercel.app',
        dynamicRoutes: [...staticRoutes, ...newsRoutes],
        generateRobotsTxt: false,
      }),
      ViteImageOptimizer({
        test: /\.(jpe?g|png|gif|tiff|webp|svg)$/i,
        exclude: [
          'Entrance',      // уже сжата вручную
          'Paint3',        // уже сжата вручную  
          'image38',       // уже сжата вручную
          'Yard',          // уже сжата вручную
          'image37'        // уже сжата вручную
        ],
        webp: { quality: 75 },
        png: { quality: 75, compressionLevel: 9 },
        jpeg: { quality: 75, progressive: true },
        svg: { multipass: true },
      }),
      VitePWA({
        registerType: 'autoUpdate',
        workbox: {
          globPatterns: ['**/*.{js,css,html,ico,png,svg,jpg,jpeg,webmanifest,webp}'],
          maximumFileSizeToCacheInBytes: 5 * 1024 * 1024,
          runtimeCaching: [
            {
              urlPattern: /\.(?:png|jpg|jpeg|svg|gif|webp)$/,
              handler: 'CacheFirst',
              options: {
                cacheName: 'images',
                expiration: {
                  maxEntries: 60,
                  maxAgeSeconds: 30 * 24 * 60 * 60,
                },
              },
            },
            {
              urlPattern: /\.(?:js|css)$/,
              handler: 'StaleWhileRevalidate',
              options: {
                cacheName: 'static-resources',
                expiration: {
                  maxEntries: 50,
                  maxAgeSeconds: 24 * 60 * 60,
                },
              },
            },
            {
              urlPattern: /^https:\/\/sarvina-production\.up\.railway\.app\/api\/news/,
              handler: 'NetworkFirst',
              options: {
                cacheName: 'api-cache',
                expiration: {
                  maxEntries: 20,
                  maxAgeSeconds: 60 * 60,
                },
              },
            },
          ],
        },
        manifest: {
          name: 'Республиканская специализированная художественная школа имени П. Бенькова',
          short_name: 'Школа Бенькова',
          description: 'Официальный сайт Художественной Школы имени П. Бенькова в Ташкенте',
          theme_color: '#0E1A2B',
          background_color: '#ffffff',
          display: 'standalone',
          orientation: 'portrait',
          start_url: '/',
          scope: '/',
          icons: [
            {
              src: 'pwa-192x192.webp',
              sizes: '192x192',
              type: 'image/webp',
              purpose: 'any maskable'
            },
            {
              src: 'pwa-512x512.webp',
              sizes: '512x512',
              type: 'image/webp',
              purpose: 'any maskable'
            }
          ]
        }
      })
    ],

    build: {
      minify: 'esbuild',
      target: 'es2020',
      reportCompressedSize: true,
      chunkSizeWarningLimit: 500,
      sourcemap: false,
      cssCodeSplit: true,
      cssMinify: true,

      rollupOptions: {
        output: {
          manualChunks: (id) => {
            if (id.includes('node_modules')) {
              if (id.includes('react-dom') || id.includes('react-router-dom')) {
                return 'vendor-react';
              }
              if (id.includes('framer-motion')) {
                return 'vendor-framer';
              }
              if (id.includes('swiper')) {
                return 'vendor-swiper';
              }
              if (id.includes('i18next')) {
                return 'vendor-i18n';
              }
              return 'vendor';
            }
          },
          chunkFileNames: 'assets/js/[name]-[hash].js',
          entryFileNames: 'assets/js/[name]-[hash].js',
          assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
        },
      },
    },

    optimizeDeps: {
      include: [
        'react',
        'react-dom',
        'react-router-dom',
        'framer-motion',
        'axios',
        'i18next',
        'react-i18next'
      ],
    },

    css: {
      devSourcemap: false,
    },
  };
});