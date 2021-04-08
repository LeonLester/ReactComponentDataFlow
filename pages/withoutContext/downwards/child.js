import 'antd/dist/antd.css';
import {Row,Card} from 'antd';

export default function child(fatherProps) {
  return (
    <Row>
      <Card 
        type="inner" 
        title="Child" 
        extra={<h1>{fatherProps.data}</h1>} 
        style={{width: "100%"}}>
      </Card>
    </Row>
  )
};