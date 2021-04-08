import 'antd/dist/antd.css';
import {Row, Card, Col} from 'antd';
import {useState} from 'react';
import ChildLeft from './childLeft';
import ChildRight from './childRight';

export default function fatherSiblings() {

  const [siblingData,setSiblingData] = useState("Default");

  return (
    <div>
        <Row justify="center">
            <Col span={24}>
                <Card 
                    title="Father" 
                    style={{ width: "100%"}}
                    extra={<h3>{siblingData}</h3>}
                >
                    <div className="site-card-wrapper">
                        <Row gutter={16}>
                            <Col span={12}>
                                <ChildLeft data={siblingData} changeStateFunction={setSiblingData}/>
                            </Col>
                            <Col span={12}>
                                <ChildRight data={siblingData} changeStateFunction={setSiblingData}/>
                            </Col>
                        </Row>
                    </div>
                </Card>
            </Col>
        </Row>
    </div>
  )
};