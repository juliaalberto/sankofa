import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Homepage/Home';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={ Home } />

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
