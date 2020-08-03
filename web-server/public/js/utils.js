export const fetchAddress = (address) => {
  return fetch(`/weather?address=${address}`).then((response) => {
    return response.json();
  });
};
