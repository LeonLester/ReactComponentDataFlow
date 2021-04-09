import 'antd/dist/antd.css';
import {Row, Col, Card, Button, Modal} from 'antd';
import DownwardsWithoutCtx from '../pages/withoutContext/downwards'
import UpwardsWithoutCtx from '../pages/withoutContext/upwards'
import SiblingsWithoutCtx from '../pages/withoutContext/siblings'
import CousinsWithoutCtx from '../pages/withoutContext/cousins'
import DownwardsWithCtx from '../pages/withContext/downwards'
import UpwardsWithCtx from '../pages/withContext/upwards'
import SiblingsWithCtx from '../pages/withContext/siblings'
import CousinsWithCtx from '../pages/withContext/cousins'

import {useState} from 'react'
export default function home() {
  const [isModalVisible,
    setIsModalVisible] = useState(false);
  const [isModalVisible1,
    setIsModalVisible1] = useState(false);
  const [isModalVisible2,
    setIsModalVisible2] = useState(false);
  const [isModalVisible3,
    setIsModalVisible3] = useState(false);
  const [isModalVisible4,
    setIsModalVisible4] = useState(false);
  const [isModalVisible5,
    setIsModalVisible5] = useState(false);
  const [isModalVisible6,
    setIsModalVisible6] = useState(false);
  const [isModalVisible7,
    setIsModalVisible7] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };
  const showModal1 = () => {
    setIsModalVisible1(true);
  };
  const showModal2 = () => {
    setIsModalVisible2(true);
  };
  const showModal3 = () => {
    setIsModalVisible3(true);
  };
  const showModal4 = () => {
    setIsModalVisible4(true);
  };
  const showModal5 = () => {
    setIsModalVisible5(true);
  };
  const showModal6 = () => {
    setIsModalVisible6(true);
  };
  const showModal7 = () => {
    setIsModalVisible7(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setIsModalVisible1(false);
    setIsModalVisible2(false);
    setIsModalVisible3(false);
    setIsModalVisible4(false);
    setIsModalVisible5(false);
    setIsModalVisible6(false);
    setIsModalVisible7(false);
  };
  return (
    <Row>
      <Col span={12} offset={6} style={{
        marginTop: 100
      }}>
        <Card
          type="inner"
          title="Welcome To Rect - Next Component Flows"
          style={{
          width: "100%"
        }}>
          <div className="site-card-wrapper">
            <Row gutter={16}>
              <Col span={12}>
                <Card type="inner" title="Pass Props From GrandFather To Child">
                  <Button shape="round" type="primary" onClick={showModal}>
                    Give It A Try!
                  </Button>
                  <Modal
                    title="Pass Props From GrandFather To Child"
                    visible={isModalVisible}
                    onOk={handleCancel}
                    onCancel={handleCancel}
                    width={1500}>
                    <DownwardsWithoutCtx/>
                  </Modal>
                </Card>
              </Col>
              <Col span={12}>
                <Card type="inner" title="Pass Props From Child To GrandFather">
                  <Button shape="round" type="primary" onClick={showModal2}>
                    Give It A Try!
                  </Button>
                  <Modal
                    title="Pass Props From Child To GrandFather"
                    visible={isModalVisible2}
                    onOk={handleCancel}
                    onCancel={handleCancel}
                    width={1500}>
                    <UpwardsWithoutCtx/>
                  </Modal>
                </Card>
              </Col>
            </Row>
          </div>
          <div className="site-card-wrapper">
            <Row gutter={16}>
              <Col span={12} style={{
                marginTop: 16
              }}>
                <Card type="inner" title="Pass Props From One Brother To The Other">
                  <Button shape="round" type="primary" onClick={showModal1}>
                    Give It A Try!
                  </Button>
                  <Modal
                    title="Pass Props From One Brother To The Other"
                    visible={isModalVisible1}
                    onOk={handleCancel}
                    onCancel={handleCancel}
                    width={1500}>
                    <SiblingsWithoutCtx/>
                  </Modal>
                </Card>
              </Col>
              <Col span={12} style={{
                marginTop: 16
              }}>
                <Card type="inner" title="Pass Props Between Cousins">
                  <Button shape="round" type="primary" onClick={showModal3}>
                    Give It A Try!
                  </Button>
                  <Modal
                    title="Pass Props Between Cousins"
                    visible={isModalVisible3}
                    onOk={handleCancel}
                    onCancel={handleCancel}
                    width={1500}>
                    <CousinsWithoutCtx/>
                  </Modal>
                </Card>
              </Col>
            </Row>
          </div>
          <div className="site-card-wrapper">
            <Row gutter={16}>
              <Col span={12} style={{
                marginTop: 16
              }}>
                <Card type="inner" title="Pass Props From GrandFather To Child Using Context">
                  <Button  shape="round" type="primary" onClick={showModal4}>
                    Give It A Try!
                  </Button>
                  <Modal
                    title="Pass Props From GrandFather To Child Using Context"
                    visible={isModalVisible4}
                    onOk={handleCancel}
                    onCancel={handleCancel}
                    width={1500}>
                    <DownwardsWithCtx/>
                  </Modal>
                </Card>
              </Col>
              <Col span={12} style={{
                marginTop: 16
              }}>
                <Card type="inner" title="Pass Props From Child To GrandFather Using Context">
                  <Button shape="round" type="primary" onClick={showModal5}>
                    Give It A Try!
                  </Button>
                  <Modal
                    title="Pass Props From Child To GrandFather Using Context"
                    visible={isModalVisible5}
                    onOk={handleCancel}
                    onCancel={handleCancel}
                    width={1500}>
                    <UpwardsWithCtx/>
                  </Modal>
                </Card>
              </Col>
            </Row>
          </div>
          <div className="site-card-wrapper">
            <Row gutter={16}>
              <Col span={12} style={{
                marginTop: 16
              }}>
                <Card
                  type="inner"
                  title="Pass Props From One Brother To The Other Using Context">
                  <Button shape="round" type="primary" onClick={showModal6}>
                    Give It A Try!
                  </Button>
                  <Modal
                    title="Pass Props From One Brother To The Other Using Context"
                    visible={isModalVisible6}
                    onOk={handleCancel}
                    onCancel={handleCancel}
                    width={1500}>
                    <SiblingsWithCtx/>
                  </Modal>
                </Card>
              </Col>
              <Col span={12} style={{
                marginTop: 16
              }}>
                <Card type="inner" title="Pass Props Between Cousins Using Context">
                  <Button shape="round" type="primary" onClick={showModal7}>
                    Give It A Try!
                  </Button>
                  <Modal
                    title="Pass Props Between Cousins Using Context"
                    visible={isModalVisible7}
                    onOk={handleCancel}
                    onCancel={handleCancel}
                    width={1500}>
                    <CousinsWithCtx/>
                  </Modal>
                </Card>
              </Col>
            </Row>
          </div>
        </Card>
      </Col>
    </Row>
  )
}