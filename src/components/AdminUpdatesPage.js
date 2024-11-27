import React from 'react';
import UpdateForm from './UpdateForm';  // Import UpdateForm
import Updates from './Updates';        // Import Updates

function AdminUpdatesPage() {
  return (
    <div>
      <h1>Admin Updates Page</h1>
      <UpdateForm />  {/* Form to submit updates */}
      <Updates />     {/* Display updates */}
    </div>
  );
}

export default AdminUpdatesPage;
