import { motion } from 'motion/react'

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.4, 0, 0.2, 1] } },
}

export default function Writing() {
  return (
    <motion.main
      className="page-wrapper"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
    >
      <div className="page-hero scroll-reveal">
        <p className="page-hero__eyebrow">Fiction · Sci-Fi · Space Opera</p>
        <h1>Writing</h1>
        <p>
          Yes, I&apos;m also working on a sci-fi fantasy series. No, I don&apos;t sleep.
          Yes, the Mistborn comparison is fair but entirely coincidental.
        </p>
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
            <h2>The Starborn Trilogy</h2>
            <p>
              A debut sci-fi fantasy series spanning multiple galaxies, featuring
              idiotic 20-something dimensional mages who have somehow been tasked
              with saving the universe. It&apos;s epic space opera — think massive
              battles, ancient cosmic forces, moral philosophy shoved inside
              action sequences, and a lot of crying.
            </p>
            <p style={{ marginTop: '1rem' }}>
              I write what I know: the terrifying vastness of space, the beauty of
              physics, and the chaotic experience of being a young person trying to
              figure out their place in the cosmos. Just with more explosions.
            </p>
          </motion.section>

          <motion.section
            className="content-card glass-panel glass-panel--blue"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            <h2>Progress Log</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '0.75rem' }}>
              {[
                { label: 'Draft 1', status: '✓ Complete', color: 'var(--sw-teal)' },
                { label: 'Draft 2', status: '✓ Complete', color: 'var(--sw-teal)' },
                { label: 'Draft 3', status: '→ Chapter 18/28', color: 'var(--sw-gold)' },
                { label: 'Beta Readers', status: '○ Upcoming', color: 'var(--text-dim)' },
                { label: 'Query Letters', status: '○ Upcoming', color: 'var(--text-dim)' },
              ].map((step) => (
                <div key={step.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.5rem 0', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                  <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1rem', letterSpacing: '1px', textTransform: 'uppercase', color: 'var(--text-muted)' }}>{step.label}</span>
                  <span style={{ fontSize: '0.88rem', color: step.color }}>{step.status}</span>
                </div>
              ))}
            </div>
          </motion.section>
        </div>

        <div className="content-section">
          <motion.section
            className="quote-card glass-panel glass-panel--gold"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            <blockquote className="quote-text">
              "The cosmos is within us. We are made of star-stuff. We are a way for
              the universe to know itself."
            </blockquote>
            <p className="quote-author">— Carl Sagan</p>
          </motion.section>

          <motion.section
            className="content-card glass-panel glass-panel--blue"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            <h3>Influences</h3>
            <ul style={{ paddingLeft: '1.25rem', color: 'var(--text-muted)', lineHeight: 2.2, marginTop: '0.5rem', fontSize: '0.92rem' }}>
              <li>Cosmos — Carl Sagan</li>
              <li>The Expanse series — James S.A. Corey</li>
              <li>Mistborn — Brandon Sanderson</li>
              <li>Foundation — Isaac Asimov</li>
              <li>Contact — Carl Sagan</li>
            </ul>
          </motion.section>
        </div>
      </div>
    </motion.main>
  )
}
