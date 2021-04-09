import ChildLeft from './childLeft';
import {MyContext} from './grandFather';
import 'antd/dist/antd.css';
import {Row, Card} from 'antd';
import {useContext} from 'react';

export default function father() {


    return (
        <div>
            <Row>
                <Card type="inner" title="Left Father" style={{width: "100%"}}>
                    <ChildLeft/>
                </Card>
            </Row>
        </div>
    )
}