import 'antd/dist/antd.css';
import {Row,Card} from 'antd';

/*
  This the Child component. Same as its father, it states that it will accept props (fatherProps which if you console.log will contain 
  a data var with the grandData passed from its father. Once it receives the props it can use them however it likes. In this example 
  we just view it in a span.
*/
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