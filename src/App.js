import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PrivateRoute from './routes/PrivateRoute';
import SuccessPage from './components/pages/SuccessPage';
import Welcome from './components/pages/Welcome';
import Main from './components/pages/Main';

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path={['/login', '/register']} component={Welcome} />
        <PrivateRoute exact path='/success' component={SuccessPage} />
        <PrivateRoute path='/' component={Main} />
      </div>
    </Router>    
  );
}

export default App;
