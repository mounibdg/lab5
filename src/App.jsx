import { useState } from 'react';
import ProductList from './components/ProductList';

export default function App() {
  const [showProducts, setShowProducts] = useState(true);
  const [name, setName] = useState('');

  const toggleShowProducts = () => {
    setShowProducts((prev) => !prev);
  };

  return (
    <div style={{ maxWidth: '600px', margin: '40px auto', fontFamily: 'sans-serif', padding: '0 20px' }}>
      <h1>React Product Dashboard</h1>

      <div style={{ marginBottom: '15px' }}>
        <label htmlFor="username">Enter your name: </label>
        <input
          id="username"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Type here..."
          style={{ padding: '8px', marginLeft: '8px' }}
        />
      </div>

      <p style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
        Hello, {name ? name : 'Guest'}! 👋
      </p>

      <button
        onClick={toggleShowProducts}
        style={{
          padding: '10px 16px',
          cursor: 'pointer',
          marginBottom: '20px',
          backgroundColor: showProducts ? '#ff4d4d' : '#4CAF50',
          color: '#fff',
          border: 'none',
          borderRadius: '4px'
        }}
      >
        {showProducts ? 'Hide Products' : 'Show Products'}
      </button>

      {showProducts && <ProductList />}
    </div>
  );
}