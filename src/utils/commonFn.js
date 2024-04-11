import clone from 'rfdc';
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

const checkContent = (content) => {
  const isEmpty = content.replace(/<(.|\n)*?>/g, '').trim().length === 0;
  if (isEmpty) {
    return null;
  }
  return content;
};

const getUpdatedJson = (newTemplate) => {
  const x = clone()(newTemplate);
  const a = x.clausesSelected.optionGroups?.map((og, ogIndex) => {
    return {
      ...og,
      options: og?.options?.map((o, oIndex) => {
        return {
          ...o,
          groupClauses: o?.groupClauses?.map((gc, gcIndex) => {
            if (checkContent(gc.content)) {
              return gc;
            }
            return { ...gc, content: null };
          }),
        };
      }),
    };
  });
  return a;
};

export { getInitials, getLocalStore, trimText, checkContent, getUpdatedJson };
