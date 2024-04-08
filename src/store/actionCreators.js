import {
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
