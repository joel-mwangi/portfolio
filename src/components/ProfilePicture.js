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
  &:hover {
    background-color: #218838;
  }
`;

const ProfilePicture = () => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const fileInputRef = useRef(null); // Reference for the file input

  // Handle file selection
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle file upload
  const handleUpload = () => {
    if (!image) {
      alert('Please select an image first.');
      return;
    }
    console.log('Uploading file:', image);
    alert('Image successfully uploaded!');
  };

  // Trigger the file input click programmatically
  const handleButtonClick = () => {
    fileInputRef.current.click();
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
      {/* Hidden file input, triggered by custom button */}
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
