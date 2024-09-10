import { useState } from "react"

function App() {
  
  const  [ counter , setCounter ] =  useState(5) ;   // first index is a variable
                                                    // second index is a function
  const addValue = () =>{
    if( counter < 20 ){
      setCounter( num => {
          const newNum = num + 1 ;
          console.log(`Value of counter after add is ${newNum} `);
          return newNum;
      });
    }
    
  }

  const removeValue = () =>{
    if( counter >= 1 ){
      setCounter( num => {
        const newNum = num - 1 ;
        console.log(`Value of counter minus add is ${newNum} `);
        return newNum;
      });
    }
    
  }

  return (
    <>
        <h1>Chai aur react</h1>
        <h2>Counter value : {counter} </h2>

        <button onClick={addValue} >Increase value : {counter} </button>
                <br/><br/>
        <button onClick={removeValue} >Decrease value : {counter} </button>
    </>
  )
}

export default App
