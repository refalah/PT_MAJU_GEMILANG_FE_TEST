import {Route, BrowserRouter as Router, Switch, Redirect} from 'react-router-dom';
import Details from './Details';
import Favorite from './Favorite';
import Home from './Home';
// import {ContextProvider} from './favContext'

function App() {
    
    

  return (
    
    <div className="App">
      <Router>
        <Route path='/' exact component={Home}></Route>
        <Route path='/favorites' exact component={Favorite}></Route>
        <Route path='/picture/:id' exact component={Details}></Route>
      </Router>      
    </div>
    
    
  );
}

export default App;
