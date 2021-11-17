import React from 'react';

class Sidenav extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    const { updtePage } = this.props;
    return (
      <nav className="flex flex-col text-lg">
        <button 
          className="m-2 p-2 rounded-lg hover:bg-blue-700"
          value="cadastrar"
          onClick={ event => updtePage(event) }
        >+ Cadastrar</button>
        <button 
          className="m-2 p-2 rounded-lg hover:bg-blue-700"
          value="clientes"
          onClick={ event => updtePage(event) }
        >Clientes</button>
      </nav>
    );
  }
}

export default Sidenav;