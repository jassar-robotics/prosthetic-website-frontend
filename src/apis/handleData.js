import { BASE_API_URL } from '@/config/baseurl.js';
import axios from 'axios';

const access = localStorage.getItem('access');

const authHeaders = {
  Authorization: `Bearer ${access}`,
};

export const fetchData = async (url) => {
  return axios.get(BASE_API_URL + url);
};

export const fetchAuthData = async (url) => {
  return axios.get(BASE_API_URL + url, {
    headers: authHeaders,
  });
};

export const postData = async (url, data) => {
  const isFormData = data instanceof FormData;

  const headers = {
    ...authHeaders,
    ...(isFormData ? {} : { 'Content-Type': 'application/json' }),
  };

  return axios.post(BASE_API_URL + url, data, { headers });
};

export const patchData = async (url, data) => {
  const isFormData = data instanceof FormData;

  const headers = {
    ...authHeaders,
    ...(isFormData ? {} : { 'Content-Type': 'application/json' }),
  };

  return axios.patch(BASE_API_URL + url, data, { headers });
};

export const deleteData = async (url) => {
  return axios.delete(BASE_API_URL + url, {
    headers: authHeaders,
  });
};

export const sendMail = async (formData, url) => {
  try {
    const response = await axios({
      url: BASE_API_URL + url,
      method: 'POST',
      data: formData,
    });
    return response;
  } catch {
    console.error('Error sending email');
  }
};

export const fetchFavouriteTreks = async () => {
  const slugs = JSON.parse(localStorage.getItem('favorites_trek') || '[]');
  if (slugs.length === 0) return;

  try {
    const query = slugs.map((slug) => `slugs=${slug}`).join('&');
    const response = await axios({
      url: `${BASE_API_URL}/treks/slugs/?${query}`,
      method: 'GET',
    });
    const data = await response.data;
    return data;
  } catch (error) {
    console.error('Error', error);
  }
};

export const fetchDataWithPage = async (url, page = 1) => {
  const fullUrl = BASE_API_URL + url;
  try {
    const config = {
      method: 'GET',
      url: fullUrl,
      params: {
        page: page,
        page_size: 10,
      },
    };
    const response = await axios(config);
    return response.data;
  } catch (error) {
    console.error(`Error fetching data from ${url}:`, error);
    throw error;
  }
};
