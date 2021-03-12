import { Button } from '@material-ui/core';
import React from 'react';
import './userDetail.css';

export default function UserDetailComponent() {
  return (
    <section className="user__detail">
      <article className="user__header">
        <img src="https://firebasestorage.googleapis.com/v0/b/mainaprops.appspot.com/o/avatar_bici.png?alt=media&token=d7a1b930-c413-49b5-b43c-004811d800b5" alt="Avatar" />
        <h3>
          Hola
          <br />
          Sança!
        </h3>

        <p>Estàs apunt d’aconseguir els teus propòsits</p>

        <div className="flex challenges__resume">

          <div className="resume__detail">
            <span>1</span>
            <br />
            reptes completats
          </div>

          <div className="resume__detail">
            <span>2</span>
            <br />
            reptes actius
          </div>

        </div>

        <Button
          variant="contained"
          className="button--violet"
        >
          Crear repte
        </Button>
      </article>

      <article className="user__challenge">

        <img src="https://firebasestorage.googleapis.com/v0/b/mainaprops.appspot.com/o/reward_escapada.png?alt=media&token=3a5ab181-d941-48e2-99a2-d8537e83c3e2" alt="Recompensa" />

        <h3>
          Espectacle en familia
        </h3>

        <div className="challenge__resume">
          <span>5</span>
          <br />
          tasques pendents
        </div>

        <Button
          variant="contained"
          className="button--turquoise"
        >
          Veure repte
        </Button>
      </article>

    </section>
  );
}
