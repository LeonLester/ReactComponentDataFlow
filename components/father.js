import 'antd/dist/antd.css';
import {
  Button,
  Form,
  Input,
  Row,
  Col,
  Card,
  Divider,
  Space
} from 'antd';
import FormItem from 'antd/lib/form/FormItem';
import {useState} from 'react'
import Child from '../components/child'
import Child2 from '../components/child2'

export default function father(props) {
  console.log(props, "Father")
  const [siblingData1,setSiblingData1] = useState("")
  const [siblingData2,setSiblingData2] = useState("")
  // onFinish(values) {     changeSomonesState(values.name)   }

  return (
    <div>
      <Row>
        <Card title="eimai o pateras" style={{
          width: "100%"
        }}>
          <Card
            title={props.downwards
            ? "eimai to paidi"
            : props.upwards
              ? "eimai to paidi"
              : "eimaste ta paidia"}
            style={{
            width: "100%"
          }}>
            {props.downwards
              ? <Child data={props.data} changeStateFunction={props.stateFunction}></Child>
              : props.upwards
                ? <Child data={props.data} changeStateFunction={props.stateFunction}></Child>
                : <div>
                  <Divider>child1</Divider>
                  <Child data={props.data} siblingsData={siblingData1} changeStateFunction={setSiblingData2}></Child>
                  <Divider>child2</Divider>
                  <Child2 data={props.data} siblingsData={siblingData2} changeStateFunction={setSiblingData1}></Child2>
              </div>}
          </Card>
        </Card>
      </Row>
    </div>
  )
};