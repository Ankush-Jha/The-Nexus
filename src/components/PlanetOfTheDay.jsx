import { useEffect, useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'motion/react'

const QUERY = `
  select top 200
    pl_name, hostname, disc_year, discoverymethod, pl_rade, pl_orbper, pl_eqt
  from pscomppars
  where pl_name is not null
`

const API_URL =
  'https://exoplanetarchive.ipac.caltech.edu/TAP/sync?' +
  `query=${encodeURIComponent(QUERY)}&format=json`

export default function PlanetOfTheDay() {
  const [planets, setPlanets] = useState([])
  const [planet, setPlanet] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const pickRandom = useCallback((list) => {
    const idx = Math.floor(Math.random() * list.length)
    setPlanet(list[idx])
  }, [])

  useEffect(() => {
    async function load() {
      try {
        setLoading(true)
        const res = await fetch(API_URL)
        if (!res.ok) throw new Error()
        const data = await res.json()
        setPlanets(data)
        pickRandom(data)
      } catch {
        setError('Unable to reach the Exoplanet Archive.')
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [pickRandom])

  return (
    <section className="planet-card glass-panel glass-panel--blue scroll-reveal">
      <h3>Planet of the Day</h3>

      {loading && (
        <div className="planet-card__window">
          <div className="planet-card__bar">Scanning the galaxy…</div>
          <div className="planet-card__body">
            {[...Array(5)].map((_, i) => (
              <div key={i} style={{
                height: '0.9rem',
                background: 'rgba(75,213,238,0.08)',
                borderRadius: '4px',
                width: `${60 + Math.random() * 30}%`,
                animation: 'glow-pulse 1.5s ease-in-out infinite',
              }} />
            ))}
          </div>
        </div>
      )}

      {error && !loading && (
        <div className="planet-card__window">
          <div className="planet-card__bar">Signal Lost</div>
          <div className="planet-card__body"><p>{error}</p></div>
        </div>
      )}

      {planet && !loading && (
        <AnimatePresence mode="wait">
          <motion.div
            key={planet.pl_name}
            className="planet-card__window"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
          >
            <div className="planet-card__bar">NASA Exoplanet Archive</div>
            <div className="planet-card__body">
              <h3>{planet.pl_name}</h3>
              <p><strong>Host Star:</strong> {planet.hostname}</p>
              <p><strong>Discovery Year:</strong> {planet.disc_year}</p>
              <p><strong>Method:</strong> {planet.discoverymethod}</p>
              <p>
                <strong>Radius:</strong>{' '}
                {planet.pl_rade ? `${planet.pl_rade.toFixed(2)} R⊕` : 'Unknown'}
              </p>
              <p>
                <strong>Orbital Period:</strong>{' '}
                {planet.pl_orbper ? `${planet.pl_orbper.toFixed(2)} days` : 'Unknown'}
              </p>
              <p>
                <strong>Equilibrium Temp:</strong>{' '}
                {planet.pl_eqt ? `${planet.pl_eqt} K` : 'Unknown'}
              </p>

              <motion.button
                className="planet-btn"
                onClick={() => pickRandom(planets)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              >
                Discover Another World
              </motion.button>
            </div>
          </motion.div>
        </AnimatePresence>
      )}
    </section>
  )
}
