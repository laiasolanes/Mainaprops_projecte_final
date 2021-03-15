import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { bindActionCreators } from 'redux';
import './home.css';
import Button from '@material-ui/core/Button';
import { loadUsers } from '../../redux/actions/actionCreators';

export function HomeComponent({ users, actions }) {
  useEffect(() => {
    actions.loadUsers();
  }, [users.length]);

  return (
    <section className="home">
      <h2>Hola Familia</h2>
      <p>Gestiona els teus reptes</p>

      <img src="https://firebasestorage.googleapis.com/v0/b/mainaprops.appspot.com/o/avatar_diana.png?alt=media&token=b8ac4fb6-678c-4f2f-8d04-20e8d8131741" alt="Diana" />

      {
          users && users.map((user) => (
            <Button
              variant="contained"
              className="button--violet-big"
              key={user.user_profile.name}
              href={`/users/${user._id}`}
            >
              {user.user_profile.name}
            </Button>
          ))
      }

      <Button
        variant="contained"
        className="button--outlined-big"
        href="/users"
      >
        + usuaris

      </Button>

      <p>Crea un perfil per a cada usuari per poder gestionar els seus reptes.</p>

    </section>
  );
}

HomeComponent.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape(
      {
        user_profile: PropTypes.shape(
          {
            challenges: PropTypes.arrayOf(PropTypes.string),
            name: PropTypes.string,
            image: PropTypes.string,
          },
        ),
      },
    ),
  ).isRequired,
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
export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent);
