import { useState } from 'react'
import FatherDD from './fatherDownwardsDirect'
import { Row, Col, Form, Card, Input, Button,Descriptions,Typography} from 'antd';
import FormItem from 'antd/lib/form/FormItem';
const { Paragraph, Text } = Typography;

export default function grandFatherDownwards() {
  const [grandData, setGrandData] = useState("default")

  function onFinish(values) {
    setGrandData(values.name)
  }

  return (
    <div>
      <Row>
        <Col span={24}>
          <Card title="I am GrandFather:" extra={<h1>{grandData}</h1>} style={{ width: "100%" }}>

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
            <Descriptions title="Info About GrandFather">
              <Descriptions.Item>
              <Paragraph>
              This is the grandfather component. In the 'downwards direct' flow, data is passed through all of the components in the hierarchy.
              That means that the data passes through every component 'below' the one that wishes to pass data. To use this method you simply 
              need to pass the data in the component as shown below. In our example we used some hypothetical 'grandfather', 'father' and 'child' 
              components to show that the data needs to pass through every component. Inside the <Text code style={{color:"green"}}>Father</Text> component we set a value called 
              data to which we assign the values we need to send downwards. After that the father component receives it and passes it down to the 
              child in the same way. For the code to make more sense you should checkout the fatherDownwardsDirect.js component. 
              </Paragraph>  
              </Descriptions.Item>
            </Descriptions>
          </Card>
        </Col>
      </Row>
    </div>
  )
}
