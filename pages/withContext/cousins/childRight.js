import {MyContext} from './grandFather';
import 'antd/dist/antd.css';
import {useContext} from 'react';
import {Row, Form, Card, Input, Button} from 'antd';
import FormItem from 'antd/lib/form/FormItem';



export default function childRight() {
    const context = useContext(MyContext);
    
    function onFinish(values) {
        context.setState(values.name);
    }

    return (
        <div>
            <Row>
                <Card title="Right Child" extra={<h1>{context.state}</h1>} style={{width: "100%"}}>
                    <Form onFinish={onFinish}>
                        <FormItem name="name">
                            <Input maxLength="10"></Input>
                        </FormItem>
                        <FormItem>
                            <Button htmlType="submit">
                                Send to cousin.
                            </Button>
                        </FormItem>
                    </Form>
                </Card>
            </Row>
        </div>
    )
}