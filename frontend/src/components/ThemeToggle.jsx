import { Moon, Sun } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { cn } from '../lib/utils'

const ThemeToggle = () => {
    const [isDarkmode,setDarkMode] =useState(false)
    useEffect(()=>{
        const storedTheme=localStorage.getItem("theme")
        if(storedTheme==="dark"){
            setDarkMode(true)
            document.documentElement.classList.add("dark")
        }else{
            setDarkMode(false)
            document.documentElement.classList.remove("dark")
        }
    },[])
    const toggeltheme =()=>{
        if(isDarkmode){
            document.documentElement.classList.remove("dark")
            localStorage.setItem("theme","light")
            setDarkMode(false)
        }else{
            document.documentElement.classList.add("dark")
            localStorage.setItem("theme","dark")
            setDarkMode(true)
        }
    }
  return (
    <button onClick={toggeltheme} className={cn("fixed  top-5 right-1 z-50 p-2 rounded-full transition-colors duration-300","focus:outline-hidden")}>
        {
            isDarkmode ? <Sun className='h-6 w-6 text-yellow-300 '/>:<Moon className='h-6 w-6 text-blue-400 '/>
        }

    </button>
  )
}

export default ThemeToggle
