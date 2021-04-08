import 'antd/dist/antd.css';
import {Row,Card} from 'antd';

export default function childDownwards(fatherProps) {
  return (
    <Row>
      <Card type="inner" title="I am Child:" style={{
        width: "100%"
      }}>
        <span>With Grandfathers Value:{fatherProps.data}</span>
      </Card>
    </Row>
  )
};