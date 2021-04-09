import Child from './child';
import {MyContext} from './grandFather';
import 'antd/dist/antd.css';
import {Row, Card} from 'antd';
import {useContext} from 'react';

export default function father() {
    return (
        <div>
            <Row>
                <Card type="inner" title="Father" style={{width: "100%"}}>
                    <Child/>
                </Card>
            </Row>
        </div>
    )
}