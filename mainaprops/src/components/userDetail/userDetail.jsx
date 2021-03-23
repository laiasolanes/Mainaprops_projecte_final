import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { bindActionCreators } from 'redux';
import { Modal, Button } from '@material-ui/core';
import './userDetail.css';
import { updateSelectedChallenge } from '../../redux/actions/challengeActionCreators';
import { userByParam, updateChallenge } from '../../redux/actions/actionCreators';
import ChallengeBody from './ChallengeBody';
import AchievedBody from './AchievedBody';
import CompletedBody from './CompletedBody';

const pageURL = window.location.href;
const idUser = pageURL.substr(pageURL.lastIndexOf('/') + 1);

export function UserDetailComponent({ user, challengeSelected, actions }) {
  const [isChallengeModalVisible, setChallengeModalVisibility] = useState(false);
  const [modalAchieved, setModalAchieved] = useState(false);
  const [modalCompleted, setModalCompleted] = useState(false);

  const [challengesActives, setChallengesActives] = useState([]);
  const [challengesCompleted, setChallengesCompleted] = useState([]);

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

      setChallengesCompleted(user?.user_profile?.challenges?.filter(
        (challenge) => challenge.completed === true,
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
    actions.updateChallenge(user._id, challenge);
  }

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
        <AchievedBody
          close={openCloseModalAchieved}
        />
      </Modal>

      <Modal
        open={modalCompleted}
        onClose={openCloseModalCompleted}
      >
        <CompletedBody
          close={openCloseModalCompleted}
        />
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
