import {Row, Col} from 'antd'
import React from 'react';
import DevicePanel from '../components/DevicePanel'
import Painter from '../components/Painter'
import Toolbar from '../components/Toolbar'

class Schematics extends React.Component {

    render() {
        return (
            <Row>
            <Col span={4}>
                <DevicePanel />
            </Col>


            <Col span={20}>
                <Toolbar />
                <Painter />
            </Col>
            </Row>

        );
    }
}

export default Schematics;

