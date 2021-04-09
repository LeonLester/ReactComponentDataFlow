import 'antd/dist/antd.css';
import {Row,Card,} from 'antd';
import ChildUP from './childUpwardsDirect'

/* 
    Same as before in the downwards flow but this time we pass the setter function. 
*/
export default function fatherUpwards(grandfatherProps) {
    console.log(grandfatherProps)
    return (
        <div>
            <Row>
                <Card type="inner" title="I am Father:" style={{ width: "100%" }}>

                    <ChildUP data={grandfatherProps.data} changeStateFunction={grandfatherProps.stateFunction}></ChildUP>

                </Card>
            </Row>
        </div>
    )
};