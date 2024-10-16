import { useContext, useEffect, useState } from "react";
import { Mycontext } from "../context/Mycontext";
function Signup(){
  const {addnameinmenu,adduserdata}=useContext(Mycontext)
  const [a,b]=useState("")
  const [a1,b1]=useState(false)
  const [c,d]=useState()
  const [c1,d1]=useState(false)
  const[e,f]=useState()
  const[e1,f1]=useState(false)
  const [g,h]=useState()
  const [g1,h1]=useState(false)

  

  useEffect(()=>{

    if(a==""){b1(false)}else{b1(true)}
    if(c==""){d1(false)}else{d1(true)}
    if(e==""){f1(false)}else{f1(true)}
    if(g==""){h1(false)}else{h1(true)}

  })



   
    return(<>

<div className="h-[500px] w-[500px] bg-blue-100 shadow-2xl rounded-xl border-black border-3 translate-x-[400px] translate-y-[20px]">

<h1 className="text-3xl font-semibold fixed translate-x-[100px] translate-y-[20px] ">Create New Account</h1>

<div className="flex flex-col gap-2 fixed top-20 left-[9%] w-[400px]">
<div class="form-floating mb-3 ">
  <input value={e} onChange={(e)=>{
    f(e.target.value)}} type="text" class="form-control"  placeholder="name@example.com"/>
  <label htmlFor="floatingInput">Name</label>
</div>


<div class="form-floating mb-3">
  <input value={g} onChange={(e)=>{
    h(e.target.value);
    
}} type="number" class="form-control"  placeholder="Password"/>
  <label htmlFor="floatingInput">Phone No</label>
</div>



<div class="form-floating mb-3 ">
  <input value={a} onChange={(e)=>{
    b(e.target.value);
    
}} type="email" class="form-control"  placeholder="Password"/>
  <label htmlFor="floatingInput">Email</label>
</div>


<div class="form-floating mb-3">
  <input value={c} onChange={(e)=>{
    d(e.target.value);
    
}} type="text" class="form-control"  placeholder="Password"/>
  <label htmlFor="floatingInput">Password</label>
</div>




 <button className="bg-green-500 text-2xl  hover:border-black hover:border-2 hover:scale-103 font-semibold p-1 rounded-md" onClick={async ()=>{

var detail={name:e,phone:g,email:a, password:c}


const response = await fetch('http://localhost:10000/sign',{
    method: 'POST',
    body: JSON.stringify(detail),
    headers: {'Content-Type': 'application/json'}
})



const data=await response.json();
console.log(data)


addnameinmenu(data.name)
adduserdata(data)
window.open('/','_self')









}}>Sign Up</button>
</div>
<span className="fixed top-[460px] left-20 text-xl  ">Already have an account?</span>
<a className="fixed top-[460px] left-[310px] text-xl no-underline " href="/log">Log in</a>
</div>



    </>)
}
export default Signup;

// import React, { useState } from "react";

// const Signup = () => {
//   const [form, setForm] = useState({
//     name: '',
//     phone: '',
//     email: '',
//     password: ''
//   });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form submitted:', form);
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
//       <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-lg rounded-xl border-2 border-yellow-400">
//         <h2 className="text-center text-4xl font-bold text-indigo-900">
//           Sign Up Now
//         </h2>
//         <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
//           <div>
//             <label className="block text-sm font-medium text-pink-600">Full Name</label>
//             <input 
//               type="text" 
//               name="name" 
//               value={form.name} 
//               onChange={handleChange} 
//               required
//               className="mt-1 w-full p-3 border border-pink-300 rounded-md bg-yellow-100 focus:ring-yellow-500 focus:border-yellow-500"
//               placeholder="Your full name"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-green-600">Phone Number</label>
//             <input 
//               type="tel" 
//               name="phone" 
//               value={form.phone} 
//               onChange={handleChange} 
//               required
//               className="mt-1 w-full p-3 border border-green-300 rounded-md bg-yellow-100 focus:ring-green-500 focus:border-green-500"
//               placeholder="Your phone number"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-blue-600">Email Address</label>
//             <input 
//               type="email" 
//               name="email" 
//               value={form.email} 
//               onChange={handleChange} 
//               required
//               className="mt-1 w-full p-3 border border-blue-300 rounded-md bg-yellow-100 focus:ring-blue-500 focus:border-blue-500"
//               placeholder="Your email address"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-purple-600">Password</label>
//             <input 
//               type="password" 
//               name="password" 
//               value={form.password} 
//               onChange={handleChange} 
//               required
//               className="mt-1 w-full p-3 border border-purple-300 rounded-md bg-yellow-100 focus:ring-purple-500 focus:border-purple-500"
//               placeholder="Choose a password"
//             />
//           </div>
//           <button 
//             type="submit" 
//             className="w-full py-3 px-4 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white font-bold rounded-md hover:from-pink-600 hover:via-purple-600 hover:to-blue-600 focus:outline-none focus:ring-4 focus:ring-pink-500"
//           >
//             Sign Up
//           </button>
//         </form>
//         <p className="text-center text-sm text-gray-600">
//           Already have an account? 
//           <a href="/login" className="text-yellow-500 hover:text-yellow-600 font-semibold ml-1">Login</a>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Signup;

