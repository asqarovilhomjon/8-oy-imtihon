import React, { useState, ChangeEvent, FormEvent } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "@/redux/slice/cartSlice"; 
import { RootState } from "@/redux/store"; 
import { useNavigate } from "react-router-dom"; // Import useNavigate

const BOT_TOKEN = "yfcghgvkjh";
const CHAT_ID = 9848654984;

interface CartItem {
  id: string;
  title: string;
  quantity: number;
  price: number;
}

interface FormData {
  fullName: string;
  phone: string;
  email?: string;
  address: string;
  comments?: string;
}

const Baskets: React.FC = () => {
  const cart: CartItem[] = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Initialize navigate hook

  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    phone: "",
    email: "",
    address: "",
    comments: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePurchase = async (e: FormEvent) => {
    e.preventDefault();

    if (!formData.fullName || !formData.phone || !formData.address) {
      toast.error("Please fill in the required fields");
      return;
    }

    let text = `<strong>Order:</strong>%0A`;
    text += `Full name: ${formData.fullName}%0A`;
    text += `Telephone number: ${formData.phone}%0A`;
    text += `Email address: ${formData.email || "Not given"}%0A`;
    text += `Address delivery: ${formData.address}%0A`;
    text += `Comments: ${formData.comments || "No comments"}%0A%0A`;
    text += `<strong>Products:</strong>%0A`;

    cart.forEach((item) => {
      text += `Title: ${item.title}%0A`;
      text += `Counts: ${item.quantity}%0A`;
      text += `Price: ${item.price} сум%0A%0A`;
    });

    const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    text += `<strong>Total price: ${totalPrice} сум</strong>%0A`;

    const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${text}&parse_mode=html`;

    try {
      const response = await fetch(url);
      if (response.ok) {
        toast.success("Order sent successfully");
        setFormData({
          fullName: "",
          phone: "",
          email: "",
          address: "",
          comments: "",
        });
        dispatch(clearCart());
        navigate("/cart"); // Navigate to the cart page after order is placed
      } else {
        throw new Error("Failed to send order");
      }
    } catch {
      toast.error("Failed to send order");
    }
  };

  return (
    <section className="container mx-auto p-4">
      <Toaster position="top-center" reverseOrder={false} />
      <h1 className="text-xl font-bold mb-6 text-center">Order placing</h1>
      <div className="grid gap-6 md:grid-cols-2 sm:grid-cols-1">
        <form
          className="p-4 border rounded-lg shadow flex flex-col"
          onSubmit={handlePurchase}
        >
          <h2 className="text-lg font-semibold mb-4">Contact information</h2>
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            className="border p-2 rounded w-full mb-3 outline-none"
            required
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="border p-2 rounded w-full mb-3 outline-none"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="border p-2 rounded w-full mb-3 outline-none"
          />
          <input
            type="text"
            name="address"
            placeholder="Delivery Address"
            value={formData.address}
            onChange={handleChange}
            className="border p-2 rounded w-full mb-3 outline-none"
            required
          />
          <textarea
            name="comments"
            placeholder="Comments"
            value={formData.comments}
            onChange={handleChange}
            className="border p-2 rounded w-full mb-3 outline-none"
          ></textarea>
          <button
            type="submit"
            className="bg-black text-white px-4 py-2 rounded w-full mt-4"
          >
            Place Order
          </button>
        </form>
        <div className="p-4 border rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">Your products</h2>
          <ul className="divide-y">
            {cart.map((item) => (
              <li key={item.id} className="py-2 flex justify-between text-sm">
                <span>
                  {item.title} x {item.quantity}
                </span>
                <span>{item.price * item.quantity} сум</span>
              </li>
            ))}
          </ul>
          <div className="border-t mt-4 pt-4 flex justify-between font-bold">
            <span>Total:</span>
            <span>
              {cart.reduce((total, item) => total + item.price * item.quantity, 0)} сум
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Baskets;
