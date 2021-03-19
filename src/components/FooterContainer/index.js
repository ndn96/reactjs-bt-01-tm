import React, { useState } from 'react'
import { PRODUCTS } from '../../env';
export default function FooterContainer(props) {
  const { totalPrice, tax, percent, coupon, setPercent, products, setProducts } = props;
  const [promote, setPromote] = useState('');
  const [display, setDisplay] = useState('');
  const [message, setMessage] = useState({
    content: '',
    display: false
  });
  const _totalQuantity = (products.length > 0) ? (products.map(v => v.quantity).reduce((sum, num) => {
    return Number(sum) + Number(num)
  })) : (0);
  const checkCoupon = (ev) => {
    let result = coupon.filter(v => v.code === promote)
    // console.log(result);
    if (result.length > 0) {
      setDisplay(true)
      setPercent(result[0].percent)
      setMessage({
        content: 'Coupon Applied',
        display: true
      })
    } else {
      setDisplay(true)
      setMessage({
        content: 'Coupon Not Exist',
        display: false
      })
    }
  }
  const continueBuying = () => {
    // window.location.reload();
    setProducts(PRODUCTS)
  }

  if (_totalQuantity > 0) {
    return (
      <>
        <section className="container">
          <div className="promotion">
            <label htmlFor="promo-code">Have A Promo Code?</label>
            <input type="text" id="promo-code" onChange={(ev) => { setPromote(ev.target.value) }} /> <button type="button" onClick={checkCoupon} />
            {(display) && (<span className="coupon_warning">{message.content}</span>)}
          </div>
          <div className="summary">
            <ul>
              <li>Subtotal <span>{(totalPrice > 0) ? (new Intl.NumberFormat('en-US', { style: 'currency', currency: 'VND' }).format((totalPrice) * 25000)) : (0)}</span></li>
              <li>Tax <span>{(totalPrice > 0 && tax > 0) ? (new Intl.NumberFormat('en-US', { style: 'currency', currency: 'VND' }).format((totalPrice) * 25000 * 0.1)) : (0)}</span></li>
              {(message.display) && (<li>Discount <span>{percent * 100} %</span></li>)}
              <li className="total">Total <span>{(totalPrice > 0 && tax > 0) ? (new Intl.NumberFormat('en-US', { style: 'currency', currency: 'VND' }).format((totalPrice * (1 - percent) + tax) * 25000)) : (0)}</span></li>
            </ul>
          </div>
          <div className="checkout">
            <button type="button">Check Out</button>
          </div>
        </section>
      </>)
  }
  return (
    <div className="empty-product">
      <h3>Không có sản phẩm nào trong giỏ.</h3>
      <button onClick={continueBuying}>Quay lại mua hàng</button>
    </div>
  )
}