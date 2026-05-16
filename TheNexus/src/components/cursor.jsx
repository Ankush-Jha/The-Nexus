import { useEffect, useRef, useState } from "react";
import "../styles/cursor.css";

export default function Cursor() {
    const cursorRef = useRef(null);
    const trailRef = useRef(null);
    const [isClicking, setIsClicking] = useState(false);
    const [isHovering, setIsHovering] = useState(false);

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

            // Main saber follows instantly, rotated to be left-inclined
            cursor.style.transform = `translate(${mouseX}px, ${mouseY}px) rotate(-135deg)`;
        };

        const handleMouseDown = () => setIsClicking(true);
        const handleMouseUp = () => setIsClicking(false);

        const handleMouseOver = (e) => {
            const target = e.target;
            const style = window.getComputedStyle(target);
            if (style.cursor === "pointer" || target.tagName === "A" || target.tagName === "BUTTON") {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

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
        document.addEventListener("mouseover", handleMouseOver);

        // Hide default cursor
        document.body.style.cursor = "none";

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mousedown", handleMouseDown);
            document.removeEventListener("mouseup", handleMouseUp);
            document.removeEventListener("mouseover", handleMouseOver);
            document.body.style.cursor = "auto";
        };
    }, []);

    return (
        <>
            {/* Ambient glow trail */}
            <div
                ref={trailRef}
                className={`saber-trail ${isClicking ? "yellow" : "blue"} ${isHovering ? "hover" : ""}`}
            />

                {/* Lightsaber cursor */}
                <div
                    ref={cursorRef}
                    className={`lightsaber ${isClicking ? "yellow" : "blue"} ${isHovering ? "hover" : ""}`}
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