

import logo from './logo.svg';
import './App.css';
import products from './productsData';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to the Product Catalog App!</h1>
        <p>Start building your catalog by adding products and features.</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <section style={{ marginTop: '2rem' }}>
        <h2>Product List</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {products.map(product => (
            <li key={product.id} style={{ marginBottom: '1rem', background: '#222', padding: '1rem', borderRadius: '8px', color: '#f7f7f7' }}>
              <strong>{product.name}</strong> <br />
              Category: {product.category} <br />
              Price: ${product.price}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default App;
