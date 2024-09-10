import NavBar from "./components/NavBar"
import SearchBar from "./components/SearchBar"

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="max-w-[360px] mx-auto" >
      {/* <h1 className='bg-red-400 text-xl'>Hi</h1> */}
      <NavBar />
      <SearchBar />
    </div>
  )
}

export default App
