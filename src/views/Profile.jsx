import React from 'react';
import NavButton from '../components/NavButton';
import Button from 'react-bootstrap/Button';
import { logout } from '../services/logout';
import { useHistory } from 'react-router-dom';

export default function Profile() {
  const history = useHistory();
  const _id = localStorage.getItem('_id');
  const name = localStorage.getItem('name');
  const email = localStorage.getItem('email');
  const lastOnline = localStorage.getItem('last-online');
  const diffTime = Math.abs(lastOnline - Date.now());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  const handleLogout = () => {
    logout(_id).then((res) => {
      if (res) history.push('/');
    });
  };

  return (
    <>
      <NavButton url="/cities" text="Városok" />
      <div className="profile-container">
        <div className="user-data">
          <h4>Hello {name}!</h4>
          <p>Your email address: {email}</p>
          <p>Last online: {diffDays} day(s)</p>
        </div>
        <Button
          className="w-100 mb-2"
          variant="outline-primary"
          onClick={handleLogout}
        >
          Logout
        </Button>
      </div>
    </>
  );
}
