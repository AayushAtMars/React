import React, { useEffect, useState } from "react";
import "./DummyUse.css";

const DummyUseEffect = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [count, setCount] =useState(6);
  
    async function fetchProducts() {
      try{
  
        // setLoading(true);
        const response = await fetch(`https://dummyjson.com/products?limit=${count}`);
        const data = await response.json();
        setProducts(data.products);
        setLoading(false);
      } 
      catch(e){
        console.log(e);
        setLoading(false);
      }
      
    }
  
  
    useEffect(() =>{
      fetchProducts()
    }, [count]);
  
  
    // console.log(products);
    return (
      <div>
        <div className="flex flex-wrap justify-around">
        {loading ? (
      <div class="loader"></div>
    ) : (
      products.map((product, index) => 
        <div
          key={index}
          className="max-w-2xl m-5 border border-slate-200 rounded-md shadow-md h-[30vh] mx-auto flex flex-col justify-center items-center"
        >
          <h1 className="text-5xl font-bold text-center">{product.name}</h1>
          <div className="flex items-center justify-around gap-x-7 mt-9">
            <img
              src={product.thumbnail}
              alt={product.name}
              className="object-cover w-1/3 h-1/3"
            />
            <p className="text-lg font-medium">{product.description}</p>
            <p className="text-lg font-medium">${product.price}</p>
          </div>
        </div>
      )
    )}
        </div>
    {
      loading?<div></div>:<button onClick={()=>setCount(count+2)} className="block p-4 mx-auto my-6 text-lg font-bold text-center text-white bg-blue-500 rounded-md w-2xl">SHOW MORE</button>
    }
      </div>
    );
      
    
  };
  

export default DummyUseEffect;
