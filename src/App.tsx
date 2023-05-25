// src/App.tsx

import React, { useState, useEffect } from 'react'
import { Routes, Route, useLocation, Link } from 'react-router-dom'
import './App.css'

const Home = () => <h1>Home</h1>
const PageOne = () => <h1>Page One</h1>
const PageTwo = () => <h1>Page Two</h1>

const App: React.FC = () => {
  const [showContent, setShowContent] = useState(true)

  const location = useLocation()

  useEffect(() => {
    setShowContent(false)

    const timer = setTimeout(() => {
      setShowContent(true)
    }, 500)

    return () => clearTimeout(timer)
  }, [location])

  return (
    <div>
      <Link className="button" to="/one">
        Page One
      </Link>
      <Link className="button" to="/two">
        Page Two
      </Link>
      <Link className="button" to="/">
        Home
      </Link>

      <div className={`content ${showContent ? 'active' : ''}`}>
        <Routes>
          <Route index element={<Home />} />
          <Route path="one" element={<PageOne />} />
          <Route path="two" element={<PageTwo />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
