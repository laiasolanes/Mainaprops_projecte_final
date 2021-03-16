import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import AppsIcon from '@material-ui/icons/Apps';
import PeopleAltRoundedIcon from '@material-ui/icons/PeopleAltRounded';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';

export default function Header() {
  const fontSize = { fontSize: 32 };
  return (
    <header className="header">
      <nav className="flex nav">
        <img src="https://firebasestorage.googleapis.com/v0/b/mainaprops.appspot.com/o/logo_reptes.png?alt=media&token=52774db4-c4f5-4f61-9e34-e5461f862e19" alt="Logo Mainaprops" className="logo__nav" />
        <ul className="flex ul__nav">
          <Link to="/"><li><AppsIcon color="action" style={fontSize} /></li></Link>
          <Link to="/users"><li><PeopleAltRoundedIcon color="action" style={fontSize} /></li></Link>
          <Link to="/admin"><li><PersonRoundedIcon color="action" style={fontSize} /></li></Link>
          <Link to="/login"><li><ExitToAppRoundedIcon color="action" style={fontSize} /></li></Link>
        </ul>
      </nav>
    </header>
  );
}
