import { coreTemplate } from '../data/coreTemplate';
import { templateCategories } from '../data/templateCategories';
import { templates } from '../data/templates';
import { templatesPreview } from '../data/templatesPreview';
import axios from 'axios';

export const getTemplates = async () => {
  return axios.get(
    'https://webserver-lctzensarttl-prd.lfr.cloud/o/contract-management/1.0.0/template'
  );
};

export const getTemplateById = async (id) => {
  return axios.get(
    'https://webserver-lctzensarttl-prd.lfr.cloud/o/contract-management/1.0.0/template/' +
      id
  );
};

export const getTemplateCategories = async () => {
  return axios.get(
    'https://webserver-lctzensarttl-prd.lfr.cloud/o/contract-management/1.0.0/template/categories'
  );
  return new Promise((resolve, reject) => {
    resolve(templateCategories);
  });
};

export const getDefaultTemplate = async (id = 210183) => {
  return axios.get(
    'https://webserver-lctzensarttl-prd.lfr.cloud/o/contract-management/1.0.0/template/' +
      id
  );
};

export const getContract = () => {
  return new Promise((resolve, reject) => {
    resolve(coreTemplate);
  });
};
