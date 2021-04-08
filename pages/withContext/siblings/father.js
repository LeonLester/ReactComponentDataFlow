import React from 'react';
import {createContext, useState} from 'react';
import {Row, Col, Card} from 'antd';
import 'antd/dist/antd.css';
import ChildLeft from './childLeft';
import ChildRight from './childRight';


export const MyContext = createContext();

export default function father() {
    const [data,setData] = useState("Default");
       
    return (
        <div>
            <Row>
                <Col span={8}></Col>
                    <Col span={8}>
                    <Card title="Father" extra={<h1>{}</h1>} style={{ width: "100%"}}>
                        <MyContext.Provider 
                            value={{
                                state: data,
                                setState: setData,
                            }}
                        >
                            <ChildLeft/>
                            <ChildRight/>
                        </MyContext.Provider>
                    </Card>
                </Col>
                <Col span={8}></Col>
                <Col span={8}></Col>
            </Row>
        </div>
    )
}

