import React from 'react';
import { Button } from '@material-ui/core';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { bindActionCreators } from 'redux';
import { emptyStar, fillStar } from '../../constants/starImages';
import useStylesDetail from '../../constants/useStylesDetail';
import { updateCompletedTask } from '../../redux/actions/challengeActionCreators';

function ChallengeBody({
  challengeSelected,
  user,
  save,
  close,
  actions,
}) {
  const styles = useStylesDetail();

  return (
    <div className={styles.modalChallenge}>
      <img src={challengeSelected?.reward?.image} alt="Avatar" className="reward__image" />
      <h3 className="reward__title">{challengeSelected?.reward?.name}</h3>
      <p className="reward__text">
        {`${user?.name} marca les tasques que hagis fet i aconsegueix la merescuda recompensa!`}
      </p>

      {
            challengeSelected?.tasks?.map((task) => (
              <>
                <h5 key={task?.description?.name}>
                  <img className="image__task" src={task?.description?.image} alt="Tasca" />
                  {task?.description?.name}
                </h5>

                <div className="flex check__tasks">
                  {
                    [...Array(task?.times?.total)].map((time, index) => (
                      <div>
                        {
                          task.times.current < task.times.total
                            ? (
                              <img
                                src={index < task.times.current ? fillStar : emptyStar}
                                alt="Estrella"
                                onClick={() => actions.updateCompletedTask(task)}
                                aria-hidden="true"
                              />
                            )
                            : (
                              <img
                                className="completed"
                                src={index < task.times.current ? fillStar : emptyStar}
                                alt="Estrella"
                                aria-hidden="true"
                              />
                            )
                        }
                      </div>
                    ))
                  }
                </div>
              </>
            ))
          }

      <div>
        <Button
          className={styles.button_violet}
          onClick={() => { save(challengeSelected); close(); }}
        >
          Guardar
        </Button>

        <Button
          className={styles.button_turquoise}
          onClick={() => close()}
        >
          Cancelar
        </Button>
      </div>

    </div>
  );
}

ChallengeBody.propTypes = {
  user: PropTypes.shape(
    {
      challenges: PropTypes.arrayOf(PropTypes.shape({})),
      name: PropTypes.string,
      image: PropTypes.string,
    },
  ).isRequired,
  challengeSelected: PropTypes.shape({
    reward: PropTypes.shape({
      name: String,
      image: String,
    }).isRequired,
    tasks: PropTypes.shape([]),
  }).isRequired,
  actions: PropTypes.shape({
    updateCompletedTask: PropTypes.func,
  }).isRequired,
  save: PropTypes.func.isRequired,
  close: PropTypes.func.isRequired,
};

function mapStateToProps({ user, challengeSelected }) {
  return {
    user,
    challengeSelected,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ updateCompletedTask }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ChallengeBody);
