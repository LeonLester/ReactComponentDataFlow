import 'antd/dist/antd.css';
import {Button, Form, Input,Card} from 'antd';
import FormItem from 'antd/lib/form/FormItem';

export default function childSiblings(fatherProps) {
  const changeSomonesState = fatherProps
    ?.changeStateFunction

  function onFinish(values) {
    changeSomonesState(values.name)
  }

  return (
    <Card title="eimai to paidi" extra={<h3>h timi h dikia mou:{fatherProps.data}</h3>} style={{width: "100%" }}>
      <div>
        <h1>dose timh</h1>
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