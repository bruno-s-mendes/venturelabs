import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class ClientList extends React.Component {

  handleClick(event) {
    const isHidden = event.target.children[0].hidden
    event.target.children[0].hidden = !isHidden
  }

  render() {
    const { clients } = this.props;
    return (
      <ul className="w-full">
        {/* {    cep, address1, address2, birthDate, cpf, income */}
          {clients.map((client, index) => (
            <li
              key={index}
              className="bg-blue-200 text-blue-900 rounded-lg w-10/12 p-2 flex flex-col m-2"
              onClick={ event => this.handleClick(event)}
              >{`${client.name} ${client.lName}`}
            <span
              hidden={true}
            >
              <table className="flex">
                <tbody>
                  <tr className="">
                    <td>{`email: ${client.email}`}</td>
                    <td>{`CEP: ${client.cep}`}</td>
                    <td>{`Data de Nascimento: ${client.birthDate}`}</td>
                  </tr>
                  <tr className="">
                    <td>{`CPF: ${client.cpf}`}</td>
                    <td>{`Address 1: ${client.address1}`}</td>
                    <td>{`Salário mensal: ${client.income}`}</td>
                  </tr>
                  <tr className="">
                    <td>{`Telefone: ${client.tel}`}</td>
                    <td>{`Address 2: ${client.address2}`}</td>
                  </tr>
                </tbody>
              </table>
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