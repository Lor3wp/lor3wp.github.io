// This function determines the current version of the application.
// You should replace the return value with your version identifier.
const determineVersion = () => {
  return 'version2';
};

// This function applies the version class to the body element of the document.
export const applyVersionClass = () => {
  const version = determineVersion();
  document.body.classList.add(version);
};

// This function removes the version class from the body element of the document.
export const removeVersionClass = () => {
  const version = determineVersion();
  document.body.classList.remove(version);
};

export default determineVersion;
