import React, { PureComponent } from 'react';
import TopNav from '../../components/Navigation/TopNav';
import SideNav from '../../components/Navigation/Sidenav';
import DashInfo from '../DashInfoPage.js';

class DashboardPage extends PureComponent {
  render() {
    return (
      <div>
        <TopNav/>
        <SideNav/>
        <DashInfo/>
      </div>
    )
  }
}
export default DashboardPage;