import React, { lazy, Suspense } from 'react';
import { AnimatePresence } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
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

const App = () => {
  const location = useLocation();
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
                <Route path="*" element={<NotFound />} />
                <Route path={ROUTES.ACADEMIC} element={<Academic />} />
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