import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PrivateRoute from './routes/PrivateRoute';
import LoginForm from './components/LoginForm';
import SignUpWelcome from './components/pages/SignUpWelcome';
import SuccessPage from './components/pages/SuccessPage';
import FormikForm from './components/RegistrationForm';

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path={['/login', '/register']} component={SignUpWelcome} />
        <Route exact path='/login' component={LoginForm} />
        <Route exact path='/register' component={FormikForm} />
        <PrivateRoute exact path='/success' component={SuccessPage} />
      </div>
    </Router>    
  );
}

export default App;
