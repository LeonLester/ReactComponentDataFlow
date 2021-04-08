import Father from './father';
import React from 'react';
import {createContext, useState} from 'react';
import {Row, Col, Card} from 'antd';
import 'antd/dist/antd.css';

export const MyContext = createContext();

export default function grandFather() {
    const [grandData,setGrandData] = useState("Default");
    
    return (
        <div>
            <Row>
                <Col span={8}></Col>
                    <Col span={8}>
                    <Card title="Grandfather" extra={<h1>{grandData}</h1>} style={{ width: "100%"}}>
                        <MyContext.Provider  value={{
                            state: grandData,
                            setState: setGrandData,
                        }}>
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

