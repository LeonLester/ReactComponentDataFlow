import 'antd/dist/antd.css';
import {Row, Col, Space, Card} from 'antd';
const gridStyle = {
  width: '50%',
  textAlign: 'center'
};
export default function home() {
  return (
    <Row>
      <Col span={12} offset={6}>
        <Card
          type="inner"
          title="Welcome To Rect - Next Component Flows"
          style={{
          width: "100%"
        }}>
          <div className="site-card-wrapper">
            <Row gutter={16}>
              <Col span={12}>
                <Card type="inner" title="Pass Props From GrandFather To Child">
                  Inner Card content
                </Card>
              </Col>
              <Col span={12} >
                <Card
                  type="inner"
                  title="Pass Props From Child To GrandFather">
                  Inner Card content
                </Card>
              </Col>
            </Row>
          </div>
          <div className="site-card-wrapper" >
            <Row gutter={16}>
              <Col span={12} style={{ marginTop: 16 }} >
                <Card type="inner" title="Pass Props From One Brother To The Other">
                  Inner Card content
                </Card>
              </Col>
              <Col span={12} style={{ marginTop: 16 }}>
                <Card
                  type="inner"
                  title="Pass Props Between Cousins">
                  Inner Card content
                </Card>
              </Col>
            </Row>
          </div>
          <div className="site-card-wrapper">
            <Row gutter={16}>
              <Col span={12} style={{ marginTop: 16 }} >
                <Card type="inner" title="Pass Props From GrandFather To Child Using Context">
                  Inner Card content
                </Card>
              </Col>
              <Col span={12} style={{ marginTop: 16 }}>
                <Card
                  type="inner"
                  title="Pass Props From Child To GrandFather Using Context">
                  Inner Card content
                </Card>
              </Col>
            </Row>
          </div>
          <div className="site-card-wrapper">
            <Row gutter={16}>
              <Col span={12} style={{ marginTop: 16 }} >
                <Card type="inner" title="Pass Props From One Brother To The Other Using Context">
                  Inner Card content
                </Card>
              </Col>
              <Col span={12} style={{ marginTop: 16 }}>
                <Card
                  type="inner"
                  title="Pass Props Between Cousins Using Context">
                  Inner Card content
                </Card>
              </Col>
            </Row>
          </div>
        </Card>
      </Col>
    </Row>
  )
}