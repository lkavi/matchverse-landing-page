import React, { useEffect, useRef, useState } from 'react';

export const Timeline = ({ data }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current && ref.current) {
        const timelineRect = ref.current.getBoundingClientRect();
        const containerRect = containerRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const startScrollAt = containerRect.top + window.scrollY - windowHeight * 0.6;
        const endScrollAt = startScrollAt + timelineRect.height;
        const currentScroll = window.scrollY;
        const scrollRange = endScrollAt - startScrollAt;
        const rawProgress = (currentScroll - startScrollAt) / scrollRange;
        const progress = Math.max(0, Math.min(1, rawProgress));
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <div className="relative w-full bg-black bg-[radial-gradient(rgba(178,255,95,0.2)_1px,transparent_1.5px)] [background-size:16px_16px]" ref={containerRef}>
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="relative z-10 max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4 text-neutral-200 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-400 font-semibold max-w-4xl mx-auto">
          Our Innovation Journey
        </h2>
        <p className="text-neutral-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          From a shared vision to a transformative project, our team has been crafting this solution since September 2024. Follow our collaborative journey of innovation and development.
        </p>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div key={index} className="flex justify-start pt-10 md:pt-40 md:gap-10">
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-neutral-800 flex items-center justify-center">
                <div
                  className={`h-4 w-4 rounded-full transition-colors duration-300 ${
                    scrollProgress * data.length > index
                      ? 'bg-green-400 border-green-500'
                      : 'bg-neutral-700 border-neutral-600'
                  } border p-2`}
                />
              </div>
              <h3 className="hidden md:block text-xl md:text-5xl font-bold text-neutral-200 md:pl-20">
                {item.title}
              </h3>
            </div>
            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-200">
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}

        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <div
            style={{
              height: height * scrollProgress + "px",
              opacity: Math.min(1, scrollProgress * 10),
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-green-400 via-green-300 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};