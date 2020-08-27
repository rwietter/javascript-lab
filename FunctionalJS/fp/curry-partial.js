const logger = console.log;

// --------------------- UNCURRYED ---------------------
const getApiURL = (apiHostname, resourceName, resourceId) => {
  return `https://${apiHostname}/api/${resourceName}/${resourceId}`;
};

const getUserURL = (userId) => {
  return getApiURL('localhost:3000', 'users', userId);
};

const getOrderURL = (orderId) => {
  return getApiURL('localhost:3000', 'orders', orderId);
};

const getProductURL = (productId) => {
  return getApiURL('localhost:3000', 'products', productId);
};

// --------------------- CURRYED ---------------------
const getAPIUrl = (hostname = 'localhost:3000') => (resourceName) => (
  resourceId
) => {
  return `https://${hostname}/api/${resourceName}/${resourceId}`;
};
logger(getAPIUrl()('users')(2)); // https://localhost:3000/api/products/2
logger(getAPIUrl()('orders')(2)); // https://localhost:3000/api/orders/2
logger(getAPIUrl()('products')(2)); // https://localhost:3000/api/products/2

// --------------------- Basic partial application ---------------------
const card = [
  { id: 1, name: 'meat', price: 24 },
  { id: 2, name: 'egg', price: 8 },
  { id: 3, name: 'egg', price: 12 },
];

const sum = (card, names) => {
  const products = card.filter((el) => el.name === names);
  return (value) => {
    return products.reduce((acc, cur) => {
      acc = cur.price * value;
    }, 0);
  };
};

const summed = sum(card, 'egg');
logger(summed(4));

// Advanced partial application
const partialApplication = (fn, ...args) => (value) => fn(value, 5);

const add = (x, y) => x + y;
const addFive = partialApplication(add, 5);
const result = [1, 7, 3].map(addFive);
console.log(result); // [6, 12, 8]
