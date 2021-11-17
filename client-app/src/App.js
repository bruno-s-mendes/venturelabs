import React from 'react';
import Sidenav from './components/Sidenav';

class App extends React.Component {
  // constructor() {
  //   super();
  // }

  render() {
    return (
      <div className="relative min-h-screen flex">
        <div className="bg-blue-800 text-blue-100 w-15 p-4 border-2 border-black">
        <Sidenav />
        </div>
        <div className="flex-1 flex justify-center p-20 border-2 border-black ">
          conteúdo
        </div>
      </div>
    );
  }
}

export default App;
