import './App.css';
import FixHome from './Components/HomeComp';
import HomePage from './HomePage/HomePage';
import IndexPage from './Index/IndexPage';
import Modall from './Modall';
import Test from './Test'
import AlumniHome from './AlumniHome'
import AlumniDetails from './AlumniDetails';

function App() {
  return (
    <div>
      {/* <HomePage/>
      <IndexPage/> */}
      <AlumniHome/>
      <AlumniDetails/>
    </div>
  );
}
export default App;
