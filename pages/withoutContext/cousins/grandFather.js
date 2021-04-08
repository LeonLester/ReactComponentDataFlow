import 'antd/dist/antd.css';
import {Row, Card, Col} from 'antd';
import {useState} from 'react';
import FatherLeft from './fatherLeft';
import FatherRight from './fatherRight';

export default function grandFather() {

  const [fatherData,setGrandFatherData] = useState("Default");

  return (
    <div>
        <Row justify="center">
            <Col span={24}>
                <Card 
                    title="Grandfather" 
                    style={{ width: "100%"}}
                    extra={<h3>{fatherData}</h3>}
                >
                    <div className="site-card-wrapper">
                        <Row gutter={16}>
                            <Col span={12}>
                                <FatherLeft data={fatherData} changeStateFunction={setGrandFatherData}/>
                            </Col>
                            <Col span={12}>
                                <FatherRight data={fatherData} changeStateFunction={setGrandFatherData}/>
                            </Col>
                        </Row>
                    </div>
                </Card>
            </Col>
        </Row>
    </div>
  )
};