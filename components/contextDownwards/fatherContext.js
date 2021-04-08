import 'antd/dist/antd.css';
import {Row, Card} from 'antd';
import ChildContext from './childContext'

export default function fatherDownwards() {
  return (
    <div>
      <Row>
        <Card title="eimai o pateras" style={{width: "100%"}}>
          <ChildContext/>
        </Card>
      </Row>
    </div>
  )
};