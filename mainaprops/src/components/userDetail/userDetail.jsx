import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { bindActionCreators } from 'redux';
import { Modal, Button } from '@material-ui/core';
import './userDetail.css';
import Confetti from 'react-confetti';
import useWindowSize from '@rooks/use-window-size';
import { updateSelectedChallenge } from '../../redux/actions/challengeActionCreators';
import { userByParam, updateChallenge } from '../../redux/actions/actionCreators';
import useStylesDetail from '../../constants/useStylesDetail';
import ChallengeBody from './ChallengeBody';

const pageURL = window.location.href;
const idUser = pageURL.substr(pageURL.lastIndexOf('/') + 1);

export function UserDetailComponent({ user, challengeSelected, actions }) {
  const styles = useStylesDetail();

  const { width, height } = useWindowSize();

  const [isChallengeModalVisible, setChallengeModalVisibility] = useState(false);
  const [modalAchieved, setModalAchieved] = useState(false);
  const [modalCompleted, setModalCompleted] = useState(false);

  const [challengesActives, setChallengesActives] = useState([]);

  function toggleChallengeModal() {
    setChallengeModalVisibility(!isChallengeModalVisible);
  }

  function openCloseModalAchieved() {
    setModalAchieved(!modalAchieved);
  }

  function openCloseModalCompleted() {
    setModalCompleted(!modalCompleted);
  }

  useEffect(() => {
    if (!user) {
      actions.userByParam(idUser);
    } else {
      setChallengesActives(user?.user_profile?.challenges?.filter(
        (challenge) => challenge.completed === false,
      ));
    }
  }, [user]);

  useEffect(() => {
    if (challengeSelected?.completed) openCloseModalAchieved();
  }, [challengeSelected]);

  function clickViewChallenge(challenge) {
    actions.updateSelectedChallenge(challenge);
    toggleChallengeModal();
  }

  function clickSaveChallenge(challenge) {
    // TODO get data and save
    actions.updateChallenge(user._id, challenge);
  }

  function markCompletedChallenge() {
    // actions.updateChallenge(idUser, challengeSelected._id);
    openCloseModalAchieved();
  }

  const challengesCompleted = user?.user_profile?.challenges?.filter(
    (challenge) => challenge.completed === true,
  );

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

  const completedBody = (
    <div className={styles.modalChallenge}>
      <img src={user?.user_profile?.image} alt="Avatar" className="reward__image" />
      <h3 className="title__completed">
        Tens
        {' '}
        {challengesCompleted?.length}
        {' '}
        reptes completats
        <br />
        {user?.user_profile?.name}
        !
      </h3>

      {
         challengesCompleted?.map((challenge) => (
           <div className=" flex task__completed" key={challenge._id}>
             <div className="image__completed">
               <img src={challenge?.reward?.image} alt="Tasca completa" />
             </div>

             <div>
               <h4 key={challenge?.reward?.name}>
                 {challenge?.reward?.name}
               </h4>
               <p>{challenge?.end_date}</p>
             </div>
           </div>
         ))
      }

    </div>
  );

  return (
    <section className="user__detail">
      <article className="user__header">
        <img src={user?.user_profile?.image} alt="Avatar" />
        <h3>
          Hola
          <br />
          {user?.user_profile?.name}
        </h3>

        <p>Estàs apunt d’aconseguir els teus propòsits</p>

        <div className="flex challenges__resume">

          <div
            className="resume__detail"
            onClick={openCloseModalCompleted}
            aria-hidden="true"
            role="button"
            tabIndex="0"
          >
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
          href={`/users/${user?._id}/newchallenge`}
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
        open={isChallengeModalVisible}
        onClose={toggleChallengeModal}
      >
        <ChallengeBody
          close={toggleChallengeModal}
          save={clickSaveChallenge}
        />
      </Modal>

      <Modal
        open={modalAchieved}
        onClose={openCloseModalAchieved}
      >
        {achievedBody}
      </Modal>

      <Modal
        open={modalCompleted}
        onClose={openCloseModalCompleted}
      >
        {completedBody}
      </Modal>
    </section>
  );
}

UserDetailComponent.propTypes = {
  // eslint-disable-next-line react/require-default-props
  user: PropTypes.shape(
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
  challengeSelected: PropTypes.shape({
    reward: PropTypes.shape({
      name: String,
      image: String,
    }).isRequired,
    tasks: PropTypes.shape([]),
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  actions: PropTypes.shape({
    userByParam: PropTypes.func,
    updateChallenge: PropTypes.func,
    updateSelectedChallenge: PropTypes.func,
  }).isRequired,
};

function mapStateToProps({ user, challengeSelected }) {
  return {
    user,
    challengeSelected,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      userByParam,
      updateChallenge,
      updateSelectedChallenge,
    }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserDetailComponent);
