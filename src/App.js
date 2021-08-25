import './App.css';
import './Scrollbar.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import FixHome from './Components/HomeComp';
import HomePage from './HomePage/HomePage';
import IndexPage from './Index/IndexPage';
import Modall from './Modall';
import Test from './Test'

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/home" exact component={IndexPage}/>
        </Switch>
      </Router>
      {/* <HomePage/> */}
      {/* <IndexPage/> */}
    </div>
  );
}
export default App;
