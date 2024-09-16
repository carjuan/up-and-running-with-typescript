import config from '../utils/config';

export async function getAll() {
  try {
    const response = await fetch(config.BASE_URL + '/all', {
      headers: {
        Authorization: 'Bearer ' + config.API_KEY,
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
