import 'antd/dist/antd.css';
import {Row, Card, Col} from 'antd';
import {useState} from 'react';
import ChildLeft from './childLeft';
import ChildRight from './childRight';

export default function fatherSiblings() {

  
    const [siblingData1,
        setSiblingData1] = useState("")
      const [siblingData2,
        setSiblingData2] = useState("")

  return (
    <div>
        <Row justify="center">
            <Col span={24}>
                <Card 
                    type="inner"
                    title="Father" 
                    style={{ width: "100%"}}>
                    <div className="site-card-wrapper">
                        <Row gutter={16}>
                            <Col span={12}>
                                <ChildLeft data={siblingData1} changeStateFunction={setSiblingData2}/>
                            </Col>
                            <Col span={12}>
                                <ChildRight data={siblingData2} changeStateFunction={setSiblingData1}/>
                            </Col>
                        </Row>
                    </div>
                </Card>
            </Col>
        </Row>
    </div>
  )
};