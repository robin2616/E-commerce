import { useContext, useState, useEffect } from "react";
import { Mycontext } from "../context/Mycontext";
import { GoPlus } from "react-icons/go";
import { TiMinus } from "react-icons/ti";
import Orderplaced from "./Orderplaced";

function Purchase() {
  const { buy, name } = useContext(Mycontext);
  const [quantity, setQuantity] = useState(1);
  const [showOrder, setShowOrder] = useState(false);
  const [savedAddresses, setSavedAddresses] = useState([]);
  const [formData, setFormData] = useState({
    nam: "",
    street: "",
    pin: "",
    city: "",
    state: "",
    address: "",
    phon: "",
    altphon: "",
  });

  useEffect(() => {
    const fetchAddresses = async () => {
      const response = await fetch('http://localhost:10000/buy2');
      const data = await response.json();
      setSavedAddresses(data);
    };
    fetchAddresses();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleOrderSubmission = async () => {
    setShowOrder(true);
    const { nam, street, pin, city, state, address, phon, altphon } = formData;

    const items = { name: nam, street, pincode: pin, city, state, address, phon, altphon };
    
    // Sending address to server
    await fetch('http://localhost:10000/buy', {
      method: 'POST',
      body: JSON.stringify(items),
      headers: { 'Content-Type': 'application/json' }
    });

    // Booking the item
    const itemForBooking = { name, buy };
    await fetch('http://localhost:10000/book', {
      method: 'POST',
      body: JSON.stringify(itemForBooking),
      headers: { 'Content-Type': 'application/json' }
    });
  };

  return (
    <>
      <div className="flex flex-col items-center">
        <img src={buy.image} className="h-[250px] w-[300px] m-10 border-yellow-200 border-2 rounded-lg shadow-lg" alt="Product" />
        <h2 className="font-bold text-xl">{buy.name}</h2>
        <h2 className="text-2xl bg-yellow-200 inline p-1 rounded-lg">Rs.{buy.price}</h2>
        <div className="flex items-center gap-3 mt-4">
          <button onClick={() => setQuantity(quantity + 1)} className="text-xl p-2 border border-gray-400 rounded hover:bg-gray-200">
            <GoPlus className="text-2xl" />
          </button>
          <h1 className="text-xl font-semibold">{quantity}</h1>
          <button onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)} className="text-xl p-2 border border-gray-400 rounded hover:bg-gray-200">
            <TiMinus className="text-2xl" />
          </button>
        </div>

        <div className="bg-blue-50 border border-gray-300 w-full max-w-md p-4 mt-5 rounded-lg shadow-md">
          <span className="flex justify-center font-semibold text-xl">Saved Addresses</span>
          <div className="max-h-48 overflow-y-auto mt-2">
            {savedAddresses.map((address, index) => (
              <div key={index} className="flex flex-col border-b border-gray-300 pb-2 mb-2">
                <span>{address.name}</span>
                <span>{address.street}</span>
                <span>{address.address}</span>
                <span>{address.city}</span>
                <span>{address.state}</span>
                <span>{address.pincode}</span>
                <span>{address.phon}</span>
                <span>{address.altphon}</span>
                <button className="bg-blue-500 p-2 mt-2 rounded-lg font-semibold text-white">Order</button>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-blue-50 rounded-md border border-gray-300 w-full max-w-md mt-5 p-4 shadow-lg">
          <span className="flex justify-center text-2xl font-bold">Place Order</span>
          <form className="flex flex-col gap-3 mt-4">
            {Object.entries(formData).map(([key, value]) => (
              <div key={key} className="form-floating mb-3">
                <input
                  type="text"
                  name={key}
                  className="form-control border border-gray-400 rounded p-2"
                  value={value}
                  onChange={handleInputChange}
                  placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
                  required
                />
                <label htmlFor={key} className="text-gray-600">{key.charAt(0).toUpperCase() + key.slice(1)}</label>
              </div>
            ))}
            <button onClick={handleOrderSubmission} type="button" className="bg-blue-500 p-2 rounded-lg font-semibold text-white mt-4">Save Address and Order Now</button>
          </form>
        </div>

        <div className="flex flex-col gap-3 font-semibold text-xl shadow-md h-[320px] w-[320px] bg-yellow-50 border border-gray-300 rounded-lg mt-5">
          <span className="m-2 text-2xl">Purchase Detail</span>
          <span className="m-2">Price (1 item): Rs. {buy.price}</span>
          <span className="m-2">Price ({quantity} items): Rs. {buy.price * quantity}</span>
          <span className="m-2">Delivery Charge: FREE</span>
          <span className="m-2 bg-orange-300 p-2 rounded-2xl">Total: Rs. {buy.price * quantity}</span>
        </div>

        {showOrder && <Orderplaced quantity={quantity} buy={buy} />}
      </div>
    </>
  );
}

export default Purchase;
