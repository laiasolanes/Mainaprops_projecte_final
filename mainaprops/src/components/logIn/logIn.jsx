import React from 'react';
import './logIn.css';
import Button from '@material-ui/core/Button';
import store from '../../redux/store/configureStore';
import { loginWithGoogle } from '../../redux/actions/actionCreators';

export default function LogIn() {
  return (
    <section className="login">
      <img src="https://firebasestorage.googleapis.com/v0/b/mainaprops.appspot.com/o/logo_reptes.png?alt=media&token=52774db4-c4f5-4f61-9e34-e5461f862e19" alt="Logo" />

      <h1 className="app-name">Mainaprops</h1>

      <Button
        variant="contained"
        className="button--violet-big"
        onClick={() => store.dispatch(loginWithGoogle())}
      >
        Accedir amb google
      </Button>

      <p>
        Una aplicació per motivar els teus fills a complir els seus propòsits.
        Crea un repte, assigna tasques i defineix la recompensa.
      </p>

      <h3>Més s’estima el que amb més treball es guanya</h3>
    </section>
  );
}
