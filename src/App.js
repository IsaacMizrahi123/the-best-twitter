import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';

import Startup from './components/layout/Startup';
import Login from './components/content/Login';

function App() {
  return (
    <main>
      <BrowserRouter>
        <Route path="/login" exact component={Login} /> 
        <Route path="/" exact component={Startup} />  
      </BrowserRouter>
    </main>
  );
}

export default App;
