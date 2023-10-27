const determineVersion = () => {
  return 'version2'; // Replace with your version identifier
};

export const applyVersionClass = () => {
  const version = determineVersion();
  document.body.classList.add(version);
};

export const removeVersionClass = () => {
  const version = determineVersion();
  document.body.classList.remove(version);
};

export default determineVersion;
