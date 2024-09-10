import { useContext } from "react"
import userContext from "../context/userContext"

function Profile() {

    const {user} = useContext(userContext)   // yeh setUser UserContextProvider file ka hai

    if( !user ) return <div>PLease Login</div>

    return <div>Welcome {user.username} </div>
    
}

export default Profile