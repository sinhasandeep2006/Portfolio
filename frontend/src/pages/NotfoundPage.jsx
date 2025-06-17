import React from 'react'
import notfound from '../assets/404 Error Page not Found with people connecting a plug.mp4'


const NotfoundPage = () => {
  return (
    <section className="w-full h-screen bg-background text-foreground flex items-center justify-center py-24 px-4 ">
      
      <div className="w-full py-24 px-4 max-w-4xl mx-auto">
       
        <video
          src={notfound}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-150 rounded-xl"
        />
      </div>
     
    </section>
  )
}

export default NotfoundPage
