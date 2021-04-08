import 'antd/dist/antd.css';
import { GrandFatherContext } from './grandFatherDownwardsContext';
import { useContext } from 'react';
import {Row, Card} from 'antd';

export default function childContext() {
  const context = useContext(GrandFatherContext);
  return (
    <div>
    <Row>
        <Card type="inner" title="I am Child:" style={{width: "100%"}}>
        <h3>value:{context}</h3>
        </Card>
      </Row> 
    </div>
    )
  }