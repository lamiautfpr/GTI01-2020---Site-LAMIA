import React from 'react';
import { Switch, Route } from 'react-router-dom';

// import Dashboard from '../pages/Dashboard';
// import Repository from '../pages/Repository';
import Home from '../pages/Home';

import ListProducts from '../pages/ListProducts';
import ListProjects from '../pages/ListProjects';
import ListPublications from '../pages/ListPublications';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';

import ListMembers from '../pages/ListMembers';
import Member from '../pages/Member';
import ProjectView from '../pages/Work';

// Switch é para apresentar uma rota de cada vez

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/members" exact component={ListMembers} />
    <Route path="/dashboard" exact component={Dashboard} />

    <Route path="/login" exact component={Login} />

    <Route path="/works/products" exact component={ListProducts} />
    <Route path="/works/projects" exact component={ListProjects} />
    <Route path="/works/publications" exact component={ListPublications} />

    <Route path="/work/:id" exact component={ProjectView} />
    <Route path="/:login" exact component={Member} />
    {/* <Route path="/repositories/:repository+" exact component={} /> */}
  </Switch>
);

export default Routes;
