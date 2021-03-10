/* eslint-disable no-unused-expressions */
/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import './usersList.css';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { bindActionCreators } from 'redux';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import EditRoundedIcon from '@material-ui/icons/EditRounded';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Modal, TextField } from '@material-ui/core';
import { loadUsers, insertUser, deleteUser } from '../../redux/actions/actionCreators';

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
    fontWeight: '600',
    textTransform: 'none',
    margin: '10px 0',
    padding: '10px 0',
    borderRadius: '50px',
    boxShadow: theme.shadows[2],
    '&:hover': {
      backgroundColor: '#4d2d80',
    },
  },
  button_outlined: {
    width: '100%',
    backgroundColor: '#6CC3C6',
    color: '#ffffff',
    fontWeight: '600',
    textTransform: 'none',
    margin: '10px 0',
    padding: '8px 0',
    borderRadius: '50px',
    border: '3px solid #ffffff',
    boxShadow: theme.shadows[2],
    '&:hover': {
      backgroundColor: '#ffffff',
      color: '#6CC3C6',
    },
  },

}));
function UsersList({ users, actions }) {
  const styles = useStyles();

  const [modalInsert, setModalInsert] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);

  const [userSelected, setUserSelected] = useState({
    name: '',
    age: '',
    image: '',
  });

  // const [nameChange, setNameChange] = useState('');

  const openCloseModalInsert = () => {
    setModalInsert(!modalInsert);
  };

  const openCloseModalEdit = () => {
    setModalEdit(!modalEdit);
  };

  const openCloseModalDelete = () => {
    setModalDelete(!modalDelete);
  };

  const selectUser = (user, type) => {
    console.log(user);
    setUserSelected(user);
    (type === 'Edit') ? openCloseModalEdit() : openCloseModalDelete();
  };

  const handelChange = (event) => {
    const { name, value } = event.target;
    setUserSelected((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(userSelected);
  };

  useEffect(() => {
    actions.loadUsers();
  }, [users.length]);

  function clickAddUser() {
    actions.insertUser(userSelected);
    openCloseModalInsert();
  }

  const bodyInsertar = (
    <div className={styles.modal}>
      <h2>Alta usuari</h2>
      <TextField name="name" className={styles.inputMaterial} label="Nom" onChange={handelChange} />
      <TextField name="age" className={styles.inputMaterial} label="Edat" onChange={handelChange} />
      <TextField name="image" className={styles.inputMaterial} label="Avatar" onChange={handelChange} />

      <Button
        className={styles.button_violet}
        onClick={() => clickAddUser()}
      >
        Afegir
      </Button>

      <br />

      <Button className={styles.button_outlined} onClick={openCloseModalInsert}>Cancelar</Button>
    </div>
  );

  const bodyEdit = (
    <div className={styles.modal}>
      <h2>Editar usuari</h2>
      <TextField name="name" className={styles.inputMaterial} label="Nom" onChange={handelChange} value={userSelected.user_profile && userSelected.user_profile.name} />
      <TextField name="age" className={styles.inputMaterial} label="Edat" onChange={handelChange} value={userSelected.user_profile && userSelected.user_profile.age} />
      <TextField name="image" className={styles.inputMaterial} label="Avatar" onChange={handelChange} value={userSelected.user_profile && userSelected.user_profile.image} />

      <Button
        className={styles.button_violet}
        onClick={(openCloseModalEdit)}
      >
        Modificar
      </Button>

      <br />

      <Button className={styles.button_outlined} onClick={openCloseModalEdit}>Cancelar</Button>
    </div>
  );

  const bodyDelete = (
    <div className={styles.modal}>
      <h2>
        Vols eliminar el compte de
        {' '}
        {userSelected.user_profile && userSelected.user_profile.name}
        ?
        <br />
        <img src={userSelected.user_profile && userSelected.user_profile.image} alt="Avatar" />

      </h2>

      <Button
        className={styles.button_violet}
        onClick={() => actions.deleteUser()}
      >
        Eliminar
      </Button>

      <br />

      <Button className={styles.button_outlined} onClick={openCloseModalDelete}>Cancelar</Button>
    </div>
  );

  return (
    <section className="users-list">
      <h2>Fills</h2>

      {
          users && users.map((user) => (
            <div className="flex list__row" key={user._id}>
              <div className="list__avatar"><img src={user.user_profile.image} alt="Avatar" /></div>
              <div className="list__name"><h4>{user.user_profile.name}</h4></div>
              <div className="flex list__icons">
                <div>
                  <EditRoundedIcon
                    style={{ fontSize: 26 }}
                    onClick={() => selectUser(user, 'Edit')}
                  />

                </div>
                <div>
                  <DeleteRoundedIcon
                    style={{ fontSize: 26 }}
                    onClick={() => selectUser(user, 'Delete')}
                  />

                </div>
              </div>
            </div>
          ))
      }

      <Button variant="contained" className="button--outlined" onClick={openCloseModalInsert}>+ usuaris</Button>

      <Modal
        open={modalInsert}
        onClose={openCloseModalInsert}
      >
        {bodyInsertar}
      </Modal>

      <Modal
        open={modalEdit}
        onClose={openCloseModalEdit}
      >
        {bodyEdit}
      </Modal>

      <Modal
        open={modalDelete}
        onClose={openCloseModalDelete}
      >
        {bodyDelete}
      </Modal>

    </section>
  );
}

UsersList.propTypes = {
  users: PropTypes.shape([]).isRequired,
  actions: PropTypes.shape({
    loadUsers: PropTypes.func,
    insertUser: PropTypes.func,
    deleteUser: PropTypes.func,
  }).isRequired,
};
function mapStateToProps(state) {
  return { users: state.users };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators({ loadUsers, insertUser, deleteUser }, dispatch) };
}
export default connect(mapStateToProps, mapDispatchToProps)(UsersList);
