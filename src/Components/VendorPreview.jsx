// VendorPreview.js
import React, { useState } from 'react';

const VendorPreview = ({ vendor, assignedFiles }) => {
  const [verificationStatus, setVerificationStatus] = useState('');

  const handleStatusChange = (file, status) => {
    setVerificationStatus(status);
    file.verificationStatus = status;
  };

  return (
    <div>
      <h3>Vendor: {vendor}</h3>
      <h4>Assigned Documents</h4>
      {assignedFiles.map((file, index) => (
        <div key={index}>
          <div>Employee: {file.employeeName}</div>
          <div>Document: {file.file.name}</div>
          {file.verificationStatus ? (
            <div>Status: {file.verificationStatus}</div>
          ) : (
            <div>
              <button onClick={() => handleStatusChange(file, 'Verified')}>
                Verify
              </button>
              <button onClick={() => handleStatusChange(file, 'Unverified')}>
                Unverify
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default VendorPreview;
