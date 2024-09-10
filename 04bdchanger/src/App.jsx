import { useState } from "react";


function App() {

  const [ color , setColor ] = useState('#313131')
  
  return (
    <>
      <div className='w-full h-screen duration-200' style = {{backgroundColor:color}}>

            <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">

                  <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 py-2 rounded-3xl">

                    <button onClick={() => setColor('red')} className="px-4 py-1 outline-none rounded-lg" style={{backgroundColor:"red"}}>Red</button>
                    <button onClick={() => setColor('blue')} className="px-4 py-1 outline-none rounded-lg" style={{backgroundColor:"blue"}}>Blue</button>
                    <button onClick={() => setColor('green')} className="px-4 py-1 outline-none rounded-lg" style={{backgroundColor:"green"}}>Green</button>
                    <button onClick={() => setColor('lavender')} className="px-4 py-1 outline-none rounded-lg text-black" style={{backgroundColor:"lavender"}}>Lavander</button>
                    <button onClick={() => setColor('yellow')} className="px-4 py-1 outline-none rounded-lg text-black" style={{backgroundColor:"yellow"}}>Yellow</button>
                    <button onClick={() => setColor('pink')} className="px-4 py-1 outline-none rounded-lg text-black" style={{backgroundColor:"pink"}}>Pink</button>
                    <button onClick={() => setColor('grey')} className="px-4 py-1 outline-none rounded-lg text-black" style={{backgroundColor:"grey"}}>Grey</button>
                      
                  </div>
7
            </div>

      </div>
    </>
  )
}

export default App
