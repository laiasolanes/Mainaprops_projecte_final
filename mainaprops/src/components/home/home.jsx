import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import './home.css';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

export function HomeComponent({
// eslint-disable-next-line react/prop-types
  users, history, admin,
}) {
  useEffect(() => {
    // eslint-disable-next-line react/prop-types
    if (!admin.isLogged) history.push('/login');
  }, [admin]);

  return (
    <section className="home">
      <h2>Hola Familia</h2>
      <p>Gestiona els teus reptes</p>

      <img src="https://firebasestorage.googleapis.com/v0/b/mainaprops.appspot.com/o/avatar_diana.png?alt=media&token=b8ac4fb6-678c-4f2f-8d04-20e8d8131741" alt="Diana" />

      {
          users && users.map((user) => (
            <Link
              to={`/users/${user._id}`}
            >
              <Button
                variant="contained"
                className="button--violet-big"
                key={user.name}
              >
                {user?.name}
              </Button>
            </Link>
          ))
      }

      <Link
        to="/users"
      >
        <Button
          variant="contained"
          className="button--outlined-big"
        >
          + usuaris
        </Button>

      </Link>

      <p>Crea un perfil per a cada usuari per poder gestionar els seus reptes.</p>
    </section>
  );
}

HomeComponent.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape(
      {
        challenges: PropTypes.arrayOf(PropTypes.string),
        name: PropTypes.string,
        image: PropTypes.string,
      },
    ),
  ).isRequired,
};
function mapStateToProps({ users, admin }) {
  return { users, admin };
}

export default connect(mapStateToProps)(HomeComponent);
