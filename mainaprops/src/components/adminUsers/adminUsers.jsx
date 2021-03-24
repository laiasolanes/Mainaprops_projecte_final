import { connect } from 'react-redux';
import React from 'react';
import './adminUsers.css';
import { PropTypes } from 'prop-types';

function AdminUsersComponent({ admin }) {
  return (
    <section className="admin__users">
      <h2>Pares</h2>

      <div className="flex detail__admin">
        <div className="image__admin">
          <img src={admin.image} alt="Admin" />
        </div>

        <div className="text__admin">
          <h4>{admin.name}</h4>
          <p>{admin.email}</p>
        </div>

      </div>
    </section>
  );
}

AdminUsersComponent.propTypes = {
  admin: PropTypes.shape({
    _id: PropTypes.string,
    email: PropTypes.string,
    image: PropTypes.string,
    name: PropTypes.string,
    isLogged: PropTypes.bool,
    users: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

function mapStateToProps({ admin }) {
  return {
    admin,
  };
}

export default connect(mapStateToProps)(AdminUsersComponent);
