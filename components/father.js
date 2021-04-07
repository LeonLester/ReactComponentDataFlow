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
import Child from '../components/child'

export default function father(props) {
  console.log(props, "Father")
  //   const changeSomonesState = props.changeStateFunction   function
  // onFinish(values) {     changeSomonesState(values.name)   }

  return (
    <div>
      <Row>
        <Card title="eimai o pateras" style={{
          width: "100%"
        }}>
          <Card title="eimai to paidi" style={{
            width: "100%"
          }}>
            <Child data={props.data} changeStateFunction={props.stateFunction}></Child>
          </Card>
        </Card>
      </Row>
    </div>
  )
};