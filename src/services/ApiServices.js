import { API_BASE_URL } from '../utils/constants';

export const postRequest = async (endpoint, data) => {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  return response.json();
};
export const deleteRequest = async (endpoint, uuid) => {
  const response = await fetch(`${API_BASE_URL}${endpoint}${uuid}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  return response.json();
};

export const getRequest = async (endpoint, queryParams = {}) => {
  const url = new URL(`${API_BASE_URL}${endpoint}`);

  // Append query parameters to the URL
  Object.keys(queryParams).forEach((key) =>
    url.searchParams.append(key, queryParams[key]),
  );

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  return response.json();
};
