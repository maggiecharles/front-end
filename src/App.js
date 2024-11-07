import {BrowserRouter as Router ,Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import AddStudent from './Components/AddStudent';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import Register from './Components/Register';
import AllStudents from './Components/AllStudents';

function App() {
  return (
    <Router>
      <Navbar/>
      <div className="App">
      <Switch>
      <Route exact path="/">
        <Login/>
        </Route>
        <Route exact path="/AddStudent">
        <AddStudent/>
        </Route>
        <Route exact path="/Register">
          <Register/>
        </Route>
        <Route exact path="/AllStudents">
          <AllStudents/>
        </Route>
        
      </Switch>
    </div>
    </Router>
  );
}

export default App;
