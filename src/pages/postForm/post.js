import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Post extends Component {

render(){
  let elemento = <input className="title-form form" placeholder="Título"  ></input>;
  return(
    <div className="Post contenido">
    <form >
      <div className="title-input input">
        <input className="title-form form" placeholder="Título"></input>
      </div>
      <div className="body-input input">
        <textarea className="main-form form" placeholder="Tu historia"></textarea>
      </div>
      <div className="tags-input input">
        <input className="tag-form form" placeholder="Tags"></input>
      </div>

      <div className="button">
       <input type="submit" value="Publicar" ></input>
      </div>
      <div className="button">
       <input type="button" value="Limpiar"></input>
      </div>
      </form>
      <br/>
      <br/>
      <br/>
      <br/>
      <hr/>
        <Link to="/mainpage" > <button>Volver</button></Link>
      </div>


    );
  }

}
export default Post;
