import React from 'react';
import { Switch, Route } from 'react-router-dom';

// import Dashboard from '../pages/Dashboard';
// import Repository from '../pages/Repository';
import Home from '../pages/Home';
import ListWorks from '../pages/ListWorks';
import ListMembers from '../pages/ListMembers';
import Member from '../pages/Member';
import ProjectView from '../pages/ProjectView';

// Switch é para apresentar uma rota de cada vez

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/list/members" exact component={ListMembers} />
    <Route path="/list/:category" exact component={ListWorks} />
    <Route path="/work/id" exact component={ProjectView} />
    <Route path="/:login" exact component={Member} />
    {/* <Route path="/repositories/:repository+" exact component={} /> */}
  </Switch>
);

export default Routes;
