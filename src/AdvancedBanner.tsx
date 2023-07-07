import { ParallaxBanner } from "react-scroll-parallax";
import { BannerLayer } from "react-scroll-parallax/dist/components/ParallaxBanner/types";

export const AdvancedBannerTop = () => {
  const video: BannerLayer = {
    translateY: [0, 50],
    opacity: [1, 0.5],
    scale: [1.05, 1, "easeOutCubic"],
    children: (
      <div className="inset center full-w">
        <video className="video" autoPlay muted loop id="video" playsInline>
            <source src="https://res.cloudinary.com/dhga15zq8/video/upload/v1688706206/EDDYMUGRE/EddyMugre-Eddystation01_jwrd59.mp4" type="video/mp4"></source>
            Your browser does not support HTML5 video.
        </video>
       </div>
    ),
    shouldAlwaysCompleteAnimation: true
  };
  const background: BannerLayer = {
    image:
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/105988/banner-background.jpg",
    translateY: [0, 50],
    opacity: [0.3, 0.3],
    scale: [1.05, 1, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true
  };

  const name: BannerLayer = {
    translateY: [-40, 60],
    scale: [1, 1.05, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <div className="inset center full-w">
        <h1 className="text-name">EDDY MUGRE</h1>
      </div>
    )
  };

  const fumate: BannerLayer = {
    translateY: [-19, 0],
    scale: [1, 1.05, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <div className="inset center full-w">
        <h1 className="text-fumate">FUMATE UN JAZZ</h1>
      </div>
    )
  };

  const cigarrete: BannerLayer = {
    translateY: [-6, 0],
    scale: [1, 1.05, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <div className="inset center full-w">
        <h1 className="text-cigarrete">THE CIGARRETE SP</h1>
      </div>
    )
  };

  const loops: BannerLayer = {
    translateY: [10, 0],
    scale: [1, 1.05, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <div className="inset center full-w">
        <h1 className="text-loops">EDDYLOOPS</h1>
      </div>
    )
  };


  const foreground: BannerLayer = {
    image:
      "https://res.cloudinary.com/dhga15zq8/image/upload/v1688705759/EDDYMUGRE/EDDYMUGRE_zxgi1u.png",
    translateY: [5, 15],
    scale: [1, 1.1, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true
  };


  const gradientOverlay: BannerLayer = {
    opacity: [0, 1, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: <div className="gradient inset" />
  };

  return (
    <ParallaxBanner
      layers={[video, background, name, fumate, cigarrete, loops, foreground, gradientOverlay]}
      className="full"
    />
  );
};
