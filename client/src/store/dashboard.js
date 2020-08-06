import { baseUrl } from '../config';


export const loadDashboard = (id = 1) => async dispatch => {
  try {
    const response = await fetch(`${baseUrl}/dashboard/${id}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    });
    if (!response.ok) {
      throw response;
    } else {
      const { data } = await response.json();
      console.log(data)

    }
  }
  catch (err) {
    console.error(err);
  }
}
