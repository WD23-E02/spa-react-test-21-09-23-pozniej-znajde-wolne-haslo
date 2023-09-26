import React from 'react'
import { UserContext } from './UserContext'


function UserState() {
    const [ name, setName ] = useState("Rick");
    const [ location, setLocation ] = useState("Dortmund");

  return (
    <UserContext>
      
    </UserContext>
  )
}

export default UserState
