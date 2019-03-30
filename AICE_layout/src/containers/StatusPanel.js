
import React from 'react';
import './StatusPanel.css';
import ElementList from '../components/ElementList'
import Expressions from '../components/Expressions'

class StatusPanel extends React.Component {

    render() {
        return (
            <div className="statusPanel_main">
            <ElementList />
            <Expressions />
            </div>
        );
    }
}

export default StatusPanel;

