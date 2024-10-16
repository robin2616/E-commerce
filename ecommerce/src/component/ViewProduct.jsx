import { useContext, useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { Mycontext } from "../context/Mycontext";
import Header from "./Header";
import Cart from "./Cart";
import { IoMdArrowDropright } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";





function ViewProduct({ onclose, i }) {
  const { addbuyingitem, name, xuv } = useContext(Mycontext)
  const [isdisale, updable] = useState(true)
  const [a, b] = useState(false);
  const [reviewval, updreview] = useState("")
  const [reviewlist, updatelistofreview] = useState([])

  useEffect(() => {
    const fcth = async () => {

      const items = { name: xuv.name }

      const response = await fetch('http://localhost:10000/showreview', {
        method: 'POST',
        body: JSON.stringify(items),
        headers: { 'Content-Type': 'application/json' }
      })

      const findedone = await response.json()

      updatelistofreview(findedone.at(0).review)
    }
    fcth()
  }, [])


  return (<>

  {/* <div className=" w-[100vw] h-[90vh] bg-red-100 flex flex-row">
    <img src={xuv.image} className="w-[40vh]" alt="" />

    <div className=" flex flex-col">
      <span>{xuv.name}</span>
      <span>{xuv.category}-{xuv.company}</span>
      <span>{xuv.description}</span>
      <span>Rs.{xuv.price}</span>
      <span>Rs.{xuv.price + 0.3 * xuv.price}</span>
      <span>30% off</span>
    </div>

  </div> */}
  <div className="w-full min-h-screen flex flex-col md:flex-col items-center  p-4">
  <img src={xuv.image} className="w-full md:w-[40vw]  md:m-2 md:h-[30vh] lg:h-[50vh] lg:w-[35vw] hover:scale-105 object-cover rounded-lg shadow-lg" alt={xuv.name} />

  <div className="flex flex-col md:ml-8 mt-4 md:mt-0">
    <span className="text-3xl font-bold text-center text-gray-800">{xuv.name}</span>
    <span className="text-xl font-medium text-center text-gray-600">{xuv.category} - {xuv.company}</span>
    <span className="mt-2 text-xl font-normal text-gray-700">{xuv.description}</span>
    
    <div className="flex flex-col items-center mt-4">
      <span className="text-3xl font-semibold text-gray-800">Rs. {xuv.price.toFixed(2)}</span>
      <span className="text-xl text-gray-500 line-through ml-2">Rs. {(xuv.price + 0.3 * xuv.price).toFixed(2)}</span>
    </div>


    
    <span className="mt-2 text-xl text-center text-green-600 font-semibold">30% off</span>
   

    <div className=" flex flex-row gap-[10vw] justify-center mt-6">
    <button type="button" class="btn btn-success bg-green-300 text-center p-2 rounded-xl scale-125">Buy</button>
    <button type="button" class="btn btn-success bg-green-300 p-2 rounded-xl scale-125">Cart</button>

    </div>


  </div>

{/* 
<div>
  <button>dsfsf</button>
  <button>dsfsf</button>
</div> */}




  
</div>





    {/* <div className="bg-white overflow-scroll inset-0 backdrop-blur-lg fixed opacity-[10px] h-[full] w-[full]">
      <Header />

      <img src={xuv.image} alt="fdsf" className=" 
       w-[90vw] relative left-[5vw] right-[5vw] top-[2vh] overflow-x-hidden
       lg:w-[40vw] lg:relative lg:left-[4vw] lg:right-[5vw] lg:top-[6vh]
       2xl:w-[45vw] 2xl:relative 2xl:left-[4vw] 2xl:right-[5vw] 2xl:top-[6vh]
      " />
      <br></br>

      <span className="
       relative flex justify-center top-[2vh] text-4xl font-bold 
       lg:fixed lg:left-[63vw] lg:text-3xl lg:top-[18vh]
        2xl:fixed 2xl:left-[67vw]  2xl:text-5xl 2xl:top-[20vh]
      " >{xuv.name}</span>
      {/* <span className="
       relative flex w-[90vw] left-[5vw] right-[5vw] text-justify justify-center top-[6vh] text-md font-semibold gap-3
       lg:fixed lg:left-[47vw] lg:w-[47vw] lg:font-semibold lg:text-md lg:top-[48vh]
        2xl:fixed 2xl:left-[51vw] 2xl:w-[47vw] 2xl:font-semibold 2xl:text-xl 2xl:top-[27vh]
      ">{xuv.category}-{xuv.company}</span> */}
      {/* <div className="
       relative flex w-[90vw] left-[5vw] text-justify justify-center top-[3vh] text-md font-semibold 
       lg:fixed lg:left-[47vw] lg:w-[47vw] lg:font-semibold lg:text-md lg:top-[27vh]
        2xl:fixed 2xl:left-[51vw] 2xl:w-[47vw] 2xl:font-semibold 2xl:text-xl 2xl:top-[27vh]
      " >{xuv.description}</div>


      <div className="
       relative flex w-[4vw] scale-90 left-[3vw] right-[5vw] top-[6vh] text-sm font-semibold gap-3
       lg:fixed lg:left-[47vw] lg:w-[47vw] lg:font-semibold lg:text-md lg:top-[48vh]
        2xl:fixed 2xl:left-[51vw] 2xl:w-[47vw] 2xl:font-semibold 2xl:text-xl 2xl:top-[27vh]
      ">
        <span className=" text-4xl font-semibold">Rs.{xuv.price}</span>
        <span className=" text-xl line-through translate-y-2 font-semibold">Rs.{xuv.price + 0.3 * xuv.price}</span>
        <span className=" text-blue-700 text-2xl translate-y-1  font-semibold">30% off</span>
      </div> */}




      {/* {isdisale &&
        // <button className="bg-yellow-200 fixed hover:scale-105 left-[120px] text-3xl font-semibold drop-shadow-2xl p-1 rounded-lg w-32  border-black border-2" onClick={async () => {
          <button type="button" class="btn btn-warning relative flex w-[20vw] left-[5vw] right-[5vw] text-justify justify-center top-[6vh] text-md font-semibold gap-3
       lg:btn lg:warning lg:relative lg:left-[10vw] lg:w-[11vw] lg:h-[4vw] lg:font-semibold lg:text-md lg:top-[7vh]
        2xl:relative 2xl:left-[51vw] 2xl:w-[47vw] 2xl:font-semibold 2xl:text-xl 2xl:top-[27vh]" onClick={async () => {




          const items = { name: name, cartitem: xuv }

          const response = await fetch('http://localhost:10000/view', {
            method: 'POST',
            body: JSON.stringify(items),
            headers: { 'Content-Type': 'application/json' }
          })

          const findedone = await response.json()
          console.log(findedone)

          b(true)

        }}>CART</button>}
      {!isdisale && <button className="bg-yellow-200 fixed left-[120px] text-3xl font-semibold drop-shadow-2xl p-1 rounded-lg w-32 border-black border-2"

      >Added</button>} */} 

      {/* <button onClick={() => {
        

        addbuyingitem(xuv)
        window.open("/purchase", "_self")
      }} className="bg-yellow-200 fixed left-[320px] hover:scale-105  text-3xl font-semibold drop-shadow-2xl p-1 rounded-lg w-32 border-black border-2">Buy</button> */}

{/* <button type="button" class="btn btn-warning relative flex w-[20vw] left-[5vw] right-[5vw] text-justify justify-center top-[6vh] text-md font-semibold gap-3
       lg:btn lg:warning lg:relative lg:left-[10vw] lg:w-[11vw] lg:h-[4vw] lg:font-bold lg:text-xl lg:top-[7vh]
        2xl:relative 2xl:left-[51vw] 2xl:w-[47vw] 2xl:font-semibold 2xl:text-xl 2xl:top-[27vh]"  onClick={() => {
        

        addbuyingitem(xuv)
        window.open("/purchase", "_self")}}>Buy</button> */}

      {/* <div className="flex fles-row gap-[1px] mt-2 text-xl text-yellow-500 top-[500px] left-[200px] fixed  ">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStarHalfAlt />
      </div> */}
      {/* <span className="top-[525px] left-[220px] fixed mt-1  ">4.5 rating</span> */}



      {/* <div className="fixed left-[600px] flex g-2 flex-col mb-8">
        <div class="form-floating w-[500px] ">
          <textarea value={reviewval} onChange={(e) => {
            updreview(e.target.value)
            console.log(reviewval)
          }} className="form-control w-[200px]" placeholder="Leave a comment here"></textarea>
          <label htmlFor="floatingTextarea2">Review of this Product</label>
        </div>
        <button className="bg-green-600 p-2 w-[100px] rounded-xl translate-x-[400px] mt-2" onClick={async () => {


          const items = { name: xuv.name, personname: name, value: reviewval }

          const response = await fetch('http://localhost:10000/review', {
            method: 'POST',
            body: JSON.stringify(items),
            headers: { 'Content-Type': 'application/json' }
          })

          const findedone = await response.json()

          location.reload()

        }


        }>Add</button>

      </div>
      <FaArrowDown className="translate-y-[134px] translate-x-[655px] text-2xl" />
      <h1 className=" fixed flex right-4 text-xl translate-y-[100px] translate-x-[-300px] p-2 bg-orange-100 rounded-md">Reviews by other customer</h1>
      <div className="w-[320px] h-auto translate-y-[160px] translate-x-[-300px] fixed flex flex-col gap-1 p-1 right-4 ">
        {reviewlist.map((g) => (
          <div className="w-[400px] h-auto border-black bg-zinc-100 border-2 shadow-2xl rounded-sm ">
            <span className="p-1 text-[15px] font-medium opacity-60">{g.by}</span><br></br>
            <span className="p-1 text-[24px] font-semibold font-mono">{g.personalreview}</span>

          </div>
          
        ))}

      </div>
 */}


    {/* </div> */}

  </>)

}
export default ViewProduct;