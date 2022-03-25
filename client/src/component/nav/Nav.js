import React from 'react';

function Nav() {
  return (
    <nav>
    <div className="nav-wrapper">
      <a className="brand-logo">Список контактов</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a>Выйти</a></li>
      </ul>
    </div>
  </nav>
  );
}

export default Nav;
