import { createContext, useState } from 'react';
import { CustomSnackbar } from './snackBar';

export const CommonContext = createContext();

export const CommonProvider = ({ children }) => {
  const [snackBarMessage, setSnackBarMessage] = useState({});
  const [fns, setFns] = useState(null);

  const [showTemplateOptions, setShowTemplateOptions] = useState(false)



  return (
    <CommonContext.Provider
      value={{
        snackBarMessage,
        setSnackBarMessage,
        fns,
        setFns,
        showTemplateOptions,
        toggleTempalteOptions: setShowTemplateOptions
      }}
    >
      {children}
      <CustomSnackbar />
    </CommonContext.Provider>
  );
};
