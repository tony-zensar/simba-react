import axios from 'axios';
import { coreTemplate } from '../data/coreTemplate';

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

export const getContracts = async () => {
  return axios.get(
    'https://webserver-lctzensarttl-prd.lfr.cloud/o/contract-management/1.0.0/contract'
  );
};

export const getContractById = async (id) => {
  return axios.get(
    'https://webserver-lctzensarttl-prd.lfr.cloud/o/contract-management/1.0.0/contract/' +
      id
  );
};

export const getTemplateCategories = async () => {
  return axios.get(
    'https://webserver-lctzensarttl-prd.lfr.cloud/o/contract-management/1.0.0/template/categories'
  );
};

export const getDefaultTemplate = async (id = 210183) => {
  return axios.get(
    'https://webserver-lctzensarttl-prd.lfr.cloud/o/contract-management/1.0.0/template/' +
      id
  );
};

export const getAiSuggestions = async (data) => {
  return axios.post(
    'https://webserver-lctzensarttl-prd.lfr.cloud/o/contract-management/1.0.0/simba/suggestion',
    data,
    { headers: { 'Content-Type': 'application/json' } }
  );
};

export const getAiSummary = async (data) => {
  return axios.post(
    'https://webserver-lctzensarttl-prd.lfr.cloud/o/contract-management/1.0.0/simba/summary',
    data
  );
};

export const saveTemplate = (template) => {
  return axios.put(
    'https://webserver-lctzensarttl-prd.lfr.cloud/o/contract-management/1.0.0/templat',
    template
  );
};

export const saveContract = (contract) => {
  return axios.put(
    'https://webserver-lctzensarttl-prd.lfr.cloud/o/contract-management/1.0.0/contrac',
    contract
  );
};
