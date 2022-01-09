import { useEffect } from 'react';
import { Switch, Route, useHistory, useLocation } from 'react-router-dom';
import Login from './views/Login';
import Profile from './views/Profile';
import Cities from './views/Cities';

export default function App() {
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    if (localStorage.getItem('_id') && !location.pathname.includes('/cities')) {
      history.push(`/profile/${localStorage.getItem('_id')}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [localStorage]);

  useEffect(() => {
    if (
      location.pathname.includes('/profile') &&
      !localStorage.getItem('_id')
    ) {
      history.push('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/profile/:id" component={Profile} />
        <Route path="/cities/:megye" component={Cities} />
        <Route path="/cities" component={Cities} />
      </Switch>
    </>
  );
}
