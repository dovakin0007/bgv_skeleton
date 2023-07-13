import React, { useContext, useState } from 'react';
import { FileContext } from '../FileContext';

const FileView = () => {
  const { employeeFiles, fileStatus, updateFileStatus } = useContext(FileContext);
  const [selectedEmployee, setSelectedEmployee] = useState('');

  const handleEmployeeChange = (event) => {
    setSelectedEmployee(event.target.value);
  };

  const files = employeeFiles[selectedEmployee] || [];

  const handleCheckboxChange = (file) => {
    const fileName = file.name;
    const newStatus = !fileStatus[fileName];
    updateFileStatus(fileName, newStatus);
  };

  const renderFilePreview = (file) => {
    const fileURL = URL.createObjectURL(file);
    window.open(fileURL);
  };

  return (
    <div>
      <h1>File View</h1>
      <div>
        <label>Select Employee:</label>
        <select value={selectedEmployee} onChange={handleEmployeeChange}>
          <option value="">-- Select Employee --</option>
          {Object.keys(employeeFiles).map((employeeName) => (
            <option key={employeeName} value={employeeName}>
              {employeeName}
            </option>
          ))}
        </select>
      </div>
      {selectedEmployee && (
        <div>
          <h2>Files for {selectedEmployee}</h2>
          <ul>
            {files.map((file, index) => (
              <li key={index}>
                <label>
                  <input
                    type="checkbox"
                    checked={fileStatus[file.name] || false}
                    onChange={() => handleCheckboxChange(file)}
                  />
                  {file.name}
                </label>
                <button onClick={() => renderFilePreview(file)}>
                  Preview
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
      <div>
        <h2>File Verification</h2>
        <ul>
          {Object.keys(fileStatus).map((fileName, index) => (
            <li key={index}>
              {fileName}: {fileStatus[fileName] ? 'Okay' : 'Not Okay'}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FileView;
