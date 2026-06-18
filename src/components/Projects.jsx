import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const projects = [
  {
    title: 'Project One',
    description: 'A full-stack web app with real-time features. Built with React, Node.js, and WebSockets.',
    tags: ['React', 'Node.js', 'WebSockets'],
    link: '#',
  },
  {
    title: 'Project Two',
    description: 'A design system and component library with accessibility-first principles.',
    tags: ['TypeScript', 'Storybook', 'CSS'],
    link: '#',
  },
  {
    title: 'Project Three',
    description: 'A data visualization dashboard for tracking analytics and business metrics.',
    tags: ['Python', 'D3.js', 'PostgreSQL'],
    link: '#',
  },
]

function ProjectCard({ project, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{ y: -6 }}
      className="bg-white border border-neutral-200 rounded-2xl p-6 flex flex-col gap-4 hover:border-violet-300 hover:shadow-lg hover:shadow-violet-100 transition-all group"
    >
      <div className="w-10 h-10 rounded-xl bg-violet-100 flex items-center justify-center text-violet-600 font-bold text-lg group-hover:bg-violet-200 transition-colors">
        {index + 1}
      </div>
      <h3 className="text-neutral-900 font-semibold text-xl">{project.title}</h3>
      <p className="text-neutral-500 text-sm leading-relaxed flex-1">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span key={tag} className="text-xs px-2 py-1 bg-neutral-100 text-neutral-500 rounded-md">
            {tag}
          </span>
        ))}
      </div>
      <a
        href={project.link}
        className="text-violet-600 hover:text-violet-500 text-sm font-medium transition-colors mt-auto"
      >
        View project →
      </a>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-neutral-50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-3">Projects</h2>
          <p className="text-neutral-500">A few things I've built recently.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
