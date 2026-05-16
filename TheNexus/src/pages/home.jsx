import { useState } from "react";

import Navbar from "../components/navbar";
import AboutCard from "../components/aboutCard";
import Bullitin from "../components/bullitin";
import Quote from "../components/quote";
import PlanetOfTheDay from "../components/PlanetOfTheDay";
import Msg from "../components/msg";
import TheList from "../components/TheList";
import Footer from "../components/footer";
import Cursor from "../components/cursor";
import StarwarsCrawl from "../components/starwarsCrawl";

import Microblog from "../components/Microblog";
import Media from "../components/Media";

export default function Home() {
  const [showCrawl, setShowCrawl] = useState(true);

  return (
    <>
      <Cursor />

      {/* Star Wars Intro Crawl */}
      {showCrawl && <StarwarsCrawl onComplete={() => setShowCrawl(false)} />}

      {!showCrawl && (
        <>
          <Navbar />

          {/* Retro scrolling marquee */}
          <div className="retro-marquee">
            <span>
              ★ TRANSMISSION INCOMING ★ Welcome to The Nexus — a cosmic archive of physics, cosmology, code, and stories written in starlight ★ May the Force be with your equations ★ TRANSMISSION INCOMING ★ Welcome to The Nexus — a cosmic archive of physics, cosmology, code, and stories written in starlight ★
            </span>
          </div>

          <main className="home-page">
            {/* 3-Column Indieweb Grid */}
            <section className="nexus-grid">

              {/* LEFT SIDEBAR */}
              <div className="left-column">
                <AboutCard />
                <Quote />
                <Msg />
              </div>

              {/* CENTER MAIN */}
              <div className="center-column">
                <Bullitin />
                <PlanetOfTheDay />
                <Microblog />
              </div>

              {/* RIGHT SIDEBAR */}
              <aside className="right-column">
                <Media />
                <TheList />
              </aside>

            </section>
          </main>

          <Footer />
        </>
      )}
    </>
  );
}