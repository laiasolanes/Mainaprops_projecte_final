import React from 'react';
import './home.css';
import Button from '@material-ui/core/Button';
import usersData from '../../constants/usersData';

export default function Home() {
  return (
    <section className="home">
      <h2>Hola Familia</h2>
      <p>Gestiona els teus reptes</p>

      <img src="https://firebasestorage.googleapis.com/v0/b/mainaprops.appspot.com/o/avatar_diana.png?alt=media&token=b8ac4fb6-678c-4f2f-8d04-20e8d8131741" alt="Diana" />

      {
          usersData.map((user) => <Button variant="contained" className="button--violet">{user.user_profile.name}</Button>)
      }

      <Button variant="contained" className="button--outlined">+ usuaris</Button>

      <p>Crea un perfil per a cada usuari per poder gestionar els seus reptes.</p>

    </section>
  );
}
