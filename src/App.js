import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PrivateRoute from './routes/PrivateRoute';
import SuccessPage from './components/pages/SuccessPage';
import Welcome from './components/pages/Welcome';
import Main from './components/pages/Main';
import SongItems from './components/SongItems';
import SongShortList from './components/SongShortList';

function App() {
  return (
    
    <Router>
      <div className="App">
      
        <Route exact path={['/login', '/register']} component={Welcome} />
        <PrivateRoute exact path='/success' component={SuccessPage} />
        <PrivateRoute exact path='/' component={Main} />
        <PrivateRoute exact path='/feed' component={SongItems} />
        <PrivateRoute exact path='/favorites' component={SongShortList} />
      </div>
    </Router>    
  );
}

export default App;
