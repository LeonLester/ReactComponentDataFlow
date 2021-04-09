import 'antd/dist/antd.css';
import {Row, Card,Descriptions,Typography} from 'antd';
import ChildDD from './childDownwardsDirect'
const { Paragraph, Text } = Typography;

export default function fatherDownwards(grandFatherprops) {

  return (
    <div>
      <Row>
        <Card type="inner" title="I am Father:" style={{width: "100%"}}>
          <ChildDD data={grandFatherprops.data}></ChildDD>
          <Descriptions title="Info About Father">
              <Descriptions.Item >
              <Paragraph>
              This is the father component. It expects some values from the grandfather component so it can pass it on. Firstly you need to give
              the props it will receive a name (in this case grandFatherprops) inside the default function. If you console.log these props you'll 
              find it has a single property called data and its value is the data that it was assigned by the grandfather component. So in this case
              the grandData. Lastly same as before we pass it to the <Text code style={{color:"green"}}>Child</Text> component in the same way as before. Next you should checkout the 
              childDownwardsDirect.js component.
              </Paragraph> 
              </Descriptions.Item>
            </Descriptions>
        </Card>
      </Row>
    </div>
  )
};