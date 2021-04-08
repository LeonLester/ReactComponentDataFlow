import 'antd/dist/antd.css';
import {Button, Form, Input,Card} from 'antd';
import FormItem from 'antd/lib/form/FormItem';

export default function childSiblings(fatherProps) {
  const changeSomonesState = fatherProps?.changeStateFunction;

  function onFinish(values) {
    changeSomonesState(values.name);
  }

  return (
    <Card type="inner" title="Left Child" extra={<h3>{fatherProps.data}</h3>} style={{width: "100%" }}>
      <div>
        <Form onFinish={onFinish}>
          <FormItem name="name">
            <Input></Input>
          </FormItem>
          <FormItem>
            <Button htmlType="submit">
              Send to sibling.
            </Button>
          </FormItem>
        </Form>
      </div>
    </Card>
  )
};