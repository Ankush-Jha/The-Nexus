import { motion } from 'motion/react'

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.4, 0, 0.2, 1] } },
}

const languages = [
  { name: 'English', level: 'Native' },
  { name: 'Hindi', level: 'Native' },
  { name: 'Italian', level: 'B1' },
  { name: 'High Valyrian', level: 'Conversational' },
  { name: 'Sanskrit', level: 'A1' },
]

export default function About() {
  return (
    <motion.main
      className="page-wrapper"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
    >
      <div className="page-hero scroll-reveal">
        <p className="page-hero__eyebrow">Hello! (ᵔ ᵕ ᵔ)</p>
        <h1>About Me</h1>
        <p>prachi here — welcome to the nexus, my little corner of the web.</p>
      </div>

      <div className="content-grid">
        <div className="content-section">
          <motion.section
            className="content-card glass-panel glass-panel--gold"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            <h2>The Person</h2>
            <p>
              Hi folkes! I&apos;m Prachi Choubey and I&apos;m on a journey to become a
              theoretical physicist and research in cosmology and astrophysics in the
              next 10 years. I am currently an undergrad with a major in CS and
              alongside pursuing another degree in Physics because one wasn&apos;t hard
              enough already hahaha.
            </p>
            <p style={{ marginTop: '1rem' }}>
              Y&apos;all can find me wherever my club is working on campus because I do
              their research and development and I&apos;m also sort of their secretary
              (yaya!). I&apos;m also working to start a language learning club and a
              Women in STEM community at my university so that&apos;s something.
            </p>
            <p style={{ marginTop: '1rem' }}>
              I&apos;m also convinced somehow after all that I can still write so I&apos;m
              also working on my debut sci-fi fantasy series called{' '}
              <em>The Starborn Trilogy</em> — epic space opera that spans across
              multiple galaxies and features idiotic 20-something dimensional mages
              blowing shit up to save the universe.
            </p>
          </motion.section>

          <motion.section
            className="content-card glass-panel glass-panel--blue"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            <h2>The Goals</h2>
            <ul style={{ paddingLeft: '1.25rem', color: 'var(--text-muted)', lineHeight: 2.2, marginTop: '0.75rem' }}>
              <li>PhD in Theoretical Physics or Cosmology</li>
              <li>Research at Harvard, MIT, or Caltech</li>
              <li>Work with NASA or ESA</li>
              <li>Contribute to our understanding of dark matter</li>
              <li>Publish the Starborn Trilogy</li>
              <li>Visit CERN and the Atacama Observatory</li>
              <li>Inspire future Women in STEM</li>
            </ul>
          </motion.section>
        </div>

        <div className="content-section">
          <motion.section
            className="lang-list glass-panel glass-panel--gold"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            <h3>Languages</h3>
            <ol style={{ paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.4rem', marginTop: '0.75rem' }}>
              {languages.map((lang) => (
                <li key={lang.name} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.3rem 0', borderBottom: '1px solid rgba(255,255,255,0.04)', color: 'var(--text-primary)', fontSize: '0.95rem' }}>
                  <span>{lang.name}</span>
                  <span style={{ color: 'var(--sw-gold-dim)', fontFamily: 'var(--font-heading)', fontSize: '0.8rem', letterSpacing: '1px' }}>{lang.level}</span>
                </li>
              ))}
            </ol>
          </motion.section>

          <motion.section
            className="quote-card glass-panel glass-panel--blue"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            <blockquote className="quote-text">
              "The nitrogen in our DNA, the calcium in our teeth, the iron in our
              blood, the carbon in our apple pies were made in the interiors of
              collapsing stars. We are made of starstuff."
            </blockquote>
            <p className="quote-author">— Carl Sagan</p>
          </motion.section>
        </div>
      </div>
    </motion.main>
  )
}
