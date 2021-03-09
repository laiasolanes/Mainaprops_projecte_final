import React from 'react';
import './usersList.css';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import EditRoundedIcon from '@material-ui/icons/EditRounded';
import Button from '@material-ui/core/Button';
import usersData from '../../constants/usersData';

export default function Header() {
  return (
    <section className="users-list">
      <h2>Fills</h2>

      {
          usersData.map((user) => (
            <div className="flex list__row">
              <div className="list__avatar"><img src={user.user_profile.image} alt="Avatar" /></div>
              <div className="list__name"><h4>{user.user_profile.name}</h4></div>
              <div className="flex list__icons">
                <div><EditRoundedIcon style={{ fontSize: 26 }} /></div>
                <div><DeleteRoundedIcon style={{ fontSize: 26 }} /></div>
              </div>
            </div>
          ))
      }

      <div className="flex list__row">
        <div className="list__avatar"><img src={usersData[1].user_profile.image} alt="Avatar" /></div>
        <div className="list__name"><h4>{usersData[1].user_profile.name}</h4></div>
        <div className="flex list__icons">
          <div><EditRoundedIcon style={{ fontSize: 26 }} /></div>
          <div><DeleteRoundedIcon style={{ fontSize: 26 }} /></div>
        </div>
      </div>

      <Button variant="contained" className="button--outlined">+ usuaris</Button>
    </section>
  );
}
