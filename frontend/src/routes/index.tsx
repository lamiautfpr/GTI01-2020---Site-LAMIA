import React from 'react';
import { Switch, Route } from 'react-router-dom';

// import Dashboard from '../pages/Dashboard';
// import Repository from '../pages/Repository';
import Home from '../pages/Home';
import List from '../pages/List';
import Member from '../pages/Member';
import ProjectView from '../pages/ProjectView';

// Switch é para apresentar uma rota de cada vez

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
<<<<<<< HEAD
    <Route path="/list/:category" exact component={List} />
=======
    <Route path="/projects" exact component={Projects} />
    <Route path="/projectview" exact component={ProjectView} />
>>>>>>> master
    <Route path="/member" exact component={Member} />
    {/* <Route path="/repositories/:repository+" exact component={} /> */}
  </Switch>
);

export default Routes;
