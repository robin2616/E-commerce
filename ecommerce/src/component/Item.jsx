// import { useContext, useEffect, useState } from "react";
// import { Mycontext } from "../context/Mycontext";
// import ViewProduct from "./ViewProduct";
// import img from '/src/assets/26.jpg'
// import axios from 'axios'
// import '/src/css/Item.css'






// function Item() {
//     const { addinxuv, addnoofcart, name } = useContext(Mycontext);
//     const [prod, adddata] = useState([])
//     const [arr1, updarr1] = useState([])
//     const [arr2, updarr2] = useState([])
//     const [arr3, updarr3] = useState([])


//     useEffect(() => {
//         axios.get("https://api.pujakaitem.com/api/products")
//             .then((res) => {
//                 adddata(res.data)
//             })
//     }, [])

//     if (name === "Login") {
//         addnoofcart(0)
//     }




//     useEffect(() => {
//         const vfromdb = async () => {



//             const response = await fetch('http://localhost:10000/prod', {
//                 method: 'POST',
//                 body: JSON.stringify(),
//                 headers: { 'Content-Type': 'application/json' }
//             })

//             const findedone = await response.json()
//             const a1 = findedone.at(0).itemlist.at(0)
//             console.log(findedone.at(0).itemlist.at(0))
//             updarr1(a1)
//             updarr2(findedone.at(0).itemlist.at(1))
//             updarr3(findedone.at(0).itemlist.at(2))

//         }
//         vfromdb()
//     }, [])


//     var currenttime = new Date()
//     var currentdate = currenttime.getDate()
//     currenttime.setDate(currentdate + 7)
//     var deldate = currenttime.toLocaleDateString()


//     return (<>



//         {/* <div className="h-[440px] mb-4 flex flex-row flex-wrap  shadow-zinc-400 shadow-md  w-[1150px] translate-x-[70px] rounded-sm bg-zinc-300 shadow-3xl">
//             {arr1.map((i) => (

//                 <div onClick={() => {
//                     addinxuv(i)
//                     window.open("/viewproduct", "_self")
//                 }}

//                     className="h-[330px] w-[200px] mr-20 translate-x-12  mt-20 shadow-3xl rounded-md bg-white
//                    hover:shadow-2xl hover:border-2 hover:scale-105">

//                     <img src={i.image} className="h-[180px] w-[200px] hover:scale-105 rounded-sm" alt="1234" />
//                     <h3 className="text-black font-md text-center shadow-sm rounded-sm  bg-red-200">{i.name}</h3>
//                     <div className=" translate-x-9 translate-y-[-10px] text-[18px]">{i.category}-{i.company}</div>
//                     <div className="flex flex-row gap-2 translate-x-7 translate-y-[-12px] text-[18px]">
//                         <span className="line-through">{i.price + i.price * 0.3}</span>
//                         <span className=" font-medium">30% OFF</span>
//                     </div>
//                     <h3 className=" shadow-2xl bg-blue-100 text-center font-bold text-xl translate-y-[-12px] text-[24px]">Rs.{i.price}</h3>
//                     <div className=" translate-x-4 translate-y-[-12px] text-[18px]">Delivery on {deldate}</div>

//                 </div>

//             ))}
//             <span className="text-3xl font-semibold relative top-[-390px]  left-[40%]">Top Deal On Laptop</span>

//         </div> */}


// {/* //first */}
// <div className="h-auto mb-8 flex flex-row flex-wrap justify-center items-start w-[1150px] mx-auto bg-gray-100 p-6 rounded-lg shadow-lg">
//   <span className="text-3xl font-semibold mb-6 w-full text-center text-indigo-700">Top Deal On Laptops</span>

//   {arr1.map((i) => (
//     <div
//       key={i.id}  // Make sure to add a unique key for each item
//       onClick={() => {
//         addinxuv(i);
//         window.open("/viewproduct", "_self");
//       }}
//       className="h-[370px] w-[220px] m-4 p-4 rounded-lg bg-white hover:shadow-xl transition-transform transform hover:scale-105 shadow-md overflow-hidden"
//     >
//       <img
//         src={i.image}
//         className="h-[180px] w-full object-cover rounded-lg hover:scale-105 transition-transform"
//         alt={i.name}
//       />
//       <h3 className="mt-2 text-lg font-semibold text-center text-gray-800 truncate">{i.name}</h3>
//       <div className="text-center text-sm text-gray-600 mb-1">
//         {i.category} - {i.company}
//       </div>
//       <div className="flex justify-center items-center gap-1 text-sm text-gray-600 mb-1">
//         <span className="line-through text-red-500">Rs. {i.price + i.price * 0.3}</span>
//         <span className="text-green-600 font-semibold">30% OFF</span>
//       </div>
//       <h3 className="text-xl font-bold text-center text-blue-600">Rs. {i.price}</h3>
//       <div className="text-center text-sm text-gray-500 truncate">Delivery on {deldate}</div>
//     </div>
//   ))}
// </div>


// {/* second */}
// <div className="h-auto mb-8 flex flex-row flex-wrap justify-center items-start w-[1150px] mx-auto bg-gray-100 p-6 rounded-lg shadow-lg">
//   <span className="text-3xl font-semibold mb-6 w-full text-center text-indigo-700">Top Deal On Laptops</span>

//   {arr2.map((i) => (
//     <div
//       key={i.id}  // Make sure to add a unique key for each item
//       onClick={() => {
//         addinxuv(i);
//         window.open("/viewproduct", "_self");
//       }}
//       className="h-[370px] w-[220px] m-4 p-4 rounded-lg bg-white hover:shadow-xl transition-transform transform hover:scale-105 shadow-md overflow-hidden"
//     >
//       <img
//         src={i.image}
//         className="h-[180px] w-full object-cover rounded-lg hover:scale-105 transition-transform"
//         alt={i.name}
//       />
//       <h3 className="mt-2 text-lg font-semibold text-center text-gray-800 truncate">{i.name}</h3>
//       <div className="text-center text-sm text-gray-600 mb-1">
//         {i.category} - {i.company}
//       </div>
//       <div className="flex justify-center items-center gap-1 text-sm text-gray-600 mb-1">
//         <span className="line-through text-red-500">Rs. {i.price + i.price * 0.3}</span>
//         <span className="text-green-600 font-semibold">30% OFF</span>
//       </div>
//       <h3 className="text-xl font-bold text-center text-blue-600">Rs. {i.price}</h3>
//       <div className="text-center text-sm text-gray-500 truncate">Delivery on {deldate}</div>
//     </div>
//   ))}
// </div>


//         {/* <div className="h-[440px] flex flex-row flex-wrap mb-4  shadow-zinc-400 shadow-md  w-[1150px] translate-x-[70px] rounded-sm bg-zinc-300 shadow-3xl">

//             {arr2.map((i) => (

//                 <div onClick={() => {
//                     addinxuv(i)
//                     window.open("/viewproduct", "_self")

//                 }}

//                     className="h-[330px] w-[200px] mr-20 translate-x-12  mt-20 shadow-3xl rounded-md bg-white
//                     hover:shadow-2xl hover:border-2 hover:scale-105">

//                     <img src={i.image} className="h-[180px] w-[200px] hover:scale-105 rounded-md" alt="1234" />
//                     <h3 className="text-black font-md text-center shadow-xl rounded-lg  bg-red-200">{i.name}</h3>
//                     <div className=" translate-x-9 translate-y-[-10px] text-[18px]">{i.category}-{i.company}</div>
//                     <div className="flex flex-row gap-2 translate-x-7 translate-y-[-12px] text-[18px]">
//                         <span className="line-through">{i.price + i.price * 0.3}</span>
//                         <span className=" font-medium">30% OFF</span>
//                     </div>
//                     <h3 className=" shadow-2xl bg-blue-100 text-center font-bold text-xl translate-y-[-12px] text-[24px]">Rs.{i.price}</h3>
//                     <div className=" translate-x-4 translate-y-[-12px] text-[18px]">Delivery on {deldate}</div>

//                 </div>

//             ))}
//             <span className="text-3xl font-semibold relative top-[-390px] left-[40%]">Top Deal On SmartPhone</span>

//         </div> */}

//         {/* <div className="h-[440px] flex flex-row flex-wrap  shadow-zinc-400 shadow-md  w-[1150px] translate-x-[70px] rounded-sm bg-zinc-300 shadow-3xl">

//             {arr3.map((i) => (

//                 <div onClick={() => {
//                     addinxuv(i)
//                     window.open("/viewproduct", "_self")
//                 }}

//                     className="h-[330px] w-[200px] mr-20 translate-x-12  mt-20 shadow-3xl rounded-md bg-white
//                     hover:shadow-2xl hover:border-2 hover:scale-105">

//                     <img src={i.image} className="h-[180px] w-[200px] hover:scale-105 rounded-md" alt="1234" />
//                     <h3 className="text-black font-md text-center shadow-xl rounded-lg  bg-red-200">{i.name}</h3>
//                     <div className=" translate-x-9 translate-y-[-10px] text-[18px]">{i.category}-{i.company}</div>
//                     <div className="flex flex-row gap-2 translate-x-7 translate-y-[-12px] text-[18px]">
//                         <span className="line-through">{i.price + i.price * 0.3}</span>
//                         <span className=" font-medium">30% OFF</span>
//                     </div>
//                     <h3 className=" shadow-2xl bg-blue-100 text-center font-bold text-xl translate-y-[-12px] text-[24px]">Rs.{i.price}</h3>
//                     <div className=" translate-x-4 translate-y-[-12px] text-[18px]">Delivery on {deldate}</div>

//                 </div>

//             ))}
//             <span className="text-3xl font-semibold relative top-[-390px] left-[40%]">Top Deal On Watch</span>


//         </div> */}




//         <div className="h-auto mb-8 flex flex-row flex-wrap justify-center items-start w-[1150px] mx-auto bg-gray-100 p-6 rounded-lg shadow-lg">
//   <span className="text-3xl font-semibold mb-6 w-full text-center text-indigo-700">Top Deal On Laptops</span>

//   {arr3.map((i) => (
//     <div
//       key={i.id}  // Make sure to add a unique key for each item
//       onClick={() => {
//         addinxuv(i);
//         window.open("/viewproduct", "_self");
//       }}
//       className="h-[370px] w-[220px] m-4 p-4 rounded-lg bg-white hover:shadow-xl transition-transform transform hover:scale-105 shadow-md overflow-hidden"
//     >
//       <img
//         src={i.image}
//         className="h-[180px] w-full object-cover rounded-lg hover:scale-105 transition-transform"
//         alt={i.name}
//       />
//       <h3 className="mt-2 text-lg font-semibold text-center text-gray-800 truncate">{i.name}</h3>
//       <div className="text-center text-sm text-gray-600 mb-1">
//         {i.category} - {i.company}
//       </div>
//       <div className="flex justify-center items-center gap-1 text-sm text-gray-600 mb-1">
//         <span className="line-through text-red-500">Rs. {i.price + i.price * 0.3}</span>
//         <span className="text-green-600 font-semibold">30% OFF</span>
//       </div>
//       <h3 className="text-xl font-bold text-center text-blue-600">Rs. {i.price}</h3>
//       <div className="text-center text-sm text-gray-500 truncate">Delivery on {deldate}</div>
//     </div>
//   ))}
// </div>






//         {/* <div className="flex flex-col fixed left-[42%] top-[0px] text-3xl font-semibold  gap-[370px]">
//             <span>Top Deal On Laptop</span>
//             <span>Top Deal On SmartPhone</span>
//             <span>Top Deal On Watch</span>
//         </div> */}




//     </>)
// }
// export default Item;
import { useContext, useEffect, useState } from "react";
import { Mycontext } from "../context/Mycontext";
import axios from 'axios';
import '/src/css/Item.css';

function Item() {
    const { addinxuv, addnoofcart, name } = useContext(Mycontext);
    const [prod, adddata] = useState([]);
    const [arr1, updarr1] = useState([]);
    const [arr2, updarr2] = useState([]);
    const [arr3, updarr3] = useState([]);

    useEffect(() => {
        axios.get("https://api.pujakaitem.com/api/products")
            .then((res) => {
                adddata(res.data);
            });
    }, []);

    useEffect(() => {
        const fetchFromDB = async () => {
            const response = await fetch('http://localhost:10000/prod', {
                method: 'POST',
                body: JSON.stringify(),
                headers: { 'Content-Type': 'application/json' }
            });
            const findedone = await response.json();
            updarr1(findedone.at(0).itemlist.at(0));
            updarr2(findedone.at(0).itemlist.at(1));
            updarr3(findedone.at(0).itemlist.at(2));
        };
        fetchFromDB();
    }, []);

    var currenttime = new Date();
    var currentdate = currenttime.getDate();
    currenttime.setDate(currentdate + 7);
    var deldate = currenttime.toLocaleDateString();

    return (
        <div className="px-4">
            {/* Section 1 */}
            <div className=" w-[80vw] mx-auto">
                <h2 className="text-4xl font-bold text-center text-indigo-700 mb-6">
                    Top Deals On Laptops
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {arr1.map((i) => (
                        <div key={i.id} onClick={() => {
                            addinxuv(i);
                            window.open("/viewproduct", "_self");
                        }} className="bg-white p-3 rounded-lg shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 cursor-pointer">
                            <img src={i.image} className="w-full h-52 object-cover rounded-md" alt={i.name} />
                            <h3 className="mt-4 text-xl text-center font-semibold text-gray-900 truncate">{i.name}</h3>
                            <p className="text-md text-center text-gray-600">{i.category} - {i.company}</p>
                            <h3 className=" text-2xl font-bold text-center text-blue-600">Rs. {i.price}</h3>
                            <div className="flex justify-between flex-row">
                                <span className="line-through  text-red-500 text-md">Rs. {i.price + i.price * 0.3}</span>
                                <span className="text-green-600  font-semibold text-md">30% OFF</span>
                            </div>
                           
                            <p className="text-gray-500 text-lg text-center">Delivery on {deldate}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Section 2 */}
            <div className="w-[80vw]  mx-auto mt-16">
                <h2 className="text-4xl font-bold text-center text-indigo-700 mb-8">
                    Top Deals On Smartphones
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {arr2.map((i) => (
                        <div key={i.id} onClick={() => {
                            addinxuv(i);
                            window.open("/viewproduct", "_self");
                        }} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 cursor-pointer">
                            <img src={i.image} className="w-full h-52 object-cover rounded-md" alt={i.name} />
                            <h3 className="mt-4 text-xl text-center font-semibold text-gray-900 truncate">{i.name}</h3>
                            <p className="text-md text-center text-gray-600">{i.category} - {i.company}</p>
                            <h3 className=" text-2xl font-bold text-center text-blue-600">Rs. {i.price}</h3>
                            <div className="flex justify-between flex-row">
                                <span className="line-through  text-red-500 text-md">Rs. {i.price + i.price * 0.3}</span>
                                <span className="text-green-600  font-semibold text-md">30% OFF</span>
                            </div>
                           
                            <p className="text-gray-500 text-lg text-center">Delivery on {deldate}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Section 3 */}
            <div className="w-[80vw] mx-auto mt-16">
                <h2 className="text-4xl font-bold text-center text-indigo-700 mb-8">
                    Top Deals On Watches
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {arr3.map((i) => (
                        <div key={i.id} onClick={() => {
                            addinxuv(i);
                            window.open("/viewproduct", "_self");
                        }} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl  hover:scale-105 cursor-pointer">
                            <img src={i.image} className="w-full h-52 object-cover rounded-md" alt={i.name} />
                            <h3 className="mt-4 text-xl text-center font-semibold text-gray-900 truncate">{i.name}</h3>
                            <p className="text-md text-center text-gray-600">{i.category} - {i.company}</p>
                            <h3 className=" text-2xl font-bold text-center text-blue-600">Rs. {i.price}</h3>
                            <div className="flex justify-between flex-row">
                                <span className="line-through  text-red-500 text-md">Rs. {i.price + i.price * 0.3}</span>
                                <span className="text-green-600  font-semibold text-md">30% OFF</span>
                            </div>
                           
                            <p className="text-gray-500 text-lg text-center">Delivery on {deldate}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Item;
