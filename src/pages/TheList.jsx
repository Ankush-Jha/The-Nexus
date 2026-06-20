import { motion } from 'motion/react'

const bucketList = [
  'Publish my first novel',
  'Study physics at Harvard or MIT',
  'Earn a PhD in Cosmology',
  'Work with NASA or ESA',
  'See the Milky Way from the Atacama Desert',
  'Attend a rocket launch',
  'Build Cosmito into a universe for curious minds',
  'Visit CERN',
  'Contribute to our understanding of dark matter',
  'Complete The Starborn Trilogy',
  'See the Northern Lights',
  'Help inspire future women in STEM',
  'Learn Japanese',
  'Get a telescope worthy of the sky',
  'Read every Carl Sagan book',
]

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.4, 0, 0.2, 1] } },
}

export default function TheList() {
  return (
    <motion.main
      className="page-wrapper"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
    >
      <div className="page-hero scroll-reveal">
        <p className="page-hero__eyebrow">Dreams written in stardust ✦</p>
        <h1>The List</h1>
        <p>
          The Impossible List — things that feel out of reach until they aren&apos;t.
          Watch me check these off one by one.
        </p>
      </div>

      <motion.section
        className="bucket-card glass-panel glass-panel--gold"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
      >
        <h2>The List</h2>
        <motion.ul
          className="bucket-list"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={{ visible: { transition: { staggerChildren: 0.06 } }, hidden: {} }}
        >
          {bucketList.map((item, i) => (
            <motion.li
              key={item}
              className="bucket-item"
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
              }}
            >
              <span className="bucket-num">{String(i + 1).padStart(2, '0')}</span>
              <span className="bucket-text">{item}</span>
            </motion.li>
          ))}
        </motion.ul>
      </motion.section>
    </motion.main>
  )
}
