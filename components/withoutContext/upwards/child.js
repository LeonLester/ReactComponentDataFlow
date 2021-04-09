import 'antd/dist/antd.css';
import {Button, Form, Input,Card} from 'antd';
import FormItem from 'antd/lib/form/FormItem';

export default function child(fatherProps) {
  const changeSomonesState = fatherProps?.changeStateFunction

  function onFinish(values) {
    changeSomonesState(values.name)
  }

  return (
    <Card 
      type="inner" 
      title="Child" 
      extra={<h1>{fatherProps.data}</h1>} 
      style={{ width: "100%"}}
    >
      <div>
        <Form onFinish={onFinish}>
            <FormItem name="name">
              <Input></Input>
            </FormItem>
          <FormItem>
            <Button htmlType="submit">
              Send to grandfather.
            </Button>
          </FormItem>
        </Form>
      </div>
    </Card>
  )
};