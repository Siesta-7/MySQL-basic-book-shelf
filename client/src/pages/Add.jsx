import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Add = () => {

  const navigate = useNavigate()

  const [book, setBook] = useState(
    {
      title:"",
      desc:"",
      cover:"",  
      price:null
    }
  )

  const handleInput = (e)=>{
    setBook((prev)=>{
      return {...prev, [e.target.name]: e.target.value}
    })
  }

  const handleClick = async(e)=>{
    e.preventDefault()
    try{
      await axios.post("http://localhost:8800/books", book)
      navigate("/")
    }
    catch(err){
      console.log(err)
    }
  }
  
  return (
    <div className="addBook">
      <h1>Add Book</h1>
      <div className='form'>
      <input  className="formInput" type="text" placeholder="title" name="title" onChange={handleInput} />
      <input  className="formInput" type="text" placeholder="desc" name="desc" onChange={handleInput} />
      <input  className="formInput" type="text" placeholder="cover" name="cover" onChange={handleInput} />
      <input  className="formInput" type="number" placeholder="price" name="price" onChange={handleInput} />
      <button className="formButton" type="submit" onClick={handleClick} >Add book</button>
    </div>
    </div>
    
  )
}

export default Add