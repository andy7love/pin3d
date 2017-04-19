import React from 'react'
import { Image, Dropdown } from 'semantic-ui-react'

const avatar = require('../images/avatars/elliot.jpg');

const trigger = (
    <span className="author">
        <Image size='mini' spaced avatar src={avatar} /> <span>Elliot Sanders </span> </span>
)

const options = [
  {
    key: 'user',
    text: <span>Signed in as <strong>Elliot Sanders</strong></span>,
    disabled: true
  },
  { key: 'profile', text: 'Your Profile' },
  { key: 'models', text: 'Your Models' },
  { key: 'likes', text: 'Your Likes' },
  { key: 'help', text: 'Help' },
  { key: 'settings', text: 'Settings' },
  { key: 'sign-out', text: 'Sign Out' }
]

const UserDropdown = () => (
  <Dropdown trigger={trigger} options={options} pointing inline labeled className='icon' />
)

export default UserDropdown;