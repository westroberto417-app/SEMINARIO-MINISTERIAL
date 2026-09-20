import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { ProgressProvider } from './context/ProgressContext';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import LevelPage from './pages/LevelPage';
import LessonPage from './pages/LessonPage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  return (
    <BrowserRouter>
      <ProgressProvider>
        <ScrollToTop />
        <div className="flex min-h-screen flex-col bg-[#dfe7f2] text-slate-900">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/nivel/:id" element={<LevelPage />} />
              <Route path="/nivel/:id/leccion/:leccionId" element={<LessonPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
        <SpeedInsights />
      </ProgressProvider>
    </BrowserRouter>
  );
}
