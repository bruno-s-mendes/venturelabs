import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addClient } from '../actions';

class AddUser extends React.Component {
  constructor() {
    super();
    this.state = {
      formIndex: 1,
      name: '',
      lName: '',
      email: '',
      tel: '',
      cep: '',
      address1: '',
      address2: '',
      birthDate: '',
      cpf: '',
      income: '',
    };
    this.updatestate = this.updatestate.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    this.setState({
      formIndex: event.target.value,
    })
  }


  handleSubmit(event) {
    event.preventDefault();
    const { client, clients } = this.props;
    const user = this.state;
    const userList = clients;
    userList.push(user)
    client(userList)
    const state0 = {
      formIndex: 1,
      name: '',
      lName: '',
      email: '',
      tel: '',
      cep: '',
      address1: '',
      address2: '',
      birthDate: '',
      cpf: '',
      income: '',
    };
    this.setState(state0)
  }

  updatestate(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    })
  }

  render() {
    const { name, lName, email, tel, formIndex, cep, address1, address2, birthDate, cpf, income } = this.state;
    switch (formIndex) {
      case '2':
        return (
          <form className="flex flex-col" >
            <label
              className="text-blue-600"
              htmlFor="cep"
            >CEP</label>
            <input 
              type="text"
              name="cep"
              className="bg-blue-100 border-2 border-blue-600 text-blue-600 rounded-lg p-1"
              value={ cep }
              onChange={ event => this.updatestate(event)}
            />
            <label
              className="text-blue-600"
              htmlFor="address1"
            >Endereço 1</label>
            <input 
              type="text"
              name="address1"
              className="bg-blue-100 border-2 border-blue-600 text-blue-600 rounded-lg p-1"
              value={ address1 }
              onChange={ event => this.updatestate(event)}
            />
            <label
              className="text-blue-600"
              htmlFor="address2"
            >Endereço 2</label>
            <input 
              type="text"
              name="address2"
              className="bg-blue-100 border-2 border-blue-600 text-blue-600 rounded-lg p-1"
              value={ address2 }
              onChange={ event => this.updatestate(event)}
            />
            <div className="flex flex-row">
            <button
              type="button"
              value="1"
              className="bg-blue-800 text-blue-100 rounded-lg m-1 p-2 flex-1"
              onClick={ event => this.handleClick(event)}
            >
            Anterior
            </button>
            <button
              type="button"
              value="3"
              className="bg-blue-800 text-blue-100 rounded-lg m-1 p-2 flex-1"
              onClick={ event => this.handleClick(event)}
            >
            Próximo
            </button>
            </div>
          </form>
        );
      case '3':
        return (
          <form className="flex flex-col" >
            <label
              className="text-blue-600"
              htmlFor="birthDate"
            >Data de Nascimento</label>
            <input 
              type="date"
              name="birthDate"
              className="bg-blue-100 border-2 border-blue-600 text-blue-600 rounded-lg p-1"
              value={ birthDate }
              onChange={ event => this.updatestate(event)}
            />
            <label
              className="text-blue-600"
              htmlFor="cpf"
            >CPF</label>
            <input 
              type="text"
              name="cpf"
              className="bg-blue-100 border-2 border-blue-600 text-blue-600 rounded-lg p-1"
              value={ cpf }
              onChange={ event => this.updatestate(event)}
            />
            <label
              className="text-blue-600"
              htmlFor="income"
            >Renda mensal</label>
            <input 
              type="text"
              name="income"
              className="bg-blue-100 border-2 border-blue-600 text-blue-600 rounded-lg p-1"
              value={ income }
              onChange={ event => this.updatestate(event)}
            />
            <div className="flex flex-row">
            <button
              type="button"
              value="2"
              className="bg-blue-800 text-blue-100 rounded-lg m-1 p-2 flex-1"
              onClick={ event => this.handleClick(event)}
            >
            Anterior
            </button>
            <button
              type="submit"
              className="bg-blue-800 text-blue-100 rounded-lg m-1 p-2 flex-1"
              onClick={ event => this.handleSubmit(event)}
            >
            Salvar
            </button>
            </div>
          </form>
        );    
      default:
        return (
          <form className="flex flex-col" >
            <label
              className="text-blue-600"
              htmlFor="name"
            >Nome</label>
            <input 
              type="text"
              name="name"
              className="bg-blue-100 border-2 border-blue-600 text-blue-600 rounded-lg p-1"
              value={ name }
              onChange={ event => this.updatestate(event)}
            />
            <label
              className="text-blue-600"
              htmlFor="lName"
            >Sobrenome</label>
            <input 
              type="text"
              name="lName"
              className="bg-blue-100 border-2 border-blue-600 text-blue-600 rounded-lg p-1"
              value={ lName }
              onChange={ event => this.updatestate(event)}
            />
            <label
              className="text-blue-600"
              htmlFor="email"
            >E-mail</label>
            <input 
              type="text"
              name="email"
              className="bg-blue-100 border-2 border-blue-600 text-blue-600 rounded-lg p-1"
              value={ email }
              onChange={ event => this.updatestate(event)}
            />
            <label
              className="text-blue-600"
              htmlFor="tel"
            >Telefone</label>
            <input 
              type="text"
              name="tel"
              placeholder="(  )     -    "
              className="bg-blue-100 border-2 border-blue-600 text-blue-600 rounded-lg p-1"
              value={ tel }
              onChange={ event => this.updatestate(event)}
            />
            <button
              type="button"
              value="2"
              className="bg-blue-800 text-blue-100 rounded-lg m-1 p-2"
              onClick={ event => this.handleClick(event)}
            >
            Próximo
            </button>
          </form>
        );
    }
  }
}

const mapStateToProps = (state) => ({
  clients: state.clientsReducer.clients,
});

const mapDispatchToProps = (dispatch) => ({
  client: (payload) => dispatch(addClient(payload)),
});

AddUser.propTypes = {
  client: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddUser);