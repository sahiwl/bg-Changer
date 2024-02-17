import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState("")

  return (
   <div className="h-screen w-screen b-green-200">
      <div className="bg-blue-400 flex justify-center">outside div
        <div className="bg-yellow-200 h-40 w-100 absolute bottom-0">another div
          <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded' onClick={()=>{document.body.style="background-color: red"}}>Red</button>

          <button className='bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded' onClick={()=>{document.body.style="background-color: yellow"}}>Yellow</button>
          
          <button className='bg-zinc-500 hover:bg-zinc-700 text-white font-bold py-2 px-4 rounded' onClick={()=>{document.body.style="background-color: black"}}>Black</button>

          <button className='bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded' onClick={()=>{document.body.style="background-color: purple"}}>Purple</button>

          <button className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded' onClick={()=>{document.body.style="background-color: green"}}>Green</button>

          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={()=>{document.body.style="background-color: blue"}}>Blue</button>

          <button className='bg-red-300 hover:bg-red-400 text-white font-bold py-2 px-4 rounded' onClick={()=>{document.body.style="background-color: white"}}>Default</button>

        </div>
      </div>

   </div>
  )
}

export default App
