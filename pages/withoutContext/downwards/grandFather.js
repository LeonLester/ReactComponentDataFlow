import {useState} from 'react';
import Father from './father';
import {Row, Col,Form,Card,Input,Button} from 'antd';
import FormItem from 'antd/lib/form/FormItem';

export default function grandFather() {
  const [grandData,setGrandData] = useState("default");

  function onFinish(values) {
    setGrandData(values.name);
  }

  return (
    <div>
      <Row>
        <Col span={8}></Col>
        <Col span={8}>
          <Card title="I am GrandFather:" extra={<h1>{grandData}</h1>} style={{ width: "100%"}}>
            <div id="form">
                <Form onFinish={onFinish}>
                  <FormItem name="name">
                    <Input></Input>
                  </FormItem>
                  <FormItem>
                    <Button htmlType="submit">
                      Send to grandchild.
                    </Button>
                  </FormItem>
                </Form>
            </div>
            <Father data={grandData} />
          </Card>
        </Col>
        <Col span={8}></Col>
        <Col span={8}></Col>
      </Row>
    </div>
  )
}
