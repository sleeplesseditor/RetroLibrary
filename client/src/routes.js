import React from 'react';
import { Route, HashRouter, IndexRoute } from 'react-router-dom';
import { Home, Welcome, About, Contact } from './components';

// Use hashHistory for easier development
const routes = (
  <HashRouter>
    <Route path="/" component={Home}>
      <IndexRoute component={Welcome} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
    </Route>
  </HashRouter>
);

export default routes;