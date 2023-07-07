import React, { useEffect, useState } from 'react';
import { ParallaxProvider } from "react-scroll-parallax";
import { AdvancedBannerTop } from "./AdvancedBanner";
import { Player } from "./components/Player/Player";
import { Events } from "./components/Events/Events"
import "./styles.css";

export default function App() {

/*  useEffect(() => {
    document.addEventListener('click', musicPlay);
    document.addEventListener('scroll', musicPlay);

  }, []);

  function musicPlay() {
    const audioElement = new Audio("https://res.cloudinary.com/dhga15zq8/video/upload/v1688710673/EDDYMUGRE/sound_vroxa2.mp3");
      audioElement.play();
      document.removeEventListener('click', musicPlay);
      document.removeEventListener('scroll', musicPlay);
  }
*/

  return (
    <ParallaxProvider>
      <div id='content' className='content'>
      <Player></Player>
        <div className='film'>
          <div className="effect">
            <div className="grain">
             
              <AdvancedBannerTop />
              <div className="center column">
               <div className='music-container'>
                  <h3 className='subtitles'>ESCUCHA MI MÚSICA</h3>
                  <img src='https://res.cloudinary.com/dhga15zq8/image/upload/v1688753981/EDDYMUGRE/youtube_wj4y03.png'></img>
                  <img src='https://res.cloudinary.com/dhga15zq8/image/upload/v1688753915/EDDYMUGRE/bc-bandcamp-logo_t4pm8a.png'></img>
                  <h3 className='subtitles'>SÍGUEME EN MIS REDES SOCIALES</h3>
                  <img src='https://res.cloudinary.com/dhga15zq8/image/upload/v1688753807/EDDYMUGRE/facebook-app-symbol_kvqmey.png'></img>
                  <img src='https://res.cloudinary.com/dhga15zq8/image/upload/v1688753807/EDDYMUGRE/tik-tok_e7sgyi.png'></img>
               </div>
                <div className='events-container'>
                  <Events></Events>
                </div>
                <div className='beats-container center column'>
                  <h3 className='subtitles drums-title'>Drumkit MPC2000 en venta.</h3>
                  <p className='text-info'>Drums capturados y cortados de vinilo casetes y baterías reales, grabados y exportados desde la AKAI MPC2000.</p>
                  <img className='venta' src='https://res.cloudinary.com/dhga15zq8/image/upload/v1688753256/EDDYMUGRE/venta-01_xolqfw.jpg'></img>
                  <p className='text-info'>Más de 400 sonidos.</p>
               </div>
               <div className='footer-container'>
                  <p className='text-footer'>© 2023 Sitio web desrrollado por Programandole | José Vargas.</p>
               </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ParallaxProvider>
  );
}
