import shortid from 'short-id'
const PRODUCTS = [
  {
    id: shortid.generate(),
    name: "PRODUCT ITEM NUMBER 1",
    description: "Description for product item number 1",
    image: "https://via.placeholder.com/200x150",
    price: 9.99,
    quantity: 1,
  },
  {
    id: shortid.generate(),
    name: "PRODUCT ITEM NUMBER 2",
    description: "Description for product item number 2",
    image: "https://via.placeholder.com/200x150",
    price: 20.1,
    quantity: 2,
  },
  {
    id: shortid.generate(),
    name: "PRODUCT ITEM NUMBER 3",
    description: "Description for product item number 3",
    image: "https://via.placeholder.com/200x150",
    price: 10.99,
    quantity: 3,
  },
];
const COUPON = [
  {
    code: 'SALE10',
    percent: 0.1,
    expiryDate: '18/04/2022'
  },
  {
    code: 'SALE20',
    percent: 0.2,
    expiryDate: '18/04/2022'
  },
  {
    code: 'SALE30',
    percent: 0.3,
    expiryDate: '18/04/2022'
  },
  {
    code: 'SALE40',
    percent: 0.4,
    expiryDate: '18/04/2022'
  },
  {
    code: 'SALE50',
    percent: 0.5,
    expiryDate: '18/04/2022'
  }
]
export { PRODUCTS, COUPON }