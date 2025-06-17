import React, { useState, useEffect } from 'react';
import loading from './../assets/loading-15146_512.gif';
import ThemeToggle from '../components/ThemeToggle';
import StarBackGround from '../components/StarBackGround';


const LoaderPage = () => {
  const [showText, setShowText] = useState(false);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const loaderTimer = setTimeout(() => {
      setShowLoader(false);   // Hide loader after 6 seconds
      setShowText(true);      // Show text after 6 seconds
    }, 6000);

    return () => clearTimeout(loaderTimer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white transition-all duration-1000">
      
      <StarBackGround/>
      {showLoader && (
        <img
          src={loading}
          alt="Loading..."
          className="w-[300px] h-[300px] object-contain mb-4"
        />
      )}

      {showText && (
        <h3 className="text-5xl font-semibold animate-fade-in mt-4">
          This is{' '}
          <span className="text-5xl text-gray-700 font-semibold animate-fade-in mt-4">
            @SANDEEP
          </span>
        </h3>
      )}
    </div>
  );
};

export default LoaderPage;
