import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-2xl mx-auto text-center" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Let's work together</h2>
          <p className="text-neutral-400 mb-10 leading-relaxed">
            I'm currently open to new opportunities. Whether you have a project in mind or just want to say hi — my inbox is always open.
          </p>
          <a
            href="mailto:esther.lichen11@gmail.com"
            className="inline-block px-8 py-4 bg-violet-600 hover:bg-violet-500 text-white rounded-full font-medium transition-colors text-lg"
          >
            Say hello
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 pt-8 border-t border-neutral-800 flex justify-center gap-6 text-neutral-500 text-sm"
        >
          <a href="#" className="hover:text-neutral-300 transition-colors">GitHub</a>
          <a href="#" className="hover:text-neutral-300 transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-neutral-300 transition-colors">Twitter</a>
        </motion.div>

        <p className="text-neutral-700 text-xs mt-8">© 2026 Esther. Built with React & Framer Motion.</p>
      </div>
    </section>
  )
}
