import { useState } from "react";
import { json } from "react-router";
function Login(){

    const [a,b]=useState();
     const [c,d]=useState()

     const location=useLocation();
     const receivedData = location.state ? location.state.data : null;
    return(<>
<h1>login page</h1>
<h1>{receivedData}</h1>




{/* <input type="text" className="bg-red-500 h-10" value={a} onChange={(e)=>{
    b(e.target.value);
    
}} />


<input  type="text" className="bg-blue-500 h-10" value={c} onChange={(a)=>{
    d(a.target.value);
}} />

<button onClick={async()=>{


var detail={email:a, password:c}
// console.log(detail)

// const input=await fetch('http://localhost:8080/log',{
//     method: 'POST',
//     body: a,
//     headers: {'Content-Type': 'application/json'}
// })


const findone=await fetch('http://localhost:3000/log',{
    method: 'GET'
})
const finddata=await findone.json();
// console.log(finddata)

    if(c==finddata.at(0).password) {
         console.log("right password")
        }
    else if(c==" "){
        console.log("vacant")
    }
    else{
        console.log("wrong")
    }



}}>Search</button> */}
   
        </>)
}
export default Login;