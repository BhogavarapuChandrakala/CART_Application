import React, { useMemo, useState } from 'react';
import './Main.css';
import earRings from '../assests/ear-rings.png';

function CartItem({ item, onChange, onChangeColor }) {
  const inc = () => onChange(item.id, item.quantity + 1);
  const dec = () => onChange(item.id, Math.max(1, item.quantity - 1));

  return (
    <div className="product-set">
      <div className="cart-item">
        <img src={earRings} alt="Earrings" className="cart-img" />
        <div className="cart-info">
          <div className="cart-name">{item.name}</div>
          <div className="cart-price">₹{item.price} <span className="strike">₹2,500</span></div>

          <div className="attr-row">
            <span className="dot dot-blue" />
            <span className="attr-text">Blue</span>
            <div className="qty">
              <button onClick={dec} aria-label="decrease">-</button>
              <span>{item.quantity}</span>
              <button onClick={inc} aria-label="increase">+</button>
            </div>
          </div>

          <div className="attr-row">
            <span className="attr-label">Buy More Color</span>
            <span className="dot" style={{ background: item.color.toLowerCase() }} />
            <select
              className="color-select"
              value={item.color}
              onChange={e => onChangeColor(item.id, e.target.value)}
            >
              <option value="Yellow">Yellow</option>
              <option value="Red">Red</option>
              <option value="Blue">Blue</option>
              <option value="Green">Green</option>
            </select>
          </div>
        </div>
      </div>
      <hr className="row-separator" />
    </div>
  );
}

export default function Main() {
  const [items, setItems] = useState([
    { id: 1, name: 'Hair Bows', price: 1500, quantity: 1, color: 'Yellow' },
    { id: 2, name: 'Hair Bows', price: 1500, quantity: 1, color: 'Yellow' }
  ]);
  const [coupon, setCoupon] = useState('');

  const onChange = (id, qty) => setItems(prev => prev.map(i => i.id === id ? { ...i, quantity: qty } : i));
  const onChangeColor = (id, color) => setItems(prev => prev.map(i => i.id === id ? { ...i, color } : i));

  const total = useMemo(() => items.reduce((sum, i) => sum + i.price * i.quantity, 0), [items]);

  return (
    <div className="cart-container">
      <div className="cart-content">
        <div className="cart-products">
          {items.map(item => (
            <CartItem key={item.id} item={item} onChange={onChange} onChangeColor={onChangeColor} />
          ))}
        </div>

        <aside className="summary">
          <div className="summary-title">Order Summary</div>
          {items.map(i => (
            <div key={i.id} className="summary-row">
              <span>{i.name} × {i.quantity}</span>
              <span>₹{i.price * i.quantity}</span>
            </div>
          ))}
          <div className="coupon-row">
            <input
              className="coupon-input"
              placeholder="Apply Coupon"
              value={coupon}
              onChange={e => setCoupon(e.target.value)}
            />
          </div>
          <hr className="divider" />
          <div className="summary-total">
            <span>Total</span>
            <span>₹{total}</span>
          </div>
          <button className="continue-btn">Continue</button>
        </aside>
      </div>
    </div>
  );
}
