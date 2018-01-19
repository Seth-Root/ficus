import React, { Component } from 'react';

class Form extends Component{
  render(){
    return(
      <main className="App-form">

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
         <input type="submit" value="Publicar"></input>
        </div>
        <div className="button">
         <input type="button" value="Limpiar"></input>
        </div>

      </main>
    );

  }

}
 export default Form;
