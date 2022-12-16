import axios from 'axios'
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function Update() {

  const location = useLocation()
  const bookId = location.pathname.split("/")[2]
  const navigate = useNavigate()

  const [book, setBook] = useState({
    title:"",
    desc:"",
    cover:"",
    price:null
  })

  const handleInput = (e)=>{
    setBook((priv)=>{
      return {...priv, [e.target.name]:e.target.value }
    })
  }

  const handleSubmit = async (e)=>{
    e.preventDefault()
    try{
      await axios.put("http://localhost:8800/update/"+ bookId, book)
      navigate("/")
    }
    catch(err){
      console.log(err)
    }
  }

  return (
    <div className='updateForm'>
      <h1>Update Book</h1>
      <input className='formInput' type="text" name="title" placeholder='title' onChange={handleInput} />
      <input className='formInput' type="desc" name="desc" placeholder='desc' onChange={handleInput} />
      <input className='formInput' type="cover" name="cover" placeholder='cover' onChange={handleInput} />
      <input className='formInput' type="price" name="price" placeholder='price' onChange={handleInput} />
      <button className='formButton' type="submit" onClick={handleSubmit}>Update</button>
    </div>
  )
}

export default Update