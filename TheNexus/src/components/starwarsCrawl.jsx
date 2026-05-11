import { useEffect, useState } from "react";
import "../styles/starwarsCrawl.css";

export default function Crawl() {
  // Controls whether the crawl overlay is visible
  const [isVisible, setIsVisible] = useState(true);

  // Function to hide the crawl
  const skipCrawl = () => {
    setIsVisible(false);
  };

  // Automatically hide the crawl after 35 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      skipCrawl();
    }, 35000);

    // Cleanup function
    return () => clearTimeout(timer);
  }, []);

  // If not visible, render nothing
  if (!isVisible) return null;

  return (
    <div id="starwars-crawl-overlay">
      {/* Buttons */}
      <div className="starwars-actions">
        <a href="/portfolio">unprofessional</a>
        <button onClick={skipCrawl}>skip coz im boring</button>
      </div>

      {/* Black fade at the top */}
      <div className="sw-fade"></div>

      {/* Crawl container */}
      <div className="start-crawl-container">
        <div className="sw-crawl-text">
          <div className="title">
            <p>Episode I</p>
            <h1>THE NEXUS</h1>
          </div>

          <p>
            It is a period of intellectual curiosity. A lone student, striking
            from a hidden desk, has begun her journey to uncover the universe's
            ultimate secrets.
          </p>

          <p>
            During the battle for knowledge, Prachi explores the profound realms
            of theoretical physics, astrophysics, cosmology, and the
            complementary geek shit that comes with it.
          </p>

          <p>
            Pursued by the universe's infinite mysteries, she races home aboard
            her starship, custodian of the stolen knowledge that can decipher
            the cosmos and restore harmony to the galaxy....
          </p>
        </div>
      </div>
    </div>
  );
}