import React from 'react';
import { Link } from 'react-router-dom';
import './headerDraw.css';
import draw from '../../constants/headerDraws';

export default function Header() {
  return (
    <header className="header">
      <h1 className="hidden">Mainaprops</h1>

      <nav className="flex nav">
        <h2 className="hidden">
          Propòsits i motivacions per la mainada
        </h2>

        <Link to="/"><img src="https://firebasestorage.googleapis.com/v0/b/mainaprops.appspot.com/o/logo_reptes.png?alt=media&token=52774db4-c4f5-4f61-9e34-e5461f862e19" alt="Logo Mainaprops" className="logo__nav" /></Link>

        <ul className="flex ul__nav">
          <Link to="/"><li><img src={draw.cohet} alt="Cohet" /></li></Link>
          <Link to="/users"><li><img src={draw.arxiu} alt="Arxiu" /></li></Link>
          <Link to="/admin"><li><img src={draw.mare} alt="Mare" /></li></Link>
          <Link to="/login"><li><img src={draw.sortir} alt="Sortir" /></li></Link>
        </ul>
      </nav>
    </header>
  );
}
