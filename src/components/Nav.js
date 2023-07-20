import React from 'react'
import { Outlet, Link } from "react-router-dom";


function Nav() {

    function navTog(){
        const navbar = document.getElementsByClassName('navbar_custom')[0]
        console.log(navbar)
        navbar.classList.toggle('collapsed')
    }

    window.addEventListener('scroll',(e)=>{
        const navbar = document.getElementsByClassName('navbar_custom')[0]
        let windowY = window.scrollY
        // let windowY = window.pageYOffset
        
        let navbarHeight = navbar.offsetHeight
        
        if(windowY>navbarHeight) navbar.classList.add('sticky')
        else navbar.classList.remove('sticky')
        
    })
    
    return (
        <>
            <nav>
                <div className="navbar_custom">
                    <div className="logo">
                        <h2>Rapid Coders</h2>
                    </div>

                    <ul className="links">
                        <li> <Link to="/">Home</Link> </li>
                        <li><Link to="/pbooks" book='pbook'>Programming Books</Link></li>
                        <li><Link to="/semesters">Semester Books</Link></li>
                        <li><Link to="/developers">Developers</Link></li>
                    </ul>

                    <div className="toggle" onClick={navTog}>
                        <div className="line1"></div>
                        <div className="line2"></div>
                        <div className="line3"></div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Nav