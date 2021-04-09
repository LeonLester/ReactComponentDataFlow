import { useState } from 'react'
import FatherDD from './fatherDownwardsDirect'
import { Row, Col, Form, Card, Input, Button,Descriptions,Typography,Space,Divider} from 'antd';
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
          <Card type="inner" title="GrandFather" extra={<h1>{grandData}</h1>} style={{ width: "100%" }}>

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
            <Space split={<Divider type="vertical" />}>
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
            <Descriptions title="Info About Father">
              <Descriptions.Item >
              <Paragraph>
              This is the father component. It expects some values from the grandfather component so it can pass it on. Firstly you need to give
              the props it will receive a name (in this case grandFatherprops) inside the default function. If you console.log these props you'll 
              find it has a single property called data and its value is the data that it was assigned by the grandfather component. So in this case
              the grandData. Lastly same as before we pass it to the <Text code style={{color:"green"}}>Child</Text> component in the same way as before. Next you should checkout the 
              childDownwardsDirect.js component.
              </Paragraph> 
              </Descriptions.Item>
            </Descriptions>
            <Descriptions title="Info About Child">
              <Descriptions.Item >
              This the Child component. Same as its father, it states that it will accept props by adding a variable inside the default function, 
              these props in our case are the fatherProps which if you console.log will contain a data var with the grandData passed from its father.
              Once it receives the props it can use them however it likes. In this example we just view it in a span.
              </Descriptions.Item>
            </Descriptions>
            </Space>
          </Card>
        </Col>
      </Row>
    </div>
  )
}
