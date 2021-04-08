import 'antd/dist/antd.css';
import {Row, Card, Divider, Col} from 'antd';
import {useState} from 'react'
import ChildSiblings from './childSibling'

export default function fatherSiblings() {

  const [siblingData1,
    setSiblingData1] = useState("")
  const [siblingData2,
    setSiblingData2] = useState("")

  return (
    <div>
      <Row justify="center">
        <Col span={24}>
          <Card title="I am Father" style={{
            width: "100%"
          }}>
            <div className="site-card-wrapper">
              <Row gutter={16}>
                <Col span={12}>
                  <Card type="inner" title="Child1">
                    <ChildSiblings data={siblingData1} changeStateFunction={setSiblingData2}></ChildSiblings>
                  </Card>
                </Col>
                <Col span={12}>
                  <Card type="inner" title="Child2">
                    <ChildSiblings data={siblingData2} changeStateFunction={setSiblingData1}></ChildSiblings>
                  </Card>
                </Col>
              </Row>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  )
};