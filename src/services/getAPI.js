export const getAPI = async (API) => {
  const response = await fetch(API);
  return response;
};
