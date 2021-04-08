import 'antd/dist/antd.css';
import {Row, Card} from 'antd';
import ChildDD from './childDownwardsDirect'

export default function fatherDownwards(grandFatherprops) {

  return (
    <div>
      <Row>
        <Card type="inner" title="I am Father:" style={{width: "100%"}}>
          <ChildDD data={grandFatherprops.data}></ChildDD>
        </Card>
      </Row>
    </div>
  )
};