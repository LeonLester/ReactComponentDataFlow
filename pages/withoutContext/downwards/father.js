import 'antd/dist/antd.css';
import {Row, Card} from 'antd';
import Child from './child';

export default function father(grandFatherprops) {
  return (
    <div>
      <Row>
        <Card type="inner" title="Father" extra={<h1>{grandFatherprops.data}</h1>} style={{width: "100%"}}>
          <Child data={grandFatherprops.data} />
        </Card>
      </Row>
    </div>
  )
};