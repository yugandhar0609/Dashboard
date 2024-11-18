import { lazy } from 'react';

const Tables = lazy(() => import('../pages/Tables'));

const coreRoutes = [


  {
    path: '/tables',
    title: 'Tables',
    component: Tables,
  },


];

const routes = [...coreRoutes];
export default routes;
