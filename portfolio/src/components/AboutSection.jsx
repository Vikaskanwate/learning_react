import React from 'react'

const AboutSection = () => {
  return (
    <section id='about' className='py-20 px-4 relative'>
      {""}
      <div className="container mx-auto max-w-5xl">
        <h2 className='text-3xl md:text-4xl font-bold md-12 text-center'>
          About<span className='text-primary'>Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center mt-5">
          <div className='space-y-6' > 
            <h3 className='text-2xl font-semibold'>Passionate Web Developer</h3>
            <p className='text-muted-foreground'>
              I specialize in creating responsive, accessible and performant web application using morden technologies.
            </p>
            <p className='text-muted-foreground'>
              I'am Passionate about creating elegant solution to complex 
              problem, and I'am constantly learning new technologies and techniques
              to stay at the forefront of the ever-evolving web landscape.
            </p>

            <div className='flex flex-col sm:flex-row gap-4 pt-4 justify-center'>
                <a href="#contact" className='cosmic-button'>
                  {""}
                  Get In Touch
                </a>
                <a href="" className='px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-color duration-300'>
                Download Resume</a>
            </div>
          </div>
            <div className=''>

            </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection