import 'antd/dist/antd.css';
import {Row, Card, Divider,Col} from 'antd';
import {useState} from 'react'
import ChildSiblings from './childSibling'

export default function fatherSiblings() {

  const [siblingData1,setSiblingData1] = useState("")
  const [siblingData2,setSiblingData2] = useState("")

  return (
    <div>
      <Row>
      <Col span={8}></Col>
      <Col span={8}>
       <Card title="eimai o pateras" style={{width: "100%"}}>
          <Divider>child1</Divider>
          <ChildSiblings data={siblingData1} changeStateFunction={setSiblingData2}></ChildSiblings>
          <Divider>child2</Divider>
          <ChildSiblings data={siblingData2} changeStateFunction={setSiblingData1}></ChildSiblings>
        </Card></Col>
      <Col span={8}></Col>
      <Col span={8}></Col>
      </Row>
    </div>
  )
};