import 'antd/dist/antd.css';
import {Button, Form, Input} from 'antd';
import FormItem from 'antd/lib/form/FormItem';

export default function childUpwards(fatherProps) {
  const changeSomonesState = fatherProps?.changeStateFunction

  function onFinish(values) {
    changeSomonesState(values.name)
  }

  return (
    <div>
      <h3>h timi h dikia mou:{fatherProps.data}</h3>
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
  )
};