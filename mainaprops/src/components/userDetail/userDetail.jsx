/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { bindActionCreators } from 'redux';
import { Modal, Button } from '@material-ui/core';
import './userDetail.css';
import { userByParam } from '../../redux/actions/actionCreators';
import useStylesDetail from '../../constants/useStylesDetail';
import { emptyStar, fillStar } from '../../constants/starImages';

const pageURL = window.location.href;
const idUser = pageURL.substr(pageURL.lastIndexOf('/') + 1);
export function UserDetailComponent({ users, actions }) {
  const styles = useStylesDetail();

  const [modalChallenge, setModalChallenge] = useState(false);
  const [modalAchieved, setModalAchieved] = useState(false);
  const [challengeSelected, setChallengeSelected] = useState({});

  const selectChallenge = (challenge) => {
    setChallengeSelected(challenge);
  };

  useEffect(() => {
    if (!users || !users.length) {
      actions.userByParam(idUser);
    }
  }, [users]);

  function openCloseModalChallenge() {
    setModalChallenge(!modalChallenge);
  }

  function openCloseModalAchieved() {
    setModalAchieved(!modalAchieved);
  }

  function markCompleted(elementId) {
    const element = document.getElementById(elementId);
    element.src === emptyStar ? element.src = fillStar : element.src = emptyStar;
  }

  function clickViewChallenge(challenge) {
    selectChallenge(challenge);
    openCloseModalChallenge();
  }

  function clickSaveChallenge() {
    openCloseModalChallenge();
    openCloseModalAchieved();
  }

  const challengeBody = (
    <div className={styles.modalChallenge}>
      <img src={challengeSelected?.reward?.image} alt="Avatar" className="reward__image" />
      <h3 className="reward__title">{challengeSelected?.reward?.name}</h3>
      <p className="reward__text">
        {users[0]?.user_profile.name}
        {' '}
        marca les tasques que hagis fet i aconsegueix la merescuda recompensa!
      </p>

      {

        challengeSelected && challengeSelected?.tasks?.map((task) => (
          <>
            <h5 key={task.name}>{task.name}</h5>
            <div className="flex check__tasks">
              {
                  task.times && task.times.map((time, index) => (

                    <div>
                      <img
                        src={time ? fillStar : emptyStar}
                        alt="Estrella"
                        onClick={() => markCompleted(task._id + index)}
                        id={task._id + index}
                      />
                    </div>

                  ))
                }
              <div />
            </div>
            <div />
          </>
        ))
      }

      <div>
        <Button
          className={styles.button_violet}
          onClick={() => clickSaveChallenge()}
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

  const achievedBody = (
    <div className={styles.modalAchieved}>
      <h2>
        Repte
        <br />
        aconseguit!
      </h2>
      <img src={challengeSelected?.reward?.image} alt="Avatar" className="reward__achieved" />

      <h3 className="reward__title">{challengeSelected?.reward?.name}</h3>
      <br />

      <div>

        <Button
          className={styles.button_turquoise}
          onClick={(openCloseModalAchieved)}
        >
          Tornar als reptes
        </Button>
      </div>

    </div>
  );

  const challengesActives = users[0]?.user_profile.challenges?.filter(
    (challenge) => challenge.completed === false,
  );

  const challengesCompleted = users[0]?.user_profile.challenges?.filter(
    (challenge) => challenge.completed === true,
  );

  return (

    <section className="user__detail">
      <article className="user__header">
        <img src={users[0]?.user_profile?.image} alt="Avatar" />
        <h3>
          Hola
          <br />
          {users[0]?.user_profile?.name}
        </h3>

        <p>Estàs apunt d’aconseguir els teus propòsits</p>

        <div className="flex challenges__resume">

          <div className="resume__detail">
            <span>{challengesCompleted?.length}</span>
            <br />
            reptes completats
          </div>

          <a href="#startChallenges">
            <div className="resume__detail">
              <span>{challengesActives?.length}</span>
              <br />
              reptes actius
            </div>

          </a>

        </div>

        <Button
          variant="contained"
          className="button--violet-small"
          href={`/users/${users[0]?._id}/newchallenge`}
        >
          Crear repte
        </Button>
      </article>
      <div id="startChallenges" />
      {
          challengesActives?.map((challenge) => (
            <article className="user__challenge" key={challenge._id}>

              <img src={challenge.reward.image} alt="Recompensa" />

              <h3>
                {challenge.reward.name}
              </h3>

              <div
                className="challenge__resume"
                onClick={() => clickViewChallenge(challenge)}
              >
                <span>{challenge.tasks.length}</span>
                <br />
                tasques pendents
              </div>

              <Button
                variant="contained"
                className="button--turquoise-small"
                onClick={() => clickViewChallenge(challenge)}
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
        {challengeBody}
      </Modal>

      <Modal
        open={modalAchieved}
        onClose={openCloseModalAchieved}
      >
        {achievedBody}
      </Modal>
    </section>
  );
}

UserDetailComponent.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape(
      {
        user_profile: PropTypes.shape(
          {
            challenges: PropTypes.arrayOf(PropTypes.shape({})),
            name: PropTypes.string,
            image: PropTypes.string,
          },
        ),
        _id: PropTypes.number,
      },
    ),
  ).isRequired,
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
