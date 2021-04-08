import 'antd/dist/antd.css';
import {Row, Card} from 'antd';
import ChildDD from './childDownwardsDirect'

export default function father(props) {

  return (
    <div>
      <Row>
        <Card title="eimai o pateras" style={{width: "100%"}}>
          <ChildDD data={props.data}></ChildDD>
        </Card>
      </Row>
    </div>
  )
};