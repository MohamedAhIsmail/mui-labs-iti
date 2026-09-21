// import React, { useContext } from "react";
// import "./ProductItem.css";
// import { CartContext } from "../../Context/CartContext/CartContext";
// import { Link } from "react-router-dom";
// import { toast } from "react-toastify";
// // import { useDispatch } from "react-redux";
// // import { addToCart } from "../../Redux/cartSlice";

// export default function ProductItem({ product }) {
//   let { addToCart } = useContext(CartContext);

//   // const dispatch = useDispatch()

//   function handleAddToCart() {
//     addToCart(product);
//     toast.success("Product added to cart!", {
//       position: "top-right",
//       autoClose: 2000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       theme: "colored",
//     });
//   }

//   return (
//     <div className="col-md-6 col-lg-3">
//       <div className="card mb-4 shadow-sm p-3 border-0">
//         <img
//           src={product.image}
//           alt={product.title}
//           className="image"
//           style={{ height: "275px", borderRadius: "5px" }}
//         />
//         <h2 className="title mt-3 fs-4">
//           {product.title  }
//         </h2>
//         <p className="category m-0">{product.category}</p>
//         <div className="btns d-flex justify-content-between mb-3 mt-2">
//           <button className="addCart" >
//             Add to Cart
//           </button>
//           <Link to={`/product-details/${product.id}`}>
//             <button className="view">
//               <i className="fa-regular fa-eye"></i>
//             </button>
//           </Link>
//         </div>
//         <div className="d-flex justify-content-between">
//           <p className="fs-5 price m-0">${product.price}</p>
//           <p className="fs-5 d-flex align-items-center gap-1 m-0">
//             <i className="fa fa-star text-warning"></i>
//             {product.rating.rate}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

import React from "react";
import "./ProductItem.css";
import { useDispatch } from "react-redux";
import { addItem } from "../../Redux/cartSlice";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export default function ProductItem({ product }) {
  const dispatch = useDispatch();

  function handleAddToCart() {
    dispatch(addItem(product));
    toast.success("Product added to cart!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
    });
  }

  return (
    <div className="col-md-6 col-lg-3">
      <div className="card mb-4 shadow-sm p-3 border-0">
        <img
          src={product.image}
          alt={product.title}
          className="image"
          style={{ height: "275px", borderRadius: "5px" }}
        />
        <h2 className="title mt-3 fs-4">{product.title}</h2>
        <p className="category m-0">{product.category}</p>
        <div className="btns d-flex justify-content-between mb-3 mt-2">
          <button className="addCart" onClick={handleAddToCart}>
            Add to Cart
          </button>
          <Link to={`/product-details/${product.id}`}>
            <button className="view">
              <i className="fa-regular fa-eye"></i>
            </button>
          </Link>
        </div>
        <div className="d-flex justify-content-between">
          <p className="fs-5 price m-0">${product.price}</p>
          <p className="fs-5 d-flex align-items-center gap-1 m-0">
            <i className="fa fa-star text-warning"></i>
            {product.rating.rate}
          </p>
        </div>
      </div>
    </div>
  );
}