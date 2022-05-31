import React, { Children, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Product from './components/product';




const Products=[
      {
        name:'ice cream',
        icon:'🍦',
        price:5000,
        editable:false
      },
      {
        name:'slice of watermelon',
        icon:'🍉',
        price:6000,
        editable:false
      },
      {
        name:'chocolate bar',
        icon:'🍫',
        price:4500,
        editable:true
      },
];

function App() {

const [myproduct,setMyproducts]=useState(Products)
  return(
      <div className='App'>
        <Product names={myproduct} handleClick={(event,name)=>setMyproducts(myproduct.map(item=>))}
        
     />
      </div>
  );
}
export default App;
