"use client";
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { Timeline } from 'react-gsap';

gsap.registerPlugin(ScrollTrigger);

const ProgressBar = () => {
  useEffect(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".height-gain",
        start: "top 0%",
        end: "bottom 100%",
        scrub: true,
      }
    });

    timeline.to('.progress-bar', {
      duration: 2,
      width: '100%',
      ease: 'power2.inOut',
      backgroundColor: 'red'
    });
  }, []);

  return (
    <Timeline >
      <div className="progress-bar"></div>
    </Timeline>
  );
};

export default ProgressBar;
