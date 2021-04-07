import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Child from '../components/child'
import {useState} from 'react'

export default function Home() {
  const [userName,setUserName] = useState()
  const [childData,setChildData] = useState([])

  function helloWorld() {}

  return (
    <div>{userName}
      <Father1 data={childData}/>
      <Father2 data={childData}/>
    </div>
  )
}
