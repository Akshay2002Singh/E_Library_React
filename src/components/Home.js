import React from 'react'
import Nav from "./Nav"
import Foot from "./Foot"
import HomeCard from './HomeCard'
import '../css/Navbar.css'
import '../css/footer.css'
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function Home() {
    const particlesInit = async (main) => {
        console.log(main);
        await loadFull(main);
      };
      const particlesLoaded = (container) => {
        console.log(container);
      };

      
  return (
    <>
      < Nav />
      <div style={{
        zIndex: "-1",
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
            fpsLimit: 60,
            particles: {
              shape: {
                type: "circle",
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
                value: 800,
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
      <div id="main_img">
        <img src={process.env.PUBLIC_URL + '/images/home.png'} alt="" srcset="" />
      </div>
      <div id='card_container'>
          <HomeCard year = "1st" url= "semesters/Semester 1&2" />
          <HomeCard year = "2nd" url= "semesters/Semester 3&4" />
          <HomeCard year = "3nd" url= "semesters/Semester 5&6" />
          <HomeCard year = "4th" url= "semesters/Semester 7&8" />
      </div>
      < Foot />
    </>
  )
}

export default Home