import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { bindActionCreators } from 'redux';
import { Modal, Button } from '@material-ui/core';
import './userDetail.css';
import Confetti from 'react-confetti';
import useWindowSize from '@rooks/use-window-size';
import { userByParam, updateChallenge } from '../../redux/actions/actionCreators';
import useStylesDetail from '../../constants/useStylesDetail';
import { emptyStar, fillStar } from '../../constants/starImages';

const pageURL = window.location.href;
const idUser = pageURL.substr(pageURL.lastIndexOf('/') + 1);
export function UserDetailComponent({ users, dataChallenge, actions }) {
  const styles = useStylesDetail();

  const [modalChallenge, setModalChallenge] = useState(false);
  const [modalAchieved, setModalAchieved] = useState(false);
  const [challengeSelected, setChallengeSelected] = useState({});
  const [selectedElement, setSelectedElement] = useState(null);
  const [taskSelected, setTaskSelected] = useState({
    times: [],
  });

  useEffect(() => {
    if (!users || !users.length || dataChallenge === {}) {
      actions.userByParam(idUser);
    }
  }, [users, dataChallenge]);

  function openCloseModalChallenge() {
    setModalChallenge(!modalChallenge);
  }

  function openCloseModalAchieved() {
    setModalAchieved(!modalAchieved);
  }

  function markCompleted(elementId, tasca) {
    setTaskSelected(tasca);
    setSelectedElement(document.getElementById(elementId));
  }

  useEffect(() => {
    if (selectedElement?.src === emptyStar) {
      selectedElement.src = fillStar;
      const newArray = taskSelected.times.slice(0, taskSelected.times.length - 1);

      const withTrueArray = [true, ...newArray];
      const index = challengeSelected.tasks.findIndex((task) => task._id === taskSelected._id);
      const tasksCopy = [...challengeSelected.tasks];
      tasksCopy.splice(index, 1, { ...taskSelected, times: withTrueArray });

      setChallengeSelected({
        ...challengeSelected,
        tasks: tasksCopy,
      });
      setTaskSelected({ ...taskSelected, times: withTrueArray });
    } else if (selectedElement) {
      selectedElement.src = emptyStar;

      const shortArray = taskSelected.times.slice(1, taskSelected.times.length);

      const deleteTrueArray = [...shortArray, false];
      const indexEmpty = challengeSelected.tasks.findIndex((task) => task._id === taskSelected._id);
      const emptyTasksCopy = [...challengeSelected.tasks];

      emptyTasksCopy.splice(indexEmpty, 1, { ...taskSelected, times: deleteTrueArray });

      setChallengeSelected({
        ...challengeSelected,
        tasks: emptyTasksCopy,
      });
      setTaskSelected({ ...taskSelected, times: deleteTrueArray });
    }
  }, [selectedElement]);

  useEffect(() => {
    console.log(taskSelected.times);
  }, [taskSelected]);

  function clickViewChallenge(challenge) {
    setChallengeSelected(challenge);
    openCloseModalChallenge();
  }

  function clickSaveChallenge() {
    const finish = taskSelected.times.every((item) => item === true);

    if (finish) {
      openCloseModalChallenge();
      openCloseModalAchieved();
    } else {
      openCloseModalChallenge();
    }
  }

  function markCompletedChallenge() {
    actions.updateChallenge(idUser, challengeSelected._id);
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

            <h5 key={task?.task_id?.name}>
              <img className="image__task" src={task?.task_id?.image} alt="Tasca" />

              {task?.task_id?.name}

            </h5>

            <div className="flex check__tasks">
              {
                  task.times && task.times.map((time, index) => (

                    <div>
                      <img
                        src={time ? fillStar : emptyStar}
                        alt="Estrella"
                        onClick={() => markCompleted(task.task_id._id + index, task)}
                        aria-hidden="true"
                        id={task.task_id._id + index}
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

  const { width, height } = useWindowSize();

  const achievedBody = (
    <div className={styles.modalAchieved}>
      <Confetti
        width={width}
        height={height}
      />
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
          onClick={() => markCompletedChallenge()}
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
                aria-hidden="true"
                role="button"
                tabIndex="0"
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
        _id: PropTypes.string,
      },
    ),
  ).isRequired,
  dataChallenge: PropTypes.shape(
    {
      allTasks: PropTypes.arrayOf(
        PropTypes.shape({}),
      ),
      allRewards: PropTypes.arrayOf(
        PropTypes.shape({}),
      ),
    },
  ).isRequired,
  actions: PropTypes.shape({
    userByParam: PropTypes.func,
    updateChallenge: PropTypes.func,
  }).isRequired,
};

function mapStateToProps(state) {
  return {
    users: state.users,
    dataChallenge: state.dataChallenge,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      userByParam, updateChallenge,
    }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserDetailComponent);
