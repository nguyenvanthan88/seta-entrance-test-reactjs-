import React, { useEffect, useState } from "react"

const UsingFetch = () => {
  const [users, setUsers] = useState([])

  const fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUsers(data)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      {users.length > 0 && (
        <ul className="users">
          {users.map(user => (
            <li key={user.id}>
                <h1>{user.id}</h1>
               <p>{user.title}</p> 
               <h2>{user.body}</h2>
            </li>           
          ))}
        </ul>
      )}
    </div>
  )
}

export default UsingFetch