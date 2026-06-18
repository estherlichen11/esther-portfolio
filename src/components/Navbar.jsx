import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const links = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Resume', href: '#' },
]

function DiamondLogo() {
  return (
    <svg width="36" height="44" viewBox="0 0 36 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18 0L36 11V33L18 44L0 33V11L18 0Z" fill="#111" opacity="0.08"/>
      <path d="M18 4L32 12.5V29.5L18 38L4 29.5V12.5L18 4Z" fill="#111" opacity="0.15"/>
      <path d="M18 9L28 15V27L18 33L8 27V15L18 9Z" fill="#111"/>
    </svg>
  )
}

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
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-sm border-b border-neutral-100' : ''
      }`}
    >
      <div className="max-w-5xl mx-auto px-8 py-5 flex justify-between items-center">
        <a href="#">
          <DiamondLogo />
        </a>
        <ul className="flex gap-8">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-neutral-500 hover:text-neutral-900 transition-colors text-sm"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  )
}
