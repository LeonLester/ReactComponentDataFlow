import {MyContext} from './grandFather';
import 'antd/dist/antd.css';
import {useContext} from 'react';
import {Row, Card} from 'antd';
export default function child() {
    const context = useContext(MyContext);
    return (
        <div>
            <Row>
                <Card title="Child" extra={<h1>{context}</h1>} style={{width: "100%"}}>
                    Downwards use of Context.
                </Card>
            </Row>
        </div>
    )
}