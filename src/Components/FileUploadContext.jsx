import React, { createContext, useState } from "react";

export const FileUploadContext = createContext();

export const FileUploadProvider = ({ children }) => {
    const [uploadedFiles, setUploadedFiles] = useState([]);

    const addUploadedFile = (employeeName, file) => {
        const updatedFiles = [
            ...uploadedFiles,
            { employeeName, file, verificationStatus: "", vendor: "" }
        ];
        setUploadedFiles(updatedFiles);
    };

    return (
        <FileUploadContext.Provider value={{ uploadedFiles, addUploadedFile }}>
            {children}
        </FileUploadContext.Provider>
    )
}
export const users = [
    { username: 'admin', password: 'admin', userType: 'employee' },
    { username: 'hr', password: 'hr', userType: 'hr' },
    { username: 'vendor', password: 'vendor', userType: 'vendor' },
  ];