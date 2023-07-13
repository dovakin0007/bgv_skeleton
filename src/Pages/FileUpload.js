import React, { useContext, useState } from 'react';
import { FileContext } from '../FileContext';

const FileUpload = () => {
  const { fileStatus, addEmployeeFile } = useContext(FileContext);
  const [employeeName, setEmployeeName] = useState('');
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileChange = (event) => {
    setSelectedFiles(event.target.files);
  };

  const handleUpload = () => {
    Array.from(selectedFiles).forEach((file) => {
      addEmployeeFile(employeeName, file);
    });

    // Reset the form
    setEmployeeName('');
    setSelectedFiles([]);
  };

//   const fileStatusFalse = Object.values(fileStatus).some(status => !status);

  return (
    <div>
      <h1>File Upload</h1>
      {fileStatus ? (
        <div>
          <div>
            <label>Employee Name:</label>
            <input
              type="text"
              value={employeeName}
              onChange={(event) => setEmployeeName(event.target.value)}
            />
          </div>
          <input type="file" multiple onChange={handleFileChange} />
          <button onClick={handleUpload}>Upload</button>
        </div>
      ) : (
        <p>All files have been uploaded. No further uploads allowed.</p>
      )}
    </div>
  );
};

export default FileUpload;
