import 'antd/dist/antd.css';
import {Row, Card} from 'antd';
import ChildDD from './childDownwardsDirect'

/*
  This is the father component. It expects some values from the grandfather component so it can pass it on. Firstly you need to give
  the props it will receive a name (in this case grandFatherprops) inside the default function. If you console.log these props you'll 
  find it has a single property called data and its value is the data that it was assigned by the grandfather component. So in this case
  the grandData. Lastly same as before we pass it to the <ChildDD> component in the same way as before. Next you should checkout the 
  childDownwardsDirect.js component.
*/

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