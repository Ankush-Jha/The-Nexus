import { Routes, Route } from 'react-router'
import { AnimatePresence } from 'motion/react'
import { useLocation } from 'react-router'
import Layout from './components/Layout.jsx'
import Home from './pages/home.jsx'
import Research from './pages/research.jsx'
import Notebook from './pages/notebook.jsx'
import Portfolio from './pages/portfolio.jsx'
import Writing from './pages/Writing.jsx'
import About from './pages/About.jsx'
import TheList from './pages/TheList.jsx'

export default function App() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/research" element={<Research />} />
          <Route path="/notebook" element={<Notebook />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/writing" element={<Writing />} />
          <Route path="/about" element={<About />} />
          <Route path="/the-list" element={<TheList />} />
        </Route>
      </Routes>
    </AnimatePresence>
  )
}