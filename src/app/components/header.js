import React, { Component } from 'react';

class Header extends Component{
// const navElemenes=["tendencia", "mas votados", "mas populares"];
    render(){

      return(
        <header className="App-header">
          <div className="contenedor clearfix">
            <nav >
            <ul id="header-nav1">
              <li><h1 href="#">Logo Bloque64</h1></li>
              <li><a href="#">Elemento1</a></li>
              <li><a href="#">Elemento2</a></li>
              <li><a href="#">Elemento3</a></li>
              <li><a href="#">Elemento4</a></li>
            </ul>

            <ul id="header-nav2">
              <li><input type="text" placeholder="Buscar"/></li>
              <li><a href="#">Usuario</a></li>
              <li><a href="#">Menu</a></li>
            </ul>
            </nav>
          </div>
        </header>
      );
    }
}
 export default Header;
