import React, { useEffect } from 'react'
import './index.scss';
export default function Modal(props) {
  const { setModal, products, setProducts, itemId } = props;
  useEffect(() => {

  }, [itemId, products])
  const acceptDelete = async () => {
    // console.log('itemId: ', itemId)
    await setProducts(products.filter(v => v.id !== itemId))
    await setModal(false)
  }
  const closeModal = () => {
    setModal(false)
  }

  return (
    <div className="cookiesContent" id="cookiesPopup">
      <button onClick={closeModal} className="close">✖</button>
      <img src="https://www.flaticon.com/svg/static/icons/svg/2913/2913782.svg" alt="cookies-img" />
      <p>Would you like delete this products item?</p>
      <button onClick={(ev) => acceptDelete(ev)} className="accept">Accept</button>
    </div>
  )
}