import {Icon} from 'antd'
import React from 'react';
import './Element.css'

class Element extends React.Component {
    state= {
        name:this.props.name,
        type:this.props.name,
        value:this.props.value,
      };

    render() {
        return (
        <div className="element">
            <div className="element-group">
                <input className="element-input" type="text" value={this.props.name} /> 
            </div>
            <div className="element-group">
                <input className="element-input" type="number" value={this.props.value} /> 
                <label>{this.props.unit}</label>
            </div>
            <div className="button-group">
                <button><Icon type="delete" /></button>
                <button><Icon type="copy" /></button>
            </div>
        </div>
        )
    }
}

export default Element;