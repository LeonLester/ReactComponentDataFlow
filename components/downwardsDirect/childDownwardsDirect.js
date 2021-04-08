import 'antd/dist/antd.css';
import {Row,Card} from 'antd';

export default function childDownwards(fatherProps) {
  return (
    <Row>
      <Card title="eimai to paidi" style={{
        width: "100%"
      }}>
        <span>{fatherProps.data}</span>
      </Card>
    </Row>
  )
};