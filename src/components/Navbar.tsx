import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const location = useLocation()
  const [activeSection, setActiveSection] = useState('')
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    if (location.pathname !== '/') {
      setActiveSection('')
      return
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
      
      const sections = ['home', 'about', 'skills', 'projects', 'education-experience', 'honors', 'publications', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    const handleHashChange = () => {
      const hash = window.location.hash.slice(1)
      if (hash && ['home', 'about', 'skills', 'projects', 'education-experience', 'experience', 'honors', 'publications', 'contact'].includes(hash)) {
        setTimeout(() => {
          handleScroll()
        }, 100)
      }
    }

    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const link = target.closest('a[href^="#"]')
      if (link) {
        const hash = (link as HTMLAnchorElement).href.split('#')[1]
        if (hash) {
          setTimeout(() => {
            handleScroll()
          }, 300)
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('hashchange', handleHashChange)
    window.addEventListener('click', handleLinkClick)
    handleScroll()
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('hashchange', handleHashChange)
      window.removeEventListener('click', handleLinkClick)
    }
  }, [location.pathname])

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#projects', label: 'Projects' },
    { href: '#education-experience', label: 'Education & Experience' },
    { href: '#publications', label: 'Publications' },
    { href: '#honors', label: 'Awards' },
    { href: '#contact', label: 'Contact' }
  ]

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`w-full py-4 fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#1a1a1a]/95 backdrop-blur-md border-b border-white/15' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6 mx-auto flex-1">
          {location.pathname === '/' ? (
            navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-base transition-colors relative ${
                  activeSection === link.href.slice(1)
                    ? 'text-orange-400 font-semibold'
                    : 'text-gray-100 hover:text-orange-400'
                }`}
              >
                {link.label}
                {activeSection === link.href.slice(1) && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-orange-400"
                    initial={false}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))
          ) : (
            <>
              <Link to="/" className="text-base text-gray-100 hover:text-orange-400">Home</Link>
              <Link to="/projects" className="text-base text-orange-400 font-semibold">Projects</Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-gray-100 hover:text-orange-400 transition-colors p-2 ml-auto"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-[#1a1a1a]/98 backdrop-blur-md border-b border-white/15 overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-3 text-right">
              {location.pathname === '/' ? (
                navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={handleLinkClick}
                    className={`block text-base py-2 transition-colors ${
                      activeSection === link.href.slice(1)
                        ? 'text-orange-400 font-semibold'
                        : 'text-gray-100 hover:text-orange-400'
                    }`}
                  >
                    {link.label}
                  </a>
                ))
              ) : (
                <>
                  <Link to="/" onClick={handleLinkClick} className="block text-base py-2 text-gray-100 hover:text-orange-400">Home</Link>
                  <Link to="/projects" onClick={handleLinkClick} className="block text-base py-2 text-orange-400 font-semibold">Projects</Link>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
