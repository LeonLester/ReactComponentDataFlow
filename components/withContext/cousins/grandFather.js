import React from 'react';
import {createContext, useState} from 'react';
import {Row, Col, Card} from 'antd';
import 'antd/dist/antd.css';
import FatherLeft from './fatherLeft';
import FatherRight from './fatherRight';


export const MyContext = createContext();

export default function grandFather() {
    const [data,setData] = useState("Default");
       
    return (
        <div>
            <Row>
                <Col span={24}>
                    <Card type="inner" title="GrandFather" extra={<h1>{data}</h1>} style={{ width: "100%"}}>
                        <MyContext.Provider 
                            value={{
                                state: data,
                                setState: setData,
                            }}
                        >   
                                <Row justify="space-between" gutter={16}>
                                <Col span={12}><FatherLeft/></Col>
                                <Col span={12}><FatherRight/></Col>
                                </Row>
                        </MyContext.Provider>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

