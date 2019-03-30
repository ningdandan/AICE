import React from 'react';
import Element from './Element'
import './ElementList.css'
import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;

function callback(key) { console.log(key);}

class ElementList extends React.Component {
    
    render() {
        return (
        <div>
            <Tabs defaultActiveKey="1" onChange={callback} >
                <TabPane tab="Elements" key="1">
                    <Element name="R1" type="res" value="1" unit="ohm"/>
                    <Element name="R2" type="res" value="5" unit="ohm"/>
                    <Element name="C1" type="cap" value="10.1" unit="uf"/>
                </TabPane>

                <TabPane tab="Netlist"  key="2">
                <div className="netlist">
                    <input type="text" className="netlist-input">

                    </input>
                    <div className="netlist-button">
                        <button>Copy</button>
                        <button>Reset</button>
                    </div>
                </div>
                </TabPane>
            </Tabs>
            </div>
        )
    }
}

export default ElementList;