import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import Sitemap from 'vite-plugin-sitemap';

// --- Безопасное подключение установленного пакета для ES-модулей ---
const languages = ['/uz', '/ru', '/en'];
// ------------------------------------------------------------------

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

    const newsRoutes = postsArray.map(post => `/news/${post._id}`);
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
    '/adminNews',
    '/academic',
    '/benkov'
  ];

  const dynamicRoutes = await getDynamicRoutes(); // Твои пути типа /news/123

  // Генерируем массив всех комбинаций
  const allRoutes = [];
  staticRoutes.forEach(route => {
    languages.forEach(lang => {
      allRoutes.push(`${lang}${route === '/' ? '' : route}`);
    });
  });

  // Добавляем новости для каждого языка
  dynamicRoutes.forEach(route => {
    languages.forEach(lang => {
      allRoutes.push(`${lang}${route}`);
    });
  });

  return {
    server: {
      // headers: {
      //   'Content-Security-Policy-Report-Only':
      //     "default-src 'self'; " +
      //     "script-src 'self' 'unsafe-eval' 'sha256-Z2/iFzh9VMlVkEOar1f/oSHWwQk3ve1qk/C2WdsC4Xk=' https://www.google-analytics.com; " +
      //     "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; " +
      //     "font-src 'self' https://fonts.gstatic.com; " +
      //     "connect-src 'self' https://sarvina-production.up.railway.app ws://localhost:* http://localhost:*; " +
      //     "img-src 'self' data: https://sarvina-production.up.railway.app *; " +
      //     "frame-src 'self' https://yandex.uz https://*.yandex.uz;"
      // },
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
      // Defer registerSW.js and manifest.webmanifest to prevent critical request chaining (runs after PWA plugin)
      {
        name: 'defer-register-sw-and-manifest',
        enforce: 'post',
        closeBundle: {
          sequential: true,
          async handler() {
            const { readFileSync, writeFileSync, readdirSync, statSync } = await import('fs');
            const { join } = await import('path');

            function processHtmlFiles(dir) {
              try {
                const files = readdirSync(dir);
                for (const file of files) {
                  const fullPath = join(dir, file);
                  if (statSync(fullPath).isDirectory()) {
                    processHtmlFiles(fullPath);
                  } else if (file.endsWith('.html')) {
                    let html = readFileSync(fullPath, 'utf-8');
                    let modified = false;

                    // Remove blocking manifest link from head and inject non-blocking loader
                    if (html.includes('<link rel="manifest" href="/manifest.webmanifest">')) {
                      html = html.replace(/<link rel="manifest" href="\/manifest\.webmanifest">/g, '');
                      html = html.replace(
                        '</head>',
                        '<script>window.addEventListener("load",function(){var l=document.createElement("link");l.rel="manifest";l.href="/manifest.webmanifest";document.head.appendChild(l);});</script></head>'
                      );
                      modified = true;
                    }

                    // Defer registerSW.js
                    if (html.includes('id="vite-plugin-pwa:register-sw"')) {
                      const updated = html.replace(
                        /(<script id="vite-plugin-pwa:register-sw" src="\/registerSW\.js")>/g,
                        '$1 defer>'
                      );
                      if (updated !== html) {
                        html = updated;
                        modified = true;
                      }
                    }

                    if (modified) {
                      writeFileSync(fullPath, html, 'utf-8');
                    }
                  }
                }
              } catch (e) {
                console.error('Error processing HTML files in defer plugin:', e);
              }
            }

            processHtmlFiles('dist');
          }
        }
      },
      Sitemap({
        hostname: 'https://benkov-website.vercel.app',
        dynamicRoutes: allRoutes, // Передаем общий массив роутов
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
      chunkSizeWarningLimit: 800,
      sourcemap: false,
      cssCodeSplit: true,
      cssMinify: true,
      modulePreload: {
        polyfill: false,
      },

      rollupOptions: {
        output: {
          manualChunks: (id) => {
            if (id.includes('node_modules')) {
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