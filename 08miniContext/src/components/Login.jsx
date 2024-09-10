import { useState , useContext } from 'react'
import userContext from '../context/userContext'

function Login() {

    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')

    const {setUser} = useContext(userContext)   // yeh setUser UserContextProvider file ka hai

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username,password})
    }

  return (
    <div>
        <h2>Login</h2>
        <input type="text" 
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder='Username' /><br/><br/>
        <input type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder='Pasword' /><br/><br/>
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login