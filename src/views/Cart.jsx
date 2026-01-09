import React, { useEffect, useState } from 'react';
import CartStationaryItem from '../components/CartStationaryItem';
import Btn from '../components/Button.jsx';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

 
  useEffect(() => {
    const existingCart =
      JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(existingCart);
  }, []);

  
  useEffect(() => {
    let total = 0;

    cartItems.map((item) => {
      total += item.price * item.quantity;
    });

    setTotalAmount(total);
  }, [cartItems]);

  return (
    <div className="bg-[#F8FAFF] min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-1 flex flex-wrap gap-4 justify-center p-4">
        <div className="max-h-[400px] overflow-y-auto rounded-lg p-4 w-full max-w-4xl bg-white">
          {cartItems.length === 0 ? (
            <p className="text-center text-gray-500">
              Your cart is empty
            </p>
          ) : (
            cartItems.map((item) => (
              <CartStationaryItem
                key={item.id}
                {...item}
              />
            ))
          )}
        </div>
      </div>

      <h3 className="text-center font-bold text-2xl bg-gray-100 p-4">
        Total Amount: ₹ {totalAmount}
      </h3>

      <div className="flex flex-col items-center mb-6">
        <Btn
          title="Proceed to Pay"
          variant="primary"
          size="large"
          onClick={() => {
            window.location.href = "https://www.phonepe.com/";
          }}
        />
      </div>

      <Footer />
    </div>
  );
}

export default Cart;
