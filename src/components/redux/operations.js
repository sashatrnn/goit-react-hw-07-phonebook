import axios from 'axios';

const BASE_URL = 'https://648840500e2469c038fd55f0.mockapi.io/contacts';

export const fetchContacts = async () => {
  const { data } = await axios.get(BASE_URL);
  return data;
};

export const addContact = async contact => {
  const { data } = await axios.post(BASE_URL, contact);
  return data;
};

export const deleteContact = async id => {
  const { data } = await axios.delete(`${BASE_URL}/${id}`);
  return data;
};
