import React from 'react'
export default function HeaderContainer(props) {
  const { products } = props;
  let totalQuantity
  if (products.length > 0) {
    totalQuantity = products.map(v => v.quantity).reduce((sum, num) => {
      return Number(sum) + Number(num)
    });
  } else {
    totalQuantity = 0
  }
  return (
    <>
      <header className="container">
        <h1>Shopping Cart</h1>
        <ul className="breadcrumb">
          <li>Home</li>
          <li>Shopping Cart</li>
        </ul>
        <span className="count">{totalQuantity} items in the bag</span>
      </header>
    </>)
}