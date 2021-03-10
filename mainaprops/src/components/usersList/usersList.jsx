/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import './usersList.css';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { bindActionCreators } from 'redux';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import EditRoundedIcon from '@material-ui/icons/EditRounded';
import Button from '@material-ui/core/Button';
import loadUsers from '../../redux/actions/actionCreators';

function UsersList({ users, actions }) {
  useEffect(() => {
    actions.loadUsers();
  }, []);

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

      <Button variant="contained" className="button--outlined">+ usuaris</Button>

    </section>
  );
}

UsersList.propTypes = {
  users: PropTypes.shape([]).isRequired,
  actions: PropTypes.shape({
    loadUsers: PropTypes.func,
  }).isRequired,
};
function mapStateToProps(state) {
  return { users: state.users };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators({ loadUsers }, dispatch) };
}
export default connect(mapStateToProps, mapDispatchToProps)(UsersList);
