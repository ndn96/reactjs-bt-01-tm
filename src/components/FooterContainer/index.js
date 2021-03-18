import React, { useState } from 'react'
export default function FooterContainer(props) {
  const { totalPrice, tax, percent, coupon, setPercent } = props;
  const [promote, setPromote] = useState('');
  const [display, setDisplay] = useState('false');
  const [message, setMessage] = useState('');
  const checkCoupon = (ev) => {
    let result = coupon.filter(v => v.code === promote)
    // console.log(result);
    if (result.length > 0) {
      setDisplay(true)
      setPercent(result[0].percent)
      setMessage('Coupon Applied')
    } else {
      setDisplay(true)
      setMessage('Coupon Not Exist')
    }
  }
  return (
    <>
      <section className="container">
        <div className="promotion">
          <label htmlFor="promo-code">Have A Promo Code?</label>
          <input type="text" id="promo-code" onChange={(ev) => { setPromote(ev.target.value) }} /> <button type="button" onClick={checkCoupon} />
          {(display) ? (<span className="coupon_warning">{message}</span>) : ('')}
        </div>
        <div className="summary">
          <ul>
            <li>Subtotal <span>{(totalPrice > 0) ? (new Intl.NumberFormat('en-US', { style: 'currency', currency: 'VND' }).format((totalPrice) * 25000)) : (0)}</span></li>
            <li>Tax <span>{(totalPrice > 0 && tax > 0) ? (new Intl.NumberFormat('en-US', { style: 'currency', currency: 'VND' }).format((tax) * 25000)) : (0)}</span></li>
            <li>Discount <span>{percent * 100} %</span></li>
            <li className="total">Total <span>{(totalPrice > 0 && tax > 0) ? (new Intl.NumberFormat('en-US', { style: 'currency', currency: 'VND' }).format((totalPrice * (1 - percent) + tax) * 25000)) : (0)}</span></li>
          </ul>
        </div>
        <div className="checkout">
          <button type="button">Check Out</button>
        </div>
      </section>
    </>)
}