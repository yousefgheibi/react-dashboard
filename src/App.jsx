import { Fragment } from 'react';
import Sidebar from './components/sidebar/Sidebar';
import './App.css'

const App = () => {

  return (
    <Fragment>
      <div className="dashboard">
        <Sidebar />
      </div>
    </Fragment>
  )
}

export default App
