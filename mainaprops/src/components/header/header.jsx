import React from 'react';
import './header.css';
import AppsIcon from '@material-ui/icons/Apps';
import PeopleAltRoundedIcon from '@material-ui/icons/PeopleAltRounded';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';

export default function Header() {
  return (
    <header className="header">
      <nav className="flex nav">
        <img src="https://firebasestorage.googleapis.com/v0/b/mainaprops.appspot.com/o/logo_reptes.png?alt=media&token=52774db4-c4f5-4f61-9e34-e5461f862e19" alt="Logo Mainaprops" className="logo__nav" />
        <ul className="flex ul__nav">
          <li><AppsIcon color="action" style={{ fontSize: 35 }} /></li>
          <li><PeopleAltRoundedIcon color="action" style={{ fontSize: 35 }} /></li>
          <li><PersonRoundedIcon color="action" style={{ fontSize: 35 }} /></li>
          <li><ExitToAppRoundedIcon color="action" style={{ fontSize: 35 }} /></li>
        </ul>
      </nav>
    </header>
  );
}
