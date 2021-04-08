import {useState} from 'react'
import FatherDD from './fatherDownwardsDirect'
import {Row, Col,Form,Card,Input,Button} from 'antd';
import FormItem from 'antd/lib/form/FormItem';

export default function grandFather() {

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

        <div id="form">
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
        </div>

        <FatherDD data={grandData}></FatherDD>

      </Card>
        </Col>
        <Col span={8}></Col>
        <Col span={8}></Col>
      </Row>
    </div>
  )
}
