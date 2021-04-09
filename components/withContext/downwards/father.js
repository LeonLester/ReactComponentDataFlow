import Child from './child';
import {MyContext} from './grandFather';
import 'antd/dist/antd.css';
import {Row, Card} from 'antd';
import {useContext} from 'react';

export default function father() {
    const context = useContext(MyContext);
    return (
        <div>
            <Row>
                <Card type="inner" title="Father" extra={<h1>{context}</h1>} style={{width: "100%"}}>
                    <Child/>
                </Card>
            </Row>
        </div>
    )
}