import Father from './father';
import React from 'react';
import {createContext, useState} from 'react';
import FormItem from 'antd/lib/form/FormItem';
import {Row, Col,Form,Card,Input,Button,Descriptions,Typography} from 'antd';
const { Paragraph, Text } = Typography;
import 'antd/dist/antd.css';

/*
    This is the 'downwards' with Context flow. Generally using React's Contex can help you transfer data from Higher Order Components to 
    Lower ones without using every component in the hierarchy. To achieve this firstly we use the createContext method provided by react.
    This method returns the context provider and the context consumer. This tutorial does NOT use the consumer, instead we use the 
    useContext hook. In the following example we wrap our LOC in a <MyContext.Provider> tag where 'MyContext' is the variable we assigned
    the return of the createContext function and we export it from the file. After that, to access the data in the LOC we simply
    import MyContext inside the components definition and we use it.
*/

export const MyContext = createContext();

export default function grandFather() {
    const [grandData,setGrandData] = useState("Default");
    function onFinish(values) {
        setGrandData(values.name);
    }
    
    return (
        <div>
            <Row>
                <Col span={24}>
                    <Card type="inner" title="Grandfather" extra={<h1>{grandData}</h1>} style={{ width: "100%"}}>
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
                        <Descriptions title="Info About Using Context">
                    <Descriptions.Item >
                    <Paragraph>
                    This is the <Text code style={{color:"green"}}>downwards</Text> with Context flow. Generally using React's Contex can help you transfer data from Higher Order Components to 
                    Lower ones without using every component in the hierarchy. To achieve this firstly we use the createContext method provided by react.
                    This method returns the context provider and the context consumer. This tutorial does NOT use the consumer, instead we use the 
                    useContext hook. In the following example we wrap our LOC in a <Text code style={{color:"green"}}>MyContext.Provider</Text> tag where 'MyContext' is the variable we assigned
                    the return of the createContext function and we export it from the file. After that, to access the data in the LOC we simply
                    import MyContext inside the components definition and we use it.
                    </Paragraph>   
                    </Descriptions.Item>
                    </Descriptions>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

