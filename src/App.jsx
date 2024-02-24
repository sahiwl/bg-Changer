import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState("")
  const me = "</sahil>"
  return (
    <div className="h-screen w-screen flex justify-center">
      <div className="absolute bottom-14">
        
        <div className="h-auto w-auto xl:p-5 h-20  bg-slate-100 rounded shadow-2xl " style={{width: "80rem"}}>
          <div className="grid grid-cols-1 gap-4 xl:flex justify-around">
            <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded' onClick={()=>{document.body.style="background-color: red"}}>Red</button>

            <button className='bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded' onClick={()=>{document.body.style="background-color: yellow"}}>Yellow</button>
          
            <button className='bg-zinc-800 hover:bg-zinc-900 text-white font-bold py-2 px-4 rounded' onClick={()=>{document.body.style="background-color: black"}}>Black</button>

            <button className='bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded' onClick={()=>{document.body.style="background-color: purple"}}>Purple</button>

            <button className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded' onClick={()=>{document.body.style="background-color: green"}}>Green</button>

            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={()=>{document.body.style="background-color: blue"}}>Blue</button>

            <button className='bg-red-300 hover:bg-red-400 text-white font-bold py-2 px-4 rounded' onClick={()=>{document.body.style="background-color: white"}}>Default</button>
          </div>
        </div>
        <div className="flex justify-center -mb-5">
          <div className="mt-10 w-48 text-center bg-transparent hover:bg-teal-100 py-2 px-4 rounded-xl"> <p className='text-gray-950 font-medium'>made by <a href="https://github.com/sahiwl" className=' text-sky-600 font-semibold underline'>{me}</a></p></div>
        </div>
      </div>
      
   </div> 
  )
}


// <div className="flex justify-center">
//                     <div className="font-semibold">made by<a href="https://github.com/sahiwl" className="text-sky-600 font-semibold" > {me} 🐱‍👤</a>  </div>
//                 </div>

export default App
