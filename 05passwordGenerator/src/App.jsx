import { useState , useCallback , useEffect , useRef } from 'react'


function App() {

  // hook 1
  const [length, setLength] = useState(8)
  const [number, setNumber] = useState(false)
  const [char, setChar] = useState(false)
  const [password, setPassword] = useState("")

  // hook 2
  const passwordGenerator = useCallback( () => {

      let pass = ""
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

      if( number ){
        str += "0123456789"
      }
      if( char ){
        str += '!@#$%^&*(){}?~/*-+'
      }

      for (let i = 0; i <= length; i++) {
        
        const character = Math.floor(Math.random() * str.length + 1)

        pass += str.charAt(character)
        
      }

      setPassword(pass)

  }, [length, number, char, setPassword] )


  // hook 4
  const passwordRef = useRef(null)

  const copyPasswordToClipboard = useCallback( () => {

    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)

  } , [password] )

  // hook 3
  useEffect( () => {
        passwordGenerator()
  }, [length, number, char, passwordGenerator] )

  return (
    <>
        <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-400 bg-gray-700'>

          <h1 className='text-xl text-center text-white mb-4'>Password Generator</h1>

            <div className=' flex shadow rounded-lg overflow-hidden mb-4'> 
              
              <input type="text" value={password} className='outline-none w-full py-1 px-3' placeholder='password' readOnly ref={passwordRef} /> 
              
              <button onClick={copyPasswordToClipboard} className='outline-none bg-blue-700 px-3 py-0.5 text-white shrink-0'>Copy</button>

            </div>

            <div className='flex text-sm gap-x-4'>

              <div className='flex items-center gap-x-1 mb-4'>

                  <input type="range" min={6} max={20} value={length} className='cursor-pointer' onChange={(e) => {setLength(e.target.value)}}/>
                  <label>length : {length} </label>

                </div>

                <div className='flex items-center gap-x-1 mb-4'>
                    <input type='checkbox' id='numberInput' checked={number} onChange={() => setNumber((prev) => !prev)} />
                    <label htmlFor='numberInput'>Numbers</label>
                </div>

                <div className='flex items-center gap-x-1 mb-4'>
                      <input type='checkbox' id='charInput' checked={char} onChange={() => setChar((prev) => !prev)} />
                      <label htmlFor='charInput'>Characters</label>
                </div>

              </div>  

            </div>

    </>
  )
}

export default App
