import React from 'react'

function Foot() {
    return (
        <>
        <footer>
            <div className="social">
                <p>Follow me on social media</p>
                <ul className="wrapper">
                    <a href="https://github.com/Akshay2002Singh/" target="_blank">
                        <li className="icon github">
                            <span className="tooltip">GitHub</span>
                            <span><i className="fab fa-github"></i></span>
                        </li>
                    </a>
                    <a href="https://www.instagram.com/rapidcoders.in/" target="_blank">
                        <li className="icon instagram">
                            <span className="tooltip">Instagram</span>
                            <span><i className="fab fa-instagram"></i></span>
                        </li>
                    </a>
                    <a href="https://codepen.io/akshay2002singh" target="_blank">
                        <li className="icon github">
                            <span className="tooltip">CodePen</span>
                            <span><i className="fab fa-codepen"></i></span>
                        </li>
                    </a>
                </ul>
            </div>
            <div className="final_text"></div>
            <p>Rapid Coders</p>
        </footer>
        </>
    )
}

export default Foot