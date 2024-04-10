const getInitials = (name) => {
  if (name) {
    const nameParts = name.split(' ');
    const initials = nameParts
      .map((part) => part[0])
      .join('')
      .toUpperCase();
    return initials;
  }
  return null;
};

const getLocalStore = (value) => {
  if (typeof window !== 'undefined' && value) {
    return window.localStorage.getItem(value);
  }
  return null;
};

const trimText = (str, length, dots) => {
  if (str.length <= length) {
    return str;
  }
  return dots ? str.substring(0, length) + '...' : str.substring(0, length);
};

export { getInitials, getLocalStore, trimText };
