import { ArrowRight, ExternalLink, Github } from 'lucide-react'
const projects = [
    {
        id: 1,
        title: "Sundown studio",
        description: "A beautifully website using html css and js.",
        image: "./project1.png",
        tags: ["HTML", "CSS", "JS"],
        demoUrl: "#",
        githubUrl: "#"
    },
    {
        id: 1,
        title: "Sundown studio",
        description: "A beautifully website using html css and js.",
        image: "./project1.png",
        tags: ["HTML", "CSS", "JS"],
        demoUrl: "#",
        githubUrl: "#"
    },
    {
        id: 1,
        title: "Sundown studio",
        description: "A beautifully website using html css and js.",
        image: "./project1.png",
        tags: ["HTML", "CSS", "JS"],
        demoUrl: "#",
        githubUrl: "#"
    },
]

export const ProjectSection = () => {
    return (
        <section id="projects" className="py-20 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Featured <span className="text-primary">projects</span>
                </h2>
                <p className="text-center text-muutedd-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of my recent projects. Each project was carefully crafted with attention to detail,performance,
                    and user experience.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                        <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                            <div className="h-48 overflow-hidden">
                                <img className="h-full  transition-transform duration-500 group-hover:scale-110" src={project.image} alt={project.title} />
                            </div>

                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-3">
                                    {project.tags.map((tag) => (
                                        <span className="px-2 py-1 text-xs font-medium border text-primary/50 rounded-full bg-secondary text-secondary-foreground">{tag}</span>
                                    ))}
                                </div>
                                <h3 className="text-xl font-semibold mb-1 text-foreground">{project.title}</h3>
                                <p className="text-muted-foreground text-sm mb-3">{project.description}</p>
                                <div className="flex justify-between items-center">
                                    <div className="flex space-x-3">
                                        <a href={project.githubUrl} target='_blank' className="text-foreground/80 hover:text-primary transition-colors duration-100">
                                            <Github size={20} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='text-center mt-12'>
                    <a href="" target='_blank' className='cosmic-button w-fit flex items-center mx-auto gap-2'>
                        Check My Github <ArrowRight size={16}/>
                    </a>
                </div>
            </div>
        </section>
    )
}