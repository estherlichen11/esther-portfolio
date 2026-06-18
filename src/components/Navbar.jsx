import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const links = ['About', 'Projects', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md border-b border-neutral-200' : ''
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-neutral-900 font-semibold text-lg tracking-tight hover:text-violet-600 transition-colors">
          esther.
        </a>
        <ul className="flex gap-8">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="text-neutral-500 hover:text-neutral-900 transition-colors text-sm font-medium"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  )
}
