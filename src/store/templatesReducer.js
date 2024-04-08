import { toggleDialog } from './actionCreators';
import {
  SET_TEMPLATE_LIST,
  SET_TEMPLATE_PREVIEW,
  TOGGLE_DIALOG,
} from './actionTypes';

const initialState = {
  templateList: [],
  templateCategories: [],
  templatePreview: [],
  defaultTemplate: [],
  selectedClause: [],
  previewLoading: false,
  templateName: '',
  openDialog: false,
};

export const templatesReducer = (state = initialState, action = null) => {
  switch (action.type) {
    case SET_TEMPLATE_LIST:
      return { ...state, templateList: action.templates };

    case SET_TEMPLATE_PREVIEW:
      return { ...state, templatePreview: action.template };

    case TOGGLE_DIALOG:
      return { ...state, openDialog: action.flag };
    default:
      return state;
  }
};
