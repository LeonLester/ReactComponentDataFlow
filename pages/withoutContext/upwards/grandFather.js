import {useState} from 'react'
import Father from './father'
import {Row, Col,Card} from 'antd';

export default function grandFather() {
  
  const [grandData,setGrandData] = useState("default")

  return (
    <div>
      <Row>
      <Col span={8}></Col>
      <Col span={8}>
        <Card title="GrandFather" extra={<h1>{grandData}</h1>} style={{ width: "100%"}}>
          <Father data={grandData} stateFunction={setGrandData} />
        </Card>
      </Col>
      <Col span={8}></Col>
      <Col span={8}></Col>
      </Row>
    </div>
  )
}
