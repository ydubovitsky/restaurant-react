import Counter from '../hocs/counter';
import PropTypes from 'prop-types';

function Product(props) {

  const { product, amount, increment, decrement } = props;

  return (
    <div>
      <p>{product.name}</p>
      <p>${product.price}</p>
      <hr />
      <p>{product.ingredients.join(", ")}</p>
      <p>Amount: {amount}</p>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </div>
  )
}

Product.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.number,
    ingredients: PropTypes.arrayOf(PropTypes.string.isRequired)
  }).isRequired,
  amount: PropTypes.number,
  decrement: PropTypes.func.isRequired,
  increment: PropTypes.func.isRequired
}

export default Counter(Product);

