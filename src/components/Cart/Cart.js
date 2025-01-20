import { useContext } from 'react';
import Modal from '../UI/Modal';
import CartItem from './CartItem';
import classes from './Cart.module.css';
import CartContext from '../../store/cart-context';

const Cart = ({ onClose }) => {
  const { items, totalAmount, removeItem, addItem } = useContext(CartContext);

  const formattedTotalAmount = `$${totalAmount.toFixed(2)}`;
  const hasItems = items.length > 0;

  return (
    <Modal onClose={onClose}>
      <ul className={classes['cart-items']}>
        {items.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            amount={item.amount}
            price={item.price}
            onRemove={() => removeItem(item.id)}
            onAdd={() => addItem({ ...item, amount: 1 })}
          />
        ))}
      </ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{formattedTotalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={onClose}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
