import {
  SET_CLAUSES,
  SET_DEFAULT_TEMPLATE,
  SET_NEW_TEMPLATE,
  SET_TEMPLATE_CATEGORIES,
  SET_TEMPLATE_LIST,
  SET_TEMPLATE_PREVIEW,
  TOGGLE_DIALOG,
} from './actionTypes';

const initialState = {
  templateList: null,
  templateCategories: [],
  templatePreview: [],
  defaultTemplate: [],
  clauses: [],
  selectedClause: [],
  newTemplate: {
    templateName: 'Untitle template',
    category: {
      id: 1,
      contractor: 'mainContractor',
      form: 'longForm',
    },
    clausesSelected: [],
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

    case SET_CLAUSES:
      return { ...state, clauses: action.clauses };

    case SET_NEW_TEMPLATE:
      return {
        ...state,
        newTemplate: { ...state.newTemplate, [action.key]: action.value },
      };

    case SET_DEFAULT_TEMPLATE:
      return {
        ...state,
        defaultTemplate: action.template,
      };
    default:
      return state;
  }
};
