import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AppsIcon from '@mui/icons-material/Apps';


function Header() {
  return (
    <div className='header'>
        

        <div className="header__left">
          <img src="https://freepngimg.com/thumb/categories/1371.png" alt=""/>

          <div className="header__search">
            <SearchIcon />
            <input type="text"/>

          </div>

        </div>
        <div className="header__right">
          <HeaderOption Icon={HomeIcon} title="Home"/>
          <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
          <HeaderOption Icon={BusinessCenterIcon} title="jobs" />
          <HeaderOption Icon={ChatIcon} title="Messaging" />
          <HeaderOption Icon={NotificationsIcon} title="Notifications" />
          <HeaderOption avatar="https://media-exp1.licdn.com/dms/image/C5603AQF_TgvLVDgTmg/profile-displayphoto-shrink_800_800/0/1657597061606?e=1671062400&v=beta&t=UQLcXtPDBm67ZzwvV32dE4Gb3jDVXrJtXw6MPKjf_-4" title="me"/>
          <HeaderOption Icon={AppsIcon} title="Home"/>
           
        </div>
    
    </div>
  )
}

export default Header