import React, { useEffect, useState } from 'react';
// import data from '../data/data.json';

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // setOrders(data.orders);
  }, []);

  return (
    <>
      <h2>Add Orders</h2>
      <table className="table table-bordered mt-3">
        <thead>
          <tr>{orders.length > 0 && Object.keys(orders[0]).map(key => <th key={key}>{key}</th>)}</tr>
        </thead>
        <tbody>
          {orders.map((item, i) => (
            <tr key={i}>
              {Object.values(item).map((val, j) => <td key={j}>{val}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Orders;
