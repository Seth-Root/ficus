import React, {Component} from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import TopNew from './mainComponents/topNew.js';
import Titulares from './mainComponents/titulares.js';
import cup from '../../../img/worldcup.jpg';
import sophia from '../../../img/sophia.jpg';
import steemit from '../../../img/steemit.png';
import storm from '../../../img/storm.jpg';
import protesta from '../../../img/protestas.jpg';


var ReactCSSTransitionGroup =require('react-addons-css-transition-group');



class Main extends Component{

  render(){

    return(
      <div className="main">

        <Titulares/>
        <div className="contenedor clearfix">

          <main className="main-cuerpo clearfix">
          <div className="mainTitle">
            <h1>Categoria</h1>
          </div>
            <div className="categoria">


            <article>
              <div className="imagen">
                <img src={cup}/>
                <p>Copa mundial Rusia 2018</p>
              </div> {/*Imagen*/}


              


            </article>
            </div>{/*Categoria*/}

            <div className="categoria">

            <article>
              <div className="imagen">
                <img src={sophia}/>
                <p>Sophia sorprende nuevamente</p>
              </div> {/*Imagen*/}




            </article>
            </div>{/*Categoria*/}

          </main>

          <aside className="aside">

              <h3>En caliente</h3>

            <div id="top-noticias">
             <TopNew number="1" imagen={storm} titular="Tormenta en Chile"/>
              <TopNew number="2" imagen={steemit} titular="La red social que paga a sus autores"/>
              <TopNew number="3" imagen={sophia} titular="Sophia: Robot humanoide"/>
              <TopNew number="4" imagen={storm} titular="Trump acusa a dirigentes politicos"/>
              <TopNew number="5" imagen={protesta} titular="Venezuela protesta"/>
            </div>
          </aside>

        </div>

      </div>
    );

  }

}

export default Main;
