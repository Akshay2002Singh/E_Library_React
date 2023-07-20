import React, { useEffect, useState } from 'react'
import Nav from './Nav'
import Foot from './Foot'
import BooksCard from './BooksCard'
import '../css/BooksPage.css'


function Books(props) {
    console.log(props.category)
    const [book_arr,setBook] = useState([])
    useEffect(() => {
        fetch(`/books_data/${props.category}.json`)
            .then(response => {
                return response.json()
            }).then(daTa => {
                setBook(daTa);
                console.log(daTa)
            })
    },[props.category])

    const booklist = book_arr.map((book,index)=>{
        if(props.category === 'pBooks'){
            return <BooksCard name={book[0]} image={'pbooks/' + book[0] + '.' + book[1]} index={index} url={'pbooks/'+book[0] +'.pdf' } />
        }else{
            return <BooksCard name={book} image="quantum.jpg" index={index} url={'semester/' + props.category + '/' +book +'.pdf' } />
        }
    })

    return (
        <>
            <Nav />
            <h1 id="main_heading">
                {props.category === 'pBooks' ? 'Programming Books' : props.category}
            </h1>
            <div id="card_container">
                {/* <BooksCard /> */}
                {book_arr ? booklist : " "}
            </div>
            <Foot />
        </>
    )
}

export default Books