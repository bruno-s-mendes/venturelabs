import React from 'react';

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
  }

  handleClick(event) {
    event.preventDefault();
    this.setState({
      formIndex: event.target.value,
    })
  }

  updatestate(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    })
  }

  render() {
    const { name, lName, email, tel, formIndex, cep, address1, address2 } = this.state;
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
              type="submit"
              value="1"
              className="bg-blue-800 text-blue-100 rounded-lg m-1 p-2 flex-1"
              onClick={ event => this.handleClick(event)}
            >
            Anterior
            </button>
            <button
              type="submit"
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
                htmlFor="cep"
              >Data de Nascimento</label>
              <input 
                type="date"
                name="cep"
                className="bg-blue-100 border-2 border-blue-600 text-blue-600 rounded-lg p-1"
                value={ cep }
                onChange={ event => this.updatestate(event)}
              />
              <label
                className="text-blue-600"
                htmlFor="address1"
              >CPF</label>
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
              >Renda mensal</label>
              <input 
                type="text"
                name="address2"
                className="bg-blue-100 border-2 border-blue-600 text-blue-600 rounded-lg p-1"
                value={ address2 }
                onChange={ event => this.updatestate(event)}
              />
              <div className="flex flex-row">
              <button
                type="submit"
                value="2"
                className="bg-blue-800 text-blue-100 rounded-lg m-1 p-2 flex-1"
                onClick={ event => this.handleClick(event)}
              >
              Anterior
              </button>
              <button
                type="submit"
                className="bg-blue-800 text-blue-100 rounded-lg m-1 p-2 flex-1"
                onClick={ event => this.handleClick(event)}
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
              type="submit"
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

export default AddUser;