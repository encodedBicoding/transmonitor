import React, { PureComponent } from 'react';
import TopNav from '../../components/Navigation/TopNav';
import SideNav from '../../components/Navigation/Sidenav';

class Homepage extends PureComponent {
  render() {
    return (
      <div>
        <TopNav/>
        <SideNav/>
      </div>
    )
  }
}
export default Homepage;