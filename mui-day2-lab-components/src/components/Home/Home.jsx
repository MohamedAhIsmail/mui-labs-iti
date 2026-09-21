import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Home.css";
import ProductItem from "../ProductItem/ProductItem";
import Loader from "../Loader/Loader";
import { Pagination } from "@mui/material";


export default function Home() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;
  
  async function getProducts() {
    try {
      let { data } = await axios.get("https://fakestoreapi.com/products");
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);



  const pageCount = Math.ceil(products.length / productsPerPage);

  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = products.slice(startIndex, endIndex);

  return (
    <>
      <div className="row mt-5">
        {products.length === 0 ? (
          <Loader />
        ) : (
          currentProducts.map((product) => <ProductItem key={product.id} product={product} />)
        )}
      </div>

      <div className="d-flex justify-content-center mt-4">
        <Pagination className="mb-5"
          count={pageCount}
          variant="outlined"
          shape="rounded"
          size="large"
          page={currentPage}
          onChange={(event, value) => setCurrentPage(value)}
        />
      </div>
    </>
  );
}
