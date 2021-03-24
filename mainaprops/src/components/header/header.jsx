import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './header.css';
import AppsIcon from '@material-ui/icons/Apps';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';
import FaceIcon from '@material-ui/icons/Face';
import { Button } from '@material-ui/core';
import { connect } from 'react-redux';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import store from '../../redux/store/configureStore';
import { logout } from '../../redux/actions/actionCreators';

// eslint-disable-next-line react/prop-types
function Header({ admin }) {
  const normal = { fontSize: 32 };
  const history = useHistory();

  return (
    <header className="header">
      <h1 className="hidden">Mainaprops</h1>

      <nav className="flex nav">
        <h2 className="hidden">
          Propòsits i motivacions per la mainada
        </h2>

        <Link to="/"><img src="https://firebasestorage.googleapis.com/v0/b/mainaprops.appspot.com/o/logo_reptes.png?alt=media&token=52774db4-c4f5-4f61-9e34-e5461f862e19" alt="Logo Mainaprops" className="logo__nav" /></Link>

        <ul className="flex ul__nav">
          <li>
            <Link to="/"><AppsIcon style={normal} /></Link>
          </li>
          <li>
            <Link to="/users"><FaceIcon style={normal} /></Link>
          </li>
          <li>
            <Link to="/admin"><PersonRoundedIcon style={normal} /></Link>
          </li>
          {
            // eslint-disable-next-line react/prop-types
            admin.isLogged
              ? (
                <li>
                  <Button onClick={() => store.dispatch(logout(history))}>
                    <ExitToAppRoundedIcon style={normal} />
                  </Button>
                </li>
              )
              : (
                <li>
                  <Link to="/login"><AccountCircleIcon style={normal} /></Link>
                </li>
              )
          }

        </ul>
      </nav>
    </header>
  );
}

function mapStateToProps({ admin }) {
  return { admin };
}
export default connect(mapStateToProps)(Header);
