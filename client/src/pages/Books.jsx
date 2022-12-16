import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'


const Books = ()=>{
    
    const [books, setBooks] = useState([])

    useEffect(()=>{
      const fetchBooks = async () =>{
        try{
          const res = await axios.get("http://localhost:8800/books")
          setBooks(res.data)
        }
        catch(err){
          console.log(err)
        }
      }
      fetchBooks();
    },[])

    const handleDelete = async (id)=> {
      try{
        await axios.delete("http://localhost:8800/books/"+id)
        window.location.reload();
      }
      catch(err){
        console.log(err)
      }
      
    }
    
    return (    
      <div className='homeFrame'>
        <h1>Siesta Book Shop</h1>     
        <div className='books'>    
          {books.map((book)=>(
            <div className='book' key={book.id} >
              {book.cover && <img src={book.cover} />}
              <h2>{book.title}</h2>     
              <p>{book.desc}</p>
              <span>$ {book.price}</span>
              <button className='delete' onClick={()=>{handleDelete(book.id)}}>Delete</button>
              <button className='update'><Link style= {{textDecoration:"none"}} to={"/update/"+book.id}>Update</Link></button>
            </div> 
          ))}        
        </div>
        <Link to="/add" ><button className='addButton' >Add new book</button></Link>
    </div>
    
  )
}

export default Books