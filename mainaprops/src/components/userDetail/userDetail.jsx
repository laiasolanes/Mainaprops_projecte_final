/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { bindActionCreators } from 'redux';
import { Modal, Button } from '@material-ui/core';
import './userDetail.css';
import userData from '../../constants/usersData';
import { userByParam } from '../../redux/actions/actionCreators';
import useStylesDetail from '../../constants/useStylesDetail';

const pageURL = window.location.href;
const idUser = pageURL.substr(pageURL.lastIndexOf('/') + 1);

const userProfile = userData.filter((element) => element._id === idUser);

const challengesUser = userProfile[0]?.user_profile?.challenges;

const challengesCompleted = challengesUser?.filter((challenge) => challenge.completed === true);
const challengesActives = challengesUser?.filter((challenge) => challenge.completed === false);
console.log(challengesActives?.length);

const emptyStar = 'https://firebasestorage.googleapis.com/v0/b/mainaprops.appspot.com/o/estrella_perfil_50.png?alt=media&token=c929198f-4414-4aae-8e70-fccca09e23a0';
const fillStar = 'https://firebasestorage.googleapis.com/v0/b/mainaprops.appspot.com/o/estrella_50.png?alt=media&token=c67c7b3f-ca4d-411d-a776-bdf1639489bc';

function UserDetailComponent({ users, actions }) {
  const styles = useStylesDetail();

  const [modalChallenge, setModalChallenge] = useState(false);

  useEffect(() => {
    if (!users || !users.length) {
      actions.userByParam(idUser);
    }
  }, [users]);

  function openCloseModalChallenge() {
    setModalChallenge(!modalChallenge);
  }

  function markCompleted(elementId) {
    const element = document.getElementById(elementId);
    if (element.src === emptyStar) {
      element.src = fillStar;
    } else {
      element.src = emptyStar;
    }
  }

  const body = (
    <div className={styles.modal}>
      <img src="https://firebasestorage.googleapis.com/v0/b/mainaprops.appspot.com/o/avatar_bici.png?alt=media&token=d7a1b930-c413-49b5-b43c-004811d800b5" alt="Avatar" className="reward__image" />
      <h3 className="reward__title">{userProfile[0]?.user_profile.name}</h3>
      <p className="reward__text">Marca les tasques que hagis fet i aconsegueix la merescuda recompensa!</p>

      <h5>Parar la taula</h5>
      <div className="flex check__tasks">
        <div><img src={emptyStar} alt="Estrella" onClick={() => markCompleted('star_1')} id="star_1" /></div>
        <div><img src={emptyStar} alt="Estrella" onClick={() => markCompleted('star_2')} id="star_2" /></div>
        <div><img src={emptyStar} alt="Estrella" onClick={() => markCompleted('star_3')} id="star_3" /></div>
        <div><img src={emptyStar} alt="Estrella" onClick={() => markCompleted('star_4')} id="star_4" /></div>
        <div><img src={emptyStar} alt="Estrella" onClick={() => markCompleted('star_5')} id="star_5" /></div>
        <div><img src={emptyStar} alt="Estrella" onClick={() => markCompleted('star_6')} id="star_6" /></div>
        <div><img src={emptyStar} alt="Estrella" onClick={() => markCompleted('star_7')} id="star_7" /></div>

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
          {users[0]?.user_profile?.name}
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
  users: PropTypes.shape([]).isRequired,
  actions: PropTypes.shape({
    userByParam: PropTypes.func,
  }).isRequired,
};

function mapStateToProps(state) {
  return { users: state.users };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      userByParam,
    }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserDetailComponent);
