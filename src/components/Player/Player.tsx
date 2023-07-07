import React, { useEffect, useState } from 'react';
const audioElement = new Audio("https://res.cloudinary.com/dhga15zq8/video/upload/v1688710673/EDDYMUGRE/sound_vroxa2.mp3");

export const Player = () => {
  const [firstPlay, setFirstPlay] = useState(false);
  const [play, setPlay] = useState(false);

  const playToggle = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    e.preventDefault();
    if (!firstPlay) {
      setFirstPlay(true);
      audioElement.play();
      setTimeout(function () {
        setPlay(true);
      }, 1300);
    } else {
      if (play) {
        setPlay(false);
        audioElement.pause();
      } else {
        setPlay(true);
        audioElement.play();
      }
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 10) {
        if (!firstPlay) {
          setFirstPlay(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Limpieza del evento al desmontar el componente
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='player center'>
      <img onClick={e => playToggle(e)} className={(firstPlay ? "playerSmall" : "") + ' play' + (play ? ' hidde' : "")} id='play' src='https://res.cloudinary.com/dhga15zq8/image/upload/v1688743593/EDDYMUGRE/play_oevcp5.png'></img>
      <img onClick={e => playToggle(e)} className={'pause' + (play == false ? ' hidde' : "")} id='pause' src='https://res.cloudinary.com/dhga15zq8/image/upload/v1688743593/EDDYMUGRE/pause_rz9mab.png'></img>
    </div>
  );
};
