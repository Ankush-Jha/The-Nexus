import { useState, useEffect } from 'react'

export default function StarWarsCrawl({ onComplete }) {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    // Only show once per session
    const seen = sessionStorage.getItem('nexus-crawl-seen')
    if (seen) {
      setVisible(false)
      if (onComplete) onComplete()
      return
    }

    const timer = setTimeout(() => {
      dismiss()
    }, 35000)

    return () => clearTimeout(timer)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function dismiss() {
    sessionStorage.setItem('nexus-crawl-seen', '1')
    setVisible(false)
    if (onComplete) onComplete()
  }

  if (!visible) return null

  return (
    <div id="starwars-crawl-overlay" className="crawl-overlay">
      <div className="crawl-actions">
        <button className="crawl-btn" onClick={dismiss}>
          skip intro
        </button>
      </div>

      <div className="crawl-fade" />

      <div className="crawl-container">
        <div className="crawl-text">
          <div className="crawl-title">
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
  )
}
