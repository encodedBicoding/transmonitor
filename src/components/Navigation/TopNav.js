import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faBell } from '@fortawesome/free-solid-svg-icons'
import './navigation.css';

class TopNav extends Component {
  state = {
    searchKeyword: ''
  }
  render() {
    return (
      <nav className='top-nav-container top-nav flex-rw'>
        <div className='top-nav-item nav-title'>
          <h3>TransMonitor</h3>
        </div>
        <div className='top-nav-item nav-search'>
          <FontAwesomeIcon icon={faSearch} color="#747574" transform="shrink-5" style={{fontWeight: '10px'}}/>
          <input type='text' placeholder='Search...' value={this.state.searchKeyword}/>
        </div>
        <div className='top-nav-item nav-support'>
          <a href='#supoport'>
            Support
          </a>
        </div>
        <div className='top-nav-item nav-faq'>
          <a href='#faq'>
            FAQ
          </a>
        </div>
        <div className='top-nav-item nav-notification'>
          <span className='notification-data'>8</span>
          <FontAwesomeIcon icon={faBell} color="grey" style={{fontSize: '21px'}}/>
        </div>
        <div className='top-nav-item nav-user flex-rw'>
          <div id='user-welcome'>
              <p id='greetings'>Hello</p>
              <p id='user'>Oluwaleke Ojo</p>
          </div>
          <div id='user-profile-image'>
              <img src='../../../logo192.png' alt='user_profile_logo'/>
          </div>
        </div>
      </nav>
    )
  }
}

export default TopNav;
