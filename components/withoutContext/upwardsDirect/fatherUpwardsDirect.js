import 'antd/dist/antd.css';
import {Row,Card} from 'antd';
import ChildUP from './childUpwardsDirect'

export default function fatherUpwards(grandfatherProps) {
    console.log(grandfatherProps)
    return (
        <div>
            <Row>
                <Card type="inner" title="Father" style={{ width: "100%" }}>

                    <ChildUP data={grandfatherProps.data} changeStateFunction={grandfatherProps.stateFunction}></ChildUP>
                
                </Card>
            </Row>
        </div>
    )
};