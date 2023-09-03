import React, { useEffect, useState } from 'react'
import Nav from './Nav'
import Foot from './Foot'
import BooksCard from './BooksCard'
import '../css/BooksPage.css'


function Books(props) {
    console.log(`${process.env.PUBLIC_URL}/books_data/${props.category}.json`)
    const [book_arr,setBook] = useState([])
    useEffect(() => {
        // fetch(`/books_data/${props.category}.json`)
        fetch(`${process.env.PUBLIC_URL}/books_data/${props.category}.json`)
            .then(response => {
                return response.json()
                // return response;
            }).then(daTa => {
                setBook(daTa);
                console.log(daTa)
            })
    },[props.category])

    const booklist = book_arr.map((book,index)=>{
        if(props.category === 'pBooks'){
            return <BooksCard name={book[0]} image={'pbooks/' + book[0] + '.' + book[1]} index={index} url={'https://akshay2002singh.github.io/Engineers-Library/content/pdfbooks/pbooks/'+ book[0] +'.pdf' } />
            // return <BooksCard name={book[0]} image={'pbooks/' + book[0] + '.' + book[1]} index={index} url={'pbooks/'+book[0] +'.pdf' } />
        }else{
            if(props.category === 'Semester 1&2'){
                return <BooksCard name={book} image="quantum.jpg" index={index} url={'https://akshay2002singh.github.io/Engineers-Library/content/pdfbooks/Semester/Sem%201&2/' +book +'.pdf' } />
            }
            else if(props.category === 'Semester 3&4'){
                return <BooksCard name={book} image="quantum.jpg" index={index} url={'https://akshay2002singh.github.io/Engineers-Library/content/pdfbooks/Semester/Sem%203&4/' +book +'.pdf' } />
            }
            if(props.category === 'Semester 5&6'){
                return <BooksCard name={book} image="quantum.jpg" index={index} url={'https://akshay2002singh.github.io/Engineers-Library/content/pdfbooks/Semester/Sem%205&6/' +book +'.pdf' } />
            }
            if(props.category === 'Semester 7&8'){
                return <BooksCard name={book} image="quantum.jpg" index={index} url={'https://akshay2002singh.github.io/Engineers-Library/content/pdfbooks/Semester/Sem%207&8/' +book +'.pdf' } />
            }
            // return <BooksCard name={book} image="quantum.jpg" index={index} url={'semester/' + props.category + '/' +book +'.pdf' } />
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