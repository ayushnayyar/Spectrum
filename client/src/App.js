import React from 'react';

import Routes from './routes';
import './common/app.scss';
import Login from './pages/login';

function App() {
  const user = JSON.parse(localStorage.getItem('profile'));

  return <div className="App">{user ? <Routes /> : <Login />}</div>;
}

export default App;
