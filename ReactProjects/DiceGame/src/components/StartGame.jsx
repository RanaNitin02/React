// import React from 'react'

function StartGame() {
  return (
    <div className='container'>
        <div className='image-container'>
            <img src="/images/dice.webp" alt="Dice Logo" className='dice-image' />
        </div>
        <div className='text-container'>
            <h1>Dice Game</h1>
            <button style={{backgroundColor:"red"}}>Start Game</button>
        </div>
      </div>
  )
}

export default StartGame