import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function UserShow() {

    const [user, setUser] = useState(null)

    const {id} = useParams()
    useEffect(() => {
        axios.get(`http://localhost:3000/api/users/${id}`)
        .then((res) => setUser(res.data))
    }, [])
  return (
    <div>
     {user && (
        <p>{user.name}__hhhhh__{user.email}</p>
     )}
    </div>
  )
}

export default UserShow
