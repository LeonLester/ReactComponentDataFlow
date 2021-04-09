import { useState } from 'react'
import FatherDD from './fatherDownwardsDirect'
import { Row, Col, Form, Card, Input, Button } from 'antd';
import FormItem from 'antd/lib/form/FormItem';

/*

   This is the grandfather component. In the 'downwards direct' flow, data is passed through all of the components in the hierarchy.
   That means that the data passes through every component 'below' the one that wishes to pass data. To use this method you simply 
   need to pass the data in the component as shown below. In our example we used some hypothetical 'grandfather', 'father' and 'child' 
   components to show that the data needs to pass through every component. Inside the <FatherDD> component we set a value called 
   data to which we assign the values we need to send downwards. After that the father component receives it and passes it down to the 
   child in the same way. For the code to make more sense you should checkout the fatherDownwardsDirect.js component. 

*/

export default function grandFatherDownwards() {
  const [grandData, setGrandData] = useState("default")

  function onFinish(values) {
    setGrandData(values.name)
  }

  return (
    <div>
      <Row>
        <Col span={8}></Col>
        <Col span={8}>
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

          </Card>
        </Col>
        <Col span={8}></Col>
        <Col span={8}></Col>
      </Row>
    </div>
  )
}
