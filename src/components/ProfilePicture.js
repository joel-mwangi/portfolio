import React, { useState, useRef } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  text-align: center;
  margin: 20px;
`;

const PreviewContainer = styled.div`
  width: 150px;
  height: 150px;
  margin: 20px auto;
  border: 2px dashed #ccc;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const PreviewImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const PlaceholderText = styled.p`
  color: #aaa;
  font-size: 14px;
`;

const FileInput = styled.input`
  display: none;
`;

const UploadButton = styled.button`
  padding: 10px 20px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 10px;
  &:hover {
    background-color: #218838;
  }
`;

const ProfilePicture = () => {
  const [image, setImage] = useState(null); // Store the current file
  const [preview, setPreview] = useState(null); // Display the preview of the selected image
  const fileInputRef = useRef(null); // Reference for the hidden file input

  // Handle file selection
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Clean up the previous preview URL if it exists
      if (preview) {
        URL.revokeObjectURL(preview);
      }

      // Set the new file and generate its preview
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  // Handle the "Select Image" button click
  const handleButtonClick = () => {
    fileInputRef.current.click(); // Programmatically click the hidden file input
  };

  // Simulate the upload process and clear the file (no backend)
  const handleUpload = () => {
    if (!image) {
      alert('Please select an image first.');
      return;
    }

    console.log('Uploading file:', image);
    alert('Image successfully uploaded!');
    setImage(null); // Clear the current file
  };

  return (
    <Container>
      <h2>Profile Picture</h2>
      <PreviewContainer>
        {preview ? (
          <PreviewImage src={preview} alt="Profile Preview" />
        ) : (
          <PlaceholderText>No image uploaded</PlaceholderText>
        )}
      </PreviewContainer>
      {/* Hidden file input triggered by the custom button */}
      <FileInput
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={handleImageChange}
      />
      <UploadButton onClick={handleButtonClick}>Select Image</UploadButton>
      <UploadButton onClick={handleUpload}>Upload</UploadButton>
    </Container>
  );
};

export default ProfilePicture;
