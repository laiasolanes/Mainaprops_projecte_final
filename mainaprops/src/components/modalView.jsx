import React, { useState } from 'react';
import { Modal, TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  modal: {
    position: 'absolute',
    width: 400,
    backgroundColor: 'white',

    padding: theme.spacing(2, 4, 3, 4),
    // cada unitat son 8px
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  textfield: {
    width: '100%',
  },
  container: {
    textAlign: 'center',
  },

}));

function ModalView() {
  const styles = useStyles();

  const [modal, setModal] = useState(false);

  const abrirCerrarModal = () => {
    setModal(!modal);
  };

  const body = (
    <div className={styles.modal}>
      <div align="center">
        <h2>Formulari</h2>
      </div>
      <TextField label="Nom" className={styles.textfield} />
      <br />
      <TextField label="Cognom" className={styles.textfield} />
      <br />
      <TextField label="Email" className={styles.textfield} />
      <br />
      <br />
      <div align="right">
        <Button color="primary">Enviar</Button>
        <Button onClick={() => abrirCerrarModal()}>Cancelar</Button>
      </div>

    </div>
  );

  return (
    <div className={styles.container}>
      <h1>Hola</h1>
      <Button className={styles.button} onClick={() => abrirCerrarModal()}>Obrir modal</Button>
      <Modal
        open={modal}
        onClose={abrirCerrarModal}
      >
        {body}
      </Modal>
    </div>
  );
}

export default ModalView;
