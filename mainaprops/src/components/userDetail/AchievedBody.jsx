import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import Confetti from 'react-confetti';
import { Button } from '@material-ui/core';
import useWindowSize from '@rooks/use-window-size';
import useStylesDetail from '../../constants/useStylesDetail';

function AchievedBody({ challengeSelected, close }) {
  const styles = useStylesDetail();

  const { width, height } = useWindowSize();

  return (
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
          onClick={() => close()}
        >
          Tornar als reptes
        </Button>
      </div>
    </div>
  );
}

AchievedBody.propTypes = {
  challengeSelected: PropTypes.shape({
    reward: PropTypes.shape({
      name: String,
      image: String,
    }).isRequired,
    tasks: PropTypes.shape([]),
  }).isRequired,
  close: PropTypes.func.isRequired,
};

function mapStateToProps({ challengeSelected }) {
  return {
    challengeSelected,
  };
}

export default connect(mapStateToProps)(AchievedBody);
