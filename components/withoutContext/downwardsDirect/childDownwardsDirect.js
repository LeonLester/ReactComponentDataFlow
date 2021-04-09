import 'antd/dist/antd.css';
import { Row, Card, Descriptions} from 'antd';

export default function childDownwards(fatherProps) {
  return (
    <Row>
      <Card type="inner" title="I am Child:" style={{
        width: "100%"
      }}>
        <h3>With Grandfathers Value: {fatherProps.data}</h3>
      </Card>
    </Row>
  )
};