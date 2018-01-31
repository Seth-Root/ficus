import React, {Component} from 'react';
import selector from '../../../img/selector.jpg';
import { Link } from 'react-router-dom';
var ReactCSSTransitionGroup =require('react-addons-css-transition-group');

class Header extends Component{

  constructor(props){
    super(props);
    this.state={menu:<p>parrafo</p>};

  }



  render(){

    let fecha=new Date();

    function getDia(){
      const days=["Lunes","Martes","Miércoles","Jueves","Viernes","Sábado","Domingo"];
      let dayName;
      dayName="";
      for (var i = 0; i <= days.length; i++) {
        if((fecha.getDay()-1)==i){
          dayName=days[i];
          return dayName;
          break;
        }
      }
    }

    function getMes(){
      let mes;
      mes="";
      const months=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio",
                    "Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
      for (var i = 0; i < months.length; i++) {
        if(fecha.getMonth()==i){
          mes=months[i];
          return mes;
          break;
        }
      }
    }
    let fechaString=getDia()+", "+fecha.getDate()+" de "+getMes()+" de "+fecha.getFullYear().toString();



    return(

    <div className="header ">

    <div  className="clearfix">
        <div className="logo clearfix">
          <h1 className="logo">Bloque64Logo</h1>
        </div>
        <span id="fecha">{fechaString}</span>
      </div>

      <div className="contenedor clearfix">



        <div className="nav-principal ">

          <nav>
            <ul>
                <li className="clearfix" ><img style={{ opacity: 0.2 }} src={selector}/>
                  <p>Política</p>
                </li>
                <li><img style={{ opacity: 0.4 }} src={selector}/>
                  <p>Economía</p>
                </li>
                <li><img style={{ opacity: 0.6 }} src={selector}/>
                  <p>Cultura</p>
                </li>
                <li><img style={{ opacity: 0.8 }} src={selector}/>
                  <p>Ciencia</p>

                </li>
                <li><img style={{ opacity: 1 }} src={selector}/>
                  <p>Deporte</p>
                </li>
            </ul>
          </nav>

        </div> {/*NavPrincipal*/}
        <div className="usuario clearfix">
        <ul>
          <li>  <Link to='/mainpage/post'><p>Publicar</p></Link></li>
          <li><Link to='/mainpage/login'><p>Iniciar Sesión</p></Link></li>
        </ul>
        </div>

        {/*<div id="nombre">
          <h2>BLOQUE64</h2>
        </div>*/}

      </div> {/*contenedor*/}

    </div>

    );


  }

}

export default Header;
