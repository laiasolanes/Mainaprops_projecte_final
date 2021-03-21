import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { bindActionCreators } from 'redux';
import './logIn.css';
import Button from '@material-ui/core/Button';
import { loginWithGoogle } from '../../redux/actions/actionCreators';

function LogIn({ admin, actions }) {
  return (
    <section className="login">

      <img src="https://firebasestorage.googleapis.com/v0/b/mainaprops.appspot.com/o/logo_reptes.png?alt=media&token=52774db4-c4f5-4f61-9e34-e5461f862e19" alt="Logo" />

      <h1 className="app-name">Mainaprops</h1>

      <Button
        variant="contained"
        className="button--violet-big"
        href="/"
        onClick={actions.loginWithGoogle}
      >
        Accedir amb google

      </Button>
      {
         admin.isLogged && (
         <>
           <h2>Hola!</h2>
           <p>{admin.displayName}</p>
           <p>{admin.email}</p>
           <img src={admin.photoURL} alt={admin.displayName} />
         </>
         )
}
      <p>
        Una aplicació per motivar els teus fills a complir els seus propòsits.
        Crea un repte, assigna tasques i defineix la recompensa.
      </p>

      <h3>Més s’estima el que amb més treball es guanya</h3>

    </section>
  );
}
LogIn.propTypes = {
  admin: PropTypes.shape({
    isLogged: PropTypes.string,
    displayName: PropTypes.string,
    email: PropTypes.string,
    photoURL: PropTypes.string,
  }).isRequired,
  actions: PropTypes.shape({
    loginWithGoogle: PropTypes.func,
  }).isRequired,
};

function mapStateToProps(state) {
  return { admin: state.admin };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators({ loginWithGoogle }, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
