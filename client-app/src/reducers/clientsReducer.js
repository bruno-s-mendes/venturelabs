const INITIAL_STATE = {
  clients: [],
};

export default function clientsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'ADD_CLIENT':
    return {
      ...state, clients: action.payload,
    };
  default:
    return state;
  }
}