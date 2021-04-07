import 'antd/dist/antd.css';
import {Button, Form, Input, Row, Col} from 'antd';
import FormItem from 'antd/lib/form/FormItem';
import {useState} from 'react';

export default function child(Pageprops) {
  console.log(Pageprops.data, "child")
  const [childData,
    setChildData] = useState("default")
  const changeSomonesState = Pageprops
    ?.changeStateFunction

  function onFinish(values) {
    changeSomonesState(values.name)
  }

  return (
    <div>{changeSomonesState
        ? <div>
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
        : <span>{childData}</span>
}
    </div>
  )
};