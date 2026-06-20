import { Outlet } from 'react-router'
import Navbar from './navbar.jsx'
import Footer from './footer.jsx'
import LightsaberCursor from './LightsaberCursor.jsx'

export default function Layout() {
  return (
    <>
      <LightsaberCursor />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}
