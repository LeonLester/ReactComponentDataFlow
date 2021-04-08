import {useState} from 'react'

export default function Home() {
  const [userName,setUserName] = useState()
  const [childData,setChildData] = useState([])

  function helloWorld() {}

  return (
    <div>{userName}
   
    </div>
  )
}
