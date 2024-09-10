import './App.css'
import Card from './components/Card'

function App() {

  const name = "Tailwind CSS"

  return (
    <>
      <h1 className='bg-red-400 text-black p-4 rounded-xl mb-10'>Hi from {name}</h1>

      <Card username="Nitin Rana" />
      <Card username="Habibi" />

    </>
  )
}

export default App
