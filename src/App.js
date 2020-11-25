// import logo from './logo.svg';
import './App.css';
import Landing from './components/landing/landing'
import {BrowserRouter as Router, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
   <div className="App">
      <Route path="/" exact component={Landing}></Route>
    </div>
    </Router>
  );
}

export default App;
