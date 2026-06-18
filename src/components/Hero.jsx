import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-8 pt-24 pb-16">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="w-full max-w-5xl border border-neutral-200 rounded-2xl overflow-hidden shadow-sm"
      >
        <div className="grid md:grid-cols-[1fr_280px]">
          {/* Left: text content */}
          <div className="p-10 md:p-14">
            <h1
              className="font-serif-display text-4xl md:text-5xl text-neutral-900 mb-5 leading-tight"
            >
              Hello! I'm Esther
            </h1>
            <p className="text-neutral-600 text-base md:text-lg leading-relaxed max-w-xl mb-8">
              A digital product designer prioritizing delightful, accessible, and research-backed designs.
            </p>
            <div className="flex flex-col gap-1 text-sm">
              <a
                href="mailto:eichen@berkeley.edu"
                className="text-pink-600 underline underline-offset-2 hover:text-pink-700 transition-colors w-fit"
              >
                eichen@berkeley.edu
              </a>
              <a
                href="#"
                className="text-pink-600 underline underline-offset-2 hover:text-pink-700 transition-colors w-fit"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Right: pink accent panel */}
          <div className="bg-gradient-to-br from-pink-100 via-rose-100 to-pink-200 p-10 md:p-12 flex items-center">
            <p className="text-neutral-700 text-sm leading-relaxed">
              Currently interning at{' '}
              <span className="font-medium text-pink-700">LogicGate</span>
              <br />
              <span className="text-neutral-500">(& trying to improve my mahjong skills)</span>
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
