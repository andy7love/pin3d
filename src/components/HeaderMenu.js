import React, { Component } from 'react'
import { Dropdown, Menu } from 'semantic-ui-react'
import UserDropdown from './UserDropdown.js';

const logged = true;

export default class HeaderMenu extends Component {
  state = { activeItem: 'recent' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    
    var loginInfo = <Menu.Item name='login' active={activeItem === 'login'} onClick={this.handleItemClick} />;
    if(logged) {
      loginInfo = <UserDropdown />;
    }

    return (
      <Menu pointing secondary>
        <Menu.Item name='recent' active={activeItem === 'recent'} onClick={this.handleItemClick} />
        <Menu.Item name='popular' active={activeItem === 'popular'} onClick={this.handleItemClick} />
        <Dropdown item pointing text='Categories'>
          <Dropdown.Menu>
            <Dropdown.Item>Transport</Dropdown.Item>
            <Dropdown.Item>Urban</Dropdown.Item>
            <Dropdown.Item>Building</Dropdown.Item>
            <Dropdown.Item>Industrial</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Menu.Menu position='right'>
           {loginInfo}
        </Menu.Menu>
      </Menu>
    )
  }
}