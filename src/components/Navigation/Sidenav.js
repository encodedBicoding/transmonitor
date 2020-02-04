import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt } from '@fortawesome/free-solid-svg-icons'
class SideNav extends Component {
  render() {
    return (
      <nav className='side-nav-container side-nav '>
        <div class='side-nav-list gen-inv'>
          <div id="invoice">
            <p>GENERATE INVOICE</p>
          </div>
        </div>
        <div className='side-nav-contents'>
          <p className='side-nav-headings side-nav-item'>Main</p>
          {
            SideNavItem(faTachometerAlt, 'Overview')
          }
        </div>
      </nav>
    )
  }
}

function SideNavItem(icon, child) {
  return (
    <>
    <div className='side-nav-item-container'>
    <div className='stroke'></div>
      <div className='side-nav-item-content'>
        <div className='side-nav-item active'>
          <FontAwesomeIcon icon={icon}/>
          <p>{child}</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default SideNav;
