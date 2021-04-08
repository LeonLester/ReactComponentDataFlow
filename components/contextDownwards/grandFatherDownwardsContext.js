import {useState} from 'react'
import { createContext } from 'react';
import {Row, Col,Form,Card,Input,Button} from 'antd';
import FormItem from 'antd/lib/form/FormItem';
import FatherContext from './fatherContext'

export const GrandFatherContext = createContext();

export default function grandFatherContext() {
  const [grandData,setGrandData] = useState("default")
  function onFinish(values) {
    setGrandData(values.name)
  }
  return (
    <div>
      <Row>
      <Col span={8}></Col>
        <Col span={8}>
        <Card title="Eimai O Pappous kai exw auth thn timi" extra={<h1>{grandData}</h1>} style={{ width: "100%"}}>
            <Form onFinish={onFinish}>
              <FormItem name="name">
                <Input></Input>
              </FormItem>
              <FormItem>
                <Button htmlType="submit">
                  ok!
                </Button>
              </FormItem>
            </Form>
            <GrandFatherContext.Provider value={grandData}>
              <FatherContext/>
            </GrandFatherContext.Provider>
          </Card>
        </Col>
        <Col span={8}></Col>
        <Col span={8}></Col>
      </Row>
    </div>
  )
}