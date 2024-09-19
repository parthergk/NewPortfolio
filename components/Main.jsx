import { useRef, useEffect, useState } from 'react';
import Services from './Services';

const Main = () => {
  const smoothScroll = useRef(null);
  const skewScrollRef = useRef([]); // Array of refs for each section
  const animationFrameId = useRef(null);
  const [windowWidth, setWindowWidth] = useState(null);

  const skewConfigs = {
    ease: 0.1,
    current: 0,
    previous: 0,
    rounded: 0,
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth);

      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  const skewScrolling = () => {
    if (windowWidth) {
      skewConfigs.current = window.scrollY;
      skewConfigs.previous += (skewConfigs.current - skewConfigs.previous) * skewConfigs.ease;
      skewConfigs.rounded = Math.round(skewConfigs.previous * 100) / 100;

      const difference = skewConfigs.current - skewConfigs.rounded;
      const acceleration = difference / windowWidth;
      const velocity = +acceleration;
      const skew = velocity * 7.5;

      const smoothScrollEl = smoothScroll.current;
      
      if (smoothScroll.current) {
        smoothScrollEl.style.transform = `translate3d(0, -${skewConfigs.rounded}px, 0)`;
      }

      // Apply skew to each section individually
      skewScrollRef.current.forEach((ref) => {
        if (ref) {
          ref.style.transform = `skewY(${skew}deg)`;
        }
      });

      animationFrameId.current = requestAnimationFrame(skewScrolling);
    }
  };

  useEffect(() => {
    animationFrameId.current = requestAnimationFrame(skewScrolling);

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [windowWidth]);

  const services = [
    {
      title: "Web design",
      description: "Visually stunning web designs that captivate your audience by blending your brand voice and customer needs.",
    },
    {
      title: "Development",
      description: "Get custom web development solutions that are tailored to your specifications, designed to deliver a flawless user experience.",
    }
  ];

  return (
    <main className="w-full h-full px-3 z-0">
      <div ref={smoothScroll} className="h-screen will-change-transform">
        <div className="pt-[470vh] pb-[400vh]">
          <section ref={(el) => (skewScrollRef.current[0] = el)} id="Service" className="will-change-transform pt-36 pb-70vh bg-[#343434]">
            <h1 className="text-[80px] font-semibold mb-10">How I Can Help</h1>
            {
              services.map((service) => (
                <Services key={service.title} service={service} />
              ))
            }
          </section>

          <section ref={(el) => (skewScrollRef.current[1] = el)} id="Project" className="will-change-transform pt-36 pb-70vh bg-[#343434]">
            <h1 className="text-[80px] font-semibold mb-10">Featured Projects</h1>
          </section>

          <section ref={(el) => (skewScrollRef.current[2] = el)} id="About" className="will-change-transform pt-36 pb-70vh bg-[#343434]">
            <h1 className="text-[80px] font-semibold mb-10">Who I Am</h1>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Main;
