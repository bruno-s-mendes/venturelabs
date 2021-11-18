import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class ClientList extends React.Component {

  handleClick(event) {
    if (event.target.children[0] !== undefined && event.target.value === 0) {
      const isHidden = event.target.children[0].hidden
      event.target.children[0].hidden = !isHidden
    }
  }

  render() {
    const { clients } = this.props;
    return (
      <ul className="w-full">
        {
          clients.map((client, index) => (
            <li
              key={index}
              className="bg-blue-200 text-blue-900 rounded-lg w-10/12 p-2 flex flex-col m-2"
              onClick={ event => this.handleClick(event)}
              value="header"
              >{`${client.name} ${client.lName}`}
            <span
              hidden={true}
            >
              <div className="flex justify-between">
                <ul>
                  <li>{`email: ${client.email}`}</li>
                  <li>{`CPF: ${client.cpf}`}</li>
                  <li>{`Telefone: ${client.tel}`}</li>
                </ul>
                <ul>
                  <li>{`CEP: ${client.cep}`}</li>
                  <li>{`Address 1: ${client.address1}`}</li>
                  <li>{`Address 2: ${client.address2}`}</li>
                </ul>
                <ul>
                  <li>{`Data de Nascimento: ${client.birthDate}`}</li>
                  <li>{`Salário mensal: ${client.income}`}</li>
                </ul>
              </div>
            </span>
            </li>
          ))
        }
      </ul>
    );
  }
}

const mapStateToProps = (state) => ({
  clients: state.clientsReducer.clients,
});

ClientList.propTypes = {
  clients: PropTypes.array.isRequired,
};

export default connect(mapStateToProps, null)(ClientList);