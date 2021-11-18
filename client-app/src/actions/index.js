export const ADD_CLIENT = 'ADD_CLIENT';

export function addClient(newClient) {
  return ({
    type: ADD_CLIENT,
    payload: newClient,
  });
}