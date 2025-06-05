// import React, { useEffect, useState } from 'react';

// import './Product.css'; 
// // import 'bootstrap/dist/css/bootstrap.min.css';


// function Producttable() {
//   const [products, setProducts] = useState([]);

  
//   const API_URL = 'https://api.restful-api.dev/objects';

//   useEffect(() => {
//     fetch(API_URL)
//       .then(res => res.json())
//       .then(data => setProducts(data))
//       .catch(err => console.error('Failed to fetch:', err));
//   }, []);

//   return (
//     <div className="container mt-4">
//       <h2>API Data Product Table</h2>
//       <table className="table table-bordered table-striped">
//         <thead className="table-dark">
//           <tr>
//             <th>ID</th>
//             <th>Name</th>
//             <th>Color</th>
//             <th>Capacity</th>
//             <th>Price</th>
//             <th>Other Details</th>
//           </tr>
//         </thead>
//         <tbody>
//           {products.map(prod => {
//             const { id, name, data } = prod;
//             return (
//               <tr key={id}>
//                 <td>{id}</td>
//                 <td>{name}</td>
//                 <td>{data?.color || data?.Color || data?.['Strap Colour'] || '-'}</td>
//                 <td>{data?.capacity || data?.['capacity GB'] || data?.Capacity || '-'}</td>
//                 <td>{data?.price || data?.Price || '-'}</td>
//                 <td>
//                   <pre style={{ whiteSpace: 'pre-wrap', margin: 0 }}>
//                     {data &&
//                       Object.entries(data)
//                         .filter(([key]) => !['color', 'Color', 'Strap Colour', 'capacity', 'Capacity', 'capacity GB', 'price', 'Price'].includes(key))
//                         .map(([key, value]) => `${key}: ${value}`)
//                         .join('\n')}
//                   </pre>
//                 </td>
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default Producttable;




import React, { useEffect, useState } from 'react';
import './Product.css'; 

function ProductTable() {
  const [products, setProducts] = useState([]);
  const [allKeys, setAllKeys] = useState(['id', 'name']);

  const API_URL = 'https://api.restful-api.dev/objects';

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        setProducts(data);

        
        const keysSet = new Set(['id', 'name']);
        data.forEach(item => {
          if (item.data && typeof item.data === 'object') {
            Object.keys(item.data).forEach(key => keysSet.add(key));
          }
        });
        setAllKeys(Array.from(keysSet));
      })
      .catch(err => console.error('Failed to fetch:', err));
  }, []);

  return (
    <div className="container mt-4">
      <h2>API Data Product Table</h2>
      <table className="table table-bordered table-striped">
        <thead className="table-dark">
          <tr>
            {allKeys.map(key => (
              <th key={key}>{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {products.map(prod => (
            <tr key={prod.id}>
              {allKeys.map(key => {
                if (key === 'id' || key === 'name') {
                  return <td key={key}>{prod[key]}</td>;
                } else {
                  return (
                    <td key={key}>
                      {prod.data && prod.data[key] !== undefined
                        ? prod.data[key]
                        : '-'}
                    </td>
                  );
                }
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductTable;




