import React, { useEffect, useState } from "react";
import "./ProductDetails.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loader from "../Loader/Loader";
import { useDispatch } from "react-redux";
import { addItem } from "../../Redux/cartSlice";
import { toast } from "react-toastify";

export default function ProductDetails() {
  
  const dispatch = useDispatch();
  let { id } = useParams();
  const [details, setDetails] = useState(null);

  async function getProductDetails() {
    try {
      let { data } = await axios.get(`https://fakestoreapi.com/products/${id}`);
      setDetails(data);
    } catch (error) {
      console.error("Error fetching product details:", error);
      toast.error("Failed to load product details!");
    }
  }

  function handleAddToCart() {
    if (!details) {
      toast.warn("Product details are not loaded yet!");
      return;
    }

    dispatch(addItem(details));
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

  useEffect(() => {
    getProductDetails();
  }, []);

  return (
    <>
      {details ? (
        <div className="details mt-5 mb-5">
          <div className="p-5 head">
            <div className="row">
              <div className="col-lg-4">
                <div className="imageCard shadow-lg mt-4">
                  <img
                    className="w-100"
                    src={details.image}
                    alt={details.title}
                  />
                </div>
              </div>
              <div className="col-lg-8 p-3">
                <h2>{details.title}</h2>
                <p className="fs-3 d-flex align-items-center gap-1 mt-3 mb-0">
                  <i className="fa fa-star text-warning"></i>
                  {details.rating?.rate}
                </p>
                <p className="d-price">
                  <span className="dollar fs-2">$ </span>
                  <span className="prico">{details.price}</span>
                </p>
                <p className="d-category fs-6 mt-3">{details.category}</p>
                <p className="desc mt-4">{details.description}</p>
                <div className="mt-4 d-flex">
                  <button className="add" onClick={handleAddToCart}>
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
}
