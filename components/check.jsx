import { useRef, useEffect } from 'react';
import { useSkewConfig } from '@/context/SkewConfigContext';
import Services from './Services';

const Main = () => {
  const smoothScroll = useRef(null);
  const skewScrollRef = useRef([]);
  const animationFrameId = useRef(null);
  
  // Use the skewConfigs from the context
  const { skewConfigs, setSkewConfigs } = useSkewConfig();

  useEffect(() => {
    const skewScrolling = () => {
      setSkewConfigs(prevConfigs => {
        const currentScrollY = window.scrollY;
        const newPrevious = prevConfigs.previous + (currentScrollY - prevConfigs.previous) * prevConfigs.ease;
        const rounded = Math.round(newPrevious * 100) / 100;
        return {
          ...prevConfigs,
          current: currentScrollY,
          previous: newPrevious,
          rounded,
        };
      });

      const smoothScrollEl = smoothScroll.current;
      if (smoothScrollEl) {
        smoothScrollEl.style.transform = `translate3d(0, -${skewConfigs.rounded}px, 0)`;
      }

      animationFrameId.current = requestAnimationFrame(skewScrolling);
    };

    animationFrameId.current = requestAnimationFrame(skewScrolling);

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [skewConfigs]);


  

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
