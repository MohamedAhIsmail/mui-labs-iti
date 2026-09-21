import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ProductItem from '../ProductItem/ProductItem';
import './Categories.css'
import Loader from '../Loader/Loader';

export default function Categories() {
  
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  const categoryIcons = {
    electronics: "fa-solid fa-laptop",
    jewelery: "fa-regular fa-gem",
    "men's clothing": "fa-solid fa-shirt",
    "women's clothing": "fa-solid fa-person-dress",
  };


  async function getCategories() {
    try {
      let { data } = await axios.get('https://fakestoreapi.com/products/categories');
      setCategories(data);
      
      
      if (data.length > 0) {
        setSelectedCategory(data[0]);
        getProductsByCategory(data[0]);
      }
    } catch (error) {
      console.error(error);
    }
  }


  async function getProductsByCategory(category) {
    try {
      setSelectedCategory(category);
      let { data } = await axios.get(`https://fakestoreapi.com/products/category/${category}`);
      setProducts(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <>
    {categories.length == 0 ? <Loader /> 
    :  <div className='categories mt-5'>
    <div className="row">
      
        <h2 className="mb-4 text-center">Explore Popular Categories!</h2>
        <div className='d-flex justify-content-center gap-3 tabs'>
          {categories.map((category) => (
            <div key={category} className='cat'>
              <button
                onClick={() => getProductsByCategory(category)}
                className={`d-flex align-items-center gap-2 ${
                  selectedCategory === category ? 'selected ' : 'not-selected'
                }`}
              >
                <p className='m-0'>{category}</p>
                <i className={`${categoryIcons[category]} text-lg`}></i>
              </button>
            </div>
          ))}
        </div>
      
    </div>
  </div>}

      <div className="mt-4">
        
            <div className="row">
              {products.length == 0 ? 
                <Loader />
              : 
              products.map((product) => <ProductItem product={product} key={product.id} />)}
            </div>
          
        
      </div>
    </>
  );
}
