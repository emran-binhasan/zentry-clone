'use client'

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger'
import AnimatedTitle from "./AnimatedTitle";
const About = () => {
    useGSAP( ()=> {
        const clipAnimation = gsap.timeline({
            scrollTrigger: {
                trigger:"#clip",
                start: 'center center',
                end: '+=500 center',
                scrub: 0.5,
                pin: true,
                pinSpacing:true,
            },
            
        })
        clipAnimation.to('.mask-clip-path',{
            clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%",
            width:'100vw',
            height:'100vh',
            borderRadius:0,
            

        })

    });

    gsap.registerPlugin(ScrollTrigger)
  return (
    <div id="about" className="main-h-screen w-screen">
      <div className="relative mb-8 mt-20 md:mt-36 flex-col items-center gap-5 flex">
        <h2 className="font-general uppercase md:text-[22px]">
          Welcome to Zentry
        </h2>
        <AnimatedTitle title="Disc<b>o</b>ver the world's <br />l<b>a</b>rgest shared adventure" containerClass="!text-black"/>
        
        <div className="about-subtext">
          <p>The Game of Games begins-y0ur life, now an epic MMORPG</p>

          <p>Zentry unites every player from countless games and platforms</p>
        </div>
        </div>
        <div className="h-dvh w-screen" id="clip">
          <div className="mask-clip-path about-image border shadow-2xl">
            <img
              src="img/about.webp"
              alt="background"
              className="absolute left-0 top-0 size-full object-cover"
            />
        </div>
      </div>
    </div>
  );
};

export default About;
