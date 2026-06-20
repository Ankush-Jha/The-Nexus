import { useState } from 'react'
import { motion } from 'motion/react'
import StarWarsCrawl from '../components/StarWarsCrawl.jsx'
import PlanetOfTheDay from '../components/PlanetOfTheDay.jsx'
import visionBoard from '../assets/Canva Project 2026.png'
import bookCover from '../assets/Spiral by Koji Suzuki.jpeg'

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] } },
}

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.34, 1.56, 0.64, 1] },
  },
}

const languages = [
  'English',
  'Hindi',
  'Italian (B1)',
  'High Valyrian',
  'Sanskrit (A1)',
]

export default function Home() {
  const [crawlDone, setCrawlDone] = useState(false)

  return (
    <>
      {!crawlDone && <StarWarsCrawl onComplete={() => setCrawlDone(true)} />}

      <motion.main
        className="page-wrapper"
        initial="hidden"
        animate="visible"
        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
        transition={{ duration: 0.4 }}
      >
        <div className="home-grid">
          {/* ── LEFT COL ── */}
          <div className="home-col">
            {/* About card */}
            <motion.section
              className="about-card glass-panel glass-panel--gold"
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
            >
              <h2>About Me</h2>
              <p>
                Hi folks! I&apos;m Prachi Choubey and I&apos;m on a journey to become a
                theoretical physicist researching cosmology and astrophysics.
                I&apos;m currently an undergrad double-majoring in CS and Physics,
                running research &amp; development for my campus club, and starting a
                Women in STEM community. Also somehow convinced I can still write —
                so I&apos;m working on my debut sci-fi fantasy series,{' '}
                <em>The Starborn Trilogy</em>: epic space operas spanning multiple
                galaxies with 20-something dimensional mages blowing things up to
                save the universe.
              </p>
            </motion.section>

            {/* Language counter */}
            <motion.section
              className="lang-list glass-panel glass-panel--gold"
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
            >
              <h3>Language Counter</h3>
              <motion.ol
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
              >
                {languages.map((lang) => (
                  <motion.li key={lang} variants={itemVariants}>
                    {lang}
                  </motion.li>
                ))}
              </motion.ol>
            </motion.section>
          </div>

          {/* ── CENTER COL ── */}
          <div className="home-col">
            {/* Vision board */}
            <motion.section
              className="vision-section glass-panel glass-panel--gold"
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
            >
              <h2>2026 Vision Board</h2>
              <motion.img
                src={visionBoard}
                alt="2026 Vision Board"
                className="vision-img scroll-scale"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.3 }}
              />
              <p className="vision-caption">
                Learn more about my{' '}
                <a href="#/the-list" style={{ color: 'var(--sw-gold-dim)' }}>
                  Impossible List
                </a>
              </p>
            </motion.section>

            {/* Writing status */}
            <motion.section
              className="writing-status glass-panel glass-panel--blue"
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
            >
              <h3>This Week&apos;s Writing Update</h3>
              <p>
                I&apos;m on my 3rd draft of <em>The Starborn Trilogy: Book One</em>.
                Progress: Chapter 18 of 28. The mages just figured out how to fold
                spacetime and I&apos;m losing my mind writing this.
              </p>
            </motion.section>
          </div>

          {/* ── RIGHT COL ── */}
          <div className="home-col">
            {/* Spotify */}
            <motion.div
              className="spotify-card"
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
            >
              <iframe
                data-testid="embed-iframe"
                style={{ borderRadius: '12px' }}
                src="https://open.spotify.com/embed/playlist/6da4oBWfyQ2T9AKQ7I6QoE?utm_source=generator"
                width="100%"
                height="352"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                title="Prachi's Spotify Playlist"
              />
            </motion.div>

            {/* Book */}
            <motion.section
              className="book-card glass-panel glass-panel--gold"
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
            >
              <h3>Book I&apos;m Reading</h3>
              <motion.img
                src={bookCover}
                alt="Spiral by Koji Suzuki"
                whileHover={{
                  rotateY: 6,
                  scale: 1.04,
                  boxShadow: 'var(--glow-gold)',
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              />
              <p>Spiral by Koji Suzuki</p>
            </motion.section>

            {/* Planet of the Day */}
            <PlanetOfTheDay />
          </div>
        </div>
      </motion.main>
    </>
  )
}