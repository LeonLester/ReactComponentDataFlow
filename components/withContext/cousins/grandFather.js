import React from 'react';
import { createContext, useState } from 'react';
import { Row, Col, Card } from 'antd';
import 'antd/dist/antd.css';
import FatherLeft from './fatherLeft';
import FatherRight from './fatherRight';


export const rightChildContext = createContext();
export const leftChildContext = createContext()
export default function grandFather() {

    const [leftCousinData, setLeftCousinData] = useState("Default")
    const [rightCousinData, setRightCousinData] = useState("Default")
    return (
        <div>
            <Row>
                <Col span={24}>
                    <Card type="inner" title="GrandFather" style={{ width: "100%" }}>

                        <Row justify="space-between" gutter={16}>
                            <leftChildContext.Provider
                                value={{
                                    state: leftCousinData,
                                    setState: setRightCousinData,
                                }}
                            >
                                <Col span={12}><FatherLeft /></Col>
                            </leftChildContext.Provider>
                            <rightChildContext.Provider
                                value={{
                                    state: rightCousinData,
                                    setState: setLeftCousinData,
                                }}
                            >
                                <Col span={12}><FatherRight /></Col>
                            </rightChildContext.Provider>
                        </Row>

                    </Card>
                </Col>
            </Row>
        </div>
    )
}

