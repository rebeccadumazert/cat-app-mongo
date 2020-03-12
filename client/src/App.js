import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { CatsMatching } from './components/CatsMatching';
import { CatsResults } from './components/CatsResults';
import { CatApp } from './components/styles/App';

import './App.css';

function App() {
  return (
    <Router>
      <CatApp>
        <Route exact path="/wins" component={CatsResults}></Route>
        <Route exact path="/" component={CatsMatching} />
      </CatApp>
    </Router>
  );
}

export default App;
