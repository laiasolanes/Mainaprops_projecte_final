/* eslint-disable prefer-const */
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
import { Modal, TextField } from '@material-ui/core';
import {
  loadUsers, insertUser, deleteUser, updateUser,
} from '../../redux/actions/actionCreators';
import useStylesList from '../../constants/useStylesList';
import {
  avatarCohet,
  avatarBici,
  avatarDiana,
  avatarNena,
  avatarNen,
  avatarUnicorn,
} from '../../constants/avatarImages';

export function UsersListComponent({ users, actions }) {
  const styles = useStylesList();

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
  let [userImageInput, setUserImageInput] = useState('');

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
    if (!users || !users.length || users.length === 1) {
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

  function setImageInsert(url) {
    userSelected.image = url;
  }

  function setImage(url) {
    userImageInput = url;
  }

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

      <section className="avatar__section">
        <div className="flex avatar__row">
          <Button onClick={() => setImageInsert(avatarCohet)} className="avatar__button" id="primer" />
          <Button onClick={() => setImageInsert(avatarBici)} className="avatar__button" />
          <Button onClick={() => setImageInsert(avatarDiana)} className="avatar__button" />

          <Button onClick={() => setImageInsert(avatarNena)} className="avatar__button" />
          <Button onClick={() => setImageInsert(avatarNen)} className="avatar__button" />
          <Button onClick={() => setImageInsert(avatarUnicorn)} className="avatar__button" />
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

      <section className="avatar__section">
        <div className="flex avatar__row">
          <Button onClick={() => setImage(avatarCohet)} className="avatar__button" />
          <Button onClick={() => setImage(avatarBici)} className="avatar__button" />
          <Button onClick={() => setImage(avatarDiana)} className="avatar__button" />

          <Button onClick={() => setImage(avatarNena)} className="avatar__button" />
          <Button onClick={() => setImage(avatarNen)} className="avatar__button" />
          <Button onClick={() => setImage(avatarUnicorn)} className="avatar__button" />
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
    <section className="users__list">
      <h2>Fills</h2>

      {
          users && users.map((user) => (
            <div className="flex list__row" key={user._id}>
              <div className="list__avatar" key={user._id}>
                <a href={`/users/${user._id}`}><img src={user.user_profile.image} alt="Avatar" /></a>
              </div>
              <div className="list__name">
                <a href={`/users/${user._id}`}><h4>{user.user_profile.name}</h4></a>
              </div>
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

      <Button
        variant="contained"
        className="button--outlined-big"
        onClick={openCloseModalInsert}
      >
        + usuaris
      </Button>

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

UsersListComponent.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape(
      {
        user_profile: PropTypes.shape(
          {
            challenges: PropTypes.arrayOf(PropTypes.shape({})),
            name: PropTypes.string,
            image: PropTypes.string,
          },
        ),
      },
    ),
  ).isRequired,
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
export default connect(mapStateToProps, mapDispatchToProps)(UsersListComponent);
