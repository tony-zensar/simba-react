import { toggleDialog } from './actionCreators';
import {
  SET_NEW_TEMPLATE,
  SET_TEMPLATE_CATEGORIES,
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
  newTemplate: {
    templateName: 'Untitle contract',
    category: {
      id: '',
      contractor: '',
      form: '',
    },
    selectedClause: [],
  },
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

    case SET_TEMPLATE_CATEGORIES:
      return { ...state, templateCategories: action.categories };

    case SET_NEW_TEMPLATE:
      return {
        ...state,
        newTemplate: { ...state.newTemplate, [action.key]: action.value },
      };
    default:
      return state;
  }
};
