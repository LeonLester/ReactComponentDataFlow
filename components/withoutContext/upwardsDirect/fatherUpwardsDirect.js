import 'antd/dist/antd.css';
import {Row,Card,Descriptions} from 'antd';
import ChildUP from './childUpwardsDirect'

export default function fatherUpwards(grandfatherProps) {
    console.log(grandfatherProps)
    return (
        <div>
            <Row>
                <Card type="inner" title="I am Father:" style={{ width: "100%" }}>

                    <ChildUP data={grandfatherProps.data} changeStateFunction={grandfatherProps.stateFunction}></ChildUP>
                    <Descriptions title="Info About Father">
                        <Descriptions.Item >Same as before in the downwards flow but this time we pass the setter function.
                        </Descriptions.Item>
                    </Descriptions>
                </Card>
            </Row>
        </div>
    )
};