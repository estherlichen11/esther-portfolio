import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const skills = ['React', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL', 'Tailwind CSS', 'Figma', 'AWS']

function FadeIn({ children, delay = 0 }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  )
}

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">About me</h2>
          <p className="text-neutral-500 leading-relaxed mb-4">
            I'm a software developer who loves turning ideas into elegant, user-friendly products. I thrive at the intersection of design and engineering.
          </p>
          <p className="text-neutral-500 leading-relaxed">
            When I'm not coding, you'll find me hiking, sketching UI concepts, or reading about new technologies. I believe great software should be both functional and delightful.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <h3 className="text-neutral-400 font-semibold mb-4 uppercase tracking-widest text-sm">Skills</h3>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1.5 bg-neutral-100 border border-neutral-200 text-neutral-600 rounded-full text-sm hover:border-violet-400 hover:text-violet-600 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
