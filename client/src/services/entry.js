import api from './apiConfig';

// GET
export const getAllEntries = async () => {
  const resp = await api.get('/entries');
  return resp.data;
}

// POST
export const postEntry = async (entryData) => {
  const resp = await api.post('/entries', { entry: entryData });
  return resp.data;
}

//PUT
export const putEntry = async (id, entryData) => {
  const resp = await api.put(`/entries/${id}`, { entry: entryData });
  return resp.data;
}

// DELETE
export const deleteEntry = async (id) => {
  await api.delete(`/entries/${id}`);
}
