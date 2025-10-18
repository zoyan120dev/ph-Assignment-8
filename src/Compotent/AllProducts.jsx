import React, { useEffect, useState } from "react";
import Product from "./Product";

function AllProducts() {
  const [allProduct, setAllProducts] = useState([]);
  const [search , setSearch] = useState('')
  useEffect(() => {
    fetch("./AllProduct.json")
      .then((res) => res.json())
      .then((prodcutdata) => setAllProducts(prodcutdata))
      .catch((err) => console.log("error form fetching products"));
  }, []);

const term = search.trim().toLocaleLowerCase();
const SearchProducts = term ? allProduct.filter(product => product.title.toLocaleLowerCase().includes(term)) : allProduct;

  return (
    <div className="container mx-auto">
      <div>
        <div className="text-center my-6">
          <h1 className="text-2xl md:text-4xl font-bold">
            Our All Applications
          </h1>
          <p className="text-gray-400 text-lg py-2">
            Explore All Apps on the Market developed by us. We code for Millions
          </p>
        </div>
        <div className="flex justify-between">
          <p className="text-2xl font-bold">({allProduct.length}) Apps Found</p>
          <label className="input">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input value={search} onChange={(e) => setSearch(e.target.value)}  type="search" required placeholder="Search" />
          </label>
        </div>

        <div className="my-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {SearchProducts.length > 0 ? (
             SearchProducts.map((productes) => (
            <Product key={productes.id} productes={productes} />
          ))
          ):(
           <div className="flex  col-span-12 flex-col justify-center items-center ">
            <img src="./App-Error.png" alt="" className="w-[400px] object-cover h-[400px]"/>
             <h1 className="text-2xl md:text-4xl font-bold mt-2">OPPS!! APP NOT FOUND</h1>
             <p className="text-gray-400">The App you are requesting is not found on our system.  please try another apps</p>
           </div>
          )      
         }
        </div>
      </div>
    </div>
  );
}

export default AllProducts;
