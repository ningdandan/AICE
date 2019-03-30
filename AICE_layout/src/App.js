import {Row, Col} from 'antd'

import React, { Component } from 'react';
import './App.css';

import Schematics from './containers/Schematics'
import StatusPanel from './containers/StatusPanel'
import Navbar from './components/Navbar'


class App extends Component {
  render() {
    return (
      <div  className="App">
        <Navbar />
        <Row>
            <Col span={18}>
                <Schematics />
            </Col>

            <Col span={6}>
                <StatusPanel />
            </Col>
            </Row>

        
      </div>
    );
  }
}

export default App;
