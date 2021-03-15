import React from 'react';
import './newChallenge.css';
import { Button } from '@material-ui/core';
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

export default function NewChallenge() {
  return (
    <section className="create__challenge">
      <h2>Crear repte</h2>
      <p className="create__title">El repte durarà una setmna</p>
      <p className="create__text">
        Selecciona les tasques que haurà de fer
        Mariona per complir el repte i aconseguir
        la seva recompensa.
      </p>

      <div className="all__tasks">
        <div className="flex row__tasks">
          <article className="task" id="mascot">
            <Button className="task__button">
              <img src={mascotTask} alt="Tasca" />
              <p>Cuidar la mascota</p>

            </Button>
          </article>

          <article className="task" id="instrument">
            <Button className="task__button">
              <img src={instrumentTask} alt="Tasca" />
              <p>Practicar instrument</p>
            </Button>
          </article>
        </div>

        <div className="flex row__tasks">
          <article className="task" id="dishwasher">
            <Button className="task__button">
              <img src={dishwasherTask} alt="Tasca" />
              <p>Buidar el rentaplats</p>

            </Button>
          </article>

          <article className="task" id="bath">
            <Button className="task__button">
              <img src={bathTask} alt="Tasca" />
              <p>Dutxar-se</p>
            </Button>
          </article>
        </div>

        <div className="flex row__tasks">
          <article className="task" id="peace">
            <Button className="task__button">
              <img src={peaceTask} alt="Tasca" />
              <p>Buidar el rentaplats</p>

            </Button>
          </article>

          <article className="task" id="table">
            <Button className="task__button">
              <img src={tableTask} alt="Tasca" />
              <p>Dutxar-se</p>
            </Button>
          </article>
        </div>

        <div className="flex row__tasks">
          <article className="task" id="homework">
            <Button className="task__button">
              <img src={homeworkTask} alt="Tasca" />
              <p>Buidar el rentaplats</p>

            </Button>
          </article>

          <article className="task" id="tidyup">
            <Button className="task__button">
              <img src={tidyupTask} alt="Tasca" />
              <p>Dutxar-se</p>
            </Button>
          </article>
        </div>

      </div>

    </section>
  );
}
