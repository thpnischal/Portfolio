import React from 'react'
import { HashRouter as Router, Routes, Route, HashRouter } from 'react-router-dom'
import Home from './pages/Home'
import AllProjects from './pages/AllProjects'

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<AllProjects />} />
      </Routes>
    </HashRouter>
  )
}

