import Product from './Product';

export default function ProductList() {
  const products = [
    { id: 1, title: 'Laptop', price: 1200 },
    { id: 2, title: 'Phone', price: 800 },
    { id: 3, title: 'Tablet', price: 600 }
  ];

  return (
    <div>
      <h2>Product List</h2>
      {products.map((product) => (
        <Product
          key={product.id}
          title={product.title}
          price={product.price}
        />
      ))}
    </div>
  );
}