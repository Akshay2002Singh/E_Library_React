import React from 'react'
import Nav from './Nav'
import Foot from './Foot'
import '../css/SemesterHomePage.css'
import { Link } from 'react-router-dom'
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function SemesterHome() {

    const particlesInit = async (main) => {
        console.log(main);
        await loadFull(main);
    };
    const particlesLoaded = (container) => {
        console.log(container);
    };

    const sem = ['Semester 1&2' ,'Semester 3&4' , 'Semester 5&6' , 'Semester 7&8' ]
    const semList = sem.map((semName, index)=>{
        return (
            <div className="sem_home_card" key={index}>
                <Link to ={semName}>
                    <div className="sem_home_card__content"> <div className="sem_home_card_txt">{semName}</div>
                    </div>
                </Link>
            </div>
        )
    })
    return (
        <>
            <Nav />
            <h1 id="main_heading">
                Semester Wise Books
            </h1>

            <div style={{
                zIndex: "0",
                position: "absolute"
            }} >
                <Particles
                    id="tsparticles"
                    init={particlesInit}
                    loaded={particlesLoaded}
                    options={{
                        background: {
                            color: "rgb(10,10,25)",
                        },
                        fpsLimit: 120,
                        interactivity: {
                            events: {
                                onClick: {
                                    enable: true,
                                    mode: "push",
                                },
                                onHover: {
                                    enable: true,
                                    mode: "repulse",
                                },
                                resize: true,
                            },
                            modes: {
                                push: {
                                    quantity: 4,
                                },
                                repulse: {
                                    distance: 80,
                                    duration: 0.8,
                                },
                            },
                        },
                        particles: {
                            shape: {
                                type: "circle",
                            },
                            links: {
                                color: "#ffffff",
                                distance: 150,
                                enable: false,
                                opacity: 0.5,
                                width: 1,
                            },
                            move: {
                                direction: "none",
                                enable: true,
                                outModes: {
                                    default: "none",
                                },
                                random: false,
                                speed: 1,
                                straight: false,
                            },
                            size: {
                                random: {
                                    enable: true,
                                    minimumValue: 0.5,
                                },
                                value: 1.4,
                            },
                            color: {
                                value: "#f1f1f1",
                            },
                            number: {
                                density: {
                                    enable: true,
                                    area: 1080,
                                },
                                limit: 0,
                                value: 1000,
                            },
                            opacity: {
                                animation: {
                                    enable: true,
                                    minimumValue: 0.5,
                                    speed: 1.6,
                                    sync: false,
                                },
                                random: {
                                    enable: true,
                                    minimumValue: 0.1,
                                },
                                value: 1,
                            },
                            interactivity: {
                                detectsOn: "canvas",
                                events: {
                                    resize: true,
                                },
                            },
                        },
                    }}
                />
            </div>

            <div id="sem_home_card_container">
                {semList}
            </div>
            <Foot />
        </>
    )
}

export default SemesterHome