const getStorageItem = (key) => {
  const value = localStorage.getItem(key);

  return JSON.parse(value);
};

const setStorageItem = (key, value) => {
  const stringfiedValue = JSON.stringify(value);

  localStorage.setItem(key, stringfiedValue);
};

export { getStorageItem, setStorageItem };
