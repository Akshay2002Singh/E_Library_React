import React from 'react'
import Nav from './Nav'
import Foot from './Foot'
import '../css/SemesterHomePage.css'
import { Link } from 'react-router-dom'

function SemesterHome() {
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
            <div id="sem_home_card_container">
                {semList}
            </div>
            <Foot />
        </>
    )
}

export default SemesterHome