import React from 'react';
import { Routes as RoutesReactRouterDom, Route } from 'react-router-dom';
import { Home, Profile } from 'src/pages';
import { PATHS } from 'src/utils/constants';

// how to make routes dynamic?
export const Routes = () => {
  return (
    <RoutesReactRouterDom>
      <Route path={PATHS.HOME} element={<Home />} />
      <Route path={PATHS.PROFILE} element={<Profile />} />
    </RoutesReactRouterDom>
  );
};
