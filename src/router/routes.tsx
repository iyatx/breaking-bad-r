import { RouteObject, useRoutes } from 'react-router-dom';
import { Main } from '../pages/Main';
import React from 'react';

const RoutesObject: RouteObject[] = [
  {
    path: '/',
    element: <Main />,
  },
];

export const Routes: React.FC = () => {
  return useRoutes(RoutesObject);
};
