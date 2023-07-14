// HRPage.js
import React, { useContext, useState } from 'react';
import { FileUploadContext } from './FileUploadContext';
import VendorPreview from './VendorPreview';

const HrPage = ({ onLogout }) => {
  const { uploadedFiles } = useContext(FileUploadContext);
  const [selectedVendor, setSelectedVendor] = useState('');
  const [assignedFiles, setAssignedFiles] = useState([]);

  const vendors = ['Vendor 1', 'Vendor 2', 'Vendor 3'];

  const handleVendorSelect = (e) => {
    setSelectedVendor(e.target.value);
    setAssignedFiles([]);
  };

  const handleAssignVerification = () => {
    const filesToAssign = uploadedFiles.filter(
      (file) => file.employeeName && !file.verificationStatus
    );
    setAssignedFiles(
      filesToAssign.map((file) => ({ ...file, vendor: selectedVendor }))
    );
  };

  return (
    <div>
      <h2>HR Page</h2>
      <select value={selectedVendor} onChange={handleVendorSelect}>
        <option value="">Select Vendor</option>
        {vendors.map((vendor, index) => (
          <option key={index} value={vendor}>
            {vendor}
          </option>
        ))}
      </select>
      <button onClick={handleAssignVerification}>Assign Verification</button>
      {selectedVendor && assignedFiles.length > 0 && (
        <VendorPreview vendor={selectedVendor} assignedFiles={assignedFiles} />
      )}
      <button onClick={onLogout}>Logout</button>
    </div>
  );
};

export default HrPage;
