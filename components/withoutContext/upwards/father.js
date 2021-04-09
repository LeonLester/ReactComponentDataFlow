import 'antd/dist/antd.css';
import {Row,Card,} from 'antd';
import Child from './child'

export default function father(grandfatherProps) {
    console.log(grandfatherProps)
    return (
        <div>
            <Row>
                <Card 
                    type="inner" 
                    title="Father" 
                    extra={<h1>{grandfatherProps.data}</h1>} 
                    style={{ width: "100%" }}
                >
                    <Child data={grandfatherProps.data} changeStateFunction={grandfatherProps.stateFunction} />
                </Card>
            </Row>
        </div>
    )
};