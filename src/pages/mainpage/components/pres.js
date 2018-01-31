import React, {Component} from 'react';
import protestas from '../../../img/protestas.jpg';
import trump from '../../../img/trump.jpg';
import cup from '../../../img/worldcup.jpg';
import sophia from '../../../img/sophia.jpg';
import steemit from '../../../img/steemit.png';
import storm from '../../../img/storm.jpg';

var ReactCSSTransitionGroup =require('react-addons-css-transition-group');


let count=0;
let count2=0;

class Pres extends Component{

  constructor(props){
    super(props);

    this.state={
                imagenes:[""],
                imagenes2:[""]
              };

    this.handleAdd = this.handleAdd.bind(this);
    this.handleRemove=this.handleRemove.bind(this);
  }

  handleAdd(i,lista){
    let listImagenes;
    let newImagenes;

    if(lista==this.state.imagenes){
      newImagenes=this.state.imagenes.slice();
      listImagenes=[cup,trump,storm];
      newImagenes.push(listImagenes[i]);
      this.setState({imagenes:newImagenes});
    }
    else if (lista==this.state.imagenes2){
      newImagenes=this.state.imagenes2.slice();
      listImagenes=[steemit,sophia,protestas];
      newImagenes.push(listImagenes[i]);
      this.setState({imagenes2:newImagenes});
    }


  }
  handleRemove(i,lista){
    let newImagenes;

    if(lista==this.state.imagenes){
      newImagenes=this.state.imagenes.slice();
      newImagenes.splice(i,1);
      this.setState({imagenes:newImagenes});
    }
    else if (lista==this.state.imagenes2){
      newImagenes=this.state.imagenes2.slice();
      newImagenes.splice(i,1);
      this.setState({imagenes2:newImagenes});
    }
  }
  componentDidMount() {
    setInterval(()=> {
      count=count+1;
      console.log(count);
      if (count==1){
        this.handleAdd(0,this.state.imagenes);
        count=count+1;
      }
      else if (count>1){
        count=count+1;
        if(count==4){
          this.handleRemove(1,this.state.imagenes);
        }
        else if (count==6){
          this.handleAdd(1,this.state.imagenes);
        }
        else if (count==10)
        {
          this.handleRemove(1,this.state.imagenes);
        }
        else if (count==12)
        {
          this.handleAdd(2,this.state.imagenes);
        }
        else if (count==16){
          this.handleRemove(1,this.state.imagenes);
          count=0;
        }
      }
    }, 1500);

    setInterval(()=> {
      if(count2==0){
        this.handleAdd(0,this.state.imagenes2);
        count2=count2+1;
      }
      else if (count2>0){
        count2=count2+1;
        if(count2==2){
          this.handleRemove(1,this.state.imagenes2);
        }
        else if (count2==3){
          this.handleAdd(1,this.state.imagenes2);
        }
        else if (count2==5)
        {
          this.handleRemove(1,this.state.imagenes2);

        }
        else if (count2==6)
        {
          this.handleAdd(2,this.state.imagenes2);
        }
        else if (count2==8){
          this.handleRemove(1,this.state.imagenes2);
          count2=0;
        }
      }
    }, 1020);
  }
  render(){

    let presText="Confía en el tiempo, que suele dar dulces salidas a  muchas amargas dificultades";
    const imagenes =this.state.imagenes.map((imagen,i)=>(
      <div className="im" style={{ backgroundImage: `url(${imagen})` }} >

      </div>
    ));
    const imagenes2 =this.state.imagenes2.map((imagen2,i)=>(
      <div className="im2" style={{ backgroundImage: `url(${imagen2})` }} >

      </div>
    ));

    return(
      <div className="pres clearfix">

        <div id="gradiente">
        <div id="texto-pres">
          <p id="welcome">{this.props.welcome}</p>
          <p id="autor">{this.props.welcomeFooter}</p>
          <p id="registro">Registrate</p>
        </div>
        </div>


        <div id="contenedor" className="clearfix">
        <ReactCSSTransitionGroup
          transitionName="imagenes"
          transitionEnterTimeout={1000}
          transitionLeaveTimeout={1000}>
          {imagenes}
        </ReactCSSTransitionGroup>
        {/*<ReactCSSTransitionGroup
          transitionName="imagenes"
          transitionEnterTimeout={1000}
          transitionLeaveTimeout={1000}>
          {imagenes2}
        </ReactCSSTransitionGroup>*/}

        </div>

      </div>

    );
  }
}

export default Pres;
