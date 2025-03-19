import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'

// Components
import Layout from './components/layout/Layout'
import CustomCursor from './components/ui/CustomCursor'

// Pages
import Home from './pages/Home'
import Works from './pages/Works'
import WorkDetail from './pages/WorkDetail'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

function App() {
  const location = useLocation()

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <>
      <CustomCursor />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="works" element={<Works />} />
            <Route path="works/:id" element={<WorkDetail />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </>
  )
}

export default App
