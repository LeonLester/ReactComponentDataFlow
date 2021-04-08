import {useState} from 'react'
import FatherUP from './fatherUpwardsDirect'
import {Row, Col,Card} from 'antd';


export default function grandFatherUpwards() {
  
  const [grandData,setGrandData] = useState("default")

  return (
    <div>
      <Row>
      <Col span={8}></Col>
        <Col span={8}>
        <Card title="I am GrandFather:" extra={<h1>{grandData}</h1>} style={{ width: "100%"}}>

        <FatherUP data={grandData} stateFunction={setGrandData}></FatherUP>

      </Card>
        </Col>
        <Col span={8}></Col>
        <Col span={8}></Col>
      </Row>
    </div>
  )
}
