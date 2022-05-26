import React from 'react';

const Portfolio = () => {
    const skills = ["React", "NodeJS", "ExpressJS", "MongoDB", "HTML", "CSS3", "Bootstrap", "TailwindCSS", "DaisyUI", "Figma", "Github"]
    return (
        <div className='container mx-auto'>
            <h1 className='text-3xl font-bold text-secondary mt-12'>Tanveer Shahriar Arnob</h1>
            <h3 className='text-lg font-bold text-secondary my-4'>Email : tanveershahriara@gmail.com</h3>
            <h2 className='text-left text-xl font-bold underline'>SKILLS:</h2>
            <div className='text-left grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 my-8'>
                {
                    skills.map((skill, index) => <p
                        key={index}
                        className="badge badge-primary text-white p-4 w-36"
                    >{skill}</p>)
                }
            </div>
            <div className='text-left text-lg mb-4'>
                <h2 className='text-xl font-bold underline'>EDUCATION</h2>
                <p>B.Sc in CSE</p>
                <p>Brac University</p>
                <p>January 2022 - Current</p>
            </div>
            <div className='text-left text-lg mb-4'>
                <h2 className='text-xl font-bold underline mb-4'>PROJECTS</h2>
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    <div class="w-1/2 lg:w-full card bg-primary text-white">
                        <div class="card-body">
                            <h2 class="card-title">Chef's Academy</h2>
                            <a href="http://https://assignment10-56cdd.web.app" target="_blank" rel="noopener noreferrer"> Live Site</a>
                        </div>
                    </div>
                    <div class="w-1/2 lg:w-full card bg-primary text-white">
                        <div class="card-body">
                            <h2 class="card-title">Fruit Jet</h2>
                            <a href="https://assignment11-3d880.web.app" target="_blank" rel="noopener noreferrer"> Live Site</a>
                        </div>
                    </div>
                    <div class="w-1/2 lg:w-full card bg-primary text-white">
                        <div class="card-body">
                            <h2 class="card-title">To-do App</h2>
                            <a href="https://to-do-1afac.web.app/login" target="_blank" rel="noopener noreferrer"> Live Site</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;