import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className="h-screen w-screen bg-green-200">
      <div className="bg-blue-400 flex justify-center">outside div
        <div className="bg-yellow-200 h-40 w-72">another div
          <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded' onClick={document.body.style="background: red"}>red</button>

        </div>
      </div>

   </div>
  )
}

export default App
