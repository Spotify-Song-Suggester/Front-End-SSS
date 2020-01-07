import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PrivateRoute from './routes/PrivateRoute';
import SignUpWelcome from './components/pages/SignUpWelcome';
import SuccessPage from './components/pages/SuccessPage';
import Welcome from './components/pages/Welcome';

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path={['/login', '/register']} component={Welcome} />
        <PrivateRoute exact path='/success' component={SuccessPage} />
      </div>
    </Router>    
  );
}

export default App;
