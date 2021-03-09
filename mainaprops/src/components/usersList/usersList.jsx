import React from 'react';
import './usersList.css';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import EditRoundedIcon from '@material-ui/icons/EditRounded';
import Button from '@material-ui/core/Button';

export default function Header() {
  return (
    <section className="users-list">
      <h2>Fills</h2>

      <div className="flex list__row">
        <div className="list__avatar"><img src="https://firebasestorage.googleapis.com/v0/b/mainaprops.appspot.com/o/avatar_bici.png?alt=media&token=d7a1b930-c413-49b5-b43c-004811d800b5" alt="Avatar" /></div>
        <div className="list__name"><h4>Mariona</h4></div>
        <div className="flex list__icons">
          <div><EditRoundedIcon style={{ fontSize: 26 }} /></div>
          <div><DeleteRoundedIcon style={{ fontSize: 26 }} /></div>
        </div>
      </div>

      <div className="flex list__row">
        <div className="list__avatar"><img src="https://firebasestorage.googleapis.com/v0/b/mainaprops.appspot.com/o/avatar_cohet.png?alt=media&token=f0c34668-0142-47a0-8fbe-d889e229509a" alt="Avatar" /></div>
        <div className="list__name"><h4>Guerau</h4></div>
        <div className="flex list__icons">
          <div><EditRoundedIcon style={{ fontSize: 26 }} /></div>
          <div><DeleteRoundedIcon style={{ fontSize: 26 }} /></div>
        </div>
      </div>

      <div className="flex list__row">
        <div className="list__avatar"><img src="https://firebasestorage.googleapis.com/v0/b/mainaprops.appspot.com/o/avatar_unicorn.png?alt=media&token=0eae72d9-6e07-4a11-a149-1f0f1eb780d9" alt="Avatar" /></div>
        <div className="list__name"><h4>Sança</h4></div>
        <div className="flex list__icons">
          <div><EditRoundedIcon style={{ fontSize: 26 }} /></div>
          <div><DeleteRoundedIcon style={{ fontSize: 26 }} /></div>
        </div>
      </div>
      <Button variant="contained" className="button--outlined">+ usuaris</Button>
    </section>
  );
}
