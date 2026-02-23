import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import Navbar from './components/Navbar';
import LoaderPage from './pages/LoaderPage';
import EducationalPage from './pages/EducationalPage';
import AboutPage from './pages/AboutPage';
import SkillPage from './pages/SkillPage';
import ProjectPage from './pages/ProjectPage';
import ErrorBoundary from './components/ErrorBoundary';
import NotfoundPage from './pages/NotfoundPage';

const App = () => {
  const [showLoader, setShowLoader] = useState(() => {
    // Only show loader on first load (not on route changes)
    return sessionStorage.getItem('loaderShown') ? false : true;
  });

  useEffect(() => {
    if (showLoader) {
      const timer = setTimeout(() => {
        setShowLoader(false);
        sessionStorage.setItem('loaderShown', 'true'); // So loader won't show again
      }, 8000);
      return () => clearTimeout(timer);
    }
  }, [showLoader]);

  if (showLoader) {
    return <LoaderPage />;
  }

  return (
    <>
      <Navbar />
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<HomePage />} />
          
          <Route path="*" element={<NotfoundPage />} />
        </Routes>
      </ErrorBoundary>
    </>
  );
};

export default App;
