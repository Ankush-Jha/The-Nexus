import { motion } from 'motion/react'

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.4, 0, 0.2, 1] } },
}

const interests = [
  { title: 'Quantum Cosmology', desc: 'Exploring the quantum nature of the early universe and the problem of time in quantum gravity.' },
  { title: 'Dark Matter & Dark Energy', desc: 'The missing 95% of the universe — trying to contribute to our understanding of what it actually is.' },
  { title: 'Black Hole Thermodynamics', desc: 'Information paradox, Hawking radiation, and the deep connection between gravity and entropy.' },
  { title: 'Computational Astrophysics', desc: 'Using code to model galactic dynamics and simulate cosmological structure formation.' },
]

export default function Research() {
  return (
    <motion.main
      className="page-wrapper"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
    >
      <div className="page-hero scroll-reveal">
        <p className="page-hero__eyebrow">Physics & Cosmology</p>
        <h1>Research</h1>
        <p>
          The universe is under no obligation to make sense to you — but I&apos;m going
          to figure it out anyway. Here&apos;s what I&apos;m currently obsessed with.
        </p>
      </div>

      <div className="content-section">
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          <h2>Research Interests</h2>
          <div className="projects-grid" style={{ marginTop: '1.25rem' }}>
            {interests.map((item) => (
              <div key={item.title} className="project-card glass-panel glass-panel--blue">
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="content-card glass-panel glass-panel--gold"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          <h2>Academic Journey</h2>
          <p>
            I&apos;m currently pursuing a double major in Computer Science and Physics,
            which is exactly as chaotic as it sounds. My coursework spans from
            statistical mechanics and general relativity to machine learning and
            computational methods — and I genuinely love every second of it.
          </p>
          <p style={{ marginTop: '1rem' }}>
            As the Research &amp; Development lead for my campus club, I&apos;m working
            on projects that sit at the intersection of physics simulation and
            visualization. I&apos;m also planning to pursue a PhD in theoretical physics
            or cosmology, ideally somewhere with clear skies and a good telescope.
          </p>
        </motion.section>

        <motion.section
          className="content-card glass-panel glass-panel--blue"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          <h2>Current Goals</h2>
          <ul style={{ paddingLeft: '1.25rem', color: 'var(--text-muted)', lineHeight: 2, marginTop: '0.75rem' }}>
            <li>Contribute to a published paper on cosmological structure</li>
            <li>Build a physics simulation tool for my university</li>
            <li>Visit CERN before graduating</li>
            <li>Earn a PhD in theoretical physics or cosmology</li>
            <li>Work with NASA or ESA on a real mission</li>
          </ul>
        </motion.section>
      </div>
    </motion.main>
  )
}
