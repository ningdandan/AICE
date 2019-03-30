import {Menu, InputNumber, Switch } from 'antd'
import React from 'react';
import './Navbar.css';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class Navbar extends React.Component {
  state = {
    current: 'mail',
  }

  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }

  render() {
    return (

        <Menu  
            selectedKeys={[this.state.current]}
            mode="horizontal"
            theme="dark"
        >
            <Menu.Item key="alipay">
                icon
            </Menu.Item>

            <SubMenu title={<span className="submenu-title-wrapper">Schematic</span>}>
                <Menu.Item key="setting:1">Option 1</Menu.Item>
                <Menu.Item key="setting:2">Option 2</Menu.Item>
                <Menu.Item key="setting:3">Option 3</Menu.Item>
                <Menu.Item key="setting:4">Option 4</Menu.Item>
            </SubMenu>

            <SubMenu title={<span className="submenu-title-wrapper">Simulation</span>}>
                <Menu.Item key="setting:1">Option 1</Menu.Item>
                <Menu.Item key="setting:2">Option 2</Menu.Item>
                <Menu.Item key="setting:3">Option 3</Menu.Item>
                <Menu.Item key="setting:4">Option 4</Menu.Item>
            </SubMenu>

            <SubMenu title={<span className="submenu-title-wrapper">Reduction</span>}>
                <Menu.Item key="setting:1">Option 1</Menu.Item>
                <Menu.Item key="setting:2">Option 2</Menu.Item>
                <Menu.Item key="setting:3">Option 3</Menu.Item>
                <Menu.Item key="setting:4">Option 4</Menu.Item>
            </SubMenu>

            
        </Menu>

    );
  }
}

export default Navbar;

