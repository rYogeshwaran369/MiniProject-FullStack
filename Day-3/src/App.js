import logo from './logo.svg';
import './App.css';
// import Login from './Pages/Login';
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
import Home from './Insurence/Pages/Home';
import Topnav from './Insurence/Components/Topnav';
import Explore from './Insurence/Pages/Explore';
import Renew from './Insurence/Pages/Renew';
import Claim from './Insurence/Pages/Claim';
import Help from './Insurence/Pages/Help';


function App() {
  return (
    <Router>
      <Topnav/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/explore' element={<Explore/>}/>
        <Route path='/renew' element={<Renew/>}/>
        <Route path='/claim' element={<Claim/>}/>
        <Route path='/help' element={<Help/>}/>
      </Routes>
    </Router>
  );
}

export default App;