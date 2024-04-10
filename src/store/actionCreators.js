import {
  CLEAR_STORE,
  SET_CLAUSES,
  SET_DEFAULT_TEMPLATE,
  SET_FETCH,
  SET_NEW_CONTRACT,
  SET_NEW_TEMPLATE,
  SET_TEMPLATE_CATEGORIES,
  SET_TEMPLATE_LIST,
  SET_TEMPLATE_PREVIEW,
  TOGGLE_DIALOG,
} from './actionTypes';

export const showDialog = (flag) => {
  return { type: TOGGLE_DIALOG, flag };
};

export const setTemplateList = (templates) => {
  return { type: SET_TEMPLATE_LIST, templates };
};

export const setTemplatePreview = (template) => {
  return { type: SET_TEMPLATE_PREVIEW, template };
};

export const setTemplateCategories = (categories) => {
  return { type: SET_TEMPLATE_CATEGORIES, categories };
};

export const setNewTemplate = (key, value) => {
  return { type: SET_NEW_TEMPLATE, key, value };
};

export const setClauses = (clauses) => {
  return { type: SET_CLAUSES, clauses };
};

export const setDefaultTemplate = (template) => {
  return { type: SET_DEFAULT_TEMPLATE, template };
};

export const clearStore = () => {
  return { type: CLEAR_STORE };
};
