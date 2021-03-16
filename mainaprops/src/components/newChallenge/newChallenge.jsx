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
import useStylesNewChallenge from '../../constants/useStylesNewChallenge';

const pageURL = window.location.href.split('/');
const idUser = pageURL[4];

export default function NewChallenge() {
  const styles = useStylesNewChallenge();

  const [modalTimes, setModalTimes] = useState(false);
  //   const [modalRewards, setModalRewards] = useState(false);

  function openCloseModalTimes() {
    setModalTimes(!modalTimes);
  }

  //   function openCloseModalRewards() {
  //     setModalRewards(!modalRewards);
  //   }

  const challengeBody = (
    <div className={styles.modalChallenge}>
      <img src={bathTask} alt="Task" className="time__image" />
      <h3>Dutxar-se</h3>
      <p className="time__text">Selecciona els dies de la setmana que has de fer la tasca.</p>
      <div className="flex days">
        <Button className={styles.button_day}>dilluns</Button>
        <Button className={styles.button_day}>dimarts</Button>
        <Button className={styles.button_day}>dimecres</Button>
        <Button className={styles.button_day}>dijous</Button>
        <Button className={styles.button_day}>divendres</Button>
        <Button className={styles.button_day}>dissabte</Button>
        <Button className={styles.button_day}>diumenge</Button>
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

  //   const rewardsBody = (
  //     <div className={styles.modalChallenge}>
  //       <h2>hola</h2>
  //     </div>
  //   );

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

    </section>
  );
}
