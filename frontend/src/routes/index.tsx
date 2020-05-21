import React from 'react';
import { Switch, Route } from 'react-router-dom';

// import Dashboard from '../pages/Dashboard';
// import Repository from '../pages/Repository';
import Home from '../pages/Home';
import Projects from '../pages/ProjectsTest';

// Switch é para apresentar uma rota de cada vez

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/projects" exact component={Projects} />
    {/* <Route path="/repositories/:repository+" exact component={} /> */}
  </Switch>
);

export default Routes;
