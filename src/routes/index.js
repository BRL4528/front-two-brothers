import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SingnIn from '../pages/SignIn';

import DashboardClient from '../pages/client/Dashboard';
import DashboardAdm from '../pages/admin/DasboardAdm';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={DashboardClient} />
      <Route path="/adm" component={SingnIn} />

      <Route path="/dashboardadm" component={DashboardAdm} isPrivate />
    </Switch>
  );
}
