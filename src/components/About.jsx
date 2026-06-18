import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="about" className="px-8 py-24 border-t border-neutral-200">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-16"
        >
          <div>
            <h2 className="font-serif-display text-3xl text-neutral-900 mb-6">About me</h2>
            <p className="text-neutral-500 leading-relaxed mb-4 text-sm">
              My background in architecture has developed my technical and visual skills in order to create engaging spaces. With this education, I've learned how to rethink typical user experiences to develop innovative and intuitive designs.
            </p>
            <p className="text-neutral-500 leading-relaxed text-sm">
              Now, I've shifted my aspirations to align more with human-centered design in digital spaces. Whenever I'm not in the studio, you can find me trying new recipes, online shopping, or snacking on sardines.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <div>
              <p className="text-xs text-neutral-400 uppercase tracking-widest mb-3">Contact</p>
              <a href="mailto:eichen@berkeley.edu" className="text-sm text-pink-600 underline underline-offset-2 hover:text-pink-700 block mb-1">
                eichen@berkeley.edu
              </a>
              <a href="#" className="text-sm text-pink-600 underline underline-offset-2 hover:text-pink-700 block">
                LinkedIn
              </a>
            </div>
            <div className="pt-4">
              <p className="text-xs text-neutral-400 uppercase tracking-widest mb-3">Education</p>
              <p className="text-sm text-neutral-600">UC Berkeley</p>
              <p className="text-sm text-neutral-400">B.S. Architecture, 2024</p>
            </div>
          </div>
        </motion.div>

        <p className="text-neutral-300 text-xs mt-16">© 2026 Esther Li-Chen</p>
      </div>
    </section>
  )
}
