import 'antd/dist/antd.css';
import {Button, Form, Input,Card} from 'antd';
import FormItem from 'antd/lib/form/FormItem';

/*
  The child receives the data and when the button is clicked we use the function and pass it the user input value as the arguments.
*/

export default function childUpwards(fatherProps) {
  const changeSomonesState = fatherProps?.changeStateFunction

  function onFinish(values) {
    changeSomonesState(values.name)
  }

  return (
    <Card type="inner" title="I am Child:" extra={<h1>{fatherProps.data}</h1>} style={{ width: "100%"}}>
      <div>
        <h3>GrandFathers:{fatherProps.data}</h3>
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
     </Card>
  )
};