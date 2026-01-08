import React, { useEffect } from 'react'
import {useState} from 'react'
import CartStationaryItem from '../components/CartStationaryItem';
import Btn from '../components/Button.jsx';


function Cart() {
  const [cartItems,setCartItems]=useState([]);
  const [totalAmount,setTotalAmount]=useState(0);

  useEffect(()=>{
    const existingCart =
    JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(existingCart);
  },[])

useEffect(() => {
  const total = cartItems.reduce((sum, item) => {
    return sum + item.price * item.quantity;
  }, 0);

  setTotalAmount(total);
}, [cartItems]);


  return (
    <div className='bg-[#F8FAFF] font-sans min-h-screen flex flex-col bg-red-300'>
     
    <div className='min-h-screen flex flex-col flex-wrap gap-4 justify-center bg-[#F8FAFF] font-sans-200 p-4 '>
      <div className='h-145 overflow-y-auto rounded-lg p-4 w-full max-w-4xl mx-auto bg-[#F8FAFF] font-sans '>
      {
        cartItems.map((item)=>{
            console.log(item);
          return(<CartStationaryItem key={item.id}  {...item} >
            
          </CartStationaryItem>) 
        })
      }
      </div>
      <div>
              <h3 className='text-center font-bold text-2xl  bg-[#F8FAFF] font-sans p-4'>
        Total Amount: ₹ {totalAmount}     
      </h3>

      <div className="flex items-center justify-center mb-4 ">
        <Btn  
          title="Proceed to Pay"
          variant="primary"
          size="large"
          onClick={() => {
            window.location.href = "https://www.phonepe.com/";
          }}
/>  

      </div>


     


      </div>

    </div>
    </div>
  )
}

export default Cart