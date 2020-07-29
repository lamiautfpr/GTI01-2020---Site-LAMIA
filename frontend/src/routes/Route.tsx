import React from 'react';
import {
  Route as ReactDOMRoute,
  RouteProps as ReactDOMRouteProps,
  Redirect,
} from 'react-router-dom';

import { useAuth } from '../hooks/Auth';

interface RouteProps extends ReactDOMRouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({
  isPrivate = false,
  component: Component,
  path,
  ...rest
}) => {
  const { member } = useAuth();

  return (
    <ReactDOMRoute
      {...rest}
      render={({ location }) => {
        if (member) {
          if (path === '/login') {
            return (
              <Redirect
                to={{ pathname: '/dashboard', state: { from: location } }}
              />
            );
          }
          return <Component />;
        }
        if (isPrivate) {
          return (
            <Redirect to={{ pathname: '/login', state: { from: location } }} />
          );
        }
        return <Component />;
      }}
    />
  );
};

export default Route;
