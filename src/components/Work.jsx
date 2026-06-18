import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const projects = [
  {
    company: 'LogicGate',
    title: 'Description',
    year: '2023',
    image: '/projects/logicgate.png',
    bg: 'bg-neutral-100',
  },
  {
    company: 'Equinox',
    title: 'Mobile App Activity Tab',
    year: '2023',
    image: '/projects/equinox.png',
    bg: 'bg-neutral-900',
  },
  {
    company: 'LogicGate Design System',
    title: 'Banner Notifications',
    year: '2023',
    image: '/projects/logicgate-ds.png',
    bg: 'bg-neutral-50',
  },
  {
    company: 'Drift',
    title: 'SMS Marketing in the B2B Space',
    year: '2022',
    image: '/projects/drift.png',
    bg: 'bg-blue-50',
  },
]

function ProjectRow({ project, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="border-t border-neutral-200 py-5 group cursor-pointer"
    >
      <div className="flex items-baseline justify-between mb-5 px-1">
        <div>
          <p className="text-sm font-medium text-neutral-900">{project.company}</p>
          <p className="text-sm text-neutral-500 mt-0.5">{project.title}</p>
        </div>
        <span className="text-sm text-neutral-400">{project.year}</span>
      </div>

      <div className={`w-full rounded-xl overflow-hidden ${project.bg} flex items-center justify-center`}>
        <img
          src={project.image}
          alt={`${project.company} — ${project.title}`}
          className="w-full object-cover"
        />
      </div>
    </motion.div>
  )
}

export default function Work() {
  return (
    <section id="work" className="px-8 pb-24">
      <div className="max-w-5xl mx-auto">
        {projects.map((project, i) => (
          <ProjectRow key={`${project.company}-${i}`} project={project} index={i} />
        ))}
        <div className="border-t border-neutral-200" />
      </div>
    </section>
  )
}
