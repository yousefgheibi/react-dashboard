import { Fragment } from 'react';
import Sidebar from './components/sidebar/Sidebar';
import Content from './components/content/Content';
import Profile from './components/profile/Profile';

import './App.css'

const App = () => {

  return (
    <Fragment>
      <div className="dashboard">
        <Sidebar />
        <div className="dashboard--content">
          <Content />
          <Profile />
        </div>
      </div>
    </Fragment>
  )
}

export default App
