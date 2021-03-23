import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { bindActionCreators } from 'redux';
import './newChallenge.css';
import { Modal, Button } from '@material-ui/core';
import { loadDataChallenge, createChallenge } from '../../redux/actions/actionCreators';
import useStylesNewChallenge from '../../constants/useStylesNewChallenge';

const pageURL = window.location.href.split('/');
const idUser = pageURL[4];

export function NewChallengeComponent({ dataChallenge, actions }) {
  const styles = useStylesNewChallenge();

  const [modalTimes, setModalTimes] = useState(false);
  const [modalRewards, setModalRewards] = useState(false);

  const [taskSelected, setTaskSelected] = useState({});
  const [tasksChallenge, setTasksChallenge] = useState([]);
  const [rewardSelected, setRewardSelected] = useState('');
  const [timesTask, setTimesTask] = useState(0);

  useEffect(() => {
    actions.loadDataChallenge(idUser);
  }, []);

  function openCloseModalTimes() {
    setModalTimes(!modalTimes);
  }

  function openCloseModalRewards() {
    setModalRewards(!modalRewards);
  }

  function addClass(idItem) {
    const item = document.getElementById(idItem);
    return item.classList.contains('selected')
      ? item.classList.remove('selected')
      : item.classList.add('selected');
  }

  function addAttribute(idItem) {
    const item = document.getElementById(idItem);
    return item.hasAttribute('selected')
      ? item.removeAttribute('selected')
      : item.setAttribute('selected', '');
  }

  function clickTask(task, id) {
    setTaskSelected(task);
    addClass(id);
    const item = document.getElementById(id);
    if (item.classList.contains('selected')) {
      openCloseModalTimes();
    } else {
      setTasksChallenge(tasksChallenge.filter((taskSaved) => taskSaved.task_id !== task._id));
    }
  }

  function clickTimes(idTime, button) {
    if (button.parentElement.hasAttribute('selected')) {
      setTimesTask(timesTask - 1);
    } else {
      console.log(timesTask);
      setTimesTask(timesTask + 1);
    }
    addAttribute(idTime);
  }

  function clickSaveTask(idTask) {
    setTasksChallenge(
      [...tasksChallenge,
        { description: idTask, times: { total: timesTask, current: 0 } },
      ],
    );
    setTimesTask(0);
    openCloseModalTimes();
  }

  function clickSaveChallenge() {
    console.log(rewardSelected);
    actions.createChallenge(idUser, tasksChallenge, rewardSelected);
  }

  function clickCancelChallenge() {
    setRewardSelected('');
    openCloseModalRewards();
  }

  const weekDays = ['dilluns', 'dimarts', 'dimecres', 'dijous', 'divendres', 'dissabte', 'diumenge'];

  const timesTaskBody = (
    <div className={styles.modalChallenge}>
      <img src={taskSelected.image} alt="Task" className={styles.timeImage} />
      <h3>{taskSelected.name}</h3>
      <p className={styles.text}>
        Selecciona els dies de la setmana que has de
        {' '}
        {taskSelected?.name?.toLowerCase()}
        .
      </p>
      <div className={styles.days}>

        {
        weekDays.map((day) => (
          <Button
            className={document.getElementById(day)
              ?.hasAttribute('selected')
              ? styles.selected
              : styles.button_day}
            id={day}
            key={day}
            onClick={(event) => clickTimes(day, event.target)}
          >
            {day}
          </Button>
        ))
      }
      </div>

      <Button
        className={styles.button_turquoise}
        onClick={() => clickSaveTask(taskSelected._id)}
        disabled={(timesTask.length === 0)}
      >
        Guardar
      </Button>

      <Button
        className={styles.button_outlined}
        onClick={openCloseModalTimes}
      >
        Cancelar
      </Button>

    </div>
  );

  const rewardsBody = (
    <div className={styles.modalChallenge}>

      <h3>La recompensa</h3>

      <p className={styles.text}>
        Selecciona la recompensa que
        rebras quan facis totes les tasques i aconsegueixis el repte.
      </p>

      <div className={styles.rowRewards}>

        {
          dataChallenge && dataChallenge?.allRewards?.map((reward) => (
            <article className="reward" id={reward._id} key={reward._id}>
              <Button
                className={styles.rewardButton}
                onClick={() => setRewardSelected(reward._id)}
              >
                <div>
                  <img className={styles.imgButton} src={reward.image} alt="Recompensa" />
                  <p className={styles.pButton}>{reward.name}</p>
                </div>

              </Button>
            </article>
          ))
        }
      </div>
      <Button
        className={styles.button_turquoise}
        onClick={() => clickSaveChallenge()}
        href={`/users/${idUser}`}
        disabled={!rewardSelected}
      >
        Guardar
      </Button>

      <Button
        className={styles.button_outlined}
        onClick={() => clickCancelChallenge()}
      >
        Cancelar
      </Button>

    </div>
  );

  return (
    <section className="create__challenge">
      <h2>Crear repte</h2>
      <p className="create__title">El repte durarà una setmana</p>
      <p className="create__text">
        Selecciona les tasques que hauràs de fer
        per complir el repte i aconseguir
        la recompensa.
      </p>

      <div className="flex all__tasks">
        {
        dataChallenge && dataChallenge?.allTasks?.map((task) => (
          <article className="task" key={task._id}>
            <Button
              id={task._id}
              className="task__button"
              onClick={() => clickTask(task, task._id)}
            >
              <img src={task.image} alt="Tasca" />
              <p>{task.name}</p>
            </Button>
          </article>
        ))
      }

      </div>

      <Button
        id="prova"
        variant="contained"
        className="button--violet-big"
        onClick={openCloseModalRewards}
        disabled={(tasksChallenge.length === 0)}
      >
        Guardar
      </Button>

      <Button
        variant="contained"
        className="button--outlined-big"
        href={`/users/${idUser}`}
      >
        Cancelar
      </Button>

      <Modal
        open={modalTimes}
        onClose={openCloseModalTimes}
      >
        {timesTaskBody}
      </Modal>

      <Modal
        open={modalRewards}
        onClose={openCloseModalRewards}
      >
        {rewardsBody}
      </Modal>

    </section>
  );
}

NewChallengeComponent.propTypes = {
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
    loadDataChallenge: PropTypes.func,
    createChallenge: PropTypes.func,
  }).isRequired,
};

function mapStateToProps(state) {
  return { dataChallenge: state.dataChallenge };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      loadDataChallenge, createChallenge,
    }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NewChallengeComponent);
