import './App.css';
import Create from './components/create';
import Read from './components/read';
import Update from './components/update';
import Login from './components/login'
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      
      <div className="main">
        <h2 className="main-header">Pazarama ToDo Homework</h2>
        <div>
          <Route exact path='/' component={Login}/>
        </div>
          <div>
            <Route exact path='/create' component={Create}/>
          </div>
          <div style={{ marginTop: 20 }}>
            <Route exact path='/read' component={Read} />
          </div>

          <Route path='/update' component={Update} />
        </div>
    </Router>
  );
}

export default App;
