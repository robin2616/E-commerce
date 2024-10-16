import { useContext, useState } from "react";
import { GoPlus } from "react-icons/go";
import { TiMinus } from "react-icons/ti";
import { useEffect } from "react";
import { Mycontext } from "../context/Mycontext";
import { RiDivideLine } from "react-icons/ri";



function Cart() {

    const { name, editcartno } = useContext(Mycontext)

    const [a, b] = useState(0)
    const [x, u] = useState([])

    useEffect(() => {
        const cartindb = async () => {

            const items = { name: name }

            const response = await fetch('http://localhost:10000/cart', {
                method: 'POST',
                body: JSON.stringify(items),
                headers: { 'Content-Type': 'application/json' }
            })

            const findedone = await response.json()
            console.log(findedone)
            u(findedone)
        }

        cartindb()

    }, [])
    console.log(x)

    const deletfromcart = async (i) => {

        const items = { name: name, nameofprod: i.name }

        const response2 = await fetch('https://e-commerce-z43x.vercel.app/delcart', {
            method: 'POST',
            body: JSON.stringify(items),
            headers: { 'Content-Type': 'application/json' }
        })
        const findedone2 = await response2.json()
        console.log(findedone2)


    }
    return (<>



        <h1 className="flex justify-center ">SHOPPING CART</h1>

   
        <div className="bg-white max-w-5xl m-7 flex flex-col sm:flex-row p-6 shadow-lg rounded-lg overflow-hidden">

  <div className=" flex items-center justify-center">
    <img src="" alt="Product Image" className="h-52 w-64 object-cover rounded-lg shadow-md" />
  </div>


  <div className="flex flex-col justify-between ml-0 sm:ml-6 mt-4 sm:mt-0 w-full">

    <h2 className="text-3xl font-bold text-gray-800 sm:text-2xl lg:text-3xl">Samsung S20</h2>
    
    {/* Product Description */}
    <p className="mt-2 text-gray-600 text-sm lg:text-base leading-relaxed">
      The mobile is compact with its 6.2-inch OLED screen and far lighter at 168g. It perfectly captures the design, looks, and feel of the expensive one. It comes with a Snapdragon processor with a 5nm chip, a 200MP rear camera, and a 100MP front camera for selfie lovers. It also supports HDR content, perfect for watching 4K.
    </p>
    
    {/* Pricing and Discount */}
    <div className="mt-4 flex items-center justify-between">
    <div className="text-2xl font-bold text-blue-600">Rs. 5,000,000</div>
      <div>
        <span className="text-lg text-gray-500 line-through">Rs. 6,500,000</span>
        <span className="text-xl font-semibold text-green-600 ml-4">30% OFF</span>
      </div>
     
    </div>

    {/* Button */}
    <div className=" flex flex gap-9 mt-2 items-end justify-end">
        <button className="w-20 scale-105 bg-green-400 p-2 rounded-md">dsff</button>
        <button className=" w-20 scale-105 bg-green-400 p-2 rounded-md">dsfs</button>
    </div>
  
  </div>
</div>






           



    </>)
}

export default Cart

