import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import loading from "./../assets/loading-15146_512.gif"
import StarBackGround from "../components/StarBackGround"

const LoaderPage = () => {
  const [showText, setShowText] = useState(false)
  const [showLoader, setShowLoader] = useState(true)
  const [progress, setProgress] = useState(0)
  const [showSkip, setShowSkip] = useState(false)
  const navigate = useNavigate()

  // Progress animation
  useEffect(() => {
    if (progress < 100) {
      const interval = setInterval(() => {
        setProgress((prev) => prev + 2) 
      }, 100) 
      return () => clearInterval(interval)
    } else {
      navigate("/") // auto-go when finished
    }
  }, [progress, navigate])

  // Loader text toggle
  useEffect(() => {
    const loaderTimer = setTimeout(() => {
      setShowLoader(false)
      setShowText(true)
    }, 6000)

    return () => clearTimeout(loaderTimer)
  }, [])

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-transparent text-white relative transition-all duration-1000"
      onMouseEnter={() => setShowSkip(true)}
      onMouseLeave={() => setShowSkip(false)}
    >
      <StarBackGround />

      {showLoader && (
        <img
          src={loading}
          alt="Loading..."
          className="w-[300px] h-[300px] object-contain mb-4"
        />
      )}

      {showText && (
        <h3 className="text-5xl font-semibold animate-fade-in mt-4">
          This is{" "}
          <span className="text-5xl text-gray-700 font-semibold animate-fade-in mt-4">
            @SANDEEP
          </span>
        </h3>
      )}

      {/* Skip Button (only on hover) */}
      {showSkip && (
        <button
          onClick={() => navigate("/")}
          className="absolute bottom-10 right-5 bg-transparent text-black px-4 py-2 "
        >
          Skip
        </button>
      )}

      {/* Progress Line */}
      <div className="absolute bottom-0 left-0 w-full h-2 bg-gray-700">
        <div
          className="h-full bg-orange-500 transition-all"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  )
}

export default LoaderPage
