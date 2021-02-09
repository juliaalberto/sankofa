import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Homepage/Home';
import Edu from './compoents/EduComponents/Edu';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={ Home } />
          <Route path='/' exact compoent={Edu} />
          {/* 

          Add your pages paths here. Remember to import like I did above.

          EXAMPLE:
          <Route path='/directory' component={Directory} />
          
          */}

        </Switch>
      </Router>
    </>
  );
}

export default App;
