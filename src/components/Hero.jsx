import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-200/60 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-200/60 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-violet-600 font-medium mb-4 tracking-widest text-sm uppercase"
        >
          Hi, I'm Esther
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="text-5xl md:text-7xl font-bold text-neutral-900 leading-tight mb-6"
        >
          I build things for{' '}
          <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
            the web
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-neutral-500 text-lg md:text-xl max-w-2xl mx-auto mb-10"
        >
          Full-stack developer passionate about crafting beautiful, performant experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex gap-4 justify-center flex-wrap"
        >
          <a
            href="#projects"
            className="px-6 py-3 bg-violet-600 hover:bg-violet-500 text-white rounded-full font-medium transition-colors"
          >
            View my work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-neutral-300 hover:border-neutral-400 text-neutral-600 hover:text-neutral-900 rounded-full font-medium transition-colors"
          >
            Get in touch
          </a>
        </motion.div>
      </div>
    </section>
  )
}
