import { templateCategories } from '../data/templateCategories';
import { templates } from '../data/templates';
import { templatesPreview } from '../data/templatesPreview';

export const getTemplates = () => {
  return new Promise((resolve, reject) => {
    resolve(templates);
  });
};

export const getTemplateById = (id) => {
  return new Promise((resolve, reject) => {
    resolve(templatesPreview);
  });
};

export const getTemplateCategories = () => {
  return new Promise((resolve, reject) => {
    resolve(templateCategories);
  });
};
