import { useEffect, useRef, useState } from "react";
import "../styles/cursor.css";

export default function Cursor() {
    const cursorRef = useRef(null);
    const trailRef = useRef(null);
    const [isClicking, setIsClicking] = useState(false);

    useEffect(() => {
        const cursor = cursorRef.current;
        const trail = trailRef.current;

        let mouseX = 0;
        let mouseY = 0;

        let trailX = 0;
        let trailY = 0;

        const handleMouseMove = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;

            // Main saber follows instantly
            cursor.style.transform = `translate(${mouseX}px, ${mouseY}px) rotate(-35deg)`;
        };

        const handleMouseDown = () => setIsClicking(true);
        const handleMouseUp = () => setIsClicking(false);

        // Smooth trailing glow
        const animate = () => {
            trailX += (mouseX - trailX) * 0.15;
            trailY += (mouseY - trailY) * 0.15;

            trail.style.transform = `translate(${trailX}px, ${trailY}px)`;

            requestAnimationFrame(animate);
        };

        animate();

        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mousedown", handleMouseDown);
        document.addEventListener("mouseup", handleMouseUp);

        // Hide default cursor
        document.body.style.cursor = "none";

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mousedown", handleMouseDown);
            document.removeEventListener("mouseup", handleMouseUp);
            document.body.style.cursor = "auto";
        };
    }, []);

    return (
        <>
            {/* Ambient glow trail */}
            <div
                ref={trailRef}
                className={`saber-trail ${isClicking ? "yellow" : "blue"}`}
            />

                {/* Lightsaber cursor */}
                <div
                    ref={cursorRef}
                    className={`lightsaber ${isClicking ? "yellow" : "blue"}`}
                >
                    <div className="hilt">
                        <div className="hilt-detail" />
                        <div className="hilt-button" />
                    </div>
                <div className="blade" />
            </div>
        </>
    );
}