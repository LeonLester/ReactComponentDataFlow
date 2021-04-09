import ChildRight from './childRight';
import {MyContext} from './grandFather';
import 'antd/dist/antd.css';
import {Row, Card} from 'antd';
import {useContext} from 'react';

export default function father() {
    return (
        <div>
            <Row>
                <Card type="inner" title="Right Father" style={{width: "100%"}}>
                    <ChildRight/>
                </Card>
            </Row>
        </div>
    )
}