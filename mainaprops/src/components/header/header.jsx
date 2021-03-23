import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import AppsIcon from '@material-ui/icons/Apps';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';
import FaceIcon from '@material-ui/icons/Face';

export default function Header() {
  const normal = { fontSize: 32 };

  return (
    <header className="header">
      <h1 className="hidden">Mainaprops</h1>
      <nav className="flex nav">
        <h2 className="hidden">
          Propòsits i motivacions per la mainada
        </h2>
        <Link to="/"><img src="https://firebasestorage.googleapis.com/v0/b/mainaprops.appspot.com/o/logo_reptes.png?alt=media&token=52774db4-c4f5-4f61-9e34-e5461f862e19" alt="Logo Mainaprops" className="logo__nav" /></Link>
        <ul className="flex ul__nav">
          <Link to="/"><li><AppsIcon style={normal} /></li></Link>
          <Link to="/users"><li><FaceIcon style={normal} /></li></Link>
          <Link to="/admin"><li><PersonRoundedIcon style={normal} /></li></Link>
          <Link to="/login"><li><ExitToAppRoundedIcon style={normal} /></li></Link>
        </ul>
      </nav>
    </header>
  );
}
