import { useState } from 'react'
import './index.css'
import video from './assets/KELVIN KAMAU.mp4'


function App() {
  const [count, setCount] = useState(0)

  return (
    <article className='mid'>
      <div>
      <h2 style={{textAlign:'center'}}>Testing a video on a React-Vite Website</h2>
      <p style={{textAlign:'center'}}>Process of learning on how to well develop and host a React-Vite Website!</p>
    <video width="800" height="400" controls style={{marginTop:"40px"}}>
      <source src = {video} type="video/mp4"/>
    </video>
    </div>
    
    </article>
     
  )
}

export default App
