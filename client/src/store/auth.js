import { baseUrl } from '../config';


const SET_TOKEN = 'stack/authentication/SET_TOKEN';
const REMOVE_TOKEN = 'stack/authentication/REMOVE_TOKEN';
const STACK_TOKEN = 'STACK_TOKEN';


export const removeToken = token => ({ type: REMOVE_TOKEN });
export const setToken = token => ({ type: SET_TOKEN, token });

export const signIn = (email, password) => async dispatch => {
  try {
    const response = await fetch(`${baseUrl}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    if (!response.ok) {
      console.log('test', response)
      throw response;
    }
    const { token } = await response.json();
    localStorage.setItem(STACK_TOKEN, token);
    dispatch(setToken(token));
  }
  catch (err) {
    console.error(err);
  }
}

export const signUp = (name, email, password) => async dispatch => {
  try {
    const response = await fetch(`${baseUrl}/signup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password }),
    });
    if (!response.ok) {
      console.log('test', response)
      throw response;
    }
    const { token } = await response.json();
    localStorage.setItem(STACK_TOKEN, token);
    dispatch(setToken(token));
  }
  catch (err) {
    console.error(err);
  }
}





export default function reducer(state = { needSignIn: true }, action) {
  Object.freeze(state);

  const newState = Object.assign({}, state);
  switch (action.type) {
    case SET_TOKEN: {
      return {
        ...newState,
        token: action.token,
        needSignIn: false
      };
    }
    case REMOVE_TOKEN: {
      const newState = { ...state };
      delete newState.token;
      return {
        ...newState,
        needSignIn: true
      };
    }

    default: return state;
  }
}

export const signOut = () => async (dispatch) => {
  localStorage.removeItem(STACK_TOKEN)
}
