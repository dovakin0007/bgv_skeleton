// FileContext.js
import React, { createContext, useState } from 'react';

const FileContext = createContext();

const FileProvider = ({ children }) => {
  const [employeeFiles, setEmployeeFiles] = useState({});
  const [fileStatus, setFileStatus] = useState({});

  const addEmployeeFile = (employeeName, file) => {
    setEmployeeFiles((prevFiles) => {
      const updatedFiles = {
        ...prevFiles,
        [employeeName]: [...(prevFiles[employeeName] || []), file],
      };
      return updatedFiles;
    });

    setFileStatus((prevStatus) => {
      const updatedStatus = {
        ...prevStatus,
        [file.name]: false, // Initial status is set to false (not okay)
      };
      return updatedStatus;
    });
  };

  const updateFileStatus = (fileName, status) => {
    setFileStatus((prevStatus) => ({
      ...prevStatus,
      [fileName]: status,
    }));
  };

  return (
    <FileContext.Provider
      value={{ employeeFiles, fileStatus, addEmployeeFile, updateFileStatus }}
    >
      {children}
    </FileContext.Provider>
  );
};

export { FileContext, FileProvider };
