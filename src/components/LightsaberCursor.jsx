import { useEffect, useRef, useState } from 'react'

export default function LightsaberCursor() {
  const cursorRef = useRef(null)
  const trailRef = useRef(null)
  const [clicking, setClicking] = useState(false)
  const [hovering, setHovering] = useState(false)

  useEffect(() => {
    // Don't render on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return

    const cursor = cursorRef.current
    const trail = trailRef.current
    if (!cursor || !trail) return

    let mouseX = 0, mouseY = 0
    let trailX = 0, trailY = 0
    let rafId = null

    const onMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      cursor.style.transform = `translate(${mouseX}px, ${mouseY}px) rotate(-135deg)`
    }

    const onDown = () => setClicking(true)
    const onUp = () => setClicking(false)

    const onOver = (e) => {
      const t = e.target
      const style = window.getComputedStyle(t)
      setHovering(
        style.cursor === 'pointer' || t.tagName === 'A' || t.tagName === 'BUTTON'
      )
    }

    const animate = () => {
      trailX += (mouseX - trailX) * 0.15
      trailY += (mouseY - trailY) * 0.15
      trail.style.transform = `translate(${trailX}px, ${trailY}px)`
      rafId = requestAnimationFrame(animate)
    }

    rafId = requestAnimationFrame(animate)
    document.addEventListener('mousemove', onMove, { passive: true })
    document.addEventListener('mousedown', onDown)
    document.addEventListener('mouseup', onUp)
    document.addEventListener('mouseover', onOver, { passive: true })
    document.body.style.cursor = 'none'

    return () => {
      cancelAnimationFrame(rafId)
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mousedown', onDown)
      document.removeEventListener('mouseup', onUp)
      document.removeEventListener('mouseover', onOver)
      document.body.style.cursor = 'auto'
    }
  }, [])

  const color = clicking ? 'yellow' : 'blue'
  const hoverClass = hovering ? ' hover' : ''

  return (
    <>
      <div ref={trailRef} className={`saber-trail ${color}${hoverClass}`} />
      <div ref={cursorRef} className={`lightsaber-cursor ${color}${hoverClass}`}>
        <div className="saber-hilt">
          <div className="saber-hilt-detail" />
          <div className="saber-hilt-btn" />
        </div>
        <div className="saber-blade" />
      </div>
    </>
  )
}
