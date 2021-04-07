import Child from '../components/child'
import {useState} from 'react'
import Father from './father'

export default function grandFather(props) {
  const [grandData,setGrandData] = useState("enastringkatitetoio")
  
  return (
    <div>
    <h1>eimai o papous={grandData}</h1>
      <Father data={grandData} stateFunction={props.upwards ? setGrandData:null}>
      </Father>
    </div>
  )
}
