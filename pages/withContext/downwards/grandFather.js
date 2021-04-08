import Father from './father';
import React from 'react';
import {createContext, useState} from 'react';
import FormItem from 'antd/lib/form/FormItem';
import {Row, Col,Form,Card,Input,Button} from 'antd';
import 'antd/dist/antd.css';

export const MyContext = createContext();

export default function grandFather() {
    const [grandData,setGrandData] = useState("Default");
    function onFinish(values) {
        setGrandData(values.name);
    }
    
    return (
        <div>
            <Row>
                <Col span={8}></Col>
                    <Col span={8}>
                    <Card title="Grandfather" extra={<h1>{grandData}</h1>} style={{ width: "100%"}}>
                        <Form onFinish={onFinish}>
                            <FormItem name="name">
                                <Input maxLength="10"></Input>
                            </FormItem>
                            <FormItem>
                                <Button htmlType="submit">
                                    Send to Grandchild.
                                </Button>
                            </FormItem>
                        </Form>
                        <MyContext.Provider value={grandData}>
                            <Father/>
                        </MyContext.Provider>
                    </Card>
                </Col>
                <Col span={8}></Col>
                <Col span={8}></Col>
            </Row>
        </div>
    )
}

