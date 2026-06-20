import { motion } from 'motion/react'

const posts = [
  {
    date: '2026/06/15',
    content: 'just discovered a new exoplanet paper!! the atmospheric composition of WASP-121b is absolutely insane. physics is so cool (ᵔ ᵕ ᵔ)',
  },
  {
    date: '2026/06/10',
    content: 'finally finished my cosmology assignment. feeling like a real jedi now. may the equations be with you all.',
  },
  {
    date: '2026/06/08',
    content: 'listening to clairo while coding this site. the vibes are immaculate. also, rachel is a bop.',
  },
  {
    date: '2026/06/02',
    content: 'read 3 chapters of Spiral in one sitting and now I\'m spooked. koji suzuki is a menace and I love him.',
  },
  {
    date: '2026/05/28',
    content: '3rd draft of starborn book 1. chapter 18. the dimensional mages have officially lost the plot and so have I.',
  },
]

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.4, 0, 0.2, 1] } },
}

export default function Notebook() {
  return (
    <motion.main
      className="page-wrapper"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
    >
      <div className="page-hero scroll-reveal">
        <p className="page-hero__eyebrow">Microblog · Notes · Thoughts</p>
        <h1>Notebook</h1>
        <p>
          A stream of consciousness from the desk of someone who thinks about dark
          matter at 3am. No filter, just vibes and physics.
        </p>
      </div>

      <div className="content-grid">
        <div className="content-section">
          <motion.section
            className="microblog glass-panel"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            <h2>/microblog</h2>
            <div className="microblog-list">
              {posts.map((post, i) => (
                <motion.div
                  key={i}
                  className="microblog-post"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07, duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  <div className="microblog-post__header">
                    <span className="microblog-post__user">choubey</span>
                    <span className="microblog-post__date">{post.date}</span>
                  </div>
                  <p>{post.content}</p>
                </motion.div>
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
              "Somewhere, something incredible is waiting to be known."
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
            <h3>Currently On</h3>
            <p style={{ marginTop: '0.5rem' }}>📖 Spiral — Koji Suzuki</p>
            <p style={{ marginTop: '0.35rem' }}>🎵 Clairo — Sling</p>
            <p style={{ marginTop: '0.35rem' }}>📺 Dark (rewatch #3)</p>
            <p style={{ marginTop: '0.35rem' }}>📝 Starborn Trilogy draft 3</p>
          </motion.section>
        </div>
      </div>
    </motion.main>
  )
}
