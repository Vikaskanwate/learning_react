import { useState } from "react"
import {cn} from '../lib/utils'
const skills = [
    {name:"HTML/CSS",level:80,category:"frontend"},
    {name:"Bootstrap/Tailwind",level:80,category:"frontend"},
    {name:"Javascript",level:70,category:"frontend"},
    {name:"React",level:70,category:"frontend"},
    
    {name:"Java",level:70,category:"Backend"},
    {name:"SpringBoot",level:60,category:"Backend"},
    {name:"Nodejs",level:60,category:"Backend"},
    {name:"mysql",level:70,category:"Backend"},

    {name:"Git/Github",level:70,category:"tools"},
    {name:"VS Code",level:90,category:"tools"},
    {name:"Eclipse/Intellij IDEA",level:80,category:"tools"},
    {name:"postman",level:80,category:"tools"}
]
const categories = ["all","frontend","Backend","tools"];

export const SkillsSection = ()=>{
    const [activeCategory,setActiveCategory] = useState('all');
    
    const filteredSkills = skills.filter(
    (skill) => activeCategory === 'all' || skill.category === activeCategory
    );
    return (
        <section id="skills"
        className="py-24 px-4 relative bg-secondary/30"
        >
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary">Skills</span>
                </h2>
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {
                        categories.map((category,key)=>(
                            <button
                            key={key}
                            onClick={()=>setActiveCategory(category)}
                            className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                                activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bg-secondary"
                            )}>
                                {category}
                            </button>
                        ))
                    }
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSkills.map((skill,key)=>(
                        <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                            <div className="text-center mb-4">
                                <h3 className="font-semibold text-lg">{skill.name}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}