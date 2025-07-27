import React, { useEffect, useState } from 'react'

const StarBackground = () => {
    const [stars, setStars] = useState([]);
    const [meteors, setMeteors] = useState([]);

    useEffect(() => {
        generateStars();
        generateMeteor();

        const handleResize = () =>{
            generateStars();
        }
        window.addEventListener("resize",handleResize);
        return () => window.removeEventListener("resize",handleResize);
    }, []);

    const generateStars = () => {
        const numberOfStars = Math.floor((window.innerWidth * window.innerHeight) / 10000);
        const newStars = [];

        for (let i = 0; i < numberOfStars; i++) {
            newStars.push({
                id: i,
                size: Math.random() * 3 + 1,
                x: Math.random() * 100,
                y: Math.random() * 100,
                opacity: Math.random() * 0.5 + 0.5,
                animationDuration: Math.random() * 4 + 2
            })
        }
        setStars(newStars);
    }
    const generateMeteor = () => {
        const numberOfMeteor = 4;
        const newMeteor = [];

        for (let i = 0; i < numberOfMeteor; i++) {
            newMeteor.push({
                id: i,
                size: Math.random() * 2 + 1,
                x: Math.random() * 100,
                y: Math.random() * 20,
                delay: Math.random() * 15,
                animationDuration: Math.random() * 3 + 3
            })
        }
        setMeteors(newMeteor);
    }
    return (
        <div className='fixed inset-0 overflow-hidden pointer-events-none z-0'>
            {stars.map((star) => {
                return (<div key={star.id} className='star animate-pulse-subtle' style={
                    {
                        width: star.size + "px",
                        height: star.size + "px",
                        left: star.x + "%",
                        top: star.y + "%",
                        opacity: star.opacity,
                        animationDuration: star.animationDuration + "s",
                    }
                }></div>)
            })}
            {meteors.map((meteor) => {
                return (<div key={meteor.id} className='meteor animate-meteor' style={
                    {
                        width: meteor.size * 40 + "px",
                        height: meteor.size  + "px",
                        left: meteor.x  + "%", 
                        top: meteor.y + "%",
                        animationDelay: meteor.delay,
                        animationDuration: meteor.animationDuration + "s",
                    }
                }></div>)
            })}
        </div>
    )
}

export default StarBackground;