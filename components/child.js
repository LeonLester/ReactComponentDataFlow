import 'antd/dist/antd.css';
import {Button, Form, Input} from 'antd';
import FormItem from 'antd/lib/form/FormItem';
import {useState} from 'react';

export default function child(Pageprops) {
  console.log(Pageprops.data,"child")
  const [childData, setChildData]= useState("default")
  const changeSomonesState = Pageprops?.changeStateFunction

  function onFinish(values) {
    changeSomonesState(values.name)
  }

  return (
    <div>eimai to paidi {changeSomonesState
        ? <Form onFinish={onFinish}>
            <FormItem name="name">
              <Input></Input>
            </FormItem>
            <FormItem>
              <Button htmlType="submit">
                ok!
              </Button>
            </FormItem>
          </Form>
        : <span>{"daddyValue"}</span>
}
    </div>
  )
};