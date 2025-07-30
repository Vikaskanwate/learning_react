
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
]

export const SkillsSection = ()=>{
    return (
        <section id="skills"
        className="py-24 px-4 relative bg-secondary/30"
        >
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary">Skills</span>
                </h2>
            </div>
        </section>
    )
}