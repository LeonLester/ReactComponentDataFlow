import React from 'react';
import {createContext, useState} from 'react';
import {Row, Col, Card} from 'antd';
import 'antd/dist/antd.css';
import ChildLeft from './childLeft';
import ChildRight from './childRight';

export const MyContext = createContext();

export default function father() {
  const [data,
    setData] = useState("Default");

  return (
    <div>
      <Row>
        <Col span={24}>
          <Card
          type="inner"
            title="Father"
            extra={<h1> {} </h1>}
            style={{
            width: "100%"
          }}>
            <MyContext.Provider
              value={{
              state: data,
              setState: setData
            }}>
              <Row gutter={16}>
                <Col span={12}>
                  <ChildLeft/>
                </Col>
                <Col span={12} >
                  <ChildRight/>
                </Col>
              </Row>
            </MyContext.Provider>
          </Card>
        </Col>
      </Row>
    </div>
  )
}
