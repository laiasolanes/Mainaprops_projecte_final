/* eslint-disable no-debugger */
/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import './usersList.css';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import { Modal, TextField } from '@material-ui/core';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import EditRoundedIcon from '@material-ui/icons/EditRounded';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  modal: {
    position: 'absolute',
    width: '98%',
    backgroundColor: '#6CC3C6',
    border: '3px solid #ffffff',
    color: '#ffffff',
    borderRadius: '10px',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(8, 4, 8, 4),
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  textfield: {
    width: '100%',
  },
  inputMaterial: {
    width: '100%',
  },
  button_violet: {
    width: '100%',
    backgroundColor: '#3D2563',
    color: '#ffffff',
    textTransform: 'none',
    margin: '10px 0',
    padding: '10px 0',
    borderRadius: '50px',
    boxShadow: theme.shadows[2],
  },
  button_outlined: {
    width: '100%',
    backgroundColor: '#6CC3C6',
    color: '#ffffff',
    textTransform: 'none',
    margin: '10px 0',
    padding: '8px 0',
    borderRadius: '50px',
    border: '3px solid #ffffff',
    boxShadow: theme.shadows[2],
  },
}));

export default function UsersList() {
  const styles = useStyles();

  // hook per data obtinguda de axios
  const [dataUser, setData] = useState([]);
  // hook per controla quan obre i tanca modal intertar
  const [modalInsert, setModalInsert] = useState(false);
  // hook controla inputs modal insertar
  const [consolaSeleccionada, setConsolaSeleccionada] = useState({
    name: '',
    age: '',
    image: '',
  });

  // capturar canvis a l'input
  const handelChange = (e) => {
    const { name, value } = e.target;
    setConsolaSeleccionada((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const requestGet = async () => {
    await axios.get('http://localhost:5000/api/users')
      .then((response) => {
        setData(response.data);
      });
  };

  // canvia booleà del modal insertar,
  // si està obert es tancarà
  // si està tancat s'obrirà
  const openCloseModalInsert = () => {
    setModalInsert(!modalInsert);
  };

  // petició post per afegir usuaris
  const peticionPost = async () => {
    await axios.post('http://localhost:5000/api/users', { user_profile: consolaSeleccionada })

      .then((response) => {
        setData(dataUser.concat(response.data));
        openCloseModalInsert();
      });
  };

  useEffect(async () => {
    await requestGet();
  }, []);

  const bodyInsertar = (
    <div className={styles.modal}>
      <h2>Alta usuari</h2>
      <TextField name="name" className={styles.inputMaterial} label="Nom" onChange={handelChange} />
      <TextField name="age" className={styles.inputMaterial} label="Edat" onChange={handelChange} />
      <TextField name="image" className={styles.inputMaterial} label="Avatar" onChange={handelChange} />

      <Button className={styles.button_violet} onClick={() => peticionPost()}>Afegir</Button>
      <br />
      <Button className={styles.button_outlined} onClick={openCloseModalInsert}>Cancelar</Button>

    </div>
  );

  return (
    <section className="users-list">
      <h2>Fills</h2>

      {
          dataUser.map((user) => (
            <div className="flex list__row" key={user._id}>
              <div className="list__avatar"><img src={user.user_profile.image} alt="Avatar" /></div>
              <div className="list__name"><h4>{user.user_profile.name}</h4></div>
              <div className="flex list__icons">
                <div><EditRoundedIcon style={{ fontSize: 26 }} /></div>
                <div><DeleteRoundedIcon style={{ fontSize: 26 }} /></div>
              </div>
            </div>
          ))
      }

      <Button variant="contained" className="button--outlined" onClick={openCloseModalInsert}>+ usuaris</Button>

      <Modal
      // estat boleà del que depen de si està obert el modal o no
        open={modalInsert}
      // funció per cambiar a false el boleà de open
        onClose={openCloseModalInsert}
      >
        {bodyInsertar}
      </Modal>

    </section>
  );
}
