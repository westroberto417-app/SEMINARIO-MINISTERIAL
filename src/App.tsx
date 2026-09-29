import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ProgressProvider } from './context/ProgressContext';
import { SpeechProvider } from './context/SpeechContext';
import { DonacionProvider } from './context/DonacionContext';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingCafecitoButton from './components/FloatingCafecitoButton';
import CafecitoModal from './components/CafecitoModal';
import HomePage from './pages/HomePage';
import LevelPage from './pages/LevelPage';
import LessonPage from './pages/LessonPage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  return (
    <BrowserRouter>
      <ProgressProvider>
        <SpeechProvider>
          <DonacionProvider>
            <ScrollToTop />
            <div className="flex min-h-screen flex-col bg-[#dfe7f2] text-slate-900 relative">
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
              <FloatingCafecitoButton />
              <CafecitoModal />
            </div>
          </DonacionProvider>
        </SpeechProvider>
      </ProgressProvider>
    </BrowserRouter>
  );
}
