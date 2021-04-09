import 'antd/dist/antd.css';
import {Row, Card,Descriptions,Typography} from 'antd';
import ChildDD from './childDownwardsDirect'
const { Paragraph, Text } = Typography;

export default function fatherDownwards(grandFatherprops) {

  return (
    <div>
      <Row>
        <Card type="inner" title="Father" style={{width: "100%"}}>
          <ChildDD data={grandFatherprops.data}></ChildDD>
        </Card>
      </Row>
    </div>
  )
};