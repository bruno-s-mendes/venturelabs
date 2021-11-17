import React from 'react';

class Sidenav extends React.Component {
  // constructor() {
  //   super();
  // }

  render() {
    return (
      <nav className="flex flex-col text-lg">
        <button className="m-2 p-2 rounded-lg hover:bg-blue-700"
        >+ Cadastrar</button>
        <button className="m-2 p-2 rounded-lg hover:bg-blue-700"
        >Clientes</button>
      </nav>
    );
  }
}

export default Sidenav;