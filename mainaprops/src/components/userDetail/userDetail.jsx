/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { bindActionCreators } from 'redux';
import { Modal, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import './userDetail.css';
import userData from '../../constants/usersData';
import { userByParam } from '../../redux/actions/actionCreators';

const pageURL = window.location.href;
const idUser = pageURL.substr(pageURL.lastIndexOf('/') + 1);

const userProfile = userData.filter((element) => element._id === idUser);

const challengesUser = userProfile[0]?.user_profile?.challenges;

const challengesCompleted = challengesUser?.filter((challenge) => challenge.completed === true);
const challengesActives = challengesUser?.filter((challenge) => challenge.completed === false);
console.log(challengesActives?.length);

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
  button_turquoise: {
    width: '100%',
    backgroundColor: '#6CC3C6',
    color: '#ffffff',
    fontWeight: '600',
    textTransform: 'none',
    margin: '10px 0',
    padding: '10px 0',
    borderRadius: '50px',
    boxShadow: theme.shadows[2],
    '&:hover': {
      backgroundColor: '#58a2a5',
    },
  },

}));
const estrella = 'https://firebasestorage.googleapis.com/v0/b/mainaprops.appspot.com/o/estrella_perfil_50.png?alt=media&token=c929198f-4414-4aae-8e70-fccca09e23a0';

function UserDetailComponent({ user, actions }) {
  const styles = useStyles();

  const [modalChallenge, setModalChallenge] = useState(false);

  useEffect(() => {
    if (!user) {
      actions.userByParam(idUser);
    }
  }, [user]);

  function openCloseModalChallenge() {
    setModalChallenge(!modalChallenge);
  }

  const body = (
    <div className={styles.modal}>
      <img src="https://firebasestorage.googleapis.com/v0/b/mainaprops.appspot.com/o/avatar_bici.png?alt=media&token=d7a1b930-c413-49b5-b43c-004811d800b5" alt="Avatar" className="reward__image" />
      <h3 className="reward__title">{userProfile[0]?.user_profile.name}</h3>
      <p className="reward__text">Marca les tasques que hagis fet i aconsegueix la merescuda recompensa!</p>

      <h5>Parar la taula</h5>
      <div className="flex check__tasks">
        <div><img src={estrella} alt="Estrella" /></div>
        <div><img src={estrella} alt="Estrella" /></div>
        <div><img src={estrella} alt="Estrella" /></div>
        <div><img src={estrella} alt="Estrella" /></div>
        <div><img src={estrella} alt="Estrella" /></div>
        <div><img src={estrella} alt="Estrella" /></div>
        <div><img src={estrella} alt="Estrella" /></div>

      </div>
      <div>
        <Button
          className={styles.button_violet}
          onClick={openCloseModalChallenge}
        >
          Guardar

        </Button>
        <Button
          className={styles.button_turquoise}
          onClick={openCloseModalChallenge}
        >
          Cancelar
        </Button>
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
          {user?.user_profile?.challenges?.reward}
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

UserDetailComponent.propTypes = {
  user: PropTypes.shape([]).isRequired,
  actions: PropTypes.shape({
    userByParam: PropTypes.func,
  }).isRequired,
};

function mapStateToProps(state) {
  return { user: state.users.user_profile };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      userByParam,
    }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserDetailComponent);
