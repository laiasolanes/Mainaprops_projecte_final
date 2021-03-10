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
import { loadUsers, insertUser } from '../../redux/actions/actionCreators';

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
function UsersList({ users, actions }) {
  const styles = useStyles();

  const [modalInsert, setModalInsert] = useState(false);

  const [userSelected, setUserSelected] = useState({
    name: '',
    age: '',
    image: '',
  });

  const openCloseModalInsert = () => {
    setModalInsert(!modalInsert);
  };

  const handelChange = (event) => {
    const { name, value } = event.target;
    setUserSelected((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  useEffect(() => {
    actions.loadUsers();
  }, [users]);

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

  return (
    <section className="users-list">
      <h2>Fills</h2>

      {
          users && users.map((user) => (
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
        open={modalInsert}
        onClose={openCloseModalInsert}
      >
        {bodyInsertar}
      </Modal>

    </section>
  );
}

UsersList.propTypes = {
  users: PropTypes.shape([]).isRequired,
  actions: PropTypes.shape({
    loadUsers: PropTypes.func,
    insertUser: PropTypes.func,
  }).isRequired,
};
function mapStateToProps(state) {
  return { users: state.users };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators({ loadUsers, insertUser }, dispatch) };
}
export default connect(mapStateToProps, mapDispatchToProps)(UsersList);
