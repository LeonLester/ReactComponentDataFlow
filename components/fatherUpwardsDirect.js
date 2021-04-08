import 'antd/dist/antd.css';
import {Row,Card,} from 'antd';
import ChildUP from './childUpwardsDirect'

export default function fatherUpwards(grandfatherProps) {

    return (
        <div>
            <Row>
                <Card title="eimai o pateras" style={{ width: "100%" }}>

                    <ChildUP data={grandfatherProps.data} changeStateFunction={grandfatherProps.stateFunction}></ChildUP>

                </Card>
            </Row>
        </div>
    )
};