import 'antd/dist/antd.css';
import {Row,Card} from 'antd';

export default function child(Pageprops) {
  return (
    <Row>
      <Card title="eimai to paidi" style={{
        width: "100%"
      }}>
        <span>{Pageprops.data}</span>
      </Card>
    </Row>
  )
};