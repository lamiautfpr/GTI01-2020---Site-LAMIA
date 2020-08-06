import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Home from '../pages/Home';

import ListProducts from '../pages/ListProducts';
import ListProjects from '../pages/ListProjects';
import ListPublications from '../pages/ListPublications';
import Login from '../pages/Login';

import Dashboard from '../pages/Dashboard';
import DashboardMembers from '../pages/Dashboard/Members';

import ListMembers from '../pages/ListMembers';
import Member from '../pages/Member';
import ProjectView from '../pages/Work';

// Switch é para apresentar uma rota de cada vez

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/members" exact component={ListMembers} />

    <Route path="/login" exact component={Login} />

    <Route path="/works/products" exact component={ListProducts} />
    <Route path="/works/projects" exact component={ListProjects} />
    <Route path="/works/publications" exact component={ListPublications} />

    <Route path="/work/:id" exact component={ProjectView} />

    <Route path="/dashboard" exact component={Dashboard} isPrivate />
    <Route
      path="/dashboard/members"
      exact
      component={DashboardMembers}
      isPrivate
    />

    <Route path="/:login" exact component={Member} />
  </Switch>
);

export default Routes;
