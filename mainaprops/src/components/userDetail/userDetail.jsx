import React, { useState } from 'react';
import { Modal, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import './userDetail.css';
import userData from '../../constants/usersData';

const pageURL = window.location.href;
const idUser = pageURL.substr(pageURL.lastIndexOf('/') + 1);

const userProfile = userData.filter((element) => element._id === idUser);

const challengesUser = userProfile[0]?.user_profile?.challenges;

const challengesCompleted = challengesUser?.filter((challenge) => challenge.completed === true);
const challengesActives = challengesUser?.filter((challenge) => challenge.completed === false);
console.log(challengesActives?.length);

// const challengesActives = () => challengesUser.length - challengesCompleted.length;
// console.log(challengesActives);

const useStyles = makeStyles((theme) => ({
  modal: {
    position: 'absolute',
    width: '98%',
    backgroundColor: '#ffffff',
    border: '3px solid #ffffff',
    color: '#3D2563',
    borderRadius: '20px',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(8, 4, 8, 4),
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    outlineStyle: 'none',
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
          {userProfile[0]?.user_profile.name}
        </h3>

        <p>Estàs apunt d’aconseguir els teus propòsits</p>

        <div className="flex challenges__resume">

          <div className="resume__detail">
            <span>{challengesCompleted.length}</span>
            <br />
            reptes completats
          </div>

          <div className="resume__detail">
            <span>{challengesActives.length}</span>
            <br />
            reptes actius
          </div>

        </div>

        <Button
          variant="contained"
          className="button--violet-small"
        >
          Crear repte
        </Button>
      </article>

      {
          challengesActives.map((challenge) => (
            <article className="user__challenge">

              <img src={challenge.reward.image} alt="Recompensa" />

              <h3>
                {challenge.reward.name}
              </h3>

              <div className="challenge__resume">
                <span>{challenge.tasks.times}</span>
                <br />
                tasques pendents
              </div>

              <Button
                variant="contained"
                className="button--turquoise-small"
                onClick={openCloseModalChallenge}
              >
                Veure repte
              </Button>
            </article>
          ))
      }

      <Modal
        open={modalChallenge}
        onClose={openCloseModalChallenge}
      >
        {body}
      </Modal>
    </section>
  );
}
