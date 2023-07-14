// EmployeePage.js
import React, { useContext, useState } from 'react';
import { FileUploadContext } from './FileUploadContext';

const EmployeePage = ({ onLogout }) => {
  const { addUploadedFile } = useContext(FileUploadContext);
  const [employeeName, setEmployeeName] = useState('');
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    setSelectedFiles(files);
  };

  const handleUpload = () => {
    selectedFiles.forEach((file) => {
      addUploadedFile(employeeName, file);
    });
    setSelectedFiles([]);
  };

  return (
    <div>
      <h2>Employee Page</h2>
      <input
        type="text"
        placeholder="Enter your name"
        value={employeeName}
        onChange={(e) => setEmployeeName(e.target.value)}
      />
      <input type="file" multiple onChange={handleFileUpload} />
      <h4>Uploaded Documents:</h4>
      {selectedFiles.map((file, index) => (
        <div key={index}>{file.name}</div>
      ))}
      <button onClick={handleUpload}>Upload</button>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
};

export default EmployeePage;

