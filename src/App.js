import { useContext, useCallback, useEffect } from 'react';
import './App.css';
import './Scrollbar.css'
import { useLocation, useHistory, BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import FixHome from './Components/HomeComp';
import HomePage from './HomePage/HomePage';
import IndexPage from './Index/IndexPage';
import { ToastProvider } from "react-toast-notifications";

import { api } from "./api"
import { UserContext } from "./contextApi/user_context";
import ChatComp from './Chat/ChatComp'


import Modall from './Modall';
import Test from './Test'


function App() {
  return (
    <div className="body">
      <ToastProvider>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/home" component={IndexPage} />
        </Switch>
      </ToastProvider>
    </div>
  );
}
export default App;
