import { useState, useEffect } from 'react';

const Properties = () => {
  // Example state for properties data
  const [properties, setProperties] = useState([]);

  // Example function to fetch properties (replace with actual data fetching logic)
  useEffect(() => {
    // Simulated data fetch
    const fetchData = async () => {
      // Replace with actual API call or data fetching logic
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      setProperties(data);
    };

    fetchData();
  }, []);

  return (
    <div className="properties">
      <h1>Properties</h1>

      <div className="properties-list">
        <h2>Property Listings</h2>
        <ul>
          {properties.map((property) => (
            <li key={property.id}>
              <h3>{property.title}</h3>
              <p>{property.body}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="property-actions">
        <h2>Property Actions</h2>
        <button onClick={() => alert('Add new property')}>Add Property</button>
        <button onClick={() => alert('Delete property')}>Delete Property</button>
      </div>
    </div>
  );
};

export default Properties;
