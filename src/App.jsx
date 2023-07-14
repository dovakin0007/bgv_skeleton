
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch, Link } from 'react-router-dom';
import { FileUploadProvider, users } from './Components/FileUploadContext';
import LoginPage from './Components/Login';
import EmployeePage from './Components/Employee';
import HrPage from './Components/HrPage';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userType, setUserType] = useState('');

  const handleLogin = (username, password) => {
    // Simulated login validation
    const validUser = users.find(
      (user) => user.username === username && user.password === password
    );

    if (validUser) {
      setIsAuthenticated(true);
      setUserType(validUser.userType);
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUserType('');
  };

  return (
    <FileUploadProvider>
      <Router>
        <div>
          <nav>
            <ul>
              {isAuthenticated && userType === 'employee' && (
                <li>
                  <Link to="/employee">Employee</Link>
                </li>
              )}
              {isAuthenticated && userType === 'hr' && (
                <li>
                  <Link to="/hr">HR</Link>
                </li>
              )}
            </ul>
          </nav>

          <Switch>
            <Route exact path="/">
              {isAuthenticated ? (
                userType === 'employee' ? (
                  <Redirect to="/employee" />
                ) : (
                  <Redirect to="/hr" />
                )
              ) : (
                <Redirect to="/login" />
              )}
            </Route>
            <Route path="/login">
              {isAuthenticated ? (
                userType === 'employee' ? (
                  <Redirect to="/employee" />
                ) : (
                  <Redirect to="/hr" />
                )
              ) : (
                <LoginPage onLogin={handleLogin} />
              )}
            </Route>
            <Route path="/employee">
              {isAuthenticated && userType === 'employee' ? (
                <EmployeePage onLogout={handleLogout} />
              ) : (
                <Redirect to="/login" />
              )}
            </Route>
            <Route path="/hr">
              {isAuthenticated && userType === 'hr' ? (
                <HrPage onLogout={handleLogout} />
              ) : (
                <Redirect to="/login" />
              )}
            </Route>
          </Switch>
        </div>
      </Router>
    </FileUploadProvider>
  );
};

export default App;