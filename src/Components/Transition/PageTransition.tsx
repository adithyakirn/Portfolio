import gsap from "gsap";
import type React from "react";
import { useEffect, useRef } from "react";

const PageTransition = ({ children }: { children: React.ReactNode }) => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const animationRef = useRef<GSAPTimeline | null>(null);

    useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const bg = el.querySelector("#fade-bg");
    const content = el.querySelector("#page-content");

    if (!bg || !content) return;

    if (animationRef.current) {
        animationRef.current.kill();
    }

    if (!el.contains(bg) || !el.contains(content)) return;

    // Delay to wait for DOM stability
    requestAnimationFrame(() => {
        gsap.set(content, { opacity: 0, y: 40 });
        gsap.set(bg, { opacity: 0 });

        const tl = gsap.timeline();
        animationRef.current = tl;

        tl.to(content, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out",
        }).to(bg, {
            opacity: 0.15,
            duration: 0.8,
            ease: "power2.out",
        }, "-=0.3");
    });

    return () => {
        if (animationRef.current) {
            animationRef.current.kill();
            animationRef.current = null;
        }
    };
}, [children]);

    return (
        <div ref={containerRef} style={{ position: "relative", overflow: "hidden" }}>
            <div id="fade-bg" style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                opacity: 0,
                zIndex: 0
            }} />
            <div id="page-content" style={{ position: "relative", zIndex: 1 }}>
                {children}
            </div>
        </div>
    );
};

export default PageTransition;