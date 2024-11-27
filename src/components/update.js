import React, { useState } from 'react';

function UpdateForm() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);

  // Handle the form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    if (image) {
      formData.append('image', image);
    }

    // Send the form data to the backend API
    try {
      const response = await fetch('/api/updates/', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        alert('Update submitted successfully!');
        // Reset the form after submission
        setTitle('');
        setContent('');
        setImage(null);
      } else {
        alert('Failed to submit update');
      }
    } catch (error) {
      alert('Error: ' + error.message);
    }
  };

  return (
    <div>
      <h2>Submit a New Update</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Content</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          ></textarea>
        </div>
        <div>
          <label>Image (optional)</label>
          <input
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>
        <button type="submit">Submit Update</button>
      </form>
    </div>
  );
}

export default UpdateForm;
