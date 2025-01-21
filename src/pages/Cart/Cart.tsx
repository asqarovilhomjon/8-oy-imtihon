import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, updateQuantity } from '../../redux/slice/cartSlice';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../../redux/store';
import { MdDelete } from "react-icons/md";
import Empty from '@/assets/images/empty-box.png';

const Cart: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const handleIncrease = (id: string) => {
    const item = cartItems.find((item) => item.id === id);
    if (item) {
      dispatch(updateQuantity({ id, quantity: item.quantity + 1 }));
    }
  };

  const handleDecrease = (id: string) => {
    const item = cartItems.find((item) => item.id === id);
    if (item && item.quantity > 1) {
      dispatch(updateQuantity({ id, quantity: item.quantity - 1 }));
    }
  };

  const handleRemove = (id: string) => {
    dispatch(removeFromCart(id));
  };

  const handleCheckout = () => {
    navigate('/checkout');
  };

  return (
    <div className="container p-4 mt-10">
      <div className="mx-auto flex flex-col justify-between min-w-[700px]">
        <h1 className="text-3xl font-bold mb-6 text-center sm:text-left">Your Cart</h1>
        {cartItems.length === 0 ? (
          <img 
            className="mx-auto max-w-[400px] sm:w-1/2" 
            src={Empty}
            alt="Empty Cart" 
          />
        ) : (
          <div className="flex justify-between  flex-row gap-10">
            <ul className="p-4 bg-[#F0EEED] rounded-xl flex-1">
              {cartItems.map((item) => (
                <li
                  key={item.id}
                  className="flex flex-col bg-white p-4 rounded-xl mb-4 border-b pb-4 sm:gap-4"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-20 h-20 object-cover rounded-lg shadow-sm"
                    />
                    <div className='max-w-[500px]'>
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                      <p className="text-gray-500 mb-[10px]">{item.desc}</p>
                      <p className="text-green-400 mb-4">{item.price} сум</p>
                    </div>
                  </div>
                  <div className="flex justify-end gap-5 items-center mt-2">
                    <div className='flex items-center gap-2'>
                      <button
                        onClick={() => handleDecrease(item.id)}
                        className="bg-gray-200 px-3 py-1 rounded-full"
                      >
                        -
                      </button>
                      <span className="text-center">{item.quantity}</span>
                      <button
                        onClick={() => handleIncrease(item.id)}
                        className="bg-gray-200 px-3 py-1 rounded-full"
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => handleRemove(item.id)}
                      className="text-red-500 hover:underline flex items-center"
                    >
                      <MdDelete className="text-2xl" />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <div className='min-w-[600px] bg-[#F0EEED]'>
                <p className='text-2xl leading-[36px] pt-2 pl-10 font-[700]'>Order summary</p>
                <div className='flex justify-between py-5 px-10'>
                  <p>Subtotal</p>
                  <span className='font-[700]'>500$</span>
                </div>
                <div className='flex justify-between py-5 px-10'>
                  <p>Discount (-20%)</p>
                  <span className='font-[700]'>-92$</span>
                </div>
                <div className='flex justify-between py-5 px-10'>
                  <p>Delivery Fee</p>
                  <span className='font-[700]'>15$</span>
                </div>
                <div className="flex flex-col items-center sm:items-start gap-4">
                  <p className="text-xl flex justify-between font-bold mt-6 ml-10 sm:mt-0 sm:text-left">
                    <span>Total:</span> <span>{cartItems.reduce((total, item) => total + item.price * item.quantity, 0)}</span> сум
                  </p>
                  <button
                    onClick={handleCheckout}
                    className="bg-black ml-10 mb-10 text-white px-6 py-2 rounded w-full sm:w-auto"
                  >
                    Go to Checkout
                  </button>
                </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
