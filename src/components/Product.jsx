import Card from './Card';

export default function Product({ title, price }) {
  return (
    <Card>
      <h3>{title}</h3>
      <p>Price: ${price}</p>
    </Card>
  );
}