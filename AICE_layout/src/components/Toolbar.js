import {Button, Icon, Slider, InputNumber, Row, Col} from 'antd'
import React from 'react';
import './Toolbar.css'
const ButtonGroup = Button.Group;

class Toolbar extends React.Component {
    state = {
        inputValue: 1,
      }
    
      onChange = (value) => {
        this.setState({
          inputValue: value,
        });
      }
      
    render() {
        const { inputValue } = this.state;
        return (
        <div>
        <Row>
        <Col span={16}>
            <ButtonGroup>
            <Button className="ToolIcon" icon="cloud"/>
            <Button className="ToolIcon" icon="cloud-download" />
            <Button className="ToolIcon" icon="cloud" />
            <Button className="ToolIcon" icon="cloud-download" />
            <Button className="ToolIcon" icon="cloud" />
            <Button className="ToolIcon" icon="cloud-download" />
            <Button className="ToolIcon" icon="cloud" />
            <Button className="ToolIcon" icon="cloud-download" />
            <Button className="ToolIcon" icon="cloud" />
            <Button className="ToolIcon" icon="cloud-download" />
            <Button className="ToolIcon" icon="cloud" />
            <Button className="ToolIcon" icon="cloud-download" />
            <Button className="ToolIcon" icon="cloud-download" />
            </ButtonGroup>
        </Col>
        <Col span={4}>
          <Slider
            min={1}
            max={20}
            onChange={this.onChange}
            value={typeof inputValue === 'number' ? inputValue : 0}
          />
        </Col>
        <Col span={2}>
          <InputNumber
            min={1}
            max={20}
            style={{ marginLeft: 16 }}
            value={inputValue}
            onChange={this.onChange}
          />
        </Col>
        </Row>
          <br /> 
        
        <Row>
        <Col span={16}>
          <div className="toolbar">
            <button><Icon type="delete" /></button>
            <button><Icon type="copy" /></button>
            <Icon type="more" className="vertical"/>
          </div> 
        </Col> 
        <Col span={5}>
          <div className="toolbar">
            <Slider
              min={1}
              max={20}
              onChange={this.onChange}
              value={typeof inputValue === 'number' ? inputValue : 0}
              className="slider"
            />
            <InputNumber
            min={1}
            max={20}
            style={{ marginLeft: 16 }}
            value={inputValue}
            onChange={this.onChange}
            className="inputnumber"
             />

          </div> 
          </Col> 
        </Row>

      </div>
        );
    }
}

export default Toolbar;

