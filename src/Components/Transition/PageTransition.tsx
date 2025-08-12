import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

const PageTransition = ({ children, locationKey }: { children: React.ReactNode; locationKey: string }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const animationRef = useRef<GSAPTimeline | null>(null);

  const [displayedChildren, setDisplayedChildren] = useState(children);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const prevLocationKey = useRef(locationKey);

  useEffect(() => {
    if (locationKey === prevLocationKey.current) return; // No change

    const el = containerRef.current;
    if (!el) return;

    const bg = el.querySelector("#fade-bg");
    const content = el.querySelector("#page-content");

    if (!bg || !content) return;

    setIsTransitioning(true);

    if (animationRef.current) animationRef.current.kill();

    const tl = gsap.timeline({
      onComplete: () => {
        setDisplayedChildren(children);
        setIsTransitioning(false);

        if (animationRef.current) animationRef.current.kill();

        animationRef.current = gsap.timeline();
        animationRef.current
          .set(content, { opacity: 0, y: 40 })
          .set(bg, { opacity: 0 })
          .to(content, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out",
          })
          .to(
            bg,
            {
              opacity: 0.15,
              duration: 0.8,
              ease: "power2.out",
            },
            "-=0.3"
          );
      },
    });

    tl.to(content, {
      opacity: 0,
      y: 40,
      duration: 0.5,
      ease: "power3.in",
    }).to(
      bg,
      {
        opacity: 0,
        duration: 0.5,
        ease: "power2.in",
      },
      "-=0.5"
    );

    prevLocationKey.current = locationKey;

    return () => {
      if (animationRef.current) {
        animationRef.current.kill();
        animationRef.current = null;
      }
    };
  }, [locationKey, children]);

  return (
    <div
      ref={containerRef}
      style={{ position: "relative", overflow: "hidden" }}
      aria-busy={isTransitioning}
    >
      <div
        id="fade-bg"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0,
          zIndex: 0,
          pointerEvents: "none",
        }}
      />
      <div id="page-content" style={{ position: "relative", zIndex: 1 }}>
        {displayedChildren}
      </div>
    </div>
  );
};

export default PageTransition