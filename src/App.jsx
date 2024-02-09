import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import Header from './Header'
import { useState } from 'react'

function App() {
 let a= {
   name:'john',
   email:'john@gmail.com'
 }
let [count,setCount]=useState(1)
 let [pshow,setPshow]=useState(false)
 const func=()=>{
    setCount(count+1)
 }
let temp=''
if(pshow){
  temp= <p className='fs-5'>Welcome to hari </p>
}
else {
  temp=''
}
const showdata=()=>{
  setPshow(!pshow)
}
  return (
    
    <div className='text-center text-danger bg-dark'>
      
        {temp}
      <h1>Hello {count}</h1>
      <FontAwesomeIcon icon={faPhone} style={{fontSize:'25px'}}/>
        <Header data={a}/>
        <button className='btn btn-danger' onClick={func} >click</button>
        <button className='btn btn-success' onClick={showdata} >show</button>
    </div>
  )
}

export default App
