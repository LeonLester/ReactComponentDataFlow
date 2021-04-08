import Child from '../components/child'
import {useState} from 'react'
import Father from './father'
import {Row, Col, Space, Card} from 'antd';
import {Layout} from 'antd';

const {Header, Footer, Content} = Layout;

export default function grandFather(props) {
  const [grandData,setGrandData] = useState("default")
  //console.log(props,"grandfather")
  return (
    <div>
      <Row>
      <Col span={8}></Col>
        <Col span={8}>
        <Card title="Eimai O Pappous kai exw auth thn timi" extra={<h1>{grandData}</h1>} style={{ width: "100%"}}>
        <Father
        data={grandData}
        downwards={props.downwards}
        upwards={props.upwards}
        stateFunction={props.upwards? setGrandData:props.siblings? setGrandData: null}></Father>
      </Card>
        </Col>
        <Col span={8}></Col>
        <Col span={8}></Col>
      </Row>
    </div>
  )
}
