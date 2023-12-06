export const errorHandling = async (func, onError) => {
  try {
    const result = await func();
    return result;
  } catch (err) {
    if (err.response) {
      console.log(err.response.data);
      console.log(err.response.status);
      console.log(err.response.headers);
    } else {
      console.log(`Error: ${err.message}`);
    }

    if (onError) {
      onError(err);
    }
  }
};
