import React, { useState } from 'react'
import HeaderContainer from './components/HeaderContainer'
import BodyContainer from './components/BodyContainer'
import FooterContainer from './components/FooterContainer'
import './App.css';

import { PRODUCTS, COUPON } from './env';

function App() {
  const [item, setItem] = useState(0);
  const [products, setProducts] = useState(PRODUCTS);
  const [totalPrice, setTotalPrice] = useState(() => {
    let _totalPrice = products.map(v => Number(v.price) * Number(v.quantity)).reduce((sum, num) => sum + num);
    return _totalPrice
  })
  const [tax] = useState(5)
  const [percent, setPercent] = useState(0)
  return (
    <div className="App">
      <HeaderContainer products={products} />
      <BodyContainer setItem={setItem} item={item} products={products} setProducts={setProducts} setTotalPrice={setTotalPrice} />
      <FooterContainer totalPrice={totalPrice} tax={tax} percent={percent} setPercent={setPercent} coupon={COUPON} />
    </div>
  );
}

export default App;
