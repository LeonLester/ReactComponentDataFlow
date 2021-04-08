import 'antd/dist/antd.css';
import {Button, Form, Input, Row, Col} from 'antd';
import FormItem from 'antd/lib/form/FormItem';
import {useState} from 'react';

export default function child2(Pageprops) {
  console.log(Pageprops, "child2")
  const changeSomonesState = Pageprops?.changeStateFunction
  function onFinish(values) {
    changeSomonesState(values.name)
  }

  return (
    <div>{changeSomonesState
        ? <div>
            <h1>dose timh</h1>
            <h3>h timi h dikia mou:{Pageprops.siblingsData}</h3>
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
        : <span>{Pageprops.data}</span>
}
    </div>
  )
};