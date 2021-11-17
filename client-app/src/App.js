import React from 'react';
import AddUser from './components/AddUser';
import ClientList from './components/ClientList';
import Sidenav from './components/Sidenav';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      page: 'cadastrar',
    };
    this.updatePage = this.updatePage.bind(this);
  }

  updatePage(event) {
    this.setState({
      page: event.target.value,
    })
  }

  render() {
    const { page } = this.state;
    console.log(page);
    return (
      <div className="relative min-h-screen flex">
        <div className="bg-blue-800 text-blue-100 w-15 p-4">
        <Sidenav updtePage={this.updatePage}/>
        </div>
        <div className="flex-1 flex justify-center p-20">
          {page === 'cadastrar'?
          <AddUser />
          :<ClientList />
          }
        </div>
      </div>
    );
  }
}

export default App;
