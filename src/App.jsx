import { useEffect } from 'react';
import { Switch, Route, useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Login from './views/Login';
import Profile from './views/Profile';
import Cities from './views/Cities';
import { setUser } from './store/user/user.action';

export default function App() {
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();
  const _id = localStorage.getItem('_id');
  const name = localStorage.getItem('name');
  const email = localStorage.getItem('email');
  const user = { _id, name, email };

  useEffect(() => {
    if (_id && !location.pathname.includes('/cities')) {
      history.push(`/profile/${_id}`);
      dispatch(setUser(user));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [localStorage]);

  useEffect(() => {
    if (location.pathname.includes('/profile') && !_id) {
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
