import { baseUrl } from '../config';

const RETRIEVE_DATA = ''
export const retrieveData = (allCards) => ({ type: RETRIEVE_DATA, allCards })
export const loadDashboard = ( id ) => async dispatch => {

  if (!id) {
    return
  }

  try {
    const response = await fetch(`${baseUrl}/dashboard/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    });
    if (!response.ok) {
      throw response;
    } else {
      const allCards = await response.json();
      dispatch(retrieveData(allCards))
    }
  }
  catch (err) {
    console.error(err);
  }
}



export default function reducer(state = { cardData: "" }, action) {
  Object.freeze(state);

  const newState = Object.assign({}, state);
  switch (action.type) {
    case RETRIEVE_DATA: {
      return {
        ...newState,
        cardData: action.allCards
      };
    }

    default: return state;
  }
}
