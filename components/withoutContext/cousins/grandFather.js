import 'antd/dist/antd.css';
import {Row, Card, Col} from 'antd';
import {useState} from 'react';
import FatherLeft from './fatherLeft';
import FatherRight from './fatherRight';

/*

*/
export default function grandFather() {

  const [leftChildData, setLeftChildData] = useState("Default")
  const [rightChildData, setRightChildData] = useState("Default")

  return (
    <div>
        <Row justify="center">
            <Col span={24}>
                <Card 
                    type="inner"
                    title="Grandfather" 
                    style={{ width: "100%"}}
                   
                >
                    <div className="site-card-wrapper">
                        <Row gutter={16}>
                            <Col span={12}>
                                <FatherLeft data={leftChildData} changeStateFunction={setRightChildData}/>
                            </Col>
                            <Col span={12}>
                                <FatherRight data={rightChildData} changeStateFunction={setLeftChildData}/>
                            </Col>
                        </Row>
                    </div>
                </Card>
            </Col>
        </Row>
    </div>
  )
};