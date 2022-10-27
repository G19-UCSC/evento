
import React, {  useState,useEffect } from 'react'
import axios from '../utils/axios'

  const filterByCategory = (products,category) => {

    return products.filter(function(el){
        return el.category===category;
    });
  }

  const filterByPrice = (products,starting_price,ending_price) => {

    return products.filter(function(el){
        if(starting_price==0){
            return starting_price <=el.price && el.price < ending_price;
        }else if(ending_price==10000000){
            return starting_price < el.price && el.price <= ending_price;
        }else{
            return starting_price <=el.price && el.price <= ending_price;  
        }
        
    });
  }

  const filterBySamePrice = (products,price) => {

    return products.filter(function(el){
      return (price - 1000) <=el.price && el.price <= (price + 1000);
        
    });
  }

module.exports = { 
    filterByCategory, 
    filterByPrice,
    filterBySamePrice
}
