import ChildRight from './childRight';
import {MyContext} from './grandFather';
import 'antd/dist/antd.css';
import {Row, Card} from 'antd';
import {useContext} from 'react';

export default function father() {
    const context = useContext(MyContext);
    return (
        <div>
            <Row>
                <Card type="inner" title="Right Father" extra={<h1>{context.state}</h1>} style={{width: "100%"}}>
                    <ChildRight/>
                </Card>
            </Row>
        </div>
    )
}