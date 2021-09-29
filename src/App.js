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
  // const history = useHistory();
  //   const location = useLocation()
  // // const [setName] = useContext(UserContext);
  // // const [user, setUser] = useState({});

  // const initializeApp = useCallback(() => {
  //   let token = localStorage.getItem("key");
  //   console.log('checking key', token)
  //   if (token) {
  //     console.log('token found', token)

  //     token = JSON.parse(token);
  //     // console.log(token, 'token')

  //     fetch(`${api}/verify-token`, {
  //       method: "GET",
  //       headers: {
  //         authorization: "Bearer " + token,
  //       },
  //     })
  //       .then((data) => data.json())
  //       .then((resp) => {
  //   console.log('verification complete', resp)

  //         // console.log(resp)
  //         if (resp.success) {
  //           console.log('verification successful')
  //           // console.log(resp);
  //           // user is authorized and profile is returned as resp.user
  //           // setUser(resp.user);
  //           setName(resp.user[0]);
  //           // console.log(resp.user[0])
  //           // console.log(name)
  //           console.log('check user current page')
  //           if(location.pathname.includes('home')){
  //             console.log('page already opened, stay on the page')

  //             console.log("I'm home!")
  //              history.push(location.pathname);
  //           } else {
  //             console.log('go to home page')
  //            history.push("/home");
  //           }
            
  //         } else {
  //           console.log('verification failed, token not valid')

  //           // unauthorized
  //           // navigate to login page
  //           if(location.pathname.includes('/home')) {
  //             history.push(`/?next=${location.pathname}`);
  //           } else {
  //             history.push("/");
  //           }
  //           // console.log(resp.msg)
  //         }
  //       })
  //       .catch((err) => {
  //          if(location.pathname.includes('/home')) {
  //             history.push(`/?next=${location.pathname}`);
  //           } else {
  //              history.push("/");
  //           }
  //         // unauthorized
  //         // navigate to login page
  //         // history.push("/");
  //         // console.log(err)
  //       });
  //   } else {
  //      if(location.pathname.includes('/home')) {
  //             history.push(`/?next=${location.pathname}`);
  //           } else {
  //             // history.push("/");
  //           }
      
  //   console.log('token not found')
  //     // user has never used this app
  //     // goto login
  //     // history.push("/");
  //   }
  // }, [ history, location.pathname, setName]);

  // useEffect(() => {
  //   initializeApp();
  // }, [initializeApp, history, setName]);

  return (
    <div>
      <ToastProvider>
        {/* <IndexPage /> */}
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/home" exact component={IndexPage}/>
        </Switch>
      </Router>
      {/* <HomePage/> */}
      {/* <IndexPage/> */}
      </ToastProvider>
    </div>
  );
}
export default App;
