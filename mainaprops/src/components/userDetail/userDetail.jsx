import React, { useState } from 'react';
import { Modal, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import './userDetail.css';
import userData from '../../constants/usersData';

// console.log(userData);

const pageURL = window.location.href;
const idUser = pageURL.substr(pageURL.lastIndexOf('/') + 1);

const userDetail = userData.filter((element) => element._id === idUser);
console.log(userDetail[0]?.user_profile.challenges);

const useStyles = makeStyles((theme) => ({
  modal: {
    position: 'absolute',
    width: '98%',
    backgroundColor: '#6CC3C6',
    border: '3px solid #ffffff',
    color: '#ffffff',
    borderRadius: '10px',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(8, 4, 8, 4),
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },

  button_violet: {
    width: '100%',
    backgroundColor: '#3D2563',
    color: '#ffffff',
    fontWeight: '600',
    textTransform: 'none',
    margin: '10px 0',
    padding: '10px 0',
    borderRadius: '50px',
    boxShadow: theme.shadows[2],
    '&:hover': {
      backgroundColor: '#4d2d80',
    },
  },

}));

export default function UserDetailComponent() {
  const styles = useStyles();

  const [modalChallenge, setModalChallenge] = useState(false);

  function openCloseModalChallenge() {
    setModalChallenge(!modalChallenge);
  }

  const body = (
    <div className={styles.modal}>
      <h3>Espectacle en família</h3>
      <div>
        <Button className={styles.button_violet} onClick={openCloseModalChallenge}>Guardar</Button>
        <Button className={styles.button_violet} onClick={openCloseModalChallenge}>Cancelar</Button>
      </div>

    </div>
  );

  return (
    <section className="user__detail">
      <article className="user__header">
        <img src="https://firebasestorage.googleapis.com/v0/b/mainaprops.appspot.com/o/avatar_bici.png?alt=media&token=d7a1b930-c413-49b5-b43c-004811d800b5" alt="Avatar" />
        <h3>
          Hola
          <br />
          {userDetail[0]?.user_profile.name}
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
          onClick={openCloseModalChallenge}
        >
          Veure repte
        </Button>
      </article>

      <Modal
        open={modalChallenge}
        onClose={openCloseModalChallenge}
      >
        {body}
      </Modal>
    </section>
  );
}
