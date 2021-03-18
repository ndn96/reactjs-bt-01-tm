import React, { useEffect } from 'react'
export default function BodyContainer(props) {
  const { setItem, products, setProducts, setTotalPrice } = props;

  useEffect(() => {
    setItem(() => {
      let totalQuantity
      if (products.length > 0) {
        totalQuantity = products.map(v => v.quantity).reduce((sum, num) => {
          return sum + num
        });
      } else {
        totalQuantity = []
      }
      return totalQuantity
    });
    setTotalPrice(() => {
      let _totalPrice = [];
      if (products.length > 0) {
        _totalPrice = products.map(v => Number(v.price) * Number(v.quantity)).reduce((sum, num) => sum + num)
      }
      // console.log('totalPrice: ', _totalPrice)
      return _totalPrice
    })
  }, [products,setItem,setTotalPrice]);

  // Xóa Cart Item
  const removeItem = (ev) => {
    ev.preventDefault();
    // 1. Get id của phần tử cần remove.
    const _id = ev.target.getAttribute('data-id');
    const newProducts = products.filter(v => v.id !== _id)
    setProducts(newProducts);
  }
  // Thay đổi số lượng khi người dùng thay đổi input quantity
  const handleChangeQuantity = async (ev) => {
    ev.preventDefault()
    const _id = ev.target.getAttribute('data-id');
    // 1. Lấy ra mảng các phần tử mà có id khác với _id
    const newProducts = products.filter(v => v.id !== _id);//Array
    // 2. Lấy ra phần tử có id = _id
    const originProducts = products.filter(v => v.id === _id)[0];// One Element
    // 3. Cập nhật Products
    await setProducts(() => {
      return [{
        ...originProducts,
        quantity: ev.target.value
      }, ...newProducts]
    });

  }
  return (
    <>
      <section className="container">
        <ul className="products">
          {products.map(v => {
            return (
              <li key={v.id} className="row">
                <div className="col left">
                  <div className="thumbnail">
                    <a href={v.image}>
                      <img src={v.image} alt={v.name} title={v.name} />
                    </a>
                  </div>
                  <div className="detail">
                    <div className="name"><a href={v.image}>{v.name}</a></div>
                    <div className="description">
                      {v.description}
                    </div>
                    <div className="price">${v.price}</div>
                  </div>
                </div>
                <div className="col right">
                  <div className="quantity">
                    <input type="number" data-id={v.id} className="quantity" step={1} defaultValue={v.quantity}
                      onChange={(ev) => handleChangeQuantity(ev)} />
                  </div>
                  <div className="remove">
                    <svg data-id={v.id} onClick={(ev) => removeItem(ev)} version="1.1" className="close" xmlns="//www.w3.org/2000/svg" xmlnsXlink="//www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 60 60" enableBackground="new 0 0 60 60" xmlSpace="preserve">
                      <polygon points="38.936,23.561 36.814,21.439 30.562,27.691 24.311,21.439 22.189,23.561 28.441,29.812 22.189,36.064 24.311,38.186 30.562,31.934 36.814,38.186 38.936,36.064 32.684,29.812" />
                    </svg>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </section>
    </>
  )
}