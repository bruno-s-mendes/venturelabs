import { screen } from '@testing-library/react';
import { renderWithStore } from './testConfig';
import App from '../App';
import userEvent from '@testing-library/user-event';
import { mockedStore } from './storeMock';

test('renders navigation', () => {
  renderWithStore(<App />);
  const cadastrar = screen.getByText(/cadastrar/i);
  const clientes = screen.getByText(/clientes/i);
  expect(cadastrar).toBeInTheDocument();
  expect(clientes).toBeInTheDocument();
});

test('renders cadastrar', () => {
  renderWithStore(<App />);
  const nomeInput = screen.getAllByLabelText(/nome/i);
  const sobrenomeInput = screen.getAllByLabelText(/sobrenome/i);
  const emailInput = screen.getAllByLabelText(/e-mail/i);
  const telefoneInput = screen.getAllByLabelText(/telefone/i);
  const botaoNext = screen.getByText(/próximo/i)

  expect(nomeInput[0]).toBeInTheDocument();
  expect(sobrenomeInput[0]).toBeInTheDocument();
  expect(emailInput[0]).toBeInTheDocument();
  expect(telefoneInput[0]).toBeInTheDocument();

  userEvent.type(nomeInput[0], 'fulano');
  userEvent.type(sobrenomeInput[0], 'silva');
  userEvent.type(emailInput[0], 'fulano@google.com');
  userEvent.type(telefoneInput[0], '123456789');
  userEvent.click(botaoNext);
  
  const cepInput = screen.getAllByLabelText(/cep/i);
  const address1Input = screen.getAllByLabelText(/endereço 1/i);
  const address2Input = screen.getAllByLabelText(/endereço 2/i);
  const botaoNext2 = screen.getByText(/próximo/i)

  expect(cepInput[0]).toBeInTheDocument();
  expect(address1Input[0]).toBeInTheDocument();
  expect(address2Input[0]).toBeInTheDocument();

  userEvent.type(cepInput[0], '12345678');
  userEvent.type(address1Input[0], 'rua algum lugar');
  userEvent.type(address2Input[0], 'numero x');
  userEvent.click(botaoNext2);

  const birthInput = screen.getAllByLabelText(/data de nascimento/i);
  const cpfInput = screen.getAllByLabelText(/cpf/i);
  const incomeInput = screen.getAllByLabelText(/renda mensal/i);
  const saveBtn = screen.getByText(/salvar/i)

  expect(birthInput[0]).toBeInTheDocument();
  expect(cpfInput[0]).toBeInTheDocument();
  expect(incomeInput[0]).toBeInTheDocument();

  userEvent.type(birthInput[0], '01/01/2000');
  userEvent.type(cpfInput[0], '12345678901');
  userEvent.type(incomeInput[0], '10000');
  userEvent.click(saveBtn);

  expect(nomeInput[0]).toBeInTheDocument();
  expect(sobrenomeInput[0]).toBeInTheDocument();
  expect(emailInput[0]).toBeInTheDocument();
});

test('renders clients', () => {
  renderWithStore(<App />, mockedStore);
  const clientes = screen.getByText(/clientes/i);
  userEvent.click(clientes);

  const name = screen.getByText(/fulano silva/i);
  expect(name).toBeInTheDocument();
  userEvent.click(name);

  const email = screen.getByText(/email:/i);
  const cpf = screen.getByText(/cpf:/i);
  const tel = screen.getByText(/telefone:/i);
  const cep = screen.getByText(/cep:/i);
  const address1 = screen.getByText(/address 1:/i);
  const address2 = screen.getByText(/address 2:/i);
  const birth = screen.getByText(/data de nascimento:/i);
  const income = screen.getByText(/salário mensal:/i);

  expect(email).toBeInTheDocument();
  expect(cpf).toBeInTheDocument();
  expect(tel).toBeInTheDocument();
  expect(cep).toBeInTheDocument();
  expect(address1).toBeInTheDocument();
  expect(address2).toBeInTheDocument();
  expect(birth).toBeInTheDocument();
  expect(income).toBeInTheDocument();
});