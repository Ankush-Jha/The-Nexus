import { motion } from 'motion/react'

const projects = [
  {
    name: 'The Nexus',
    desc: 'This site — a personal corner of the web for physics, writing, and everything in between. Built with React + Vite.',
    tags: ['React', 'Vite', 'CSS'],
    link: '#',
  },
  {
    name: 'Cosmito',
    desc: 'A universe for curious minds. An educational platform blending cosmology, interactive simulations, and community.',
    tags: ['In Progress', 'EdTech', 'Physics'],
    link: '#',
  },
  {
    name: 'Starborn Trilogy',
    desc: 'A sci-fi fantasy novel series spanning multiple galaxies with dimensional mages and a universe that needs saving.',
    tags: ['Writing', 'Sci-Fi', 'Fantasy'],
    link: '/writing',
  },
  {
    name: 'Physics Sim Tools',
    desc: 'Computational tools for modeling galactic dynamics and visualizing cosmological structure formation.',
    tags: ['Python', 'NumPy', 'Matplotlib'],
    link: '#',
  },
]

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.4, 0, 0.2, 1] } },
}

export default function Portfolio() {
  return (
    <motion.main
      className="page-wrapper"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
    >
      <div className="page-hero scroll-reveal">
        <p className="page-hero__eyebrow">Projects & Work</p>
        <h1>Portfolio</h1>
        <p>
          Things I&apos;ve built, things I&apos;m building, and things that exist
          only in the part of my brain that refuses to sleep.
        </p>
      </div>

      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
      >
        <h2>Projects</h2>
        <div className="projects-grid">
          {projects.map((proj, i) => (
            <motion.div
              key={proj.name}
              className="project-card glass-panel glass-panel--gold"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
            >
              <h4>{proj.name}</h4>
              <p>{proj.desc}</p>
              <div style={{ marginTop: '0.75rem' }}>
                {proj.tags.map((tag) => (
                  <span key={tag} className="project-tag">{tag}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="content-card glass-panel glass-panel--blue"
        style={{ marginTop: '2rem' }}
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
      >
        <h2>Club Work</h2>
        <p>
          I lead the Research &amp; Development department for my campus tech club.
          We work on projects ranging from machine learning experiments to
          astrophysics visualizations — whatever weird intersection of science and
          code we can dream up.
        </p>
        <p style={{ marginTop: '1rem' }}>
          I&apos;m also organizing a Women in STEM community and a language learning
          club at my university. Because apparently doing two degrees and running
          R&amp;D and writing a novel wasn&apos;t enough chaos for me.
        </p>
      </motion.section>
    </motion.main>
  )
}
