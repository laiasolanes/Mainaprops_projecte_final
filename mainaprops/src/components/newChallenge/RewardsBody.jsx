import React, { useState } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { Button } from '@material-ui/core';
import useStylesNewChallenge from '../../constants/useStylesNewChallenge';

const pageURL = window.location.href.split('/');
const idUser = pageURL[4];

function RewardsBody({ dataChallenge, save, close }) {
  const styles = useStylesNewChallenge();

  const [rewardSelected, setRewardSelected] = useState('');

  return (
    <div className={styles.modalChallenge}>

      <h3>La recompensa</h3>

      <p className={styles.text}>
        Selecciona la recompensa que
        aconseguiràs quan facis totes les tasques i completis el repte.
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
        onClick={() => save(rewardSelected)}
        href={`/users/${idUser}`}
        disabled={!rewardSelected}
      >
        Guardar
      </Button>

      <Button
        className={styles.button_outlined}
        onClick={() => close()}
      >
        Cancelar
      </Button>

    </div>
  );
}

RewardsBody.propTypes = {
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
  save: PropTypes.func.isRequired,
  close: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return { dataChallenge: state.dataChallenge };
}

export default connect(mapStateToProps)(RewardsBody);
