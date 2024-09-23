import { useRef, useEffect, useState } from "react";
import Services from "./Services";
import Project from "./Project";
import Model from "./Model";
import About from "./About";
import ProjectMob from "./ProjectMob";

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
    if (windowWidth) {
      skewConfigs.current = window.scrollY;
      skewConfigs.previous +=
        (skewConfigs.current - skewConfigs.previous) * skewConfigs.ease;
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
      description:
        "Visually stunning web designs that captivate your audience by blending your brand voice and customer needs.",
    },
    {
      title: "Development",
      description:
        "Get custom web development solutions that are tailored to your specifications, designed to deliver a flawless user experience.",
    },
  ];

  const projectData = [
    {
      title: "GoAssignr",
      src: "format_Services_Page.png",
      color: "#4F4F4F",
    },
    {
      title: "priject3",
      src: "home-item-6.jpg",
      color: "#D65A31",
    },
    {
      title: "priject4",
      src: "home-item-8.jpg",
      color: "#2A9D8F",
    },
  ];

  const [model, setModel] = useState({ active: false, index: 0 });
  return (
    <main className="w-full h-full px-3 z-0">
      <div
        ref={smoothScroll}
        className=" w-full h-screen will-change-transform"
      >
        <div className="pt-[470vh] w-full">
          <section
            ref={(el) => (skewScrollRef.current[0] = el)}
            id="Service"
            className="will-change-transform pt-36 pb-70vh bg-[#343434]"
          >
            <h1 className=" text-center lg:text-left text-4.0 md:text-[80px] font-semibold mb-10">
              How I Can Help
            </h1>
            {services.map((service) => (
              <Services key={service.title} service={service} />
            ))}
          </section>

          <section
            ref={(el) => (skewScrollRef.current[1] = el)}
            id="Project"
            className="will-change-transform pt-36 pb-70vh bg-[#343434]"
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
            className="will-change-transform pt-36 pb-5 md:pb-10 bg-[#343434]"
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
