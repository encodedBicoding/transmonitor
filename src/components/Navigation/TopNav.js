import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
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
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.2913 14.8262C11.2913 15.4027 11.063 15.9557 10.6567 16.3634C10.2503 16.771 9.69925 17.0001 9.12462 17.0001C8.54999 17.0001 7.9989 16.771 7.59257 16.3634C7.18625 15.9557 6.95798 15.4027 6.95798 14.8262" stroke="#647787" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M1 12.6522H17.2498" stroke="#647787" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M16.1662 12.6522H16.7079C15.5108 12.6522 13.9996 11.6794 13.9996 10.4783V5.58702C13.9996 4.28977 13.486 3.04566 12.5717 2.12836C11.6575 1.21107 10.4175 0.69574 9.12463 0.69574C7.83171 0.69574 6.59175 1.21107 5.67752 2.12836C4.76329 3.04566 4.24968 4.28977 4.24968 5.58702V10.4783C4.24968 11.0549 4.02141 11.6078 3.61509 12.0155C3.20876 12.4232 2.65767 12.6522 2.08304 12.6522" stroke="#647787" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
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
