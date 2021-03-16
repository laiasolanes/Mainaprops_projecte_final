import React, { useState } from 'react';
import './newChallenge.css';
import { Modal, Button } from '@material-ui/core';
import {
  mascotTask,
  instrumentTask,
  dishwasherTask,
  bathTask,
  peaceTask,
  tableTask,
  homeworkTask,
  tidyupTask,
} from '../../constants/taskImages';
import rewards from '../../constants/rewardImages';

import useStylesNewChallenge from '../../constants/useStylesNewChallenge';

const pageURL = window.location.href.split('/');
const idUser = pageURL[4];

export default function NewChallenge() {
  const styles = useStylesNewChallenge();

  const [modalTimes, setModalTimes] = useState(false);
  const [modalRewards, setModalRewards] = useState(false);

  function openCloseModalTimes() {
    setModalTimes(!modalTimes);
  }

  function openCloseModalRewards() {
    setModalRewards(!modalRewards);
  }

  const weekDays = ['dilluns', 'dimarts', 'dimecres', 'dijous', 'divendres', 'dissabte', 'diumenge'];

  const challengeBody = (
    <div className={styles.modalChallenge}>
      <img src={bathTask} alt="Task" className={styles.timeImage} />
      <h3>Dutxar-se</h3>
      <p className={styles.text}>Selecciona els dies de la setmana que has de fer la tasca.</p>

      <div className={styles.days}>
        {weekDays.map((day) => <Button className={styles.button_day}>{day}</Button>)}
      </div>

      <Button
        className={styles.button_turquoise}
        onClick={openCloseModalTimes}
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

      <div className="all__rewards">

        <div className={styles.rowRewards}>

          <article className="reward" id="weekend">
            <Button
              className={styles.rewardButton}
            >
              <div>
                <img className={styles.imgButton} src={rewards.weekend} alt="Recompensa" />
                <p className={styles.pButton}>Escapada familiar</p>
              </div>

            </Button>
          </article>

          <article className="task" id="film">
            <Button
              className={styles.rewardButton}
            >
              <div>
                <img className={styles.imgButton} src={rewards.film} alt="Recompensa" />
                <p className={styles.pButton}>Pel·lícula preferida</p>
              </div>

            </Button>
          </article>

        </div>

        <div className={styles.rowRewards}>

          <article className="reward" id="show">
            <Button
              className={styles.rewardButton}
            >
              <div>
                <img className={styles.imgButton} src={rewards.show} alt="Recompensa" />
                <p className={styles.pButton}>Espectacle ne família</p>
              </div>

            </Button>
          </article>

          <article className="task" id="book">
            <Button
              className={styles.rewardButton}
            >
              <div>
                <img className={styles.imgButton} src={rewards.book} alt="Recompensa" />
                <p className={styles.pButton}>Un llibre nou</p>
              </div>

            </Button>
          </article>

        </div>
        <div className={styles.rowRewards}>

          <article className="reward" id="dinner">
            <Button
              className={styles.rewardButton}
            >
              <div>
                <img className={styles.imgButton} src={rewards.dinner} alt="Recompensa" />
                <p className={styles.pButton}>Espectacle ne família</p>
              </div>

            </Button>
          </article>

          <article className="task" id="friends">
            <Button
              className={styles.rewardButton}
            >
              <div>
                <img className={styles.imgButton} src={rewards.friends} alt="Recompensa" />
                <p className={styles.pButton}>Nit amb amics</p>
              </div>

            </Button>
          </article>

        </div>

        <Button
          className={styles.button_turquoise}
          onClick={openCloseModalRewards}
        >
          Guardar
        </Button>

        <Button
          className={styles.button_outlined}
          onClick={openCloseModalRewards}
        >
          Cancelar
        </Button>

      </div>

    </div>
  );

  return (
    <section className="create__challenge">
      <h2>Crear repte</h2>
      <p className="create__title">El repte durarà una setmana</p>
      <p className="create__text">
        Selecciona les tasques que haurà de fer
        Mariona per complir el repte i aconseguir
        la seva recompensa.
      </p>

      <div className="all__tasks">

        <div className="flex row__tasks">

          <article className="task" id="mascot">
            <Button
              className="task__button"
              onClick={openCloseModalTimes}
            >
              <img src={mascotTask} alt="Tasca" />
              <p>Cuidar la mascota</p>
            </Button>
          </article>

          <article className="task" id="instrument">
            <Button
              className="task__button"
              onClick={openCloseModalTimes}
            >
              <img src={instrumentTask} alt="Tasca" />
              <p>Practicar instrument</p>
            </Button>
          </article>

        </div>

        <div className="flex row__tasks">

          <article className="task" id="dishwasher">
            <Button
              className="task__button"
              onClick={openCloseModalTimes}
            >
              <img src={dishwasherTask} alt="Tasca" />
              <p>Buidar el rentaplats</p>

            </Button>
          </article>

          <article className="task" id="bath">
            <Button
              className="task__button"
              onClick={openCloseModalTimes}
            >
              <img src={bathTask} alt="Tasca" />
              <p>Dutxar-se</p>
            </Button>
          </article>

        </div>

        <div className="flex row__tasks">

          <article className="task" id="peace">
            <Button
              className="task__button"
              onClick={openCloseModalTimes}
            >
              <img src={peaceTask} alt="Tasca" />
              <p>Conviure en pau</p>

            </Button>
          </article>

          <article className="task" id="table">
            <Button
              className="task__button"
              onClick={openCloseModalTimes}
            >
              <img src={tableTask} alt="Tasca" />
              <p>Parar taula</p>
            </Button>
          </article>

        </div>

        <div className="flex row__tasks">

          <article className="task" id="homework">
            <Button
              className="task__button"
              onClick={openCloseModalTimes}
            >
              <img src={homeworkTask} alt="Tasca" />
              <p>Fer els deures</p>

            </Button>
          </article>

          <article className="task" id="tidyup">
            <Button
              className="task__button"
              onClick={openCloseModalTimes}
            >
              <img src={tidyupTask} alt="Tasca" />
              <p>Endreçar</p>
            </Button>
          </article>

        </div>

      </div>

      <Button
        variant="contained"
        className="button--violet-big"
        onClick={openCloseModalRewards}
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
        {challengeBody}
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
