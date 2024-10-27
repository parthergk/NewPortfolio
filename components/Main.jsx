import { useRef, useEffect, useState } from "react";
import Services from "./Services";
import Project from "./Project";
import Model from "./Model";
import About from "./About";
import ProjectMob from "./ProjectMob";
import {services, projectData} from "@/lib/data";

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
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);

      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  const skewScrolling = () => {
    skewConfigs.current = window.scrollY;
    skewConfigs.previous += (skewConfigs.current - skewConfigs.previous) * skewConfigs.ease;
    skewConfigs.rounded = Math.round(skewConfigs.previous * 100) / 100;

    const difference = skewConfigs.current - skewConfigs.rounded;
    const acceleration = difference / 500; // Use a fixed value instead of windowWidth
    const velocity = +acceleration;
    const skew = velocity * 7.5;

    const smoothScrollEl = smoothScroll.current;

    if (smoothScrollEl) {
      smoothScrollEl.style.transform = `translate3d(0, -${skewConfigs.rounded}px, 0)`;
    }

    // Apply skew to each section individually
    skewScrollRef.current.forEach((ref) => {
      if (ref) {
        ref.style.transform = `skewY(${skew}deg)`;
      }
    });

    animationFrameId.current = requestAnimationFrame(skewScrolling);
  };

  useEffect(() => {
    animationFrameId.current = requestAnimationFrame(skewScrolling);

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []); // No dependency on windowWidth here

  const [model, setModel] = useState({ active: false, index: 0 });
  return (
    <main className="w-full h-full px-3 z-0">
      <div ref={smoothScroll} className=" w-full h-screen will-change-transform">
        <div className="pt-[470vh] w-full">
          <section
            ref={(el) => (skewScrollRef.current[0] = el)}
            id="Service"
            className="will-change-transform pt-36 pb-70vh bg-main"
          >
            <h1 className=" text-center lg:text-left text-4.0 md:text-[80px] font-semibold mb-6 md:mb-10">
              How I Can Help
            </h1>
            {services.map((service) => (
              <Services key={service.title} service={service} />
            ))}
          </section>

          <section
            ref={(el) => (skewScrollRef.current[1] = el)}
            id="Project"
            className="will-change-transform pt-36 pb-70vh bg-main"
          >
            <h1 className=" text-center lg:text-left text-4.0 md:text-[80px] font-semibold mb-10">
              Featured Projects
            </h1>
            <div className="lg:pr-8">
              <div className="border-t h-1 border-gray-300 w-full"></div>

              {windowWidth > "1024" ? (
                <div className=" px-4 md:px-5 flex flex-col items-center justify-center">
                  {projectData.map((project, index) => {
                    return (
                      <Project
                        key={index}
                        index={index}
                        title={project.title}
                        href={project.href}
                        setModel={setModel}
                      />
                    );
                  })}
                  <Model model={model} projects={projectData} />
                </div>
              ) : (
                <div className=" px-4 md:px-5 pt-6 flex">
                  <div className=" w-full grid grid-cols-1 md:grid-cols-2 gap-4">
                    {projectData.map((project, index) => {
                      return <ProjectMob key={index} project={project} index={index} />;
                    })}
                  </div>
                </div>
              )}
            </div>
          </section>

          <section
            ref={(el) => (skewScrollRef.current[2] = el)}
            id="About"
            className="will-change-transform pt-36 pb-5 md:pb-10 bg-main"
          >
            <h1 className=" text-center lg:text-left text-4.0 md:text-[80px] font-semibold mb-10">
              Who I Am
            </h1>
            <About />
          </section>
        </div>
      </div>
    </main>
  );
};

export default Main;
