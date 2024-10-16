import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { Mycontext } from "../context/Mycontext";
function Login() {
  const { addnameinmenu, adduserdata } = useContext(Mycontext)
  const [a, b] = useState();
  const [c, d] = useState()

  const loginform = async () => {

    const logindetail = { email: a }

    const response = await fetch('http://localhost:10000/log', {
      method: 'POST',
      body: JSON.stringify(logindetail),
      headers: { 'Content-Type': 'application/json' }
    })
    const data = await response.json();



    if (data.at(0).password === c) {
      console.log(data.at(0))
      addnameinmenu(data.at(0).name)
      adduserdata(data)

    }
    else {
      console.log("no")
    }
  }

  return (<>
    {/* <div className="h-[400px] w-[500px] bg-blue-100 rounded-xl border-black border-3 translate-x-[400px] translate-y-[20px]">

      <h1 className="text-4xl font-semibold fixed translate-x-[200px] translate-y-[17px] ">Log In</h1>

      <div className="flex flex-col gap-4 fixed top-24 left-[9%] w-[400px]">






        <div className="form-floating mb-3 ">
          <input value={a} onChange={(e) => {
            b(e.target.value);

          }} type="email" className="form-control" placeholder="Password" />
          <label htmlFor="floatingInput">Email</label>
        </div>


        <div className="form-floating mb-3">
          <input value={c} onChange={(e) => {
            d(e.target.value);

          }} type="text" className="form-control" placeholder="Password" />
          <label htmlFor="floatingInput">Password</label>
        </div>




        <button onClick={loginform} className="bg-green-500 text-2xl font-semibold p-1 rounded-md hover:border-black hover:border-2 hover:scale-105"

        >Log In</button>
      </div>
      <span className="fixed top-[350px] left-20 text-xl  ">Create a New account?</span>
      <a className="fixed top-[350px] left-[310px] text-xl no-underline " href="/sign">Sign Up</a>
    </div> */}

<div className="min-h-screen flex items-center justify-center bg-blue-100">
      <div className="w-full max-w-md bg-green-400 shadow-lg rounded-lg p-8">
        <h2 className="text-3xl font-semibold text-center text-gray-700 mb-6">
          Login
        </h2>

        <form>
          <div className="mb-4">
            {/* <label htmlFor="email" className="block text-gray-600 mb-2">
              Email Address
            </label> */}
            {/* <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter your email"
            /> */}
            <div class="form-floating mb-3 w-full border border-gray-300 rounded-lg ">
            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
            <label for="floatingInput" className=" text-md font-medium">Email address</label>
            </div>
          </div>

          <div className="mb-6">
            {/* <label htmlFor="password" className="block text-gray-600 mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter your password"
            /> */}
            <div class="form-floating mb-3">
            <input type="password" class="form-control w-full px-3 py-2 border border-gray-300" id="floatingInput" placeholder="name@example.com"/>
            <label for="floatingInput" className=" text-md font-medium"> Write Password</label>
            </div>
          </div>

          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember"
                className="h-4 w-4 text-indigo-600"
              />
              <label
                htmlFor="remember"
                className="ml-2 text-gray-600 text-md font-medium"
              >
                Remember Me
              </label>
            </div>

            <a href="#" className="text-md font-medium text-indigo-600 hover:underline">
              Forgot Password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-xl text-white py-2 px-4 rounded-lg hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700 transition duration-300"
          >
            Login
          </button>
        </form>

        <p className="text-md font-medium text-center text-gray-600 mt-6">
          Don’t have an account?{' '}
          <a href="#" className="text-indigo-600 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  </>)
}
export default Login;