export const apiConfig = (method, token) => {
   return {
      method: method,
      header: {
         Authorization: `Bearer ${token}`,
      },
   };
};
