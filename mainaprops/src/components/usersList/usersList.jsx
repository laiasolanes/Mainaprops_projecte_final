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
import {
  loadUsers, insertUser, deleteUser, updateUser,
} from '../../redux/actions/actionCreators';

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
  const [userNameInput, setUserNameInput] = useState('');
  const [userAgeInput, setUserAgeInput] = useState('');
  const [userImageInput, setUserImageInput] = useState('');
  console.log(userSelected);

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
    setUserSelected(user);
    (type === 'Edit') ? openCloseModalEdit() : openCloseModalDelete();
  };

  const handelChange = (e) => {
    const { name, value } = e.target;
    setUserSelected((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (!users || !users.length) {
      actions.loadUsers();
    }
  }, [users]);

  useEffect(() => {
    setUserNameInput(userSelected?.user_profile?.name);
    setUserAgeInput(userSelected?.user_profile?.age);
    setUserImageInput(userSelected?.user_profile?.image);
  }, [userSelected]);

  function clickAddUser() {
    actions.insertUser(userSelected);
    openCloseModalInsert();
  }

  function clickDelete() {
    actions.deleteUser(userSelected);
    openCloseModalDelete();
  }

  function clickUpdate() {
    actions.updateUser(
      userNameInput, userAgeInput, userImageInput, userSelected._id,
    );
    openCloseModalEdit();
  }

  function setSrc(elementId, src) {
    const element = document.getElementById(elementId);
    element.value = src;
  }

  const avatarCohet = 'https://firebasestorage.googleapis.com/v0/b/mainaprops.appspot.com/o/avatar_cohet.png?alt=media&token=f0c34668-0142-47a0-8fbe-d889e229509a';

  const avatarBici = 'https://firebasestorage.googleapis.com/v0/b/mainaprops.appspot.com/o/avatar_bici.png?alt=media&token=d7a1b930-c413-49b5-b43c-004811d800b5';

  const avatarDiana = 'https://firebasestorage.googleapis.com/v0/b/mainaprops.appspot.com/o/avatar_diana.png?alt=media&token=b8ac4fb6-678c-4f2f-8d04-20e8d8131741';

  const avatarNena = 'https://firebasestorage.googleapis.com/v0/b/mainaprops.appspot.com/o/avatar_nena.png?alt=media&token=b7c2b1dd-06c5-4da8-8064-377297d98d07';

  const avatarNen = 'https://firebasestorage.googleapis.com/v0/b/mainaprops.appspot.com/o/avatar_nen.png?alt=media&token=226bec1e-77a8-4e8e-a5cd-e54102c85326';

  const avatarUnicorn = 'https://firebasestorage.googleapis.com/v0/b/mainaprops.appspot.com/o/avatar_unicorn.png?alt=media&token=0eae72d9-6e07-4a11-a149-1f0f1eb780d9';

  const bodyInsertar = (
    <div className={styles.modal}>
      <h2>Alta usuari</h2>

      <TextField
        name="name"
        className={styles.inputMaterial}
        label="Nom"
        onChange={handelChange}
      />
      <TextField
        name="age"
        type="number"
        className={styles.inputMaterial}
        label="Edat"
        onChange={handelChange}
      />
      <TextField
        name="image"
        className={styles.inputMaterial}
        label="Avatar"
        onChange={handelChange}
        id="avatarInput"
      />

      <section className="flex avatar__section">
        <div className="flex avatar__row">
          <Button onClick={() => setSrc('avatarInput', avatarCohet)} className="avatar__button" id="primer" />
          <Button onClick={() => setSrc('avatarInput', avatarBici)} className="avatar__button" />
          <Button onClick={() => setSrc('avatarInput', avatarDiana)} className="avatar__button" />

          <Button onClick={() => setSrc('avatarInput', avatarNena)} className="avatar__button" />
          <Button onClick={() => setSrc('avatarInput', avatarNen)} className="avatar__button" />
          <Button onClick={() => setSrc('avatarInput', avatarUnicorn)} className="avatar__button" />
        </div>
      </section>

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
      <h2>
        Editar usuari
        <br />
        {userSelected.user_profile && userSelected.user_profile.name}
        <br />
        <img src={userSelected.user_profile && userSelected.user_profile.image} alt="Avatar" />

      </h2>
      <TextField
        name="name"
        className={styles.inputMaterial}
        label="Nom"
        onChange={(event) => setUserNameInput(event.target.value)}
        value={userNameInput}
        placeholder={userSelected.user_profile && userSelected.user_profile.name}
      />
      <TextField
        name="age"
        className={styles.inputMaterial}
        label="Edat"
        type="number"
        onChange={(event) => setUserAgeInput(event.target.value)}
        value={userAgeInput}
        placeholder={userSelected.user_profile && userSelected.user_profile.age}
      />
      <TextField
        name="image"
        className={styles.inputMaterial}
        label="Avatar"
        onChange={(event) => setUserImageInput(event.target.value)}
        value={userImageInput}
        placeholder={userSelected.user_profile && userSelected.user_profile.image}
        id="avatarInputEdit"
      />

      <section className="flex avatar__section">
        <div className="flex avatar__row">
          <Button onClick={() => setSrc('avatarInputEdit', avatarCohet)} className="avatar__button" />
          <Button onClick={() => setSrc('avatarInputEdit', avatarBici)} className="avatar__button" />
          <Button onClick={() => setSrc('avatarInputEdit', avatarDiana)} className="avatar__button" />

          <Button onClick={() => setSrc('avatarInputEdit', avatarNena)} className="avatar__button" />
          <Button onClick={() => setSrc('avatarInputEdit', avatarNen)} className="avatar__button" />
          <Button onClick={() => setSrc('avatarInputEdit', avatarUnicorn)} className="avatar__button" />
        </div>
      </section>

      <Button
        className={styles.button_violet}
        onClick={() => clickUpdate()}
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
        onClick={() => clickDelete()}
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
    updateUser: PropTypes.func,
  }).isRequired,
};
function mapStateToProps(state) {
  return { users: state.users };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      loadUsers, insertUser, deleteUser, updateUser,
    }, dispatch),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(UsersList);
