import 'antd/dist/antd.css';
import {Row, Card} from 'antd';
import ChildContext from './childContext'

export default function fatherDownwards() {
  return (
    <div>
      <Row>
        <Card type="inner" title="I am Father:" style={{width: "100%"}}>
          <ChildContext/>
        </Card>
      </Row>
    </div>
  )
};