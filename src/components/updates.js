import React, { useEffect, useState } from 'react';

function Updates() {
  const [updates, setUpdates] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUpdates = async () => {
      try {
        const response = await fetch('/api/updates/');
        const data = await response.json();
        setUpdates(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching updates:', error);
        setLoading(false);
      }
    };

    fetchUpdates();
  }, []);

  if (loading) {
    return <div>Loading updates...</div>;
  }

  return (
    <div>
      <h2>Latest Updates</h2>
      {updates.length === 0 ? (
        <p>No updates available.</p>
      ) : (
        updates.map((update) => (
          <div key={update.id} style={{ marginBottom: '20px' }}>
            <h3>{update.title}</h3>
            <p>{update.content}</p>
            {update.image && (
              <img
                src={`/${update.image}`}
                alt={update.title}
                style={{ width: '100%', maxWidth: '500px', marginTop: '10px' }}
              />
            )}
            <p><small>Posted on: {new Date(update.created_at).toLocaleString()}</small></p>
          </div>
        ))
      )}
    </div>
  );
}

export default Updates;
