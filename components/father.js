import 'antd/dist/antd.css';
import {Button, Form, Input} from 'antd';
import FormItem from 'antd/lib/form/FormItem';
import Child from '../components/child'

export default function father(props) {
  console.log(props, "Father")
  //   const changeSomonesState = props.changeStateFunction   function
  // onFinish(values) {     changeSomonesState(values.name)   }

  return (
    <h1>eimai o pateras
      <Child data={props.data} changeStateFunction={props.stateFunction}></Child>
    </h1>

  )
};