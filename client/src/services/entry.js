import api from './apiConfig';

export const getAllEntries = async () => {
  const resp = await api.get('/entries');
  return resp.data;
}
