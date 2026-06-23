import React, { lazy, Suspense, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route, useLocation, useParams, Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './i18n';
import { ROUTES } from './paths'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
const NewsSection = lazy(() => import('./components/NewsSection'));
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Achievments = lazy(() => import('./pages/Achievements'));
const Conditions = lazy(() => import('./pages/Conditions'));
const Contacts = lazy(() => import('./pages/Contacts'));
const Documents = lazy(() => import('./pages/Documents'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Infrastructure = lazy(() => import('./pages/Infrastructure'));
const Management = lazy(() => import('./pages/Management'));
const StudyPlan = lazy(() => import('./pages/StudyPlan'));
const StudyDetail = lazy(() => import('./pages/StudyDetail'));
const Directions = lazy(() => import('./pages/Directions'));
const AdminNews = lazy(() => import('./pages/AdminNews'));
const NewsDetail = lazy(() => import('./pages/NewsDetail'));
const Login = lazy(() => import('./pages/Login'));
const NewsList = lazy(() => import('./pages/NewsList'));
const Director = lazy(() => import('./pages/Director'));
const Deputy = lazy(() => import('./pages/Deputy'));
const DirectionsDetail = lazy(() => import('./pages/DirectionsDetail'));
const Schedule = lazy(() => import('./pages/Schedule'));
const FAQ = lazy(() => import('./pages/FAQ'));
import PageLoader from './components/PageLoader';
import ScrollProgress from './components/ScrollProgress';
import BackToTop from './components/BackToTop';
import NotFound from './components/NotFound';
import ErrorBoundary from './components/ErrorBoundary';
import Academic from './pages/Academic';
import Benkov from './pages/Benkov';

const App = () => {
  const location = useLocation();
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.lang = i18n.language;

    const ogLocale = document.querySelector('meta[property="og:locale"]');
    if (ogLocale) {
      if (i18n.language === 'ru') ogLocale.setAttribute('content', 'ru_RU');
      else if (i18n.language === 'uz') ogLocale.setAttribute('content', 'uz_UZ');
      else ogLocale.setAttribute('content', 'en_US');
    }
  }, [i18n.language]);
  return (
    <div>
      <ErrorBoundary>
        <ScrollToTop />
        <ScrollProgress />
        <Navbar />
        <main>
          <Suspense fallback={<PageLoader />}>
            <AnimatePresence mode="wait">
              <Routes location={location} key={location.pathname}>

                {/* =========================================================
      1. ДЕФОЛТНЫЙ БЛОК (РУССКИЙ ЯЗЫК — ССЫЛКИ БЕЗ ПРЕФИКСОВ)
     ========================================================= */}
                <Route path="/" element={<Home />} />
                <Route path="/admin" element={<AdminNews />} />
                <Route path="/news/:id" element={<NewsDetail />} />
                <Route path="/login" element={<Login />} />
                <Route path={ROUTES.ABOUT} element={<About />} />
                <Route path={ROUTES.DIRECTIONS} element={<Directions />} />
                <Route path={`${ROUTES.DIRECTIONS}/:id`} element={<DirectionsDetail />} />
                <Route path={ROUTES.ACHIEVEMENTS} element={<Achievments />} />
                <Route path={ROUTES.CONDITIONS} element={<Conditions />} />
                <Route path={ROUTES.CONTACTS} element={<Contacts />} />
                <Route path={ROUTES.DOCUMENTS} element={<Documents />} />
                <Route path={ROUTES.GALLERY} element={<Gallery />} />
                <Route path={ROUTES.INFRASTRUCTURE} element={<Infrastructure />} />
                <Route path={ROUTES.MANAGEMENT} element={<Management />} />
                <Route path={ROUTES.STUDYPLAN} element={<StudyPlan />} />
                <Route path={ROUTES.SCHEDULE} element={<Schedule />} />
                <Route path={ROUTES.FAQ} element={<FAQ />} />
                <Route path={`${ROUTES.STUDYPLAN}/:id`} element={<StudyDetail />} />
                <Route path={ROUTES.NEWSSECTION} element={<NewsSection />} />
                <Route path={ROUTES.NEWSLIST} element={<NewsList />} />
                <Route path={ROUTES.DIRECTOR} element={<Director />} />
                <Route path="/management/deputy/:id" element={<Deputy />} />
                <Route path={ROUTES.ACADEMIC} element={<Academic />} />
                <Route path={ROUTES.BENKOV} element={<Benkov />} />

                {/* =========================================================
      2. УЗБЕКСКИЙ БЛОК (ССЫЛКИ С ПРЕФИКСОМ /uz)
     ========================================================= */}
                <Route path="/uz" element={<Home />} />
                <Route path="/uz/admin" element={<AdminNews />} />
                <Route path="/uz/news/:id" element={<NewsDetail />} />
                <Route path="/uz/login" element={<Login />} />
                <Route path={`/uz${ROUTES.ABOUT}`} element={<About />} />
                <Route path={`/uz${ROUTES.DIRECTIONS}`} element={<Directions />} />
                <Route path={`/uz${ROUTES.DIRECTIONS}/:id`} element={<DirectionsDetail />} />
                <Route path={`/uz${ROUTES.ACHIEVEMENTS}`} element={<Achievments />} />
                <Route path={`/uz${ROUTES.CONDITIONS}`} element={<Conditions />} />
                <Route path={`/uz${ROUTES.CONTACTS}`} element={<Contacts />} />
                <Route path={`/uz${ROUTES.DOCUMENTS}`} element={<Documents />} />
                <Route path={`/uz${ROUTES.GALLERY}`} element={<Gallery />} />
                <Route path={`/uz${ROUTES.INFRASTRUCTURE}`} element={<Infrastructure />} />
                <Route path={`/uz${ROUTES.MANAGEMENT}`} element={<Management />} />
                <Route path={`/uz${ROUTES.STUDYPLAN}`} element={<StudyPlan />} />
                <Route path={`/uz${ROUTES.SCHEDULE}`} element={<Schedule />} />
                <Route path={`/uz${ROUTES.FAQ}`} element={<FAQ />} />
                <Route path={`/uz${ROUTES.STUDYPLAN}/:id`} element={<StudyDetail />} />
                <Route path={`/uz${ROUTES.NEWSSECTION}`} element={<NewsSection />} />
                <Route path={`/uz${ROUTES.NEWSLIST}`} element={<NewsList />} />
                <Route path={`/uz${ROUTES.DIRECTOR}`} element={<Director />} />
                <Route path="/uz/management/deputy/:id" element={<Deputy />} />
                <Route path={`/uz${ROUTES.ACADEMIC}`} element={<Academic />} />
                <Route path={`/uz${ROUTES.BENKOV}`} element={<Benkov />} />

                {/* =========================================================
      3. АНГЛИЙСКИЙ БЛОК (ССЫЛКИ С ПРЕФИКСОМ /en)
     ========================================================= */}
                <Route path="/en" element={<Home />} />
                <Route path="/en/admin" element={<AdminNews />} />
                <Route path="/en/news/:id" element={<NewsDetail />} />
                <Route path="/en/login" element={<Login />} />
                <Route path={`/en${ROUTES.ABOUT}`} element={<About />} />
                <Route path={`/en${ROUTES.DIRECTIONS}`} element={<Directions />} />
                <Route path={`/en${ROUTES.DIRECTIONS}/:id`} element={<DirectionsDetail />} />
                <Route path={`/en${ROUTES.ACHIEVEMENTS}`} element={<Achievments />} />
                <Route path={`/en${ROUTES.CONDITIONS}`} element={<Conditions />} />
                <Route path={`/en${ROUTES.CONTACTS}`} element={<Contacts />} />
                <Route path={`/en${ROUTES.DOCUMENTS}`} element={<Documents />} />
                <Route path={`/en${ROUTES.GALLERY}`} element={<Gallery />} />
                <Route path={`/en${ROUTES.INFRASTRUCTURE}`} element={<Infrastructure />} />
                <Route path={`/en${ROUTES.MANAGEMENT}`} element={<Management />} />
                <Route path={`/en${ROUTES.STUDYPLAN}`} element={<StudyPlan />} />
                <Route path={`/en${ROUTES.SCHEDULE}`} element={<Schedule />} />
                <Route path={`/en${ROUTES.FAQ}`} element={<FAQ />} />
                <Route path={`/en${ROUTES.STUDYPLAN}/:id`} element={<StudyDetail />} />
                <Route path={`/en${ROUTES.NEWSSECTION}`} element={<NewsSection />} />
                <Route path={`/en${ROUTES.NEWSLIST}`} element={<NewsList />} />
                <Route path={`/en${ROUTES.DIRECTOR}`} element={<Director />} />
                <Route path="/en/management/deputy/:id" element={<Deputy />} />
                <Route path={`/en${ROUTES.ACADEMIC}`} element={<Academic />} />
                <Route path={`/en${ROUTES.BENKOV}`} element={<Benkov />} />

                {/* Страница 404 — сработает, только если вообще ничего не совпало */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </AnimatePresence>
          </Suspense>
        </main>

        <Footer />
        <BackToTop />
      </ErrorBoundary>
    </div>
  )
}

export default App